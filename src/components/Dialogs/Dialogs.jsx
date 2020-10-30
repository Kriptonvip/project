import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import {peopleElements} from './../../index'
import {messageElements} from './../../index'


const Dialogs = (props) => {
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