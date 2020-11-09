import s from './Dialogs.module.css';
import Message from './Message/Message';
import People from './People/People';
import React, { Component } from 'react';




const Dialogs = (props) => {
    
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    };
    let peopleElements = props.state.peoplesData.map((p) => (<People name={p.name} id={p.id} />))
    let messageElements = props.state.messagesData.map((m) => (<Message message={m.message} />))
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>Контакты
                {peopleElements}
            </div>
            <div className={s.dialog}>
                <div className={s.dialogArea}>
                {messageElements}
                </div>
                <div className={s.textDiv}><textarea ref={newPostElement}></textarea>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
        </div>
    )
}
// функция авто - расширения окна ввода сообщений
// let textarea = document.querySelector('textarea');
// textarea.addEventListener('keydown', autosize);
// function autosize() {
//     let el = this;
//     setTimeout(function () {
//         el.style.cssText = 'height:auto; padding:0';
//         el.style.cssText = 'height:' + el.scrollHeight + 'px';
//     }, 0);
// }

export default Dialogs;