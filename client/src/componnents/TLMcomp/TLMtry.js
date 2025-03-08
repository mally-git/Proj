import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const TlmTable = () => {
    const [tlmData, setTlmData] = useState([]);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:5065/ws');

        socket.onopen = () => {
            console.log('Connected to WebSocket server');
        };

        socket.onmessage = (event) => {
            try {
                const receivedData = JSON.parse(event.data);  // פריסת הנתונים מהשרת

                const formattedData = receivedData.map(dat => ({
                    source: dat.Id,
                    time: dat.Field1,
                    data: dat.Field2
                }));

                console.log("Received Data:", formattedData);

                // שמירה של הנתונים החדשים
                setTlmData(prevData => [...formattedData, ...prevData].slice(0, 500)); // שומר עד 500 רשומות אחרונות
            } catch (error) {
                console.error("Error parsing WebSocket message:", error);
            }
        };

        socket.onerror = (error) => {
            console.error('WebSocket Error:', error);
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        // סוגר את החיבור כאשר הקומפוננטה מתפרקת
        return () => {
            socket.close();
        };
    }, []);

    const rowClassName = (item) => {
        if (item.source === '12344' || item.source === '55555') {
            return 'red-row';
        }
        return 'default-row';
    };

    return (
        <div className="card" style={{
            width: '50%',
            margin: '50px auto',
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
                    <Column field="time" header="Time"></Column>
                    <Column field="source" header="Source ID"></Column>
                    <Column field="data" header="Data"></Column>
                </DataTable>
            </div>
        </div>
    );
};

export default TlmTable;
