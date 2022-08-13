import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const info = {
        username: username,
        password: password
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const query_params = {
            client_id : 'UUID8x0qP0bFNR7U',
            redirect_uri : 'http://localhost:3000/home',

        }
        fetch('http://localhost:3001/api/login', {
            method: 'GET',
        })
        // }).then((response) => {
        //     return response.json();
        // }).then((actualData) => {
        //     console.log(actualData)
        // }).catch((err) => {
        //     console.log(err.message);
        // });
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
