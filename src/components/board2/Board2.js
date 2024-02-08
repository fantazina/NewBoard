import React, { useState } from 'react';
import BoardList2 from './BoardList2';
import BoardWrite2 from './BoardWrite2';
import BoardView2 from './BoardView2';
import BoardEdit2 from './BoardEdit2';

const Board2 = () => {
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
            { boardPg === 0 && <BoardList2 onBoardPg={ onBoardPg } onBoardSeq={ onBoardSeq } /> }
            { boardPg === 1 && <BoardWrite2 onBoardPg={ onBoardPg }/> }
            { boardPg === 2 && <BoardView2 onBoardPg={ onBoardPg } boardSeq={ boardSeq }/> }
            { boardPg === 3 && <BoardEdit2 onBoardPg={ onBoardPg } boardSeq={ boardSeq }/> }
        </div>
    );
};

export default Board2;