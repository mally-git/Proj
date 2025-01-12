import React, { useState, useEffect, Children } from 'react';
// import { PickList } from 'primereact/picklist';
// import { Dropdown } from 'primereact/dropdown';
import { ListBox } from 'primereact/listbox';
//import { scrollable } from 'primereact/scrollable';
import { useOverlayListener } from 'primereact/hooks';
import { Button } from 'primereact/button';
import axios from 'axios'
import { Checkbox } from "primereact/checkbox";
import TlcAdd from "./TLCadd"
import { MultiSelect } from 'primereact/multiselect';
import { OrganizationChart } from 'primereact/organizationchart';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


const CreateTlc = () => {

    const [tlcData, setTlcData] = useState([]);
    const [tlcDataById, setTlcDataById] = useState([]);
    const [selectTlc, setSelectTlc] = useState(null);
    const [collection, setCollection] = useState([]);
    const [checkedItems, setCheckedItems] = useState({});
    const [showTlcAdd, setShowTlcAdd] = useState(false);
    const [Selected, setSelected] = useState([]);



    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        try {
            const res = await axios.get('http://localhost:7410/api/tlc');
            if (res.status === 200) {
                console.log("Response Data:", res.data);
                const names = res.data.map(d => ({ id: d._id, Name: d.Name }))
                setTlcData(names)
            }
        } catch (e) {
            console.error(e);
        }
    }

    const onCheckboxChange = (e, itemId) => {
        setCheckedItems({ ...checkedItems, [itemId]: e.checked });
        console.log('fff', checkedItems);

    };

    const SendToSelect = () => {
        console.log(Object.name);
        return Object.keys(checkedItems).filter((key) => checkedItems[key] === true)
    }

    const handleAddClick = () => {
        const selectedCollection = SendToSelect();
        setCollection(selectedCollection);
        setShowTlcAdd(true);
    }

    const ShowObject = async (id) => {
        console.log("tttytytuyiuoi", id);
        try {
            const res = await axios.get(`http://localhost:7410/api/tlc/${id}`);
            if (res.status === 200) {
                //const formattedData = {label: res.data.Name,expanded:true,children :[res.data.Opcode,res.data.Data] }
                console.log("Response Data id:", res.data);
                setTlcDataById(res.data)
            }
        } catch (e) {
            console.error(e);
        }
    }
    const onChange = (e) => {
        console.log("value of e", e.value);
        const selectValue = e.value
        setSelected(selectValue)
        ShowObject(selectValue)

    }

    return (
        <>
            <h1 style={{ size: "100px", position: 'relative', right: '34.5%', top: '20px', color: "cadetblue", fontFamily: 'inherit' }}
            >Commands</h1>
            <div style={{
                width: '25%',
                top: '70px',
                margin: '50px',
                padding: '10px',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                overflow: 'auto',
                maxHeight: '420px',
                //overflowY: 'auto'
            }}>
                <ListBox
                    scrollable='true'
                    //scrollHeight="300px"
                    value={selectTlc}
                    onChange={(e) => setSelectTlc(e.value)}
                    options={tlcData}


                    optionLabel="Name"
                    itemTemplate={(option) => (
                        <div className="flex align-items-center" style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '10px',
                            borderBottom: '1px solid #ccc',
                        }}>
                            <Checkbox
                                //inputId={`cb-${option.id}`}
                                checked={checkedItems[option.id] || false}
                                onChange={(e) => onCheckboxChange(e, option.id)}
                                style={{ marginRight: 'auto' }}
                            />
                            <span className="ml-2" style={{
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                textAlign: 'center',
                                width: '100%',
                                fontSize: '20px',
                                fontFamily: 'inherit'
                            }} >{option.Name}</span>
                        </div>
                    )}
                    className="w-full md:w-14rem"
                />

            </div>
            <div className="card flex justify-content-center">
                <Button label="Add"
                    severity="success"
                    style={{ position: 'relative', top: '20px', right: '35%', fontFamily: 'inherit', fontSize: '20px' }}
                    onClick={handleAddClick} />
                {showTlcAdd}
                {/* {showTlcAdd && (
                    <TlcAdd setCollection={collection} collection={collection} />
                )}*/}
            </div>
            <h1 style={{ size: "100px", position: 'relative', left: '20%', top: '-615px', color: "cadetblue", fontFamily: 'inherit' }}>Edit</h1>

            <div className="card flex justify-content-center" style={{
                width: '35%',
                top: '-590px',
                position: 'relative',
                left: '55%',
                padding: '10px',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                overflow: 'auto',
                maxHeight: '420px',
            }}>

                <MultiSelect
                    value={Selected}
                    onChange={onChange} options={collection} //optionLabel="id"
                    placeholder="Select One" maxSelectedLabels={1} //className="w-full md:w-20rem" 
                />
            </div>
            {/* <div className="card overflow-x-auto">
                <OrganizationChart value={tlcDataById || {expanded:false}} />
            </div> */}
            <div>
                <DataTable value={tlcDataById} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="Name" header="Name"></Column>
                    <Column field="Opcode" header="Opcode"></Column>
                    <Column field="Data" header="Data"></Column>
                </DataTable>
            </div>
            {console.log(tlcDataById)}
        </>
    )
}
export default CreateTlc;
{/* <div className="card flex justify-content-center" style={{
                width: '25%',
                margin: '50px',
                padding: '10px',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                overflow: 'auto',
                maxHeight: '400px',
                //overflowY: 'auto'
            }}>
                <div className="flex align-items-center">
                    <Checkbox inputId="ingredient4" name="pizza" value="Onion" onChange={onIngredientsChange} checked={ingredients.includes('Onion')} />

                </div>
            </div> 
           
       
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
{/* //         <div className='card'>
    //             <Dropdown */}
{/* //                 value={target}
    //                 onChange={(e) => setTarget(e.value)}
    //                 options={target}
    //                 optionLabel="Name"
    //                 placeholder="Select a C"
    //                 className="w-full md:w-14rem"
    //                 style={{ minWidth: '14rem' }}
    //             />
    //         </div> */}
{/* //     </div > */ }





//https://stackblitz.com/run?file=src%2FApp.jsx
//https://primereact.org/cascadeselect/#accessibility
