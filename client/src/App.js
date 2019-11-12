import React, {useState} from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Users from './components/Users';
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
      <Route
        exact path='/'
        render={props => {
          return <LoginForm {...props} login={login}/>;
        }}
      />
      <Route 
      path='/users'
      render={props => {
        return <Users {...props}/>
      }}/>
    </div>
  );
}

export default App;
