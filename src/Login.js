
import './Login.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react'

export class Login extends Component {
  render() {
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
                <h6>Already have an account?</h6>
                <Link to="/sign"><a href="#" class="toggle">Log In</a></Link><br></br>
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
                <Link to="/"><input type="submit" value="Sign Up" class="sign-btn" /></Link>
              
              </div>
            </form>

            
          </div>

          <div class="carousel">
            
            <img className="wall" style={{height:"500px"}} src="https://cdn.dribbble.com/users/1322388/screenshots/6480681/online-banking1_4x.jpg"></img>

           
          </div>
        </div>
      </div>
   

 
    </div>
    
  )
  }
}

export default Login
