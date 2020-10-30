import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const People = (props) => {
    return (
        <div className={s.people}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}
const Message = (props) => {
    return (
        <div className={s.message}>
            <p>{props.message}</p>
        </div>
    )
}

const Dialogs = (props) => {
    let peoplesData = [
        { id: 1, name: 'Оля' },
        { id: 2, name: 'Егор' },
        { id: 3, name: 'Рома' },
        { id: 4, name: 'Рашид' },
        { id: 5, name: 'Коля' },
        { id: 6, name: 'Саша' }
    ];
    let messagesData = [
        { id: 1, message: 'Привет как дела?' },
        { id: 2, message: 'Норм учу React' },
        { id: 3, message: 'Когда на собес?' },
        { id: 4, message: 'В декабре' },
        { id: 5, message: 'Круто удачи!' },
        { id: 6, message: 'Благодарю!' }
    ];
    let peopleElements = peoplesData.map((p) => (<People name={p.name} id={p.id} />))
    // let peopleElements = [
    //     <People name={peopleData[0].name} id={peopleData[0].id} />,
    //     <People name={peopleData[1].name} id={peopleData[1].id} />,
    //     <People name={peopleData[2].name} id={peopleData[2].id} />,
    //     <People name={peopleData[3].name} id={peopleData[3].id} />,
    //     <People name={peopleData[4].name} id={peopleData[4].id} />,
    //     <People name={peopleData[5].name} id={peopleData[5].id} />
    // ]; 
    let messageElements = messagesData.map((m) => (<Message message={m.message} />))

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