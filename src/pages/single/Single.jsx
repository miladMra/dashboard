import React from 'react';
import './single.scss'
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'
import Chart from '../../component/chart/Chart'
import Table from '../../component/table/Table'
const Single = () => {
    return (
        <div className='single'>
            <Sidebar />
            <div className='singleContainer'>
                <Navbar />
                <div className='top'>
                    <div className='left'>
                        <div className='editButton'>Edit</div>
                        <h1 className='title'>Information</h1>
                        <div className='item'>
                            <img src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress' alt='' className='itemImg' />
                            <div className='details'>
                                <h2 className='detailTitle'>Jane Smithe</h2>
                                <div className='detailItem'>
                                    <span className='detailKey'>Email : </span>
                                    <span className='detailValue'>jane@gmail.com </span>
                                </div>
                                <div className='detailItem'>
                                    <span className='detailKey'>phone : </span>
                                    <span className='detailValue'>+1 2345 67 89 </span>
                                </div>
                                <div className='detailItem'>
                                    <span className='detailKey'>Address : </span>
                                    <span className='detailValue'>Elton st 234 NewYork </span>
                                </div>
                                <div className='detailItem'>
                                    <span className='detailKey'>Country : </span>
                                    <span className='detailValue'>USA </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <Chart height={200} title='User Spending (Last 6 Mounth)' />
                    </div>
                </div>
                <div className='bottom'>
                    <div className='listTitle'>Latest Transactions</div>
                    <Table />
                </div>
            </div>
        </div>
    );
};

export default Single;