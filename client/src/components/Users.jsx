import React,{useState, useEffect} from 'react';
import axios from 'axios';

function Users(){
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/api/users')
        .then(res => {
            console.log('successful')
            setUsers(res.data)
        })
        .catch(err => {
            console.log('failed')
            alert(err.message)
        })
    }, [])

    
    return (
        <div className='users'>
            {users.map(user => (
                <div>
                    <h2>{user.username}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default Users;