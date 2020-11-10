import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
    return <div>
        <ProfileInfo state={props.state} />
        <MyPosts state={props.state} />
    </div>

}

export default Profile;
