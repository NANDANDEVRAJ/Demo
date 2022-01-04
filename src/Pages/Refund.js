import React,{useState} from 'react'
import "./Refund.css"
import {Form} from "react-bootstrap"

export default function Refund() {

    return (
        <div className='Box1'>
        <div className='refundLg'>
            <h3 className='refundLgTitle'>Refund Requests
                <input type="text"  className="fundsearch" placeholder="Search"/>
            </h3>
            <div className='refundTable'></div>
            <table className='refundLgTable'>
                <tr className='refundLgTr'>
                    <th className='refundLgTh'>Request ID</th>
                    <th className='refundLgTh'>Refunded Date</th>
                    <th className='refundLgTh'>Refunded Amt</th>
                    <th className='refundLgTh'>Product</th>
                    <th className='refundLgTh'>Status</th>
                </tr>
                <tr className='refundLgTr'>
                    <td className='refundLgUser'>#23AD</td>
                    <td className='refundLgDate'>2 Jun 2021</td>
                    <td className='refundLgAmount'>$122.00</td>
                    <td className="refundLgProduct">AirPods</td>
                    <td className='refundLgStatus'>
                    <button className="Approve" onClick={()=> alert("Approved!")}>Approve </button>
                    <button className='Reject' onClick={()=> alert("Rejected!")}>Reject </button>
                   
                    </td>
                </tr>
                <tr className='refundLgTr'>
                    <td className='refundLgUser'>#23AD</td>
                    <td className='refundLgDate'>2 Jun 2021</td>
                    <td className='refundLgAmount'>$122.00</td>
                    <td className="refundLgProduct">AirPods</td>
                    <td className='refundLgStatus'>
                    <button className="Approve" onClick={()=> alert("Approved!")}>Approve </button>
                    <button className='Reject' onClick={()=> alert("Rejected!")}>Reject </button>
                    </td>
                </tr>
                <tr className='refundLgTr'>
                    <td className='refundLgUser'>#23AD</td>
                    <td className='refundLgDate'>2 Jun 2021</td>
                    <td className='refundLgAmount'>$122.00</td>
                    <td className="refundLgProduct">AirPods</td>
                    <td className='refundLgStatus'>
                    <button className="Approve" onClick={()=> alert("Approved!")}>Approve </button>
                    <button className='Reject' onClick={()=> alert("Rejected!")}>Reject </button>
                    </td>
                </tr>
                <tr className='refundLgTr'>
                    <td className='refundLgUser'>#23AD</td>
                    <td className='refundLgDate'>2 Jun 2021</td>
                    <td className='refundLgAmount'>$122.00</td>
                    <td className="refundLgProduct">AirPods</td>
                    <td className='refundLgStatus'>
                    <button className="Approve" onClick={()=> alert("Approved!")}>Approve </button>
                    <button className='Reject' onClick={()=> alert("Rejected!")}>Reject </button>
                    </td>
                </tr>
                <tr className='refundLgTr'>
                    <td className='refundLgUser'>#23AD</td>
                    <td className='refundLgDate'>2 Jun 2021</td>
                    <td className='refundLgAmount'>$122.00</td>
                    <td className="refundLgProduct">AirPods</td>
                    <td className='refundLgStatus'>
                    <button className="Approve" onClick={()=> alert("Approved!")}>Approve </button>
                    <button className='Reject' onClick={()=> alert("Rejected!")}>Reject </button>
                    </td>
                </tr>
                <tr className='refundLgTr'>
                    <td className='refundLgUser'>#23AD</td>
                    <td className='refundLgDate'>2 Jun 2021</td>
                    <td className='refundLgAmount'>$122.00</td>
                    <td className="refundLgProduct">AirPods</td>
                    <td className='refundLgStatus'>
                    <button className="Approve" onClick={()=> alert("Approved!")}>Approve </button>
                    <button className='Reject' onClick={()=> alert("Rejected!")}>Reject </button>
                    </td>
                </tr>
                <tr className='refundLgTr'>
                    <td className='refundLgUser'>#23AD</td>
                    <td className='refundLgDate'>2 Jun 2021</td>
                    <td className='refundLgAmount'>$122.00</td>
                    <td className="refundLgProduct">AirPods</td>
                    <td className='refundLgStatus'>
                    <button className="Approve" onClick={()=> alert("Approved!")}>Approve </button>
                    <button className='Reject' onClick={()=> alert("Rejected!")}>Reject </button>
                    </td>
                </tr>
            </table>
        </div>
        </div>
    )
}
