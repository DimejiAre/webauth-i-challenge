import React from 'react';
import {Formik, Form, Field} from 'formik';

function LoginForm(props){
    const {login} = props;
    const initialUser = {username: '', password: ''}
    return(
        <Formik 
        initialValues = {initialUser}
        onSubmit={login}
        render={props => {
            return(
                <Form>
                    <label htmlFor='username'>username</label>
                    <Field name='username' type='text' placeholder='username'/>
                    <label htmlFor='password'>password</label>
                    <Field name='password' type='password' placeholder='password'/>
                    <button type='submit'>Log In</button>
                </Form>
            )
        }}/>
    )

}

export default LoginForm;