import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {

  //State for errormodal
  const [error, setError] = useState("");

  const [enteredUserName, setEnteredUserName] = useState("");
  function userNameChangeHandler(event) {
    setEnteredUserName(event.target.value);
  }

  const [enteredAge, setEnteredAge] = useState("");
  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    if(enteredUserName.length===0 || enteredAge.length===0)
    {
      setError(
        {
          title:"Invalid Input",
          message:"Please enter valid input (non-empty values)"
        }
      )
      return;
    }
    else if(+enteredAge < 1)
    {
      setError(
        {
          title:"Invalid Input",
          message:"Please enter valid age (>1)"
        }
      )
      return;
    }
    //console.log(enteredUserName, enteredAge);
    props.onAddUser(enteredUserName,enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  }

  function errorHandler(){
    setError(null);
  }

  return(
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
          <form onSubmit={submitHandler}>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              onChange={userNameChangeHandler}
              value={enteredUserName}
            />
            <label htmlFor="age">Age (years):</label>
            <input
              id="age"
              type="number"
              onChange={ageChangeHandler}
              value={enteredAge}
            />
            <Button type="submit">Add User</Button>
          </form>
        </Card>
    </div>
  );
}

export default AddUser;

