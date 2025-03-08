import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CreateTlc from './TLCpage'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios from 'axios'
import { positions } from '@mui/system';


const TLCcheckBox = (props) => {

    const [toShow, setToShow] = useState({});
    const [toKeep, setToKeep] = useState([]);
    const sendtoshow = (value) => {
        //בדיקה האם הערך של value הוא קיים -אם לא מחקו אותו בצאקבוקס
        if (!value) {
            setToShow({}); // כאשר נמחק הערך - ננקה את התצוגה
            return;
        }
        const findById = props.checked.find((item) => value.id === item.id)
        setToShow({...findById})
    }
    const DemoPaper = styled(Paper)(({ theme }) => ({
        width: 120,
        height: 120,
        padding: theme.spacing(2),
        ...theme.typography.body2,
        textAlign: 'center',
    }));

    const ToKeep = (toshow) => {
        setToKeep(prevtoshow => prevtoshow.includes(toshow) ? prevtoshow : [...prevtoshow, toshow]);
    }

    const sendTobla = () => {
        setToKeep([])
    }

    const toDelete = (value) => {
        setToKeep(prevToKeep => prevToKeep.filter(x => x.Name !== value.Name))
    }

    return (
        <>
            <div style={{
                width: '21%',
                top: '-500px',
                position: 'relative',
                left: '54%',
                padding: '10px',
                backgroundColor: '#f9f9f9'
            }}>
               
                <Autocomplete
                    disablePortal
                    options={props.checked}
                    getOptionLabel={(option) => option.Name} // מציג רק את השדה 'name'
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Edit" />}
                    onChange={(event, value) => sendtoshow(value)}
                />
            </div>
            <div style={{
                width: '28%',
                top: '-450px',
                position: 'relative',
                left: '51%',
                padding: '10px',
                backgroundColor: '#f9f9f9',
                overflow: 'auto',
                maxHeight: '420px',
            }}>
                <Stack direction="row" spacing={3}>
                    <Stack direction="column" spacing={1} alignItems="center">
                        <h4>Name</h4>
                        <DemoPaper square>{toShow.Name}</DemoPaper>
                    </Stack>

                    <Stack direction="column" spacing={1} alignItems="center">
                        <h4>Opcode</h4>
                        <DemoPaper square>{toShow.Opcode}</DemoPaper>
                    </Stack>

                    <Stack direction="column" spacing={1} alignItems="center">
                        <h4>Data</h4>
                        <DemoPaper square>{toShow.Data}</DemoPaper>
                    </Stack>
                </Stack>
            </div>
            <div>
                <Button variant="outlined" endIcon={<AddCircleOutlineIcon />}
                    onClick={() => ToKeep(toShow)}
                    style={{ position: 'relative', top: '-420px', left: '21%', fontSize: '-50px' }}>
                    Add
                </Button>
            </div>
            <div>
                <Button variant="outlined" endIcon={<DeleteOutlineIcon />}
                    onClick={() => sendTobla()}
                    style={{ position: 'relative', top: '-456px', left: '11%', fontSize: '-50px' }}>
                    delete all list
                </Button>
            </div>
            <div style={{
                width: '28%',
                top: '-400px',
                position: 'relative',
                left: '51%',
                padding: '10px',
                backgroundColor: '#f9f9f9',
                overflow: 'auto',
                maxHeight: '200px',
            }}>
                <List sx={{ width: '100%', maxWidth: 410, bgcolor: 'background.paper' }}>
                    {toKeep.map((value) => (
                        <ListItem
                            style={{ fontFamily: "cursive", fontSize: "4px", left: "10%", position: 'inherit', width: '80%', padding: '8px' }}
                            key={value.Name}
                            disableGutters
                            secondaryAction={
                                <IconButton aria-label="comment">
                                    <DeleteOutlineIcon onClick={() => toDelete(value)} />
                                </IconButton>
                            }
                        >
                            <ListItemText primary={`${value.Name}`} />
                        </ListItem>
                    ))}
                </List>
            </div>
            <div>
                <Button variant="outlined" endIcon={<SendIcon />} onClick={() => sendTobla()}
                    style={{ position: 'absolute', top: '550px', left: '83%', fontSize: '20px' }}
                >
                    Send to bla
                </Button>

            </div>
        </>
    )
}
export default TLCcheckBox;
