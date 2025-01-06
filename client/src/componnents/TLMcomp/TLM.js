import { Fragment, useEffect, useState } from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios'
import { Row } from "primereact/row";

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
    const rowClassName  = (data) => {
        console.log(data)
        return data.source === '9976' ?  {source:'rrrr'} : ''; // צבע אדום בהיר לשורה
         // אם source_id שווה ל-AAA, תחזיר class מיוחד
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
                    scrollHeight="100%"

                    tableStyle={{
                        width: '100%',
                        backgroundColor: 'transparent',
                    }}
                    rowClassName={rowClassName}
                >
                    <Column field="time" header="Time"></Column>
                    <Column field="source" header="Source_id" ></Column>
                    <Column field="data" header="Data"></Column>
                </DataTable>
            </div>
        </div>
    );
}
export default TlmTable

// {tlmData.map(data=><SetTlm data={data} setTlmData={setTlmData}/>)}