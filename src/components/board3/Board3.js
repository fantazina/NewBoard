import React, { useState } from 'react';
import BoardWrite3 from './BoardWrite3';
import BoardList3 from './BoardList3';
import BoardView3 from './BoardView3';
import BoardEdit3 from './BoardEdit3';

const Board3 = () => {
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
            { boardPg === 0 && <BoardList3 onBoardPg={ onBoardPg } onBoardSeq={ onBoardSeq } /> }
            { boardPg === 1 && <BoardWrite3 onBoardPg={ onBoardPg } /> }
            { boardPg === 2 && <BoardView3 onBoardPg={ onBoardPg } boardSeq={ boardSeq } /> }
            { boardPg === 3 && <BoardEdit3 onBoardPg={ onBoardPg } boardSeq={ boardSeq } /> }
        </div>
    );
};

export default Board3;