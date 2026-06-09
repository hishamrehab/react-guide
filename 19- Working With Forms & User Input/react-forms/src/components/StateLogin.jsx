import { useRef, useState } from "react";
import Input from "./Input.jsx";

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

      const emailIsValid = didEdit.email  && enteredValues.email.includes('@');
      const passwordIsValid = didEdit.password  && enteredValues.password.trim().length > 0  ;

      function handleSubmit(event) {
        event.preventDefault();

      const enteredEmail = email.current.value;
      const enteredPassword = password.current.value;

      const emailIsInValid = !enteredEmail.includes('@');
 
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
