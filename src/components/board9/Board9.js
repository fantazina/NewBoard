import React, { useState } from 'react';
import BoardList9 from './BoardList9';
import BoardWrite9 from './BoardWrite9';
import BoardView9 from './BoardView9';
import BoardEdit9 from './BoardEdit9';

const Board9 = () => {
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
            { boardPg === 0 && <BoardList9 onBoardPg={ onBoardPg } onBoardSeq={ onBoardSeq } />}
            { boardPg === 1 && <BoardWrite9 onBoardPg={ onBoardPg } />}
            { boardPg === 2 && <BoardView9 onBoardPg={ onBoardPg } boardSeq={ boardSeq } /> }
            { boardPg === 3 && <BoardEdit9 onBoardPg={ onBoardPg } boardSeq={ boardSeq } />}
        </div>
    );
};

export default Board9;