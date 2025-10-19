import React,{use, useEffect, useState} from 'react'
import BASE_URL from '../config'
import axios from "axios";

function Admin() {
    const [bookings, setBookings] = useState([])

    useEffect(()=>{
        axios.get(`${BASE_URL}/bookings`)
        .then((response)=>{
            setBookings(response.data)   
            console.log(response.data);
            
        })
        .catch((error)=>{
            console.error('Error', error)
        })
    },[])
  return (
    <div className="p-8">
        <h2 className="text-2xl font-semibold mb-4">All Bookings</h2>
        <table className="min-w-full border">
            <thead>
            <tr className="bg-gray-100">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Check-in</th>
                <th className="p-2 border">Check-out</th>
            </tr>
            </thead>
            <tbody>
            {bookings.map((b) => (
                <tr key={b.id} className="border-b">
                <td className="p-2 border">{b.name}</td>
                <td className="p-2 border">{b.email}</td>
                <td className="p-2 border">{b.check_in}</td>
                <td className="p-2 border">{b.check_out}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default Admin
