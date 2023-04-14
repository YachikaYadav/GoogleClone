import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import "./Search.css"
import { Button } from '@material-ui/core';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import { useHistory, useNavigate } from 'react-router-dom';

function Search({hidebuttons}) {

const[{},dispatch]=useStateValue();
  const [input, setInput]=useState("");
  const history=useNavigate();

  const search=(e)=>{
    e.preventDefault();
    //alert(input)
    
    dispatch({
      type:actionTypes.SET_SEARCh_TERM,
      term:input
    })
    history("./search");
  };
  
  return (
    <form className='search'>
      <div className='search__input'>
        <SearchIcon className='searchicon'/>
        <input value={input} onChange={e=> setInput(e.target.value)}/>
        <MicIcon/>
      </div>
    {
      !hidebuttons ? (<div className='search__button'>
      <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
      <Button variant='outlined'>I'am feeling Lucky</Button>
    </div>) : (
      
    <div className='search__button' style={{display:'none'}}>
      <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
      <Button variant='outlined'>I'am feeling Lucky</Button>
    </div>)
    }

    </form>
  )
}

export default Search