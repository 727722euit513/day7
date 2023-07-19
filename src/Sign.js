import React from 'react'
import './Sign.css';
import { Link } from 'react-router-dom';

function Sign() {
  return (
      <div className='box1'>
  
      <div class="box">
        <div class="inner-box">
          <div class="forms-wrap">
            <form action="index.html" autocomplete="off" class="sign-in-form">
              <div class="logo">
                <img src="https://tse3.mm.bing.net/th?id=OIP.Aj5hoLZFbrZyZnAslAUA2wHaHa&pid=Api&P=0&h=180" alt="easyclass" />
                <h4>Register here!</h4>
              </div>

              <div class="heading">
                <h2>Welcome</h2>
               
                <br></br>
                
                
              </div>

              <div class="actual-form">
                <div class="input-wrap">
                  <input
                    type="text"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder='Name'
                    required
                  />
                  
                </div>

                <div class="input-wrap"> 
                  <input
                    type="password"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder="Password"
                    required
                  />
                  
                </div>
                <div class="input-wrap"> 
                  <input
                    type="email"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder='Email'
                    required
                  />
                  
                </div>
                <div class="input-wrap"> 
                  <input
                    type="date"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder='DOB'
                    required
                    />
                </div>
                    
                <div class="input-wrap"> 
                  <input
                    type="text"
                    minlength="7"
                    class="input-field"
                    autocomplete="off"
                    placeholder='Gender'
                    required
                  />
                  
                </div>

                <div class="text">
                <input type="checkbox"></input> By signing up, I agree to the Terms of Services and Privacy Policy
                </div>
                <br>
                </br>
              <Link to="/home">  <input type="submit" value="Login" class="sign-btn" /></Link>
            
              </div>
            </form>

            
          </div>

          <div class="carousel">
        
            <img className="wall" style={{height:"500px"}}src="https://cdn.dribbble.com/users/746845/screenshots/2752082/___.gif"></img>

           
          </div>
        </div>
      </div>
   

 
    </div>
    
  )
}

export default Sign