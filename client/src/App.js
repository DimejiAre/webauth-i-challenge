import React, {useState} from 'react';
import axios from 'axios';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {

  const [user, setUser] = useState('');

  const login = (formValue, actions) => {
    console.log(formValue)
    const newUser = {
      username: formValue.username,
      password: formValue.password,
    }

    axios.post('http://localhost:4000/api/auth/login', newUser)
    .then(res => {
      setUser(res.data);
      actions.resetForm();
    })
    .catch(err => {
      alert(err.message)
    })
  }

  return (
    <div className="App">
      <LoginForm login={login}/>
    </div>
  );
}

export default App;
