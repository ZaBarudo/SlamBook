import { useState } from 'react'
import Login from './login';
import Register from './register';


const Auth = () => {
    const [choice, setChoice] = useState('login')

    const handleClick = (s) => {
        const wrapper = () => {
            if(s==='login') setChoice('login');
            else if(s==='register') setChoice('register');
        }
        return wrapper
    }


    return (
        <div className='auth-main'>

            <h2>Login Form</h2>
            <div className='auth-choices'>
                <input type='radio' name='auth' id='login' onClick={handleClick('login')}></input>
                <label htmlFor="login" className='auth-choice login'>Login</label>
                <input type='radio' name='auth' id='register' onClick={handleClick('register')}></input>
                <label htmlFor="register" className='auth-choice register'>Register</label>
            </div>
            
            {choice==='login' && <Login />}
            {choice==='register' && <Register />}

        </div>
    )
}

export default Auth;
