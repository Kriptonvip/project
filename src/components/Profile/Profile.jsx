import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src="https://profailer.com/upload/iblock/978/97809ae5c3f4493a0c1aca1bb319f707.jpg" alt="TopBanner"></img>
        </div>
        <div>
            <img src="https://cdn1.flamp.ru/7f5f69120ef00dd18ab3d36c000a9f15_300_300.jpg" alt="Avatar"></img>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
        </div>
        <MyPosts />
    </div>

}

export default Profile;