import React, { useEffect, useState } from 'react';
import Vstyles from '../../css/BoardView.module.css';
import axios from 'axios';

const BoardView8 = ({onBoardPg, boardSeq}) => {
    const[boardDTO, setBoardDTO] = useState({
        title : '',
        writer : '',
        logTime : '',
        hit : '',
        content : ''
    })

    useEffect(() => {
        axios.get(`http://localhost:8080/board/getView/${boardSeq}`)
             .then(res => {
                setBoardDTO(res.data)
             })
    }, [])

    const onEditClick = () => {
        const confirmation = window.prompt('수정 기 ?')
        if(confirmation === boardDTO.password) {
            onBoardPg(3)

        } else {
            alert('비번 ㄴ ')
        }
    }

    const onDelClick = () => {
        const confirmation = window.prompt('삭제 기 ?')
        if(confirmation === boardDTO.password) {
            axios.delete(`http://localhost:8080/board/delete/${boardSeq}`)
                 .then(() => {
                    onBoardPg(0)
                 })
        } else {
            alert('비번 ㄴ')
        }
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
        <div className={ Vstyles.view_container }>  
            <div className={ Vstyles.view_main }>
                <div className={ Vstyles.top_div }>
                    <div className={ Vstyles.back }>
                        <button onClick={ () => onBoardPg(0) }>뒤로</button>
                    </div>
                    <h2 className={ Vstyles.view_title }>{ boardDTO.title }</h2> 
                        <div className={ Vstyles.up_button }>
                            <button onClick={ onEditClick }>수정</button>
                            <button onClick={ onDelClick }>삭제</button>
                        </div>
                
                    <div className={ Vstyles.id_list }>{ boardDTO.writer } | { getToday(boardDTO.logTime) } | { boardDTO.hit }</div>
                </div>

                <div className={ Vstyles.view_content }>
                    <div className={ Vstyles.view_text }>
                      	{ boardDTO.content }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoardView8;