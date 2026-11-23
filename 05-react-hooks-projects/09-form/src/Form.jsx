import React from 'react'
import { useState } from 'react'


const Form = () => {
    const [username ,setUsername] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');


    const [errorUserName , setErrorUserName] = useState('');
    const [errorEmail , setErrorEmail] = useState('');
    const [errorPassword , setErrorPassword] = useState('');
    const [errorConfirmPassword , setErrorConfirmPassword] = useState('');

   const [userColor , setUserColor ] = useState('');
   const [emailColor , setEmailColor] = useState('');
   const [passwordColor , setPasswordColor] = useState('');
   const [confirmPasswordColor , setConfirmPasswordColor] = useState('');

 const validate = (e) => {
  e.preventDefault();

    if(username.length > 8) {
      setErrorUserName('');
      setUserColor('green');
    }else {
      setErrorUserName('Username should be more than 8 characters');
      setUserColor('red');
    }

    if(email.includes('@gmail')) {
    setErrorEmail('');
    setEmailColor('green');
    }else {
      setErrorEmail('Email should have @gmail');
      setEmailColor('red');
    }

   if(password.length > 8) {
    setErrorPassword('');
    setPasswordColor('green');
   }else {
    setErrorPassword('Password should be more than 8 characters');
    setPasswordColor('red');
   }

if(password !="" && password == confirmPassword) {
   setConfirmPasswordColor("green");
   setErrorConfirmPassword('');
}else {
  setErrorConfirmPassword('Password not matched');
  setConfirmPasswordColor('red');
}
 }


  return (
  <>
    <div className='card'>
        <div className="card-image"></div>
       <form>
        <input
         type="text"
         placeholder='Enter your name'
         value={username}
         onChange={(e) => setUsername(e.target.value)}
          style={{
            borderColor : userColor
          }}
         />
       <p className='error'>{errorUserName}</p>
      <input type='email' placeholder='Enter your Email' style={{
          borderColor : emailColor
          }}
           value={email}
           onChange={(e) => setEmail(e.target.value)}
          />
          <p className='error'>{errorEmail}</p>

         <input 
         type='password'
          placeholder='Password' 
         style={{
          borderColor: passwordColor
         }}
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />
          
          <p className='error'>{errorPassword}</p>
 
  <input type='password'
   placeholder='Confirm Password'
    style={{
    borderColor: confirmPasswordColor
  }}
   value={confirmPassword}
   onChange={(e) => setConfirmPassword(e.target.value)}
  />

 <p className='error'>{errorConfirmPassword}</p>


  <button className='submit-btn' onClick={validate}>Submit</button>

       </form>

        
    </div>
  </>
  )
}

export default Form