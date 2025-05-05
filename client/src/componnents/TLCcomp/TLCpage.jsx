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
import TlcAdd from './TLCadd';



const CreateTlc = () => {
    const [tlcData, setTlcData] = useState([]);
    const [checked, setChecked] = useState([0]);
    

    useEffect(() => {
        getData();
        console.log("useeffect",tlcData);
    }, []);

    const saveToCheckBox = (checked) => {
        setChecked([...checked])
        console.log("send",checked);
    }

    const getData = async () => {
        try {
            const res = await axios.get('http://localhost:7410/api/tlc');
            if (res.status === 200) {
                console.log("Response Data:", res.data);
                const names = res.data.map(d => ({ id: d._id, Name: d.Name,Opcode:d.Opcode,Data:d.Data }))
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
            <div style={{
                width: '25%',
                top: '70px',
                margin: '50px',
                padding: '6px',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                overflow: 'auto',
                maxHeight: '420px',
                //overflowY: 'auto'
            }}>
                
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' ,padding:"20px"}}>
                    {tlcData.map((value) => {
                        const labelId = `${value.Name}`;
                        return(
                        <ListItem
                            key={value.id}
                            disablePadding
                            style={{padding:"2px"}}
                        >
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
                        )
                    })}
                </List>
            </div>

            <div>
                <Button variant="outlined" endIcon={<SendIcon />} onClick={() =>saveToCheckBox(checked)}
                    style={{ position: 'relative', top: '20px', right: '35%', fontSize: '20px' }}
                >
                    Send
                </Button>
                
            </div>
            <TLCcheckBox checked={checked}  setChecked={setChecked}/>
        </>
    )
}
export default CreateTlc;



