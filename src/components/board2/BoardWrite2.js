import React, { useState } from 'react';
import Wstyles from '../../css/BoardWrite.module.css';
import axios from 'axios';

const BoardWrite2 = ({onBoardPg}) => {
    const[boardDTO, setBoardDTO] = useState({
        title : '',
        writer : '',
        password : '',
        content : '',
        hit : 0
    })

    const onInput = (e) => {
        const {name, value} = e.target

        setBoardDTO({
            ...boardDTO,
            [name] : value

        })
    }

    const onWriteSubmit = () => {
        axios.post(`http://localhost:8080/board/write`, boardDTO)
             .then(() => {
                alert('작성 완료')
                onBoardPg(0)
                
             }).catch(error => alert(error))
    }

    return (
        <div className={ Wstyles.write_main }>
            <div className={ Wstyles.title_main }>            
                <p />제목
                <input name='title' value={ boardDTO.title } onChange={ onInput }/>

                <p className={ Wstyles.writer }>작성자</p>
                <input name='writer' value={ boardDTO.writer } onChange={ onInput }/>

                <p className={ Wstyles.pwd }>비밀번호</p>
                <input name='password' type='password' value={ boardDTO.password } onChange={ onInput } />
            </div>

            <div className={ Wstyles.button_div }>
                <button onClick={ onWriteSubmit }>등록</button>
            </div>

            <div className={ Wstyles.contents} value={ boardDTO.content }>
                <div>
                    <textarea name='content'  className={ Wstyles.textarea } ></textarea>
                </div>
            </div>
        </div>
    );
};

export default BoardWrite2;