// import { Fragment, useRef, useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom";
// import Box from '@mui/material/Box';
// import Menu from '@mui/material/Menu';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import {Menubar } from 'primereact/menubar';
// // import {MenubarTrigger} from 'primereact/menubartrigger';
// // import {MenubarContent} from 'primereact/menubarcontent';
// // import {MenubarMenu} from 'primereact/menubarmenu';
// // import {MenubarItem} from 'primereact/MenubarItem';

// // import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar"
// import Typography from '@mui/material/Typography';
// import MenuIcon from '@mui/icons-material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Avatar from '@mui/material/Avatar';
// import LogIn from '../componnents/LogInPage'
// import { logOut } from "../redux/tokenSlice"
// import { deepOrange, deepPurple } from '@mui/material/colors';
// import { useDispatch, useSelector } from "react-redux";
// import { IconButton } from "@mui/material";
// import LogoutIcon from '@mui/icons-material/Logout';


// const Appbar = () => {
//     // const [haveTitel, sethaveTitel] = useState(false);
//     const [value, setValue] = useState();
//     const [anchorElNav, setAnchorElNav] = useState(null);
//     const [anchorElUser, setAnchorElUser] = useState(null);
//     const username = useSelector((state) => state.token.user?.name || '')
//     const IsAdmin = useSelector((state) => state.token.user?.role || '')

//     console.log('Username:', username);
//     const navigate = useNavigate();
//     const dispatch = useDispatch()
//     const open = Boolean(anchorElNav);
//     const open1 = Boolean(anchorElUser);
//     const handleChange = (event) => {
//         setAnchorElNav(null);
//         const newValue = event.currentTarget.textContent;
//         console.log("newValue", newValue);
//         if (newValue === 'TLC PAGE') {
//             navigate("/TLC");
//             setValue(newValue);
//             return;
//         }
//         else if (newValue === 'TLM PAGE') {
//             navigate("/TLM");
//             setValue(newValue);
//             return;
//         }
//         else {
//             navigate("/Home");
//             setValue(newValue);
//             return;
//         }

//     };

//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };

//     const getInitial = (name) => {
//         return name ? name.charAt(0).toUpperCase() : '';
//     };
//     const logout = () => {
//         dispatch(logOut())
//         navigate('/LogIn')
//     }
//     const Register = () => {

//     }

//     return (
//         <>
//             <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
//                 <appbar position="static">

//                     <Toolbar variant="dense">
//                         <MenuIcon
//                             // id="basic-button"
//                             aria-controls={open ? 'basic-menu' : undefined}
//                             aria-haspopup="true"
//                             aria-expanded={open ? 'true' : undefined}
//                             onClick={handleOpenNavMenu}
//                         >
//                         </MenuIcon>
//                         <Menu
//                             id="basic-menu"
//                             anchorEl={anchorElNav}
//                             open={Boolean(anchorElNav)}
//                             value={value}
//                             onClose={handleCloseNavMenu}
//                             MenuListProps={{
//                                 'aria-labelledby': 'basic-button',
//                             }}
//                         >
//                             <MenuItem onClick={handleChange}>HOME</MenuItem>
//                             <MenuItem onClick={handleChange}>TLM PAGE</MenuItem>
//                             <MenuItem onClick={handleChange}>TLC PAGE</MenuItem>
//                         </Menu>

//                         <Typography variant="h6" color="inherit" component="div" position='relative'>
//                             {value}
//                         </Typography>
//                         <div
//                             style={{
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 justifyContent: 'start',
//                                 position: 'absolute',
//                                 left: '100%',
//                                 transform: 'translateX(-90%)',
//                                 gap: '8px',
//                                 width: '200px'
//                             }}
//                         >

//                             <span onClick={handleOpenUserMenu}>
//                                 {username}

//                                     <Menu
//                                         id="menu"
//                                         anchorEl={anchorElUser}
//                                         open1={Boolean(anchorElUser)}
//                                         value={value}
//                                         onClose={handleCloseUserMenu}
//                                         MenuListProps={{
//                                             'aria-labelledby': 'basic-button',
//                                         }}
//                                     >
//                                         {IsAdmin === 'Admin' & (<MenuItem onClick={Register}>Add User</MenuItem>)}
//                                         <MenuItem onClick={logout}>logOut</MenuItem>
//                                     </Menu>


//                             </span>
//                             <Avatar sx={{ bgcolor: deepOrange[500] }}>{getInitial(username)}</Avatar>

