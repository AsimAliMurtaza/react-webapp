import './search-box.styles.css';

const SearchBox = ({className, onChange, placeholder})=> (
<input className= {`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChange} />
);

export default SearchBox;