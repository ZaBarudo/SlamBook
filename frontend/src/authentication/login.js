import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const auth = { username, password };
        console.log(auth);
    }

    return (
        <form className='auth-form' onSubmit={handleSubmit}>
    
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
            <button type="submit">Login</button>
            
        </form>
    )
}

export default Login;
