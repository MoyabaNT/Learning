import { useState } from "react"

const ForLoops = () => {
    const [another, setAnother] =useState(0)
    const [anotherArray, setAnotherArray] = useState([]);

    const again =(e) =>{
        e.preventDefault()
        const engwe = [];
        for(let i = 0; i < another; i++ ){
            engwe.push(i)
        }
        setAnotherArray(engwe)
    }

  return (
    <div >

        <div className="mt-4">
            <form onSubmit={again} className="w-100 border border-amber-400 p-4">
                <h1 className="text-center font-bold text-amber-300">Arrays</h1>
                <input
                value={another}
                 onChange={(e) => setAnother(Number(e.target.value))}
                />
                <button type="submit">Submit</button>
                <div>
                    <label>Arrays: </label>
                    {anotherArray.length > 0 ?(
                        <ul className="flex">
                            {anotherArray.map((item,index) => (
                                <li key={index}>{item}</li>
                            ))}
                            
                        </ul>
                    ) :(
                        <p>none for now</p>
                    )}

                    <p className="text-sm "><span className="font-bold">NB:</span>Appending numbers into an array counting from 0- value entered</p>
                </div>
            </form>
        </div>

    </div>
  )
}

export default ForLoops