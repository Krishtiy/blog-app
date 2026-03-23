import React from 'react'

const SubsTableItem = ({ mongoId, email, date, deleteEmail }) => {
  return (
    <tr className='border-b border-gray-200'>
      <th className='px-6 py-4 font-medium text-left'>
        {email ? email : "no email"}
      </th>
      <td className='px-6 py-4 hidden sm:block'>
        {date ? new Date(date).toDateString() : 'No date'}
      </td>
      <td className='px-6 py-4 cursor-pointer'>
        <button
          onClick={() => deleteEmail(mongoId)}
          className='text-red-500 hover:text-red-700 font-bold'
        >
          X
        </button>
      </td>
    </tr>
  )
}

export default SubsTableItem;