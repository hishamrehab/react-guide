import { useRef, useState } from "react";
import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";

export default function Login() {
        const [emailIsInValid , setEmailIsInValid] =   useState(false);

      const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: '',
      });

      const [didEdit , setDidEdit] = useState({
        email: '',
        password: '',
      });

      const emailIsValid = didEdit.email && !isEmail(enteredValues.email);
      const passwordIsValid = didEdit.password && !isNotEmpty(enteredValues.password) && !hasMinLength(enteredValues.password, 6);

      function handleSubmit(event) {
        event.preventDefault();

      const enteredEmail = email.current.value;
      const enteredPassword = password.current.value;

 
      email.current.value = '';
      password.current.value = '';

      console.log('User Email:', enteredEmail);
      console.log('User Password:', enteredPassword);

      if(!emailIsValid) {
        setEmailIsInValid(true);
        return;
      }

      console.log('Sending HTTP Request...');
    }

  function handleInputBlur(identifier) {
   setDidEdit(prevEdit => ({
    ...prevEdit,
    [identifier]: false,
   }));
  } 

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
         <Input
            label="Email"
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur('email')}
            ref={enteredValues.email}
            error={emailIsInValid && 'Please enter a valid email.'} 
         />
        
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
           id="password"
           type="password" 
           name="password"
           ref={password}
           error={passwordIsValid && 'Please enter a valid password.'} 
           />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button> 
      </p>
    </form>
  );
}
