import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CreateTlc from './TLCpage'
import axios from 'axios'


const TLCcheckBox = (props) => {

    const [getDataById, setGetDataById] = useState([]);
    const [names, setNames] = useState([]);

    useEffect(() => {
        if (props.checked.length > 0) {
            props.checked
                .filter(id => id) // מסנן החוצה 0, null, undefined
                .forEach(id => getNameOfId(id));
        }
       
        console.log("useeffectnewwww", getDataById);

    }, [props.checked]);


    // const toArry = (names) => {
    //     const a = [...names]
    //     setNames(a)
    // }

    const getNameOfId = async (id) => {
        try {
            const res = await axios.get(`http://localhost:7410/api/tlc/${id}`);
            if (res.status === 200) {
                setGetDataById(prevData => [...prevData, res.data]);
                setNames(res.data.Name)
                // console.log("blabla", getDataById);
                // console.log("names", names);
            }
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <>
            <div style={{
                width: '21%',
                top: '-510px',
                position: 'relative',
                left: '55%',
                padding: '10px',
                backgroundColor: '#f9f9f9'
            }}>
                {/* {console.log("getDataByIdnnne",getDataById) */}
               
                <Autocomplete
                    disablePortal
                    options={props.checked}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Edit" />}
                />
            </div>
        </>
    )
}
export default TLCcheckBox;
