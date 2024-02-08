import React, { useState } from 'react';
import Wstyles from '../css/BoardWrite.module.css';
import axios from 'axios';

    const BoardWrite = ({onBoardPg}) => {
    const[boardDTO, setBoardDTO] = useState({
        writer : '',
        title : '',
        password : '',
        content : '',
        hit : 0,
    })
    const[loading,setLoading] = useState(false)

    const onInput = (e) => {
        const {name, value} = e.target

        setBoardDTO({
            ...boardDTO,
            [name] : value

        })
    }

    const onWriteSubmit = (e) => {
        setLoading(true) //axios가 진행중일때 로딩을 띄워주고 버튼 중복눌림을 방지하기 위해서 버튼에 disabled={loading} 준다 (true 일때만 적용됨)
        axios.post(`http://localhost:8080/board/write`, boardDTO)
             .then(() => {
                setLoading(false)
                alert('작성 완료!')
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
                <input name='password' type='password' value={ boardDTO.password } onChange={ onInput }/>
            </div>

            <div className={ Wstyles.button_div }>
                <button onClick={ onWriteSubmit } disabled={loading}>등록</button>
            </div>
            { loading && <div>로딩중</div> } 

            <div className={ Wstyles.contents}>
                <div>
                    <textarea name='content' value={ boardDTO.content } className={ Wstyles.textarea } onChange={ onInput }></textarea>
                </div>
            </div>
        </div>
           
    );
};

export default BoardWrite;