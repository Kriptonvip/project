import React, { Component } from 'react';

const ProfileInfo = () => {
    let newPostElement = React.createRef();
    
    let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
    };
    return (
        <div>
            <img src="https://profailer.com/upload/iblock/978/97809ae5c3f4493a0c1aca1bb319f707.jpg" alt="TopBanner"></img>
            <div>
                <img src="https://cdn1.flamp.ru/7f5f69120ef00dd18ab3d36c000a9f15_300_300.jpg" alt="Avatar"></img>
                <div>
                    <div><textarea ref={newPostElement}></textarea></div>
                    <div> <button onClick={addPost}>Add post</button></div>
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;