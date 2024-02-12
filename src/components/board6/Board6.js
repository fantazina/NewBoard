import React, { useState } from 'react';
import BoardWrite6 from './BoardWrite6';
import BoardList6 from './BoardList6';
import BoardView6 from './BoardView6';
import BoardEdit6 from './BoardEdit6';

const Board6 = () => {
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
            { boardPg === 0 && <BoardList6 onBoardPg={ onBoardPg } onBoardSeq={ onBoardSeq } /> }
            { boardPg === 1 && <BoardWrite6 onBoardPg={ onBoardPg } /> }
            { boardPg === 2 && <BoardView6 onBoardPg={ onBoardPg } boardSeq={ boardSeq } /> }
            { boardPg === 3 && <BoardEdit6 onBoardPg={ onBoardPg } boardSeq={ boardSeq } /> }

        </div>
    );
};

export default Board6;
