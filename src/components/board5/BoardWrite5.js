import React, { useState } from 'react';
import Wstyles from '../../css/BoardWrite.module.css';
import axios from 'axios';

const BoardWrite5 = ({onBoardPg}) => {
    const[boardDTO, setBoardDTO] = useState({
        title : '',
        writer : '',
        password : '',
        content : '',
        hit : ''
    })

    const onInput = (e) => {
        const{name, value} = e.target
        setBoardDTO({
            ...boardDTO,
            [name] : value
        })
    }

    const onWriteSubmit = () => {
        axios.post(`http://localhost:8080/board/write`, boardDTO) //axios.post 사용해서 board/write에 boardDTO를 등록. 받아올 데이트가 없으니까 res => 사용안함.
             .then(() => {
                alert('등록 완료')
                onBoardPg(0)
             })
    }


    return (
        <div className={ Wstyles.write_main }>
            <div className={ Wstyles.title_main }>            
                <p className={ Wstyles.title }>제목</p>
                <input name='title' value={ boardDTO.title } onChange={ onInput } />

                <p className={ Wstyles.writer }>작성자</p>
                <input name='writer' value={ boardDTO.writer } onChange={ onInput } />

                <p className={ Wstyles.pwd }>비밀번호</p>
                <input name='password' type='password' value={ boardDTO.password } onChange={ onInput } />
            </div>

            <div className={ Wstyles.button_div }>
                <button onClick={ onWriteSubmit }>등록</button>
            </div>

            <div className={ Wstyles.contents}>
                <textarea name='content' value={ boardDTO.content } onChange={ onInput } ></textarea>
            </div>
        </div>
    );
};

export default BoardWrite5;