import React from 'react'
import "./Payouts.css"

export default function Payouts() {

    const Button = ({type})=>{
        return <button className={"payoutLgButton " + type}> {type}</button>
    }
    return (
        <div className='PayoutsMain'>
        <div className='Box'>
        <div className='payoutLg'>
            <h3 className='payoutLgTitle'>
                Payout Details
            <input type="text" placeholder='Search...' className='search' />
            </h3>
            <table className='payoutLgTable'>
                <tr className='payoutLgTr payoutLgTrTitle'>
                    <th className='payoutLgTh'>Payout ID</th>
                    <th className='payoutLgTh'>Created at</th>
                    <th className='payoutLgTh'>Destination</th>
                    <th className='payoutLgTh'>Payout Type</th>
                    <th className='payoutLgTh'>Amount Received</th>
                    <th className='payoutLgTh'>Status</th>
                </tr>
                <tr className='payoutLgTr'>
                    <td className='payoutLgUser'>
                        <span className='payoutLgName'>payout_id12fel</span>
                    </td>
                    <td className='payoutLgDate'>12 Jan 2021,12:03pm</td>
                    <td className='payoutLgDate'>ba_1KBKZo5zkcz</td>
                    <td className='payoutLgAmount'>card</td>
                    <td className="payoutLgProduct">$1100</td>
                    <td className='payoutLgStatus'>
                        <Button type="Completed"></Button>
                    </td>
                </tr>
                <tr className='payoutLgTr'>
                    <td className='payoutLgUser'>
                        <span className='payoutLgName'>payout_id12fel</span>
                    </td>
                    <td className='payoutLgDate'>12 Jan 2021,12:03pm</td>
                    <td className='payoutLgDate'>ba_1KBKZo5zkcz</td>
                    <td className='payoutLgAmount'>Bank</td>
                    <td className="payoutLgProduct">$123,00</td>
                    <td className='payoutLgStatus'>
                        <Button type="Created"></Button>
                    </td>
                </tr>
                <tr className='payoutLgTr'>
                    <td className='payoutLgUser'>
                        <span className='payoutLgName'>payout_id12fel</span>
                    </td>
                    <td className='payoutLgDate'>12 Jan 2021,12:03pm</td>
                    <td className='payoutLgDate'>ba_1KBKZo5zkcz</td>
                    <td className='payoutLgAmount'>Cash</td>
                    <td className="payoutLgProduct">$1100</td>
                    <td className='payoutLgStatus'>
                        <Button type="Error"></Button>
                    </td>
                </tr>
                <tr className='payoutLgTr'>
                    <td className='payoutLgUser'>
                        <span className='payoutLgName'>payout_id12fel</span>
                    </td>
                    <td className='payoutLgDate'>12 Jan 2021,12:03pm</td>
                    <td className='payoutLgDate'>ba_1KBKZo5zkcz</td>
                    <td className='payoutLgAmount'>e-Wallet</td>
                    <td className="payoutLgProduct">$1100</td>
                    <td className='payoutLgStatus'>
                        <Button type="Canceled"></Button>
                    </td>
                </tr>
                <tr className='payoutLgTr'>
                    <td className='payoutLgUser'>
                        <span className='payoutLgName'>payout_id12fel</span>
                    </td>
                    <td className='payoutLgDate'>12 Jan 2021,12:03pm</td>
                    <td className='payoutLgDate'>ba_1KBKZo5zkcz</td>
                    <td className='payoutLgAmount'>card</td>
                    <td className="payoutLgProduct">$1100</td>
                    <td className='payoutLgStatus'>
                        <Button type="Completed"></Button>
                    </td>
                </tr>
                
                
            </table>
        </div>
        </div>
        </div>
    )
}
