import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const People = (props) => {
    return (
        <div className={s.people}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}


export default People;