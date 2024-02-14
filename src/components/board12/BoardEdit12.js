import React, { useEffect, useState } from 'react';
import Wstyles from '../../css/BoardWrite.module.css';
import axios from 'axios';

const BoardEdit12 = ({onBoardPg, boardSeq}) => {
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
    }, [])

    const onInput = (e) => {
        const{name, value} = e.target
        setBoardDTO({
            ...boardDTO,
            [name] : value
        })
    }

    const onEditClick = () => {
        const editDTO = boardDTO

        axios.put(`http://localhost:8080/board/update`, editDTO)
             .then(() => {
                alert('글수정완')
                onBoardPg(2)
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
                <button onClick={ onEditClick }>등록</button>
            </div>

            <div className={ Wstyles.contents}>
                <textarea name='content' onChange={ onInput } value={ boardDTO.content } ></textarea>
            </div>
        </div>
    );
};

export default BoardEdit12;