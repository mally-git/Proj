import * as React from 'react';
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

const EBP=["bbbb","ttt"]

const EthernetByPass= (props) => {
    const { onClose, selectedValue, open,connectionTypes } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>Select Communication</DialogTitle>
                <List sx={{ pt: 0 }}>  
                    {EBP.map((type) => (
                        <ListItem disablePadding key={type}>
                            <ListItemButton onClick={() => handleListItemClick(type)}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                        <PersonIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={type} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem disablePadding>
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
                    </ListItem>
                </List>
            </Dialog>
        </>
    )
}
export default EthernetByPass