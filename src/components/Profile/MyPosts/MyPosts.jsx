import s from './MyPosts.module.css';
import Post from './Post/Post';
import { postItem } from './../../../index'


const MyPosts = (props) => {
let postItem = props.state.postsData.map((p) => (<Post message={p.message} likesCount={p.likesCount} />))
    return <div className={s.posts}> My posts
        {postItem}    
        </div>
}

export default MyPosts;