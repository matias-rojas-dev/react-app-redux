import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changingName } from '../redux/actions';

const Login = (props) => {

    const { changeName } = props;
    const [name, setName] = useState(changeName);

    const handleChange = (e) => {
        e.preventDefault();
        const newName = e.target.value;
        setName(newName);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(name);
        alert(name);
        props.changeName(name)
    };

    return (
        <div className='login__container'>
            <h3>WELCOME: {name}</h3>
            <form onSubmit={handleSubmit} >
                <input
                    autoComplete='none'
                    className='booklist_input w100'
                    type='text'
                    placeholder='Your name'
                    onChange={handleChange}
                    name={name}
                />
                <Link to='/main/search'>
                    <button className={!name ? 'login__button-disable' : 'login__button'} type={name ? 'submit' : 'button'}>
                        SAVE
                </button>
                </Link>
            </form>

        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        changeName: state.changeName,
    }
}

const mapDispatchToProps = {
    changingName
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);