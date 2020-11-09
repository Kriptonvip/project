import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <a href="s#">
            <img src="http://www.wikiladies.ir/wp-content/uploads/2019/03/cropped-looogo-768x685.png" alt="Logo"></img>
        <p>React Social</p>
        </a>
        </header>

}

export default Header;