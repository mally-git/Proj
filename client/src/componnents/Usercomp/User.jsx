import { Fragment, useEffect, useState } from "react"
import axios from 'axios'
import ShowUser from "./ShowUser"
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import AddUser from "./AddUser"
import SearchUser from "./Search";

const Users = () => {
    const [usersData, setUsersData] = useState([])
    const [open, setOpen] = useState(false);
  

    const handleClickOpen = () => {
        setOpen(true);
    };

    

    const getUsers = async () => {
        try {
            const res = await axios.get('http://localhost:8000/user')
            if (res.status === 200) {
                console.log(res.data);
                setUsersData(res.data)
                console.log(usersData);
            }
        } catch (e) {
            console.error(e)
        }
    }
        
    useEffect(() => {
        getUsers()
    }, [])

    return (<>
    
        {usersData.map(user => <ShowUser user={user} setUsersData={setUsersData} />)}
        <Fragment>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                onClick={() => { handleClickOpen(true) }}
            >
            </SpeedDial>
            <AddUser open={open} setOpen={setOpen} setUsersData={setUsersData}/>
            <SearchUser/>
        </Fragment>
    </>)
}

export default Users

