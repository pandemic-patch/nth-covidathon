import { Button, Card, CardContent, TextField, Typography } from '@material-ui/core';
import React from 'react';

const LoginForm = () => {
    return(
        <React.Fragment>
            <Card className='login-form-card'>
                <CardContent>
                    <Typography>Login</Typography>
                    {/* actual form */}
                    <div>
                        <TextField 
                            label='Email' 
                            variant='outlined'
                        />
                    </div>
                    <div>
                        <TextField 
                            label='Password' 
                            variant='outlined'
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