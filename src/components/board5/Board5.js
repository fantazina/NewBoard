import React, { useState } from 'react';
import BoardEdit5 from './BoardEdit5';
import BoardList5 from './BoardList5';
import BoardView5 from './BoardView5';
import BoardWrite5 from './BoardWrite5';

const Board5 = () => {
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
            { boardPg === 0 && <BoardList5 onBoardPg={ onBoardPg } onBoardSeq={ onBoardSeq } />}
            { boardPg === 1 && <BoardWrite5 onBoardPg={ onBoardPg } />}
            { boardPg === 2 && <BoardView5 onBoardPg={ onBoardPg } boardSeq={ boardSeq } />} 
            { boardPg === 3 && <BoardEdit5 onBoardPg={ onBoardPg } boardSeq={ boardSeq } />}
        </div>
    );
};

export default Board5;