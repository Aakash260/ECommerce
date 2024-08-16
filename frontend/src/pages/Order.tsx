import React, { ReactElement, useState } from 'react'
import TableHOC from '../components/admin/TableHOC'
import { Link } from 'react-router-dom'

type DataType={
    _id:string,
    amount:number,
    quantity:number,
    discount:number,
    status:ReactElement,
    action:ReactElement
}

const column: Column<DataType>[]=[
    {
    Header:"ID",
    accessor:"_id",
},
{
    Header:"Quantity",
    accessor:"quantity",
},
{
    Header:"Discount",
    accessor:"discount",
},
{
    Header:"Amount",
    accessor:"amount",
},
{
    Header:"Status",
    accessor:"status",
},
{
    Header:"Action",
    accessor:"action",
},
]
const order = () => {
    const [rows,setRows]=useState<DataType[]>([
        {
          _id:"vdsnvd",
          amount:45665,
          quantity:5,
          discount:500,
          status:<span className='red'>Processing</span>,
          action: <Link to={`/order/vsdvsd`}>View</Link>  
        }
    ])
const Table=TableHOC<DataType>(column,rows,"dashboard-product-box","Orders",rows.length>6)()
    return (
    <div className='container'>
        <h1>Orders</h1>
        {Table}

    </div>
  )
}

export default order