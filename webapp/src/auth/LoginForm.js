import { TextField } from '@material-ui/core';
import { Formik } from 'formik';
import React from 'react';

const LoginForm = () => {
    return(
        <React.Fragment>
            <Formik 
                initialValues={{email: '', password: ''}}
                onSubmit={data => { console.log(data) }}
            >
                {({values, handleChange, handleBlur, handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <TextField 
                        name='email'
                        value={values.email} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                    />
                    <TextField 
                        name='password'
                        value={values.password} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                    />
                </form>
                )}
            </Formik>
        </React.Fragment>
    )
}

export default LoginForm