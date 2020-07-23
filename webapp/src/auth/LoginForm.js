import { Button, Card, CardContent, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';

const LoginForm = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        let {name, value} = e.target
        setFormData(prevState => ({
          ...prevState,
          [name]: value  
        }))
    }
    console.log(formData)
    return(
        <React.Fragment>
            <Card className='login-form-card'>
                <CardContent>
                    <Typography>Login</Typography>
                    {/* actual form */}
                    <div>
                        <TextField 
                            name='email'
                            type='text'
                            value={formData.email}
                            label='Email' 
                            variant='outlined'
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <TextField 
                            name='password'
                            type='password'
                            value={formData.password}
                            label='Password' 
                            variant='outlined'
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <Button variant='contained'>
                        Login
                        </Button>
                    </div>     
                </CardContent>
            </Card>
        </React.Fragment>
    )
}

export default LoginForm