import express from "express";
import {BoardHandler} from "./post.handler.js";

const router = express.Router();

router.get('/:postId', (req, res) => {
        const postId = req.params["postId"];
        try {
               const post = BoardHandler.findById(postId);
                if (!post) {
                        // 게시물이 없는 경우
                        return res.status(404).json({ error: "게시물을 찾을 수 없습니다." });
                }
                res.status(200).json(post);
        } catch (error) {
                res.status(500).json({ error: '서버 문제 발생' });
        }
});

router.get('/',  (req, res) => {
        try {
                res.status(200).json(BoardHandler.findAllPosts());
        }catch(err) {
                res.status(500).json({ error: '서버 문제 발생' });
        }
});

router.post('/', (req, res) => {
    const board = req.body;
    const {name, title, content, like} = board;
    if(!name || !title || !content || !like) {
        return res.status(400).json({error:'올바르지 않은 입력'})
    }

    res.status(200).json(BoardHandler.addPost(board));

})


export default router;