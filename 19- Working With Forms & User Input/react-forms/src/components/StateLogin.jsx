import { useRef, useState } from "react";

export default function Login() {
        const [emailIsInValid , setEmailIsInValid] = useState(false);

      const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: '',
      });

      const [didEdit , setDidEdit] = useState({
        email: '',
        password: '',
      });

      const emailIsValid = didEdit.email  && enteredValues.email.includes('@');


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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            onBlur={() => handleInputBlur('email')}
            ref={enteredValues.email}
          />
          <div className="control-error">{emailIsInValid && <p>Please enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
           id="password"
           type="password" 
           name="password"
           ref={password}
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
