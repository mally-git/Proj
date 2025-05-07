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
            <Box sx={{ width: '100%', height: '50%', bgcolor: '#e6f7ff', minHeight: '100vh', paddingTop: '16px' }}>
                {/* <h1 sx={{
                        textAlign: 'center',
                        mb: 2,
                        color: '#004080',
                        fontWeight: 'bold',
                    }}
            >welcom to IAI Project</h1> */}
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: 'center',
                        mb: 2,
                        color: '#004080',
                        fontWeight: 'bold',
                    }}
                >
                    welcom to IAI Project
                </Typography>
                

                <div>
                    {/* <Typography variant="subtitle1" component="div">
                    Selected: {selectedValue}
                </Typography> */}
                    <br />
                    <Button variant="outlined" onClick={handleClickOpen}>
                        To Connect
                    </Button>

                    <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} connectionTypes={connectionTypes}
                    />
                </div>
            </Box>
        </>
    )
}

export default Home