import React, { useState } from 'react'

const Display = () => {
    const [leina, setLeina] = useState('')
    const [arraylist, setArrayList] = useState([])
    const [sefane, setSefane] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        //this if statement is for validation purposes
        if(leina.trim() === '' || sefane.trim() === ''){
            alert("Asi dlali lana!")
            return;
        }

        //how to display correct date format
        const date = new Date();
        const formattedTime = date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false //false uses 24hr format
        })
        
        //adding names to the table
        const addName ={
            id: Date.now(),
            time: formattedTime,
            name: leina,
            surname: sefane
        }


        setArrayList([...arraylist, addName])
        setLeina('')
        setSefane('')
    }
  return (
    <div>
        <div className='p-4'>
            <form 
                onSubmit={handleSubmit}
                className='w-100 border-2 border-amber-500 p-4'
            >
            <h1 className='text-center'>
                Display results
            </h1>
            <input 
                value={leina}
                onChange={(e) => setLeina(e.target.value)}
                className='border'
            />
            <input 
                value={sefane}
                onChange={(e) => setSefane(e.target.value)}
                className='border'
            />
            <button type="submit">Submit</button>
            </form>
            {arraylist.length > 0 ? (
                <table className='mt-4'>
                    <thead>
                        <tr className='bg-pink-600 '>
                            <th className='border-r-2 p-2'>ID</th>
                            <th className='border-r-2 p-2'>time</th>
                            <th className='border-r-2 px-8'>Name</th>
                            <th className='border-r-2 px-8'>Surname</th>
                        </tr>
                    </thead>
                    <tbody>
                    {arraylist.map((item) => (
                        <tr key={item.id} className='border-b-2'>
                            <td className='border-r-2 p-2'>{item.id}</td>
                            <td className='border-r-2 p-2'>{item.time}</td>
                            <td className='border-r-2 px-6'>{item.name}</td>
                            <td className='border-r-2 px-6'>{item.surname}</td>
                        </tr>
                    ))}
                  </tbody>

                </table>
             ) : (
                <p>The table is empty</p>
            )}

        </div>


    </div>
  )
}

export default Display