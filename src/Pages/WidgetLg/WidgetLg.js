import React from 'react'
import "./WidgetLg.css"
export default function widgetLg() {
    const Button = ({type})=>{

        return <button className={"widgetLgButton " + type}> {type}</button>
    }
    return (
        <div className='widgetLg'>
            <h3 className='widgetLgTitle'>Latest transactions</h3>
            <table className='widgetLgTable'>
                <tr className='widgetLgTr Tr-head'>
                    <th className='widgetLgTh'>Customer</th>
                    <th className='widgetLgTh'>Date</th>
                    <th className='widgetLgTh'>Amount</th>
                    <th className='widgetLgTh'>Product</th>
                    <th className='widgetLgTh'>Status</th>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="img" className='widgetLgImg'/>
                        <span className='widgetLgName'>Suhas</span>
                    </td>
                    <td className='widgetLgDate'>2 Jun 2021</td>
                    <td className='widgetLgAmount'>$122.00</td>
                    <td className="widgetLgProduct">AirPods</td>
                    <td className='widgetLgStatus'>
                        <Button type="Dispatched"></Button>
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="img" className='widgetLgImg'/>
                        <span className='widgetLgName'>Suhas</span>
                    </td>
                    <td className='widgetLgDate'>2 Jun 2021</td>
                    <td className='widgetLgAmount'>$122.00</td>
                    <td className="widgetLgProduct">AirPods</td>
                    <td className='widgetLgStatus'>
                        <Button type="Delivered"></Button>
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="img" className='widgetLgImg'/>
                        <span className='widgetLgName'>Suhas</span>
                    </td>
                    <td className='widgetLgDate'>2 Jun 2021</td>
                    <td className='widgetLgAmount'>$122.00</td>
                    <td className="widgetLgProduct">AirPods</td>
                    <td className='widgetLgStatus'>
                        <Button type="Declined"></Button>
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="img" className='widgetLgImg'/>
                        <span className='widgetLgName'>Suhas</span>
                    </td>
                    <td className='widgetLgDate'>2 Jun 2021</td>
                    <td className='widgetLgAmount'>$122.00</td>
                    <td className="widgetLgProduct">AirPods</td>
                    <td className='widgetLgStatus'>
                        <Button type="Delivered"></Button>
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="img" className='widgetLgImg'/>
                        <span className='widgetLgName'>Suhas</span>
                    </td>
                    <td className='widgetLgDate'>2 Jun 2021</td>
                    <td className='widgetLgAmount'>$122.00</td>
                    <td className="widgetLgProduct">AirPods</td>
                    <td className='widgetLgStatus'>
                        <Button type="Delivered"></Button>
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="img" className='widgetLgImg'/>
                        <span className='widgetLgName'>Suhas</span>
                    </td>
                    <td className='widgetLgDate'>2 Jun 2021</td>
                    <td className='widgetLgAmount'>$122.00</td>
                    <td className="widgetLgProduct">AirPods</td>
                    <td className='widgetLgStatus'>
                        <Button type="Dispatched"></Button>
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="img" className='widgetLgImg'/>
                        <span className='widgetLgName'>Suhas</span>
                    </td>
                    <td className='widgetLgDate'>2 Jun 2021</td>
                    <td className='widgetLgAmount'>$122.00</td>
                    <td className="widgetLgProduct">AirPods</td>
                    <td className='widgetLgStatus'>
                        <Button type="Declined"></Button>
                    </td>
                </tr>
            </table>
        </div>
    )
}
