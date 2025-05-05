import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { MultiSelect } from 'primereact/multiselect';

const TlcAdd = (props) => {

    const [selected, setSelected] = useState(null);
    const [tlcData,setTlcData]=useState({});
    console.log(props);

    const ShowObject=async(id)=>{
        try {
            const res = await axios.get('http://localhost:7410/api/tlc/id');
            if (res.status === 200) {
                console.log("Response Data:", res.data);
                setTlcData(res.data)  
            }
        } catch (e) {
            console.error(e);
        }
    }
const onChange=(e)=>{
    setSelected(e.value)
    ShowObject(setSelected)
}
    return (
        <>
            <h1 style={{ size: "100px", position: 'relative', left: '20%', top: '-615px', color: "cadetblue", fontFamily: 'inherit' }}>Edit</h1>
            {console.log(props)}

            <div className="card flex justify-content-center" style={{width: '35%',
                top: '-590px',
                position: 'relative',
                left: '55%',
                padding: '10px',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                overflow: 'auto',
                maxHeight: '420px',}}>
                <MultiSelect 
                value={selected} 
                onChange={onChange} options={props.collection} //optionLabel="id"
                placeholder="Select One" maxSelectedLabels={1} //className="w-full md:w-20rem" 
                
                />
            </div>
            <div>

            </div>
        </>
    )
}
export default TlcAdd