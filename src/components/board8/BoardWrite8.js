import React, { useState } from 'react';
import Wstyles from '../../css/BoardWrite.module.css';
import axios from 'axios';

const BoardWrite8 = ({onBoardPg}) => {
    const[boardDTO, setBoardDTO] = useState({
        title : '',
        writer : '',
        password : '',
        content : ''
    })

    const onInput = (e) => {
        const{name, value} = e.target
        setBoardDTO({
            ...boardDTO,
            [name] : value
        })
    }

    const onWriteSubmit = () => {
        axios.post(`http://localhost:8080/board/write`, boardDTO)
             .then(() => {
                alert('등록 완')
                onBoardPg(0)
             })
    }

    return (
        <div className={ Wstyles.write_main }>
            <div className={ Wstyles.title_main }>            
                <p className={ Wstyles.title }>제목</p>
                <input name='title' onChange={ onInput } value={ boardDTO.title } />

                <p className={ Wstyles.writer }>작성자</p>
                <input name='writer' onChange={ onInput } value={ boardDTO.writer } />

                <p className={ Wstyles.pwd }>비밀번호</p>
                <input name='password' type='password' onChange={ onInput } value={ boardDTO.password } />
            </div>

            <div className={ Wstyles.button_div }>
                <button onClick={ onWriteSubmit }>등록</button>
            </div>

            <div className={ Wstyles.contents}>
                <textarea name='content' onChange={ onInput } value={ boardDTO.content } ></textarea>
            </div>
        </div>
    );
};

export default BoardWrite8;