import React, { useState } from 'react';
import BoardList from './BoardList';
import BoardWrite from './BoardWrite';
import BoardView from './BoardView';
import BoardEdit from './BoardEdit';

const Board = () => {
    const[boardPg, setBoardPg] = useState(0)
    const[boardSeq, setBoardSeq] = useState(-1)

    const onBoardPg = (num) => {
        setBoardPg(num)
    }

    const onBoardSeq = (num) => {
        setBoardSeq(num)
    }

    return (
        <div>
            { boardPg === 0 && <BoardList onBoardPg={ onBoardPg } onBoardSeq={ onBoardSeq }/> }
            { boardPg === 1 && <BoardWrite onBoardPg={ onBoardPg } /> }
            { boardPg === 2 && <BoardView onBoardPg={ onBoardPg } boardSeq={ boardSeq }/> }
            { boardPg === 3 && <BoardEdit onBoardPg={ onBoardPg } boardSeq={ boardSeq }/> }
        </div>
    );
};

export default Board;