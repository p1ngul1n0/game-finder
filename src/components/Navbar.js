import React from 'react'

const Navbar = ({setQuery}) => {

    function handleChange(event){
        const query = encodeURI(event.target.value);
        setQuery(query);
    }

    return (
    <nav className="navbar navbar-expand-lg px-2">
        <a className="navbar-brand" href="/">GAME FINDER</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="https://rawg.io/apidocs">RAWG API</a>
                </li>
            </ul>
        </div>
        <form className="form-inline">
            <input id="searchTerm" onChange={handleChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
    </nav>
    )
}

export default Navbar
