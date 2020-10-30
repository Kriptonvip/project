import s from './MyPosts.module.css';
import Post from './Post/Post';
import { postItem } from './../../../index'


const MyPosts = () => {
    return <div className={s.posts}> My posts
        {postItem}    
        </div>
}

export default MyPosts;