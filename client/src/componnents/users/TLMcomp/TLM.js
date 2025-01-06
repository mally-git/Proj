import { Fragment, useEffect, useState } from "react"
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import axios from 'axios'
import SetTlm from "./SetTlm";
import { Row } from "primereact/row";

const TlmTable = () => {
    const [tlmData, setTlmData] = useState([])

    useEffect(() => {
        getData().then((data) => {( setTlmData(<SetTlm data={data}/>))});
    }, []); 

    const getData = async () => {
        try {
            const res = await axios.get('http://localhost:7410/api/tlm')
            if (res.status === 200) {
                setTlmData(res.data)
            }

        } catch (e) {
            console.error(e)
        }
    }
    return (
        <>
        {tlmData.map(data=><SetTlm data={data} setTlmData={setTlmData}/>)}
            <div className="card">
                <TreeTable value={tlmData} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="source" header="Source_id"   { key: '0', data: { source: tlmData.Source_id, size: '100kb', type: 'Folder' } }></Column>
                    <Column field="data" header="Data"></Column>
                    <Column field="time" header="Time"></Column>
                </TreeTable>
            </div>

        </>
    )
}
export default TlmTable 

