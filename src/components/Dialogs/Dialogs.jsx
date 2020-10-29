import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
    <div className={s.dialogs}>
            <div className={s.dialogsItems}>Контакты
            <div className={`${s.people} ${s.active}`}>
                <NavLink to="/dialogs/1">Оля</NavLink>
                </div>
            <div className={s.people}>
                 <NavLink to="/dialogs/2">Саша</NavLink>
            </div> 
            <div className={s.people}>
                 <NavLink to="/dialogs/3">Егор</NavLink>
            </div> 
            <div className={s.people}>
                 <NavLink to="/dialogs/4">Мама</NavLink>
            </div> 
            <div className={s.people}>
                 <NavLink to="/dialogs/5">Папа</NavLink>
            </div>      
            </div>
        <div className={s.dialog}>
            <div className={s.headTitle}>Сообщения</div>
            <p>Привет как дела?</p>
            <p>Норм учу React</p>
            <p>Когда на собес?</p>
            <p>В декабре</p>
            <p>Круто удачи!</p>
            <p>Благодарю!</p>
            <textarea></textarea>
            <button>Add post</button>
        </div>
    </div>
    )
}

export default Dialogs;