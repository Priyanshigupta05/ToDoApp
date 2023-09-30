import React, { useState } from 'react';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import List from './Listt';
const ToDoList = () => {
    const [item, setItem] = useState("");
    const [newitem, setNewItem] = useState([]);

    const itemEvent = (event) =>{
        setItem(event.target.value)
    }
    const listofitems = () => {
        setNewItem((prevValue) => {
return [...prevValue , item]
        });
        setItem(" ");
    };
return(
    <>
    <div className='main_div'>
        <div className='center_div'>
            <br />
            <h1>ToDoList</h1>
            <br />
            <input type='text' value={item}
            placeholder='Add an item' onChange={itemEvent}/>
            <Button className="newBtn" onClick={listofitems}>
              <AddIcon />
            </Button>
            <br />
            <ol>
               
{newitem.map((value, index) =>{
    return  <List  key={index} text={value} />
})}
            </ol>
            <br />
        </div>
    </div>
    
    </>
)
};

export default ToDoList;