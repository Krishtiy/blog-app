'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SubsTableItem from '../../../components/AdminComponents/SubsTableItem';

const page = () => {

  const [emails, SetEmails] = useState([]);

  const fetchEmails = async () => {
    const response = await axios.get('/api/email');
    SetEmails(response.data.emails)
  }

  const deleteEmail = async (mongoId) => {
    try {
      await axios.delete('/api/email', {
        params: { id: mongoId }
      });
      SetEmails(prev => prev.filter(item => item._id !== mongoId));
    } catch (error) {
      console.error("Failed to delete email:", error);
    }
  }

  useEffect(() => {
    fetchEmails();
  }, [])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-16'>
      <h1>ALL Subscription</h1>
      <div className='relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Email Subscription
              </th>
              <th scope='col' className='hidden sm:block px-6 py-3'>
                Date
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.map((items, index) => {
              return <SubsTableItem key={index} mongoId={items._id} email={items.email} date={items.date} deleteEmail={deleteEmail} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page;