import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import Sidebar from '../../component/sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import './new.scss'
import { useState } from 'react';
const New = () => {
    const[file,setFile] = useState('')
    console.log(file);
    return (

        <div className='new'>
            <Sidebar />
            <div className='newContainer'>
                <Navbar />
                <div className='top'>
                    <h1>Add New User</h1>
                </div>
                <div className='bottom'>
                    <div className='left'>
                        <img src={file ? URL.createObjectURL(file) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'}
                            alt='' />
                    </div>
                    <div className='right'>
                        <form>
                        <div className='formInput'>
                                <label htmlFor='file'>Image : <DriveFolderUploadOutlinedIcon className='icon'/></label>
                                <input type='File' id='file' onChange={e=>setFile(e.target.files[0])} style={{display:'none'}}/>
                            </div>
                            <div className='formInput'>
                                <label>UserName : </label>
                                <input type='text' placeholder='John Smithe'/>
                            </div>
                            <div className='formInput'>
                                <label>fullName : </label>
                                <input type='text' placeholder='John Smithe'/>
                            </div>
                            <div className='formInput'>
                                <label>Email : </label>
                                <input type='email' placeholder='John_Smithe@gmail.com'/>
                            </div>
                            <div className='formInput'>
                                <label>Phone : </label>
                                <input type='text' placeholder='+1 1234 56 78'/>
                            </div>
                            <div className='formInput'>
                                <label>Password : </label>
                                <input type='text' placeholder=''/>
                            </div>
                            <div className='formInput'>
                                <label>Address : </label>
                                <input type='text' placeholder='Eltron St. 201 NewYork'/>
                            </div>
                            <div className='formInput'>
                                <label>Country : </label>
                                <input type='text' placeholder='US'/>
                            </div>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default New;