import React, { useState, useEffect, Children } from 'react';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios'
import TLCcheckBox from './TLClist';
import { Card } from '@mui/material';
import Alert from '@mui/material/Alert';
import TlcAdd from './TLCadd';
import { useDispatch, useSelector } from "react-redux";


const CreateTlc = () => {
    const [tlcData, setTlcData] = useState([]);
    const [checked, setChecked] = useState([0]);
    const [showAlert, setShowAlert] = useState(false); 

    const token = useSelector((state) => state.token.token || '')

    useEffect(() => {
        getData();
        console.log("useeffect", tlcData);
    }, []);

    const saveToCheckBox = (checked) => {
        setChecked([...checked])
        console.log("send", checked);
    }

    const getData = async () => {
        try {
            console.log("token", token);
            const res = await axios.get('http://localhost:7410/api/tlc', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (res.status === 200) {
                console.log("Response Data:", res.data);
                const names = res.data.map(d => ({ id: d._id, Name: d.Name, Opcode: d.Opcode, Data: d.Data }))
                setTlcData(names)
            }
        } catch (e) {
            console.error(e);
        }
    }

    const handleToggle = (value) => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <>
            <Card
                sx={{
                    width: {
                        xs: '95%',
                        sm: '75%',
                        md: '45%',
                        lg: '35%'
                    },
                    margin: '10px ',
                    left:'50px', // מרכז את הכרטיס ומוסיף רווח מסביב
                    padding: '12px',
                    borderRadius: '10px',
                    maxHeight: '450px',
                    overflowY: 'auto',
                    boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.1)', // בולט יותר
                }}
            >
                <List 
                sx={{ width: '100%', padding: '8px' }}
                >
                    {tlcData.map((value) => {
                        const labelId = `${value.Name}`;
                        <h>tlc</h>
                        return (
                        <>
                       
                            <ListItem key={value.id} disablePadding sx={{ padding: '4px' }}>
                                <ListItemButton onClick={() => handleToggle(value)} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.includes(value)}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={value.Name} />
                                </ListItemButton>
                            </ListItem>
                            </>
                        );
                    })}
                </List>
            </Card>


            <Button variant="outlined" endIcon={<SendIcon />}  onClick={() => {
                    saveToCheckBox(checked);
                    setShowAlert(true);
                    setTimeout(() => setShowAlert(false), 1000);
                }}
                style={{ position: 'relative', top: '5%', right: '30%', fontSize: '20px' }}
            >
                Send
            </Button>
           
            
            {showAlert && (
                <Alert severity="success" sx={{ mt: 1,width:"20%" }}>
                    This is a success alert.
                </Alert>
            )}

            <TLCcheckBox checked={checked} setChecked={setChecked} />
        </>
    )
}
export default CreateTlc;



