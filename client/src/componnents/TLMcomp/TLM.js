import { Fragment, useEffect, useState } from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios'

import React from 'react';

const TlmTable = () => {
    const [tlmData, setTlmData] = useState([])

    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        try {
            const res = await axios.get('http://localhost:7410/api/tlm');
            if (res.status === 200) {
                const formattedData = res.data.map(dat => ({
                    source: dat.Source_id,
                    time: dat.Time,
                    data: dat.Data,
                }));
                console.log("Response Data:", res.data);
                setTlmData(formattedData);
            }
        } catch (e) {
            console.error(e);
        }
    }
    const rowClassName = (item) => {
        console.log(item)
        console.log('d', item.source);
        if (item.source === '12344' || item.source === '55555') {
            console.log("wowwwwwwww");
            return 'red-row';
        }
        return 'default-row ';
    };
    return (
        <div className="card" style={{
            width: '50%',
            margin: '50px',
            padding: '10px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            overflow: 'hidden',
        }}>
            <div style={{
                maxHeight: '400px',
                overflowY: 'auto',
            }}>
                <DataTable
                    value={tlmData}
                    scrollable
                    scrollHeight="400px"

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
    );
}
export default TlmTable

// {tlmData.map(data=><SetTlm data={data} setTlmData={setTlmData}/>)}