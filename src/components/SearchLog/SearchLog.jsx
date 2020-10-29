import s from './SearchLog.module.css'
const SearchLog = () => {
    return <searchlog className={s.SearchLog}>
        
        <div className={s.top}>
                <p>область поиска</p>
                <a href="#login">Login</a> 
        </div>
    </searchlog>

}

export default SearchLog;