import React, { useState, useEffect } from 'react';
import { PickList } from 'primereact/picklist';
import { Dropdown } from 'primereact/dropdown';

import axios from 'axios'


const CreateTlc = () => {
    const [tlcData, setTlcData] = useState([]);
    const [edit, setedit] = useState([]);
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
                const names = res.data.map(d => ({ id: d._id, Name: d.Name }))
                // setTlcData(names)
                setSource(names)
            }
        } catch (e) {
            console.error(e);
        }
    }


    const onChange = (event) => {
        //setSource(event.source);
        setTarget(event.target);

    };

    const itemTemplate = (item) => {
        return (
            <div className="flex flex-wrap p-2 align-items-center gap-3">
                <div className="flex-1 flex flex-column gap-2">
                    <span className="font-bold">{item.Name}</span>
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
                itemTemplate={itemTemplate}
                breakpoint="1280px"
                sourceHeader="Commands"
                targetHeader="Edit"
                sourceStyle={{ height: '24rem' }}
            //targetStyle={{ height: '24rem' }}
            />
            <div className='card'>
                <Dropdown
                    value={target}
                    onChange={(e) => setTarget(e.value)}
                    options={target}
                    optionLabel="Name"
                    placeholder="Select a C"
                    className="w-full md:w-14rem"
                    style={{ minWidth: '14rem' }}
                />
            </div>
        </div>

        //      <div className="card flex justify-content-center">
        //      <Dropdown
        //        value={selectedCountry}
        //        onChange={(e) => setSelectedCountry(e.value)}
        //        options={countries}
        //        optionLabel="name"
        //        placeholder="Select a City"
        //        className="w-full md:w-14rem"
        //        style={{ minWidth: '14rem' }}
        //      />
        //    </div>
    );
}
export default CreateTlc

//https://stackblitz.com/run?file=src%2FApp.jsx
//https://primereact.org/cascadeselect/#accessibility
