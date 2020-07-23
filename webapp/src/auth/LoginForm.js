import { Card, CardContent, TextField, Typography } from '@material-ui/core';
import React from 'react';

const LoginForm = () => {
    return(
        <React.Fragment>
            <Card className='login-form-card'>
                <CardContent>
                    <Typography>Login</Typography>
                    {/* actual form */}
                    <div className='login-form'>
                        <TextField 
                            label='Email' 
                            variant='outlined'
                        />
                        <TextField 
                            label='password' 
                            variant='outlined'
                        />
                    </div>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}

export default LoginForm