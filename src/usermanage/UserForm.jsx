import React, { useState } from 'react'

const UserForm = (props) => {
    //making a object the will clear out my all input fields
    //this object will trigger after submitting the form
    const clearForm = {
        id: '',
        name: '',
        email: '',
        gender: ''
    }
    //making useState hook that handles all the input fields
    const [user, setUser] = useState(clearForm);

    //making a function that handles all the input fields data together
    const handleInput = (event) => {
        //making the key value pair for getting multiple input fields data
        const { name, value } = event.target;
        //using the hook for getting the data from input fields one by one
        setUser({ ...user, [name]: value })
        console.log(event.target);
        console.log(user);
    }
    return (
        <div>
            <h1 className='text-center display-4'>Add New User Details</h1>
            <form onSubmit={(event) => {
                //stoping the form to refresh the page
                event.preventDefault()
                //calling the function that increments the id of user. Coming from App.js
                //also passing the useState hook variable to connect it
                props.addoneuser(user);
                //calling the clearForm object on onSubmit
                setUser(clearForm)
            }}>
                <div className='form-group'>
                    <label>Name:</label>
                    <input required type="text" className='form-control' name="name" onChange={handleInput} value={user.name} />
                </div>

                <div className='form-group'>
                    <label>Email:</label>
                    <input required type="email" className='form-control' name="email" onChange={handleInput} value={user.email} />
                </div>

                <div className='form-group'>
                    <label>Gender:</label>
                    <input required type="text" className='form-control' name="gender" onChange={handleInput} value={user.gender} />
                </div>

                <div className='form-group'>
                    <button>Add new User</button>
                </div>
            </form>
        </div>
    )
}

export default UserForm