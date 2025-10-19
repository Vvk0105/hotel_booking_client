import React,{use, useEffect, useState} from 'react'
import BASE_URL from '../config'
import axios from "axios";
import { Link } from "react-router-dom";

function Admin() {
    const [bookings, setBookings] = useState([])
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);

    const fetchBookings = async (url = `${BASE_URL}/bookings/`) =>{
        try{
            const response = await axios.get(url)
            setBookings(response.data.results)
            setNextPage(response.data.next)
            setPrevPage(response.data.previous)
        } catch(error){
            console.error(error);
        }
    }

    useEffect(()=>{
        fetchBookings()
    },[])

    // useEffect(()=>{
    //     axios.get(`${BASE_URL}/bookings`)
    //     .then((response)=>{
    //         setBookings(response.data)   
    //         console.log(response.data);
            
    //     })
    //     .catch((error)=>{
    //         console.error('Error', error)
    //     })
    // },[])
  return (
    <div className="p-8">
        <div className="links p-3 mb-2 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">All Bookings</h2>
        <Link
        to="/"
        className=" px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >Back to home </Link>
        </div>
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
        <div className="flex space-x-2 justify-between mt-3">
            {prevPage && (
            <button
                className="bg-gray-300 px-3 py-1"
                onClick={() => fetchBookings(prevPage)}
            >
                Previous
            </button>
            )}
            {nextPage && (
            <button
                className="bg-gray-300 px-3 py-1"
                onClick={() => fetchBookings(nextPage)}
            >
                Next
            </button>
            )}
        </div>
    </div>
  )
}

export default Admin
