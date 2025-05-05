import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { Fragment, useRef, useEffect, useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { Typography } from '@mui/material';
import { setToken } from '../redux/tokenSlice';
import { useNavigate } from 'react-router-dom';


const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState();
    const [ismanager, setIsmanager] = useState(false)
    const [isLogin, setIslogin] = useState(false)
    const dispatch = useDispatch();
    const navigate=useNavigate();

    const handleChange = (event) => {
        setUsername(event.target.value); // שומר את הערך שהמשתמש הכניס
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value); // שומר את הערך שהמשתמש הכניס
    };

    const handleClick = () => {
        LoginUser(username, password)
    };

    const LoginUser =async (username, password) =>{
        try{
            const response = await axios.post('http://localhost:7410/api/auth/login', {
                username,
                password
            })
            if(response.status===200){
                dispatch(setToken({token:response.data.accessToken,user:response.data.user}))
                console.log("response.data.user",response.data.user);
                navigate('/Home')
            }
        }catch(error) {
            alert("שם המשתמש או סיסמא השגויים")
        }
    }

    return (
        <>
            <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100vh', backgroundColor: '#e6f7ff' }}>
                <img
                    src="/IAI-190x190.png"
                    alt="תיאור התמונה"
                    style={{ width: '200px', height: '100px', marginTop: '50px', marginBottom: '50px' }}
                />
                {/* <h1
                    style={{
                        color: '#003366', // צבע תכלת
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        margin: 0, // ביטול רווחים נוספים
                    }}
                >
                    IAI Project
                </h1> */}
                <Card
                    sx={{
                        width: '25%',
                        marginTop: '30px',
                        padding: 3,
                        boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
                        borderRadius: 4,
                        marginTop: '50px',
                        backgroundColor: '#ffffff',
                    }}
                >
                    <Typography
                        variant="h2"
                        style={{
                            textAlign: 'center',
                            marginBottom: '20px',
                            color: '#004080',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                        }}
                    >
                        Please Login First
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 2,
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-basic"
                            label="UserName"
                            variant="outlined"
                            fullWidth
                            value={username} // חיבור ה-state לשדה
                            onChange={handleChange}
                            sx={{
                                width: '70%',
                                borderRadius: '5px',
                                backgroundColor: 'white',
                            }}
                        />
                        <TextField
                            id="standard-basic"
                            label="Password"
                            variant="standard"
                            fullWidth
                            value={password}
                            onChange={handleChangePassword}
                            sx={{
                                width: '70%',
                                borderRadius: '5px',
                                backgroundColor: 'white',
                            }}
                        />
                    </Box>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            marginTop: '20px',
                        }}
                    >
                        <Button
                            variant="contained"
                            onClick={handleClick}
                            sx={{
                                padding: '10px 20px',
                                backgroundColor: '#004080',
                                color: 'white',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: '#003366',
                                },
                            }}
                        >
                            Login
                        </Button>
                    </div>
                </Card>
            </main>
            {/* {!isLogin & < Home/>} */}

        </>
    )
}
export default LogIn;