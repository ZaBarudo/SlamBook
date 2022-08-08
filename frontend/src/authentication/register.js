import { useState } from "react";


const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const auth = { username, password, cpassword };
        console.log(auth);
    }

    return (
        <form className='auth-form' onClick={handleSubmit}>
    
            <input 
                type="text" 
                placeholder="Username" 
                onChange={(e) => {setUsername(e.target.value)}} 
                value={username}
                required 
            />
            <input 
                type="password" 
                placeholder="Password" 
                onChange={(e) => {setPassword(e.target.value)}}
                value={password}
                required 
            />
            <input 
                type="password" 
                placeholder="Confirm Password" 
                onChange={(e) => {setCpassword(e.target.value)}}
                value={cpassword}
                required 
            />
            <button type="submit">Register</button>
            
        </form>
    )
}

export default Register;
