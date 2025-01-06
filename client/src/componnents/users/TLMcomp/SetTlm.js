import { Fragment, useEffect, useState } from "react"
import { Promise } from 'core-js'
const SetTlm = (props) => {
    const [count, setCount] = useState(0)
    const [arr, setArr] = useState(0)
    const [Source_id, setSource_id] = useState(null)
    const [Data, setData] = useState(null)
    const [Time, seTimet] = useState(null)

    return (
        <>
            {props.data.map(data =>)}
            key: '0',
            data: {
            source: Source_id,
            data: Data,
            time: Time
        },
        </>
    )



    // const getTreeTableNodes = {
    //     return Promise.resolve(this.getTreeTableNodesData())
    // },



    // const [count,setCount]=useState(0)
    //     return [
    //         {
    //             key: setCount+1,
    //             data: {
    //                 source: props.Source_id,
    //                 data: props.Data,
    //                 time: props.Time
    //             },
    //         },

};
export default SetTlm
