import React from 'react';
import styles from '../css/BoardList.module.css';

const BoardList = ({onBoardPg}) => {


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
                        {/* {
                            list.map((item, index) => 
                                <div onClick={ () => onView(item.writeSeq) } className={ styles.list }>
                                    <span className={ styles.seq }>{item.writeSeq}</span>
                                    <span className={ styles.title }>[{item.sel}]{item.title}</span>
                                    <span className={ styles.id }>{item.id}</span>
                                    <span className={ styles.logTime }>{getToday(item.logTime)}</span>
                                    <span className={ styles.hit }>{item.hit}</span>
                                </div>)
                        } */}
                    </div>
                </div>
        </div>
    );
};

export default BoardList;