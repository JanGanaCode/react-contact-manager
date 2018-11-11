import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-3 py-2">
      <div className="container">
        <Link to="#/" className="navbar-brand">{branding}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Contacts <i  className="fas fa-list"></i></Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">Add <i  className="fas fa-plus"></i></Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About <i  className="fas fa-info-circle"></i></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  branding: 'My App',
}

Header.propTypes = {
  branding: PropTypes.string.isRequired,
}

export default Header;
