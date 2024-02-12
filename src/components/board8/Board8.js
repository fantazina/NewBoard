import React, { useState } from 'react';
import BoardWrite8 from './BoardWrite8';
import BoardView8 from './BoardView8';
import BoardList8 from './BoardList8';
import BoardEdit8 from './BoardEdit8';

const Board8 = () => {
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
            { boardPg === 0 && <BoardList8 onBoardPg={ onBoardPg } onBoardSeq={ onBoardSeq } /> }
            { boardPg === 1 && <BoardWrite8 onBoardPg={ onBoardPg } /> }
            { boardPg === 2 && <BoardView8 onBoardPg={ onBoardPg } boardSeq={ boardSeq }/> }
            { boardPg === 3 && <BoardEdit8 onBoardPg={ onBoardPg } boardSeq={ boardSeq }/> }
        </div>
    );
};

export default Board8;