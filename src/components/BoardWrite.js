import React from 'react';
import Wstyles from '../css/BoardWrite.module.css';

const BoardWrite = ({onBoardPg}) => {
    
    return (
        <div className={ Wstyles.write_main }>
            <div className={ Wstyles.title_main }>            
                <p />제목
                <input />
                <p className={ Wstyles.writer }>작성자</p>
                <input />
           </div>
            <div className={ Wstyles.button_div }>
                <button onClick={ () => onBoardPg(0) }>등록</button>
            </div>
           <div className={ Wstyles.contents}>
                <div>
                    <textarea className={ Wstyles.textarea }></textarea>
                </div>

           </div>
        </div>
           
    );
};

export default BoardWrite;