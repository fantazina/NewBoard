import React, { useState } from 'react';
import BoardWrite7 from './BoardWrite7';
import BoardList7 from './BoardList7';
import BoardView7 from './BoardView7';
import BoardEdit7 from './BoardEdit7';

const Board7 = () => {
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
            { boardPg === 0 && <BoardList7 onBoardPg={ onBoardPg } onBoardSeq={ onBoardSeq } /> }
            { boardPg === 1 && <BoardWrite7 onBoardPg={ onBoardPg } /> }
            { boardPg === 2 && <BoardView7 onBoardPg={ onBoardPg } boardSeq={ boardSeq } /> }
            { boardPg === 3 && <BoardEdit7 onBoardPg={ onBoardPg } boardSeq={ boardSeq } /> }
        </div>
    );
};

export default Board7;