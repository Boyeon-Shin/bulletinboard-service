import {BoardData} from '../../db.js';

const findAllPosts =  () => {
    return BoardData.boardData;
}

const findById = (postId) => {
    return BoardData.boardData.find((board) => board.id === postId);
}

const addPost = (board) => {
    const newPost = {
        id: BoardData.boardData.length + 1,
        ...board,
        create_time: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate() + "-" + new Date().getHours() + ":" + new Date().getMinutes(),
    }
    BoardData.boardData.push(newPost);
    return newPost;
}


export const BoardHandler = {
    findAllPosts,
    findById,
    addPost
}