import React, { useState } from 'react';
import BoardWrite12 from './BoardWrite12';
import BoardList12 from './BoardList12';
import BoardView12 from './BoardView12';
import BoardEdit12 from './BoardEdit12';

const Board12 = () => {
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
            { boardPg === 0 && <BoardList12 onBoardPg={ onBoardPg } onBoardSeq={ onBoardSeq } /> }
            { boardPg === 1 && <BoardWrite12 onBoardPg={ onBoardPg } /> }
            { boardPg === 2 && <BoardView12 onBoardPg={ onBoardPg } boardSeq={ boardSeq } /> }
            { boardPg === 3 && <BoardEdit12 onBoardPg={ onBoardPg } boardSeq={ boardSeq } /> }
        </div>
    );
};

export default Board12;