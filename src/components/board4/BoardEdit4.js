import React, { useEffect, useState } from 'react';
import Wstyles from '../../css/BoardWrite.module.css';
import axios from 'axios';

const BoardEdit4 = ({onBoardPg, boardSeq}) => {
    const[boardDTO, setBoardDTO] = useState({
        title : '',
        writer : '',
        password : '',
        content : ''
    })

    useEffect(() => {
        axios.get(`http://localhost:8080/board/getUp/${boardSeq}`)
             .then(res => {
                setBoardDTO(res.data)
             })
    },[boardSeq])

    const onInput = (e) => {
        const{name, value} = e.target
        setBoardDTO({
            ...boardDTO,
            [name] : value
        })
    }

    const onEditSubmit = () => {
        const bdDTO = boardDTO

        axios.put(`http://localhost:8080/board/update` ,bdDTO)
             .then(() => {
                alert('수정 완')

                onBoardPg(2)
             })
             
    } 

    return (
        <div className={ Wstyles.write_main }>
            <div className={ Wstyles.title_main }>      
                <p />제목
                <input name='title' value={ boardDTO.title } onChange={ onInput }/>

                <p className={ Wstyles.writer }>작성자</p>
                <input name='writer' value={ boardDTO.writer } onChange={ onInput } />
                
                <p className={ Wstyles.writer }>비밀버노</p>
                <input name='password' type='password' value={ boardDTO.password } onChange={ onInput }/>
            </div>

            <div className={ Wstyles.button_div }>
                <button onClick={ onEditSubmit }>등록</button>
            </div>

            <div className={ Wstyles.contents}>
                <div>
                    <textarea name='content' className={ Wstyles.textarea } value={ boardDTO.content } onChange={ onInput } ></textarea>
                </div>
            </div>
        </div>
    );
};

export default BoardEdit4;