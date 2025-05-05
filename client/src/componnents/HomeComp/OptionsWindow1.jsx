import { Fragment, useRef, useEffect, useState } from "react"
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import UART from './Options/UART';
import Ethernet from './Options/Ethernet';
import EthernetByPass from './Options/EthernetByPass';
import Typography from '@mui/material/Typography';


const SimpleDialog = (props) => {
    const { onClose, selectedValue, open, connectionTypes } = props;
    const [selectedValue1, setSelectedValue1] = useState("None");
    const [openDialogName, setOpenDialogName] = useState(null);
    const handleClose = () => {
        onClose(selectedValue);
    };


    const handleListItemClick = (value) => {
        console.log("value", value);
        setOpenDialogName(value)
        onClose(value);
    };
    const handleSubDialogClose = (value) => {
        setOpenDialogName(null);
        setSelectedValue1(value);
    };
    return (
        <>
            {/* <Typography variant="subtitle1" component="div">
                Selected: {selectedValue1}
            </Typography> */}

            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>Select Communication</DialogTitle>
                <List sx={{ pt: 0 }}>

                    <ListItem disablePadding key={'UART'}>
                        <ListItemButton onClick={() => handleListItemClick('UART')}>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={'UART'} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding key={'Ethernet'}>
                        <ListItemButton onClick={() => handleListItemClick('Ethernet')}>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={'Ethernet'} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding key={'EthernetByPass'}>
                        <ListItemButton onClick={() => handleListItemClick('EthernetByPass')}>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={'EthernetByPass'} />
                        </ListItemButton>
                    </ListItem>

                    {/* <ListItem disablePadding>
                        <ListItemButton
                            autoFocus
                            onClick={() => handleListItemClick('addAccount')}
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <AddIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Add account" />
                        </ListItemButton>
                    </ListItem> */}
                </List>
            </Dialog>

            {openDialogName === 'UART' && (
                <UART open={true} onClose={handleSubDialogClose} selectedValue={selectedValue} selectedValue1={selectedValue1}/>
            )}
            {openDialogName === 'Ethernet' && (
                <Ethernet open={true} onClose={handleSubDialogClose} selectedValue={selectedValue} selectedValue1={selectedValue1}/>
            )}
            {openDialogName === 'EthernetByPass' && (
                <EthernetByPass open={true} onClose={handleSubDialogClose} selectedValue={selectedValue} selectedValue1={selectedValue1}/>
            )}
        </>

    )
}
export default SimpleDialog