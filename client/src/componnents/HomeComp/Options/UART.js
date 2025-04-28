import { Fragment, useRef, useEffect, useState } from "react"
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


const UART = (props) => {
    const { onClose, selectedValue, open, connectionTypes } = props;
    const [comPortSelect, setComPortSelect] = useState('')
    const [baudRateSelect, setBaudRateSelect] = useState('')
    const [dataBitsSelect, setDataBitsSelect] = useState('')
    const [stopBitsSelect, setStopBitsSelect] = useState('')
    const [parityBitsSelect, setParityBitsSelect] = useState('')

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    const handleChange1 = (event) => {
        setComPortSelect(event.target.value);
    };

    const handleChange2 = (event) => {
        setBaudRateSelect(event.target.value);
    };

    const handleChange3 = (event) => {
        setDataBitsSelect(event.target.value);
    };

    const handleChange4 = (event) => {
        setStopBitsSelect(event.target.value);
    };

    const handleChange5 = (event) => {
        setParityBitsSelect(event.target.value);
    };
    
    const ConnectToUART = () => {
        const arr=[selectedValue,comPortSelect,baudRateSelect,dataBitsSelect,stopBitsSelect,parityBitsSelect]
        console.log("arr:",arr);
        ///to send data to c# 
    }
    return (
        <>
            <Dialog onClose={handleClose} open={open} PaperProps={{
                style: { width: '25%', maxWidth: '25%' }
            }}>
                <DialogContent>
                <DialogTitle>Com Port Cotrol</DialogTitle>
                <List sx={{ pt: 0 }}>

                    <ListItem disablePadding key={"Com Port"}>
                        <ListItemButton
                        //onClick={() => handleListItemClick("com port")}
                        >
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, gap: 2 }}>
                                <ListItemText primary={"Com Port"} primaryTypographyProps={{
                                    noWrap: true,  // חשוב - לא לשבור שורה
                                    sx: { width: 150 } // או כל גודל קבוע שמתאים
                                }} />
                                <FormControl fullWidth size="small">
                                    <InputLabel id="demo-simple-select-label">choose typeof....</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={comPortSelect}
                                        label="choose typeof...."
                                        onChange={handleChange1}
                                    >
                                        <MenuItem value={'text'}>text</MenuItem>
                                        <MenuItem value={'int'}>int</MenuItem>
                                        <MenuItem value={'object'}>object</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding key={'Baud Rate'}>
                        <ListItemButton >
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, gap: 2 }}>
                                <ListItemText primary={"Baud Rate"} primaryTypographyProps={{
                                    noWrap: true,  // חשוב - לא לשבור שורה
                                    sx: { width: 150 } // או כל גודל קבוע שמתאים
                                }} />
                                <FormControl fullWidth size="small">
                                    <InputLabel id="demo-simple-select-label">choose typeof....</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={baudRateSelect}
                                        label="choose typeof...."
                                        onChange={handleChange2}
                                    >
                                        
                                        <MenuItem value={'96001'}>96001</MenuItem>
                                        <MenuItem value={'115200'}>115200</MenuItem>
                                        <MenuItem value={'897779'}>897779</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding key={'Data Bits'}>
                        <ListItemButton >
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, gap: 2 }}>
                                <ListItemText primary={"Data Bits"} primaryTypographyProps={{
                                    noWrap: true,  // חשוב - לא לשבור שורה
                                    sx: { width: 150 } // או כל גודל קבוע שמתאים
                                }} />
                                <FormControl fullWidth size="small">
                                    <InputLabel id="demo-simple-select-label">choose typeof....</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={dataBitsSelect}
                                        label="choose typeof...."
                                        onChange={handleChange3}
                                    >
                                        <MenuItem value={'text'}>text</MenuItem>
                                        <MenuItem value={'int'}>int</MenuItem>
                                        <MenuItem value={'object'}>object</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding key={"Stop Bits"}>
                        <ListItemButton
                        //onClick={() => handleListItemClick("com port")}
                        >
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, gap: 2 }}>
                                <ListItemText primary={"Stop Bits"} primaryTypographyProps={{
                                    noWrap: true,  // חשוב - לא לשבור שורה
                                    sx: { width: 150 } // או כל גודל קבוע שמתאים
                                }} />
                                <FormControl fullWidth size="small">
                                    <InputLabel id="demo-simple-select-label">choose typeof....</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={stopBitsSelect}
                                        label="choose typeof...."
                                        onChange={handleChange4}
                                    >
                                        <MenuItem value={'text'}>text</MenuItem>
                                        <MenuItem value={'int'}>int</MenuItem>
                                        <MenuItem value={'object'}>object</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding key={"Parity Bits"}>
                        <ListItemButton
                        //onClick={() => handleListItemClick("com port")}
                        >
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, gap: 2 }}>
                                <ListItemText primary={"Parity Bits"} primaryTypographyProps={{
                                    noWrap: true,  // חשוב - לא לשבור שורה
                                    sx: { width: 150 } // או כל גודל קבוע שמתאים
                                }} />
                                <FormControl fullWidth size="small">
                                    <InputLabel id="demo-simple-select-label">choose typeof....</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={parityBitsSelect}
                                        label="choose typeof...."
                                        onChange={handleChange5}
                                    >
                                        <MenuItem value={'text'}>text</MenuItem>
                                        <MenuItem value={'int'}>int</MenuItem>
                                        <MenuItem value={'object'}>object</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </ListItemButton>
                    </ListItem>
                </List>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mt: 2 }}>
                    <Button sx={{ flexGrow: 0 }} variant="outlined" onClick={ConnectToUART}>
                        Connect
                    </Button>
                    <Button sx={{ flexGrow: 0 }} variant="outlined" onClick={() => handleListItemClick("close")}>
                        Close
                    </Button>
                </Box>
                </DialogContent>
            </Dialog>
        </>
    )
}
export default UART