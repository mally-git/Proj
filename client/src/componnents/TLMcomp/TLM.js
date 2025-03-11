import { Fragment, useRef, useEffect, useState } from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import React from 'react';

const TlmTable = () => {
    const [tlmData, setTlmData] = useState([])
    const [maxRowInTable, setMaxRowInTable] = useState(10);
    const [isActive, setIsActive] = useState(true);
    const tlmDataRef = useRef(tlmData);

    useEffect(() => {
        console.log('isActive', isActive);
        if (!isActive) {
            return
        }
        getData()
        const interval = setInterval(getData, 500);
        return () => clearInterval(interval);
    }, [isActive]);


    // useEffect(() => {
    //     setTimeout(() => {
    //             listRef.current.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });            }
    //     ); // מחכה 100ms ואז גולל
    // }, [tlmData]);


    const getData = async () => {
        try {
            console.log("tlmData.length111", tlmData.length);
            console.log("tlmData:", tlmData);
            if (tlmDataRef.current.length < Number(maxRowInTable)) {
                console.log("tlmDataRef.current.length:", tlmDataRef.current.length);
                const res = await axios.get('http://localhost:5095/api/tlm/randomNumbers');
                if (res.status === 200) {
                    console.log("Response Data:", res.data);
                    const formattedData = res.data.map(dat => ({
                        source: dat.Source_id,
                        time: dat.Time,
                        data: dat.Data,
                    }));
                    setTlmData(prevData => {
                        const updatedData = [...prevData, ...formattedData];
                        tlmDataRef.current = updatedData; // עדכון הרפרנס
                        return updatedData;
                    });
                    //setTlmData(formattedData);
                }
            }
            else {
                setIsActive(false)
            }
        } catch (e) {
            console.error(e);
        }

    }

    const MaxRows = () => {
        console.log("maxRowInTable", maxRowInTable);
        console.log("tlmData.length---maxRowInTable", tlmData.length - maxRowInTable);
        if (tlmDataRef.current.length > Number(maxRowInTable)) {
            console.log("if", maxRowInTable);
            setTlmData(prevData => {
                const newData = prevData.slice(-Number(maxRowInTable));
                tlmDataRef.current = newData; // עדכון ה-ref כדי למנוע בעיות בתנאים
                return newData;
            })
            setIsActive(false)
        }
        else {
            console.log("else", maxRowInTable);
            setIsActive(true)
        }
    }

    const rowClassName = (item) => {
        if (item.source === 123454 || item.source === 45455) {
            return 'red-row';
        }
        return 'default-row ';
    };

    return (
        <>
            <div className="card" style={{
                width: '60%',
                margin: '40px',
                padding: '5px',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                //overflow: 'hidden',
            }}>
                <div>
                    <DataTable
                        value={tlmData}
                        scrollable
                        scrollHeight="600px"
                        tableStyle={{
                            width: '100%',
                            backgroundColor: 'transparent',
                        }}
                        className="custom-table"
                        rowClassName={rowClassName}
                    >
                        <Column field="time" header="Time" //bodyStyle={(rowTime) => rowClassName(rowTime.source)} 
                        ></Column>
                        <Column field="source" header="Source_id" //bodyStyle={(rowSource_id) => rowClassName(rowSource_id.source)}
                        ></Column>
                        <Column field="data" header="Data" //bodyStyle={(rowData) => rowClassName(rowData.source)}
                        ></Column>
                    </DataTable>
                </div>

            </div>
            <div style={{
                m: 1, width: '25ch', position: 'fixed', left: '70%', top: '75%'
            }}
                // noValidate
                autoComplete="off">
                <TextField id="outlined-basic" label="Max Telemeters" variant="outlined"
                    value={maxRowInTable}
                    onChange={(e) => (setMaxRowInTable(e.target.value), setIsActive(true))}
                />
                <Button variant="contained" style={{ position: 'fixed', left: '70%', top: '85%' }}
                    onClick={MaxRows}
                >slice</Button>

            </div>
        </>
    );
}
export default TlmTable

// {tlmData.map(data=><SetTlm data={data} setTlmData={setTlmData}/>)}