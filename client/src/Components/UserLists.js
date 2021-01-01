import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UserLists() {

    const [userlists, setuserlists] = useState([])

    useEffect(() => {
        axios.post('/api/user/getusers')
            .then(res => {
                setuserlists(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    })

    const userdata = userlists.map((obj) => {
        return (
            <tr>
                <td>{obj.name}</td>
                <td>{obj.username}</td>
                <td>{obj.password}</td>
            </tr>
        )
    })

    return (
        <div>
            <h1>User Lists</h1>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                {userdata}


            </table>
        </div>
    )
}

export default UserLists