import { Fragment, useRef, useEffect, useState } from "react"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SimpleDialog from "./OptionsWindow1"
import { Box } from "@mui/material";


const Home = () => {
    const connectionTypes = ['Uart', 'Ethernet by pass', 'Ethernet'];

    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("None");
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <>
        <Box sx={{ width: '100%',height:'50%', bgcolor: '#e6f7ff', minHeight: '100vh', paddingTop: '16px' }}>
            <h1>welcom to IAI Project</h1>
            {/* <h1>שלום לנתנאל ברן 😍🤣😁😎💖😶‍🌫️🥰😎🥲🥱🙃🫠😭😤😖🌭🍟🍕</h1> */}
            <h2>the home page</h2>

            <div>
                {/* <Typography variant="subtitle1" component="div">
                    Selected: {selectedValue}
                </Typography> */}
                <br />
                <Button variant="outlined" onClick={handleClickOpen}>
                    Connect
                </Button>

                <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} connectionTypes={connectionTypes}
                />
            </div>
            </Box>
        </>
    )
}

export default Home