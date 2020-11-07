import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import NavFriends from './NavFriends/NavFriends';
const NavBar = (props) => {
        let peopleElements = props.state.friendsData.map((p) => (<NavFriends name={p.name} id={p.id} img={p.img}/>))
        return (
                <nav className={s.nav}>
                        <div className={`${s.item} ${s.active}`}>
                                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                        </div>
                        <div className={s.item}>
                                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
                        </div>
                        <div className={s.item}>
                                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
                        </div>
                        <div className={s.item}>
                                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
                        </div>
                        <div className={s.item}>
                                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
                        </div>
                        <div className={s.headTitle}>Друзья</div>
                        <div className={s.allFriends}> 
                                {peopleElements} 
                        </div>
                </nav>
        );
}

export default NavBar;