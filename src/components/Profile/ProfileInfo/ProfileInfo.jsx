import s from './ProfileInfo.module.css';
import React from 'react';

const ProfileInfo = (props) => {  
    let newPostElement = React.createRef();  
    let NewPostText = () => {
        let text = newPostElement.current.value;
        props.state.SetNewPostText(text);
    }
    let addPost = () => {
        props.state.SetNewMessage();    
    };
    return (
        <div>
            <img src="https://profailer.com/upload/iblock/978/97809ae5c3f4493a0c1aca1bb319f707.jpg" alt="TopBanner"></img>
            <div>
                <img src="https://cdn1.flamp.ru/7f5f69120ef00dd18ab3d36c000a9f15_300_300.jpg" alt="Avatar"></img>
                <div>
                    <div className={s.textDiv}><textarea ref={newPostElement} onChange={NewPostText} value={props.state.GetNewPostText()} />                    
                    <button onClick={addPost}>Add post</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;