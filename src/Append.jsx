import React, { useState } from 'react'

const Append = () => {
    const [num, setNum] = useState(0)
    const [array, setArray] = useState([]);
    const [num2, setNum2] = useState(0)
    const [newarray, setNewArray] = useState([]);

    const adding = (e) =>{
        e.preventDefault();
        setArray([...array, num])
    }

    const tryout = (e) =>{
        e.preventDefault();
        if(num2 >= 5){
            alert("asi dlali lana!")
        } else {
            setNewArray([...newarray, num2])
        }

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
                <p className="text-sm "><span className="font-bold">NB: </span>Appending numbers into an array from when user clicks submit</p>
            </form>
        </div>

        <div className='mt-4'>
            <form 
            onSubmit={tryout} 
            className="w-100 border border-amber-400 p-4">
                <input 
                    value={num2}
                    onChange={(e) => setNum2(Number(e.target.value))}
                />
                <button type="submit">Submit</button>
                {newarray.length > 0? (
                    <ul>
                        {newarray.map((item,index) => (                            <li key={index}>{item}</li>
                        
                        ))}
                    </ul>
                ) : (
                    <p>Nothing for now</p>
                )}
            </form>
        </div>
    </div>
  )
}

export default Append