import React, { useState } from 'react';
import axios from "axios";
import './login.css';
import './App.css'
import { useNavigate } from 'react-router-dom';
export function Login (){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const   regEx = /[a-zA-Z0-9._-]+@[a-z0-9]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const onLogin = async () => {
      console.log(email);
      if(!regEx.test(email))
      {
              alert("Please enter a valid email address");
      }
      else if(password.length<6)
      alert("Please enter a valid password of minimum length 6 ");
      else
      {
       try{ 
        const response =  await axios.post(
            "https://express-t4.onrender.com/api/login",
            {
              username: email,
    
              password: password,
            }
          );
          if (response.status === 200) {
            navigate("/profile");
          } else {
            alert("Login failed. Please check your credentials.");
          }
        } catch (error) {
          alert("Login failed. Please check your credentials.");
        }
      
    }
      
    };

    

    return (
      <div className="App">
        <header className="App-header">
        <div className='loginForm'>
        <h3>Enter your credentials to login</h3>
        <form>
          <div style={{display:"flex",justifyContent:"center"}}>
  
          <img src="loginimg.png"  />
          </div>
            <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
         
          <div>
            <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value) } />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent:"space-around" }}>
            <button type="button" onClick={onLogin}>Login</button>
           
            </div>
            
        </form>
      </div>
        </header>
      </div>
    );  
}