import React, { useState } from 'react';
import BoardList from './BoardList';
import BoardWrite from './BoardWrite';

const Board = () => {
    const[boardPg, setBoardPg] = useState(0)

    const onBoardPg = (num) => {
        setBoardPg(num)
    }

    return (
        <div>
            { boardPg === 0 && <BoardList onBoardPg={ onBoardPg } /> }
            { boardPg === 1 && <BoardWrite onBoardPg={ onBoardPg } /> }
        </div>
    );
};

export default Board;