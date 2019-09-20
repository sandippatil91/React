import React from 'react';
import './Header.css';

const Header = () => {
		return(
				<section>
				<header>
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
					  <a className="navbar-brand" href="www.gogole.com">Navbar</a>
					  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon"></span>
					  </button>

					  <div className="collapse navbar-collapse" id="navbarSupportedContent">
					    <ul className="navbar-nav mr-auto">
					      <li className="nav-item active">
					        <a className="nav-link" href="www.gogole.com">Home <span className="sr-only">(current)</span></a>
					      </li>
					      <li className="nav-item">
					        <a className="nav-link" href="www.gogole.com">Link</a>
					      </li>
					      <li className="nav-item dropdown">
					        <a className="nav-link dropdown-toggle" href="www.gogole.com" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					          Dropdown
					        </a>
					        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
					          <a className="dropdown-item" href="www.gogole.com">Action</a>
					          <a className="dropdown-item" href="www.gogole.com">Another action</a>
					          <div className="dropdown-divider"></div>
					          <a className="dropdown-item" href="www.gogole.com">Something else here</a>
					        </div>
					      </li>
					      <li className="nav-item">
					        <a className="nav-link disabled" href="www.gogole.com" aria-disabled="true">Disabled</a>
					      </li>
					    </ul>
					    <form className="form-inline my-2 my-lg-0">
					      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
					      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
					    </form>
					  </div>
					</nav>
				</header>
				</section>
		);
	
}

export default Header;