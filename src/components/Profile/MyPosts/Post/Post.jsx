import s from './Post.module.css';


const Post = (props) => {
    return <div className={s.item}>
        <img src="https://i03.fotocdn.net/s119/11a097ff366bfb24/user_l/2713047325.jpg" alt="ava"></img>
        { props.message }
        <div><span> Like {props.likeCount}</span> </div>
        <span></span> 
    </div>
}

export default Post;