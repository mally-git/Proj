// import CardContent from '@mui/material/CardContent';
// import Card from '@mui/material/Card';
// import { Fragment, useRef, useEffect, useState } from "react"
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { useDispatch } from 'react-redux'
// import axios from 'axios';
// import { createSlice } from '@reduxjs/toolkit';
// import { Typography } from '@mui/material';
// import { setToken } from '../redux/tokenSlice';
// import { useNavigate } from 'react-router-dom';

// const Registerr = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState();
//     const [name, setName] = useState('');
//     const [phone, setPhone] = useState();
//     const [roles, setRoles] = useState();
//     const [email, setEmail] = useState();
//     const [active, setActive] = useState();

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleChange = (event) => {
//         setUsername(event.target.value); // שומר את הערך שהמשתמש הכניס
//     };

//     const handleChangePassword = (event) => {
//         setPassword(event.target.value); // שומר את הערך שהמשתמש הכניס
//     };
//     const handleChangeName = (event) => {
//         setName(event.target.value); // שומר את הערך שהמשתמש הכניס
//     };
//     const handleChangeEmail = (event) => {
//         setEmail(event.target.value); // שומר את הערך שהמשתמש הכניס
//     };
//     const handleChangePhone = (event) => {
//         setPhone(event.target.value); // שומר את הערך שהמשתמש הכניס
//     };
//     const handleChangeRole = (event) => {
//         setRoles(event.target.value); // שומר את הערך שהמשתמש הכניס
//     };
//     const handleChangeActive = (event) => {
//         setActive(event.target.value); // שומר את הערך שהמשתמש הכניס
//     };

//     const handleClick = () => {
//         RegisterUser(username, password, name, phone, roles, email)
//     };

//     const RegisterUser = async (username, password, name, phone, roles, email) => {
//         if (!username || !password || !name) {
//             alert("username ,name and password are requierd")
//             return;
//         }
//         try {
//             const response = await axios.post('http://localhost:7410/api/auth/register', {
//                 username,
//                 password,
//                 name,
//                 phone,
//                 roles,
//                 email
//             })
//             if (response.status === 200) {
//                 const { accessToken, user } = response.data;
//                 dispatch(setToken({ token: accessToken, user }));
//                 console.log("response.data.user", user);
//                 alert("User added successfully");
//             }
//         } catch (error) {
//             console.error("Registration error:", error);
//             alert("שם המשתמש או סיסמא השגויים")
//         }
//     }
//     return (
//         <>
//             <main style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'flex-start',
//                 height: '100vh',
//                 backgroundColor: '#e6f7ff',
//                 padding: '20px'
//             }}>

//                 <Card
//                     sx={{
//                         width: {
//                             xs: '90%', // מסכים קטנים (ניידים)
//                             sm: '70%',
//                             md: '50%',
//                             lg: '30%',
//                             xl: '25%'
//                         },
//                         marginTop: '30px',
//                         padding: 3,
//                         boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
//                         borderRadius: 4,
//                         marginTop: '50px',
//                         backgroundColor: '#ffffff',
//                     }}
//                 >
//                     <Typography
//                         variant="h2"
//                         style={{
//                             textAlign: 'center',
//                             marginBottom: '20px',
//                             color: '#004080',
//                             fontWeight: 'bold',
//                             fontSize: '1.5rem',
//                         }}
//                     >
//                         sign up User
//                     </Typography>
//                     <Box
//                         component="form"
//                         sx={{
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                             gap: 2,
//                         }}
//                         noValidate
//                         autoComplete="off"
//                     >
//                         <TextField
//                             id="outlined-basic"
//                             label="UserName"
//                             variant="outlined"
//                             fullWidth
//                             value={username} // חיבור ה-state לשדה
//                             onChange={handleChange}
//                             sx={{
//                                 width: {
//                                     xs: '100%',
//                                     sm: '90%',
//                                     md: '80%',
//                                 },
//                                 borderRadius: '5px',
//                                 backgroundColor: 'white',
//                             }}
//                         />
//                         <TextField
//                             id="outlined-basic"
//                             label="Password"
//                             variant="outlined"
//                             fullWidth
//                             value={password} // חיבור ה-state לשדה
//                             onChange={handleChangePassword}
//                             sx={{
//                                 width: {
//                                     xs: '100%',
//                                     sm: '90%',
//                                     md: '80%',
//                                 },
//                                 borderRadius: '5px',
//                                 backgroundColor: 'white',
//                             }}
//                         />
//                         <TextField
//                             id="outlined-basic"
//                             label="Name"
//                             variant="outlined"
//                             fullWidth
//                             value={name} // חיבור ה-state לשדה
//                             onChange={handleChangeName}
//                             sx={{
//                                 width: {
//                                     xs: '100%',
//                                     sm: '90%',
//                                     md: '80%',
//                                 },
//                                 borderRadius: '5px',
//                                 backgroundColor: 'white',
//                             }}
//                         />
//                         <TextField
//                             id="outlined-basic"
//                             label="Email"
//                             variant="outlined"
//                             fullWidth
//                             value={email} // חיבור ה-state לשדה
//                             onChange={handleChangeEmail}
//                             sx={{
//                                 width: {
//                                     xs: '100%',
//                                     sm: '90%',
//                                     md: '80%',
//                                 },
//                                 borderRadius: '5px',
//                                 backgroundColor: 'white',
//                             }}
//                         />
//                         <TextField
//                             id="outlined-basic"
//                             label="Phone"
//                             variant="outlined"
//                             fullWidth
//                             value={phone} // חיבור ה-state לשדה
//                             onChange={handleChangePhone}
//                             sx={{
//                                 width: {
//                                     xs: '100%',
//                                     sm: '90%',
//                                     md: '80%',
//                                 },
//                                 borderRadius: '5px',
//                                 backgroundColor: 'white',
//                             }}
//                         />
//                         <TextField
//                             id="outlined-basic"
//                             label="Role"
//                             variant="outlined"
//                             fullWidth
//                             value={roles} // חיבור ה-state לשדה
//                             onChange={handleChangeRole}
//                             sx={{
//                                 width: {
//                                     xs: '100%',
//                                     sm: '90%',
//                                     md: '80%',
//                                 },
//                                 borderRadius: '5px',
//                                 backgroundColor: 'white',
//                             }}
//                         />
//                         <TextField
//                             id="outlined-basic"
//                             label="Active"
//                             variant="outlined"
//                             fullWidth
//                             value={active} // חיבור ה-state לשדה
//                             onChange={handleChangeActive}
//                             sx={{
//                                 width: {
//                                     xs: '100%',
//                                     sm: '90%',
//                                     md: '80%',
//                                 },
//                                 borderRadius: '5px',
//                                 backgroundColor: 'white',
//                             }}
//                         />
//                     </Box>
//                     <div
//                         style={{
//                             display: 'flex',
//                             justifyContent: 'space-around',
//                             marginTop: '20px',
//                         }}
//                     >
//                         <Button
//                             variant="contained"
//                             onClick={handleClick}
//                             sx={{
//                                 padding: '10px 20px',
//                                 backgroundColor: '#004080',
//                                 color: 'white',
//                                 fontWeight: 'bold',
//                                 '&:hover': {
//                                     backgroundColor: '#003366',
//                                 },
//                             }}
//                         >
//                             Save
//                         </Button>
//                     </div>
//                 </Card>
//             </main>
//         </>
//     )
// }
// export default Registerr

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
const [defaultValues,setDefaultValues]=({ name: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    date: null,
    accept: false})
 



    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event) => {
        setUsername(event.target.value); 
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value); // שומר את הערך שהמשתמש הכניס
    };
    const handleChangeName = (event) => {
        setName(event.target.value); // שומר את הערך שהמשתמש הכניס
    };
    const handleChangeEmail = (event) => {
        setEmail(event.target.value); // שומר את הערך שהמשתמש הכניס
    };
    const handleChangePhone = (event) => {
        setPhone(event.target.value); // שומר את הערך שהמשתמש הכניס
    };
    const handleChangeRole = (event) => {
        setRoles(event.target.value); // שומר את הערך שהמשתמש הכניס
    };
   

    const handleClick = () => {
        RegisterUser(username, password, name, phone, roles, email);
    
    };

    const RegisterUser = async (username, password, name, phone, roles, email) => {
        // if (!username || !password || !name) {
        //     alert("Username, name, and password are required");
        //     return;
        // }
        // if (!username || !password || !name) {
        //     alert("Username, name, and password are required!");
        //     return;
        // }
    
        // // ולידציה בסיסית לשדה email
        // if (email && !/\S+@\S+\.\S+/.test(email)) {
        //     alert("Please enter a valid email address!");
        //     return;
        // }
    
        // // ולידציה בסיסית לשדה phone
        // if (phone && !/^\d{10}$/.test(phone)) {
        //     alert("Please enter a valid 10-digit phone number!");
        //     return;
        // }
        try {
            const response = await axios.post('http://localhost:7410/api/auth/register', {
                username,
                password,
                name,
                phone,
                roles,
                email
            });
            if (response.status === 200) {
                const user  = response.data;
                alert("User added successfully");
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
                            label="UserName"
                            variant="outlined"
                            fullWidth
                            value={username} 
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
                            value={password} // חיבור ה-state לשדה
                            onChange={handleChangePassword}
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
                            value={name} // חיבור ה-state לשדה
                            onChange={handleChangeName}
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
                            value={email} // חיבור ה-state לשדה
                            onChange={handleChangeEmail}
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
                            fullWidth
                            value={phone} // חיבור ה-state לשדה
                            onChange={handleChangePhone}
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
                            value={roles} // חיבור ה-state לשדה
                            onChange={handleChangeRole}
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
                </Box>
            </Card>
        </main>
    )
}

export default Registerr;
