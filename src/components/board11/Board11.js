import React, { useState } from 'react';
import BoardWrite11 from './BoardWrite11';
import BoardEdit11 from './BoardEdit11';
import BoardList11 from './BoardList11';
import BoardView11 from './BoardView11';

const Board11 = () => {
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
            { boardPg === 0 && <BoardList11 onBoardPg={ onBoardPg } onBoardSeq={ onBoardSeq } /> }
            { boardPg === 1 && <BoardWrite11 onBoardPg={ onBoardPg } /> }
            { boardPg === 2 && <BoardView11 onBoardPg={ onBoardPg } boardSeq={ boardSeq }/> } 
            { boardPg === 3 && <BoardEdit11 onBoardPg={ onBoardPg } boardSeq={ boardSeq } /> } 
        </div>
    );
};

export default Board11;