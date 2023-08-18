import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';


const AddUser = (props) => {
  const [enteredUsername, setUserName] = useState("")
  const [enteredAge, setAge] = useState("")
  const [error , setError]=useState()

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        error:"! Invalid Input",
        message:"! Please Enter a valid Name "
      })
      return;

    }
    if (+enteredAge < 1) {
      setError({
        error:"! Invalid Age",
        message:"! Please Enter a valid  Age"
      })
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setUserName('');
    setAge('');
  };
  const usernameChangeHandler = (event) => {
    setUserName(event.target.value)
  }
  const ageChangeHandler = (event) => {
    setAge(event.target.value)
  }
  const errorHandler =()=>{
    setError(null)
  }
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message}  onConfirm ={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={usernameChangeHandler} />
          <label htmlFor="age" >Age(years)</label>
          <input id="age" type="number" onChange={ageChangeHandler} />
          <Button type="submit">Add Content</Button>
        </form>

      </Card>
    </div>
  );
};

export default AddUser;