

import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { Typography } from '@mui/material';
import { setToken } from '../redux/tokenSlice';
import { useNavigate } from 'react-router-dom';

const Registerr = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [roles, setRoles] = useState('');
    const [email, setEmail] = useState('');

    const [defaultValues, setDefaultValues] = useState({})

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event) => {
        setDefaultValues({...defaultValues,[event.target.name]:event.target.value});
    };

    const handleClick = () => {
        RegisterUser(defaultValues);

    };
    const backtohome=()=>{
        navigate('/Home')
    }

    const RegisterUser = async (defaultValues) => {
        
        if (!defaultValues.username || !defaultValues.password || !defaultValues.name) {
            alert("Username, name, and password are required!");
            return;
        }

        // ולידציה בסיסית לשדה email
        if (defaultValues.email && !/\S+@\S+\.\S+/.test(defaultValues.email)) {
            alert("Please enter a valid email address!");
            return;
        }

        if (defaultValues.phone && !/^\d{10}$/.test(defaultValues.phone)) {
            alert("Please enter a valid 10-digit phone number!");
            return;
        }
        try {
            const response = await axios.post('http://localhost:7410/api/auth/register', defaultValues);
            if (response.status === 200) {
                const user = response.data;
                console.log("user",user);
                console.log("response.data",response.data);
                
                alert("User added successfully");
                navigate('/Home')
            }
        } catch (error) {
            console.error("Registration error:", error);
            alert("שם המשתמש או סיסמה שגויים");
        }
    };

    return (
        <main style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: '100vh',
            backgroundColor: '#e6f7ff',
            padding: '10px'
        }}>
            <Card
                sx={{
                    width: {
                        xs: '85%',
                        sm: '75%',
                        md: '55%',
                        lg: '40%',
                        xl: '30%',
                    },
                    height: 'auto',
                    mt: 6,
                    padding: 4,
                    boxShadow: '0px 7px 10px rgba(0, 0, 0, 0.3)',
                    borderRadius: 4,
                    backgroundColor: '#ffffff',
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: 'center',
                        mb: 2,
                        color: '#004080',
                        fontWeight: 'bold',
                    }}
                >
                    Sign Up User
                </Typography>

                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // מוסיף מרכז
                        gap: 2, // רווחים בין השדות
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-basic"
                        name='username'
                        label="UserName"
                        variant="outlined"
                        fullWidth
                        value={defaultValues.username}
                        onChange={handleChange}
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '90%',
                                md: '80%',
                            },
                            borderRadius: '5px',
                            backgroundColor: 'white',
                        }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        name='password'
                        value={defaultValues.password} // חיבור ה-state לשדה
                        onChange={handleChange}
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '90%',
                                md: '80%',
                            },
                            borderRadius: '5px',
                            backgroundColor: 'white',
                        }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        value={defaultValues.name} // חיבור ה-state לשדה
                        onChange={handleChange}
                        name='name'
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '90%',
                                md: '80%',
                            },
                            borderRadius: '5px',
                            backgroundColor: 'white',
                        }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        name='email'
                        value={defaultValues.email} 
                        onChange={handleChange}
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '90%',
                                md: '80%',
                            },
                            borderRadius: '5px',
                            backgroundColor: 'white',
                        }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Phone"
                        variant="outlined"
                        name='phone'
                        fullWidth
                        value={defaultValues.phone}
                        onChange={handleChange}
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '90%',
                                md: '80%',
                            },
                            borderRadius: '5px',
                            backgroundColor: 'white',
                        }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Role"
                        variant="outlined"
                        fullWidth
                        name='roles'
                        value={defaultValues.roles} 
                        onChange={handleChange}
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '90%',
                                md: '80%',
                            },
                            borderRadius: '5px',
                            backgroundColor: 'white',
                        }}
                    />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                    <Button
                        variant="contained"
                        onClick={handleClick}
                        sx={{
                            px: 4,
                            py: 1.5,
                            backgroundColor: '#004080',
                            fontWeight: 'bold',
                            '&:hover': {
                                backgroundColor: '#003366',
                            },
                        }}
                    >
                        Save
                    </Button>
                    <Button
                        variant="contained"
                        onClick={backtohome}
                        sx={{
                            px: 4,
                            py: 1.5,
                            backgroundColor: '#004080',
                            fontWeight: 'bold',
                            '&:hover': {
                                backgroundColor: '#003366',
                            },
                        }}
                    >
                        Back
                    </Button>
                </Box>
            </Card>
        </main>
    )
}

export default Registerr;
