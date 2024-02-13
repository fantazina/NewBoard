import React, { useEffect, useState } from 'react';
import styles from '../../css/BoardList.module.css';
import axios from 'axios';

const BoardList9 = ({onBoardPg, onBoardSeq}) => {
    const[boardList, setBoardList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/board/getBoardList`)
             .then(res => {
                setBoardList(res.data)
             })
    }, [])

    const onBoardView = (num) => {
        onBoardSeq(num)
        onBoardPg(2)
    }

    const getToday = (logTime) => {
        const date = new Date(logTime)
        const day = date.getDate();
        const month = date.getMonth()+1;
        const hour = date.getHours();
        const minutes = date.getMinutes();
        
        return `${month.toString().padStart(2, '0')}.${day.toString().padStart(2, '0')} 
        ${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }

    return (
        <div className={ styles.boardMain }>
            <div className={ styles.writeBtn }>
                <button onClick={ () => onBoardPg(1) }>글쓰기</button>
            </div> 
                <div className={ styles.boardList }>
                    <div className={ styles.list_ }>
                        <span className={ styles.seq }>글번호</span>
                        <span className={ styles.title }>제목</span>
                        <span className={ styles.id }>작성자</span>
                        <span className={ styles.logTime }>작성일자</span>
                        <span className={ styles.hit }>조회수</span>
                    </div>
                
                    <div>
                        { 
                            boardList.map((item, index) =>
                                <div className={ styles.list } onClick={ () => onBoardView(item.boardSeq) }>
                                    <span className={ styles.seq }>{item.boardSeq}</span>
                                    <span className={ styles.title }>{item.title}</span>
                                    <span className={ styles.id }>{item.writer}</span>
                                    <span className={ styles.logTime }>{getToday(item.logTime)}</span>
                                    <span className={ styles.hit }>{item.hit}</span>
                                </div>
                            )    
                        }
                    </div>
                </div>
        </div>
    );
};

export default BoardList9;