import {BoardData} from '../../db.js';

const findAllPosts =  () => {
    return BoardData.boardData;
}

const findById = (postId) => {
    return BoardData.boardData.find((board) => board.id === postId);
}


export const BoardHandler = {
    findAllPosts,
    findById,
}