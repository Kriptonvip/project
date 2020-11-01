import s from './Dialogs.module.css';
import Message from './Message/Message';
import People from './People/People';


const Dialogs = (props) => {
   
    let peopleElements = props.state.peoplesData.map((p) => (<People name={p.name} id={p.id} />))
  
    let messageElements = props.state.messagesData.map((m) => (<Message message={m.message} />))
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>Контакты
                {peopleElements}
            </div>
            <div className={s.dialog}>
                <div className={s.headTitle}>Сообщения</div>
                {messageElements}
                <textarea></textarea>
                <button>Add post</button>
            </div>
        </div>
    )
}

export default Dialogs;