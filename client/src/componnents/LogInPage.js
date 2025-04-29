import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const LogIn = () => {


    return (
        <>
            <h1>IAI Project</h1>
            <img src="PROJ/client/public/Israel_Air_Industry.svg.png" alt="תיאור התמונה"
                style={{ width: '200px', height: '150px' }} />

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Card
                    sx={{
                        width: '25%',
                        maxWidth: '20%',
                        display: 'grid',
                        padding: 'center',
                    }}>
                    <h2>Pless Login First</h2>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 3, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="UserName" variant="outlined" />
                        <TextField id="standard-basic" label="Password" variant="standard" />
                    </Box>
                </Card>
            </div>
        </>
    )
}
export default LogIn;