import s from './Nav.module.css';
console.log(s)
const NavBar = () => {
    return <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
            <a href="#2">Profile</a>
        </div>
        <div className={s.item}>
            <a href="#2">Messages</a>
        </div>
        <div className={s.item}>
            <a href="#2">News</a>
        </div>
        <div className={s.item}>
            <a href="#2">Music</a>
        </div>
        <div className={s.item}>
            <a href="#2">Music</a>
        </div>
        <div className={s.item}>
            <a href="#2">Settings</a>
        </div>
    </nav>

}

export default NavBar;