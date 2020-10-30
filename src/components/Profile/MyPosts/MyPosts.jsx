import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    let postsData = [
        { id: 1, message: 'Hi how are you', likesCount: 12 },
        { id: 2, message: 'Hi i`am ok', likesCount: 14  },
        { id: 3, message: 'Let`s go to swim', likesCount: 19  },
    ];
    let postItem = postsData.map((p) => (<Post message={p.message} likesCount={p.likesCount} />))
    return <div className={s.posts}> My posts
        {postItem}    
        </div>
}

export default MyPosts;