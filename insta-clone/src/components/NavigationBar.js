import React from 'react';

function MySignupButton() {
    return (
      <button>
            Signup
      </button>
    );
  }

  function MyLoginButton(){
    return (
        <button>
            Login
        </button>
      );
    }
  
  export default function MyApp() {
    return (      
        <div className="header">
            <div className="icon">
                <h4>template</h4>
            </div>

            <div className='login-signup'>
                <div className='signup-button'>
                    <MySignupButton />
                </div>   
                <div className='login-button'>
                    <MyLoginButton />
                </div>   
            </div>
        </div>  
    );
  }
  
