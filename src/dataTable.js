export const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'user',
        headerName: 'user',
        width: 230,
        renderCell: (params) =>
            <div className='cellWithImg'>
                <img className='cellImg' src={params.row.image} alt='avatar' />
                {params.row.userName}
            </div>
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 180,
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 90,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 100,
        renderCell: (params) => {
            return <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
            </div>
        },

    },

];

export const rows = [
    { id: 1, userName: 'Jon Snow', image: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress', email: 'zcv@gmail.com', status: 'active', age: 35 },
    { id: 2, userName: 'Lannister Cersei', image: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress', email: 'zcv@gmail.com', status: 'passive', age: 42 },
    { id: 3, userName: 'Lannister Jaime', image: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress', email: 'zcv@gmail.com', status: 'pending', age: 45 },
    { id: 4, userName: 'Arya Stark', image: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress', email: 'zcv@gmail.com', status: 'active', age: 16 },
    { id: 5, userName: 'Targaryen Daenerys', image: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress', email: 'zcv@gmail.com', status: 'passive', age: 28 },
    { id: 6, userName: 'Melisandre', image: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress', email: 'zcv@gmail.com', status: 'active', age: 70 },
    { id: 7, userName: 'Ferrara Clifford', image: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress', email: 'zcv@gmail.com', status: 'pending', age: 7044 },

];