//                         </div>
//                     </Toolbar>
//                 </appbar>
//                 {/* <Menubar className="justify-between">
//                     <div className="flex gap-4">
//                         <MenubarMenu>
//                             <MenubarTrigger onClick={() => navigate("/")}>Home</MenubarTrigger>
//                         </MenubarMenu>
//                         <MenubarMenu>
//                             <MenubarTrigger onClick={() => navigate("/tlm")}>TLM Page</MenubarTrigger>
//                         </MenubarMenu>
//                         <MenubarMenu>
//                             <MenubarTrigger onClick={() => navigate("/tlc")}>TLC Page</MenubarTrigger>
//                         </MenubarMenu>
//                     </div>

//                     <div className="flex items-center gap-2 pr-4">
//                         <MenubarMenu>
//                             <MenubarTrigger>{username}</MenubarTrigger>
//                             <MenubarContent>
//                                 {IsAdmin === "Admin" && (
//                                     <MenubarItem onClick={Register}>Add User</MenubarItem>
//                                 )}
//                                 <MenubarItem onClick={logout}>Logout</MenubarItem>
//                             </MenubarContent>
//                         </MenubarMenu>
//                         <Avatar className="bg-orange-500 text-white">{getInitial(username)}</Avatar>
//                     </div>
//                 </Menubar> */}
//             </Box>

//         </>
//     )
// }
// export default Appbar;

// {/* <IconButton onClick={logout}>
//                             <LogoutIcon/>
//                             </IconButton> */}

import { Fragment, useRef, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Button } from "@mui/material";
import Registerr from "./RegisterPage";
import LogoutIcon from '@mui/icons-material/Logout';
import { blue, deepOrange } from '@mui/material/colors';
import { logOut } from "../redux/tokenSlice";

const Appbar = () => {
    const [value, setValue] = useState('Home');
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const username = useSelector((state) => state.token.user?.name || '');
    const IsAdmin = useSelector((state) => state.token.user.roles);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const open = Boolean(anchorElNav);
    const open1 = Boolean(anchorElUser);
    const handleChange = (event) => {
        setAnchorElNav(null);
        const newValue = event.currentTarget.textContent;
        console.log("newValue", newValue);
        if (newValue === 'TLC PAGE') {
            navigate("/TLC");
            setValue(newValue);
            return;
        }
        else if (newValue === 'TLM PAGE') {
            navigate("/TLM");
            setValue(newValue);
            return;
        }
        else {
            navigate("/Home");
            setValue(newValue);
            return;
        }

    };

    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
    const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);
    const handleCloseUserMenu = () => setAnchorElUser(null);
    const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : '');
    const logout = () => {
        dispatch(logOut());
        navigate('/');
    };
    const register = () => {
        navigate('/Registerr');
    };
    console.log("IsAdmin,username", IsAdmin, username);

    return (
        <Box >
            <AppBar position="static" sx={{
                bgcolor: 'rgba(255, 255, 255, 0.8)', boxShadow: 'none', padding: '12px', backdropFilter: 'blur(50px)' // מרווח מתחת ל-AppBar

            }}>
                <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <MenuIcon
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleOpenNavMenu}
                            sx={{ color: '#003366' }}
                        />
                        <Typography variant="h6" sx={{ color: '#003366', fontWeight: 'bold' }}>
                            {value || 'Home'}
                        </Typography>
                    </div>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElNav}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleChange}>HOME</MenuItem>
                        <MenuItem onClick={handleChange}>TLM PAGE</MenuItem>
                        <MenuItem onClick={handleChange}>TLC PAGE</MenuItem>
                    </Menu>
                    <img
                        src="/882_Logo_9089_239ן€¡240_2-24.png"
                        alt="Logo"
                        style={{ height: '60px', marginRight: '16px', cursor: 'pointer' }}
                    />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Typography onClick={handleOpenUserMenu}
                            aria-controls={open1 ? 'menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open1 ? 'true' : undefined}
                            sx={{ cursor: 'pointer', color: '#003366' }}>
                            {username}
                        </Typography>
                        <Menu
                            id="menu"
                            anchorEl={anchorElUser}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {IsAdmin === 'Admin' && (
                                <MenuItem onClick={register}>Add User</MenuItem>

                            )}
                            <MenuItem onClick={logout}>Logout {<LogoutIcon />}</MenuItem>
                        </Menu>
                        <Avatar sx={{ bgcolor: '#003366' }}>{getInitial(username)}</Avatar>
                    </div>

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Appbar;