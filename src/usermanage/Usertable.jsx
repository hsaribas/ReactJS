import React from 'react'

const Usertable = (props) => {
    return (
        <div className='container'>
            <h1 className='text-center display-4'>List of All Users</h1>
            <table className='table table-bordered'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Actions</th>
                </tr>
                {
                    props.allusers.length > 0 ? (
                        props.allusers.map((user) => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td><button onClick={() => props.deluser(user.id)}>Delete</button></td>
                            </tr>
                        ))
                    ) : (
                        <p>No user data is available!</p>
                    )
                }
            </table>
        </div>
    )
}

export default Usertable