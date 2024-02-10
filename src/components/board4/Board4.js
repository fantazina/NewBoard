import React, { useState } from 'react';
import BoardList4 from './BoardList4';
import BoardWrite4 from './BoardWrite4';
import BoardView4 from './BoardView4';
import BoardEdit4 from './BoardEdit4';

const Board4 = () => {
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
            { boardPg === 0 && <BoardList4 onBoardPg={ onBoardPg } onBoardSeq={ onBoardSeq } /> }
            { boardPg === 1 && <BoardWrite4 onBoardPg={ onBoardPg } /> }
            { boardPg === 2 && <BoardView4 onBoardPg={ onBoardPg } boardSeq={ boardSeq } /> }
            { boardPg === 3 && <BoardEdit4 onBoardPg={ onBoardPg } boardSeq={ boardSeq } /> }
        </div>
    );
};

export default Board4;