import s from './Post.module.css';
import React from 'react';


const Post = (props) => {
    let likesCountEl = React.createRef();
    let likesDecrement = () => {
        
    }
    return <div className={s.item}>
        <img src="https://i03.fotocdn.net/s119/11a097ff366bfb24/user_l/2713047325.jpg" alt="ava"></img>
        { props.message }
        <div><button ref={likesCountEl} onClick={likesDecrement}> Like {props.likesCount}</button> </div>
        <span></span> 
    </div>
}

export default Post;