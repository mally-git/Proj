import React, { useState, useEffect } from 'react';
// import { PickList } from 'primereact/picklist';
// import { Dropdown } from 'primereact/dropdown';
import { ListBox } from 'primereact/listbox';
//import { scrollable } from 'primereact/scrollable';
import { useOverlayListener } from 'primereact/hooks';
import { Button } from 'primereact/button';
import axios from 'axios'
import { Checkbox } from "primereact/checkbox";



const CreateTlc = () => {
    const [tlcData, setTlcData] = useState([]);
    const [selectTlc, setSelectTlc] = useState(null);
    const [edit, setedit] = useState([]);
    const [collection, setCollection] = useState([]);
    const [checkIn, setCheckIn] = useState(false)
    const [checked,setChecked]=useState(false)

    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        try {
            const res = await axios.get('http://localhost:8670/api/tlc');
            if (res.status === 200) {
                console.log("Response Data:", res.data);
                const names = res.data.map(d => ({ id: d._id, Name: d.Name }))
                setTlcData(names)
            }
        } catch (e) {
            console.error(e);
        }
    }


    const onChange = (event) => {
        //setSource(event.source);
        //setTarget(event.target);

    };

    console.log("setSelectTlc",setSelectTlc)

    const collectChoosenCom = (selectTlc) = {

    //  collection:[...collection, item]
     }

    return (
        <>
            <h>Commands</h>
            <div className="card flex justify-content-center" style={{
                width: '25%',
                margin: '50px',
                padding: '10px',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                overflow: 'auto',
                maxHeight: '400px',
                //overflowY: 'auto'
            }}>

                <ListBox
                    scrollable
                    scrollHeight="300px"
                    multiple value={selectTlc}
                    onChange={(e) => { setChecked(e.checked) }}
                    //<Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                    // {Checkbox onChange={e => setChecked(e.checked)} checked={checked} }
                    options={tlcData}

                    optionLabel="Name"
                    className="w-full md:w-14rem" />

            </div>

            <div className="card flex justify-content-center">
                <Button label="Add"
                    severity="secondary"
                    style={{ marginRight: "15%" }} />
            </div>
        </>
    )


    {/* // return (
    //     <div className="card">
    //         {/* <PickList
    //             dataKey="id"
    //             source={source}
    //             //target={target}

    //             onChange={onChange}
    //             itemTemplate={itemTemplate}
    //             breakpoint="1280px"
    //             sourceHeader="Commands"
    //             //targetHeader="Edit"
    //             sourceStyle={{ height: '24rem' }}
    //         //targetStyle={{ height: '24rem' }}
    //         /> */}
    //         <div className='card'>
    //             <Dropdown
    //                 value={target}
    //                 onChange={(e) => setTarget(e.value)}
    //                 options={target}
    //                 optionLabel="Name"
    //                 placeholder="Select a C"
    //                 className="w-full md:w-14rem"
    //                 style={{ minWidth: '14rem' }}
    //             />
    //         </div>
    //     </div>


    //); */}
}
export default CreateTlc

//https://stackblitz.com/run?file=src%2FApp.jsx
//https://primereact.org/cascadeselect/#accessibility
