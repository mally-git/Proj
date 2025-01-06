import React, { useState, useEffect } from 'react';
import { PickList } from 'primereact/picklist';

import axios from 'axios'


const CreateTlc=()=>{
    const[tlcData,setTlcData]=useState([]);
    const [source, setSource] = useState([]);
    const [target, setTarget] = useState([]);

    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        try {
            const res = await axios.get('http://localhost:7410/api/tlc');
            if (res.status === 200) {
                console.log("Response Data:", res.data);
                const names=res.data.map(d=>({id: d._id, Name: d.Name }))
                setTlcData(names)
                //setSource(names)
            }
        } catch (e) {
            console.error(e);
        }
    }


    const onChange = (event) => {
        setSource(event.source);
        setTarget(event.target);
    };

    const tlcTemplate = (tlcData) => {
        return (
            <div className="flex flex-wrap p-2 align-items-center gap-3">
                <div className="flex-1 flex flex-column gap-2">
                    <span className="font-bold">{tlcData.Name}</span>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <PickList 
            dataKey="id" 
            source={source} 
            target={target} 
            onChange={onChange} 
            tlcTemplate={tlcTemplate} 
            breakpoint="1280px"
            sourceHeader="Commands" 
            targetHeader="Edit" 
            sourceStyle={{ height: '24rem' }} 
            targetStyle={{ height: '24rem' }} />
        </div>
    );
}
export default CreateTlc