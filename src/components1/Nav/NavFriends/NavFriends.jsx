import s from '../Nav.module.css';
const NavFriends = (props) => {
    return (
        <div className={s.friends}>
            <p>{props.name}</p>
            <div><img src={props.img} ></img></div>
        </div>
    );
}

export default NavFriends;