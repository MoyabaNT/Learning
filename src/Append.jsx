import React, { useState } from 'react'

const Append = () => {
    const [num, setNum] = useState(0)
    const [array, setArray] = useState([]);

    const adding = (e) =>{
        e.preventDefault();
        setArray([...array, num])
    }

  return (
    <div>
        <div className='mt-4'>
            <form onSubmit={adding} className="w-100 border border-amber-400 p-4">
                <h1 className="text-center font-bold text-amber-300">Appending arrays</h1>
                <input 
                    value={num}
                    onChange={(e) => setNum(Number(e.target.value))}
                />
                <button type="submit">Submit</button>
                {array.length > 0 ?(
                    <ul>
                        {array.map((item,index)=>(
                        <li key={index}>{item}</li>
                        ))}
                    </ul>
                ):(
                    <p>nothing for now</p>
                )}
                <p className="text-sm "><span className="font-bold">NB:</span>Appending numbers into an array from when user clicks submit</p>
            </form>
        </div>
    </div>
  )
}

export default Append