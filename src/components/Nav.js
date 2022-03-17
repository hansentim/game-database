import { useState } from 'react';

//Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';
//Logo
import logo from '../img/gamepad-solid.svg';
//Redux and Routes
import { fetchSearch } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput('');
  };
  const clearSearched = () => {
    dispatch({ type: 'CLEAR_SEARCHED' });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" className="icon" />
        <h1>Games Database</h1>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  color: whitesmoke;
  padding: 3 rem 5rem;
  text-align: center;

  input {
    width: 30%;
    font-size: 1.4rem;
    border: none;
    outline: none;
    border-radius: 5px;
    margin-top: 1rem;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.9);
    padding: 0.3rem;
    font-weight: bold;
    margin-right: 0.5rem;
  }
  input:focus {
  }
  button {
    font-size: 1.4rem;
    border: none;
    padding: 0.4rem 1.9rem;
    cursor: pointer;
    border-radius: 5px;
    background-color: #a358a3;
    color: whitesmoke;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2.4rem;
    margin-right: 0.5rem;
  }
`;

export default Nav;
