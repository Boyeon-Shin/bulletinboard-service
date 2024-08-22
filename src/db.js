const boardData = [];

const initBoardData = [
    {
        id: "1",
        name: "보연",
        title: "과자추천",
        content: "오레오,별사탕건빵...",
        like: 1,
        create_time: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate() + "-" + new Date().getHours() + ":" + new Date().getMinutes(),
    },
    {
        id :"2",
        name: "나연",
        title:"젤리추천",
        content :"왕꿈틀이,오렌지젤리...",
        like : 2,
        create_time: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate() + "-" + new Date().getHours() + ":" + new Date().getMinutes(),
    },
    {
        id :"3",
        name: "은채",
        title:"과자추천",
        content:"오레오,별사탕건빵...",
        like : 3,
        create_time: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate() + "-" + new Date().getHours() + ":" + new Date().getMinutes(),
        }
    ];

const initialize = () => {
    BoardData.boardData = [...initBoardData];
}

export const BoardData = {
    boardData,
    initialize
}

