import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { setSection } from '../redux/actions';

const Header = (props) => {
    const handleSetSection = (section) => {
        props.setSection(section);
    };
    
    return (
        <div className = 'header__container-nav'>
            <ul className='header__lists'>
                
                <li
                    onClick={() => handleSetSection('Search')}
                >
                    <Link to='/main/search'>SEARCH</Link>
                </li>

                <li
                    onClick={() => handleSetSection('Favorites')}
                >
                    <Link to='/main/favorites'>FAVORITES</Link>
                </li>

                <li
                    onClick={() => handleSetSection('Predefined')}
                >
                    <Link to='/main/predefined'>PREDEFINED</Link>
                </li>

                <li>
                    <Link to='/'>LOGIN</Link>
                </li>

            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        sectionActive: state.sectionActive,
    }
};

const mapDispatchToProps = {
    setSection,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);