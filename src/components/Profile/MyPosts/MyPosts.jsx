import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return <div className={s.posts}> My posts
        <Post message='Hi how are you' likeCount='12'/>
        <Post message="Hi i`am ok" likeCount='14'/>
        <Post message="Let`s go to swim" likeCount='19'/>
        <Post />
        <Post />
        
        </div>
}

export default MyPosts;