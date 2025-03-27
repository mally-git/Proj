import { Fragment, useRef, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Appbar = () => {
    const [value, setValue] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    const newValue='HOME';
    const handleChange = (event ) => {
        setAnchorEl(null);
        const newValue=event.currentTarget.textContent;
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
            navigate("/");
            setValue(newValue);
            return;
        }

    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
      };
    

    return (
        <>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <MenuIcon
                            // id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                        </MenuIcon>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            value={value}
                            onClose={handleMenuClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleChange}>HOME</MenuItem>
                            <MenuItem onClick={handleChange}>TLM PAGE</MenuItem>
                            <MenuItem onClick={handleChange}>TLC PAGE</MenuItem>
                        </Menu>

                        <Typography variant="h6" color="inherit" component="div">
                        {value}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
           
        </>
    )
}
export default Appbar;