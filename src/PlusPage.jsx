import { useState } from "react"

const PlusPage = () => {
    const [addFirst, setAddFirst] = useState(0) //setting the state to be 0 is initializing the number
    const [addSecond, setAddSecond] = useState(0) //setting the state to be 0 is initializing the number
    const [multiFirst, setMultiFirst] = useState(0) //setting the state to be 0 is initializing the number
    const [multiSecond, setMultiSecond] = useState(0) //setting the state to be 0 is initializing the number
    const [devideFirst, setDevideFirst] = useState(0)
    const [devideSecond, setDevideSecond] = useState(0)
    
    //results
    const [multiResults, setMultiResults] = useState(0) //setting the state to be 0 is initializing the number
    const [addResults, setAddResults] = useState(0) //setting the state to be 0 is initializing the number
    const [devideResults, setDevideResults] = useState(0) //setting the state to be 0 is initializing the number

//<less than >greater than
    //addition function
    const sum = (e)=>{
      e.preventDefault() //prevents the page from reloading
      if(Number(addFirst) > Number(addSecond)){
        console.log(addFirst + " is bigger than " + addSecond)

      } else {
         console.log(addFirst + " is smaller than " + addSecond)

      }
      setAddResults(Number(addFirst) + Number(addSecond))//Number(first) converts the default string to a number
    }

    //multiplication function
    const multi = (e) => {
        e.preventDefault()
        setMultiResults(Number(multiFirst) * Number(multiSecond))
    }

    //devision function
    const devide =(e) => {
      e.preventDefault()
      if(devideFirst < devideSecond){
        console.log("You cannot devide a smaller number buy a bigger number")
      }

      setDevideResults(Number(devideFirst) / Number(devideSecond))
    }



  return (
    <div>
          {/*addition*/}

        <div>
        <form onSubmit={sum} className="w-100 border border-amber-400 p-4">
        <h1 className="text-center font-bold text-amber-300">Addition</h1>
        <input 
        type='number' 
        value={addFirst}
        onChange={(e) => setAddFirst(e.target.value)}        />
        <input 
        type='number' 
        value={addSecond}
        onChange={(e) => setAddSecond(e.target.value)}
        />
        <button type='submit' value='submit' className="ml-2 border border-amber-900 rounded p-1" >Submit</button>
        <label className="ml-2"> Total = {addResults}</label>
        <p><span className="font-bold">NB: </span>Adding and displaying the sum</p> 
        </form>
        </div>
    {/*multi*/}
        <div className="mt-4">
            <form onSubmit={multi} className="w-100 border border-amber-400 p-4">
                <h1 className="text-center font-bold text-amber-300">Multiplication</h1>
                <input 
                    type='number' 
                    value={multiFirst}
                    onChange={(e) => setMultiFirst(e.target.value)}        />
                <input 
                    type='number' 
                    value={multiSecond}
                    onChange={(e) => setMultiSecond(e.target.value)}
                />
                <button type='submit' value='submit' className="ml-2 border border-amber-900 rounded p-1" >Submit</button>
                <label className="ml-2"> Total = {multiResults}</label>
                <p><span className="font-bold">NB: </span>Multiplying and displaying the total</p> 
            </form>
        </div>

    {/*devide*/}

        <div className="mt-4">
            <form onSubmit={devide} className="w-100 border border-amber-400 p-4">
                <h1 className="text-center font-bold text-amber-300">Devision</h1>
                <input 
                    value={devideFirst}
                    onChange={(e) => setDevideFirst(Number(e.target.value))}        />
                <input 
                    value={devideSecond}
                    onChange={(e) => setDevideSecond(Number(e.target.value))}
                />
                <button type='submit' value='submit' className="ml-2 border border-amber-900 rounded p-1" >Submit</button>
                <label className="ml-2"> Total = {devideResults}</label>
                <p><span className="font-bold">NB: </span>dividing and displaying the total</p> 
            </form>
        </div>

        
    </div>
  )
}

export default PlusPage