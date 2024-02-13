import React, { useState } from 'react';
import BoardWrite10 from './BoardWrite10';
import BoardList10 from './BoardList10';
import BoardView10 from './BoardView10';
import BoardEdit10 from './BoardEdit10';

const Board10 = () => {
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
            { boardPg === 0 && <BoardList10 onBoardPg={ onBoardPg } onBoardSeq={ onBoardSeq } /> }
            { boardPg === 1 && <BoardWrite10 onBoardPg={ onBoardPg } /> } 
            { boardPg === 2 && <BoardView10 onBoardPg={ onBoardPg } boardSeq={ boardSeq } />}
            { boardPg === 3 && <BoardEdit10 onBoardPg={ onBoardPg } boardSeq={ boardSeq } /> }
        </div>
    );
};

export default Board10;