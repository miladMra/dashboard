import React from 'react';
import DataTable from '../../component/dataTable/DataTable';
import Navbar from '../../component/navbar/Navbar';
import Sidebar from '../../component/sidebar/Sidebar';
import './list.scss'
const List = () => {

    return(

       <div className='list'>
           <Sidebar/>
           <div className='listContainer'>
               <Navbar/>
               <DataTable/>
           </div>
       </div>

    )

}

export default List;