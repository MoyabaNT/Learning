import React, { useState } from 'react'

const AddingEdit = () => {
  const [word, setWord] = useState('');
  const[chapter, setChapter] = useState('');
  const [book, setBook] = useState('');
  const [version, setVersion] = useState('');
  
  //the table name is theRecord
  const [theRecord, setTheRecord] = useState([]);

  const [editById, setEditById] = useState(null)


  const handleSubmit =(e) => {
    e.preventDefault()
    console.log("the form is working")

    if(editById){
      const edited = theRecord.map(item =>
        item.id === editById 
        ? {...item, wor: word, chap: chapter, boo: book, ver: version}
        : item
      );
      setTheRecord(edited)
    } else {
    const addVerses = {
      id: Date.now(),
      wor: word,
      chap: chapter,
      boo: book,
      ver: version
    }
    setTheRecord([...theRecord, addVerses])

    }

    setWord('')
    setChapter('')
    setBook('')
    setVersion('')
  }

  const beginEdit = (id)=> {
    const verseToEdit = theRecord.find(item => item.id === id);
    if(verseToEdit){
      setEditById(id);
      setWord(verseToEdit.wor)
      setChapter(verseToEdit.chap)
      setBook(verseToEdit.boo)
      setVersion(verseToEdit.ver)
    }
  }

  return (
    <div className='flex justify-center'>
      <div className='p-8 bg-pink-700 mt-4 rounded'>
        <form className='bg-pink-600 p-8 rounded' onSubmit={handleSubmit}>
          <h1 className=' text-center underline underline-offset-8 mb-8'>Add your favourite verse</h1>
          <input
            value={word} 
            onChange={(e) => setWord(e.target.value)}
            placeholder='Enter Verse'
            className='outline-none border-b-2 rounded border-pink-500 p-2'
            required
          />
          <input 
            value={chapter}
            placeholder='Enter chapter'
            onChange={(e) => setChapter(e.target.value)}
            className='outline-none border-b-2 border-pink-500 p-2 ml-2'
            required

          />
          <input 
            value={book} 
            placeholder='Enter Book'
            onChange={(e) => setBook(e.target.value)}
            className='outline-none border-b-2 border-pink-500 p-2 ml-2'
            required
          />
          <input 
            value={version}
            placeholder='Enter Verson'
            onChange={(e) => setVersion(e.target.value)}
            className='outline-none border-b-2 border-pink-500 p-2 ml-2'
            required
          />
          <button 
          type="submit" 
          className='p-2 mt-2 ml-2 rounded bg-pink-700/40' >
            {editById ? "Save" : "Add Verse"}
          </button>
        </form>
        <div 
          className='mt-8 p-8 bg-pink-600 rounded'
        >
          {theRecord.length > 0 ?(
            <table 
            className='mt-8 bg-pink-600 rounded'>
              <thead className='bg-pink-700/35'>
                <tr>
                  <th className='p-2 border-r-2 '>id</th>
                  <th className='p-4 border-r-2 px-8'>Verse</th>
                  <th className='p-2 border-r-2 '>Chapter</th>
                  <th className='p-6 border-r-2 px-8'>Book</th>
                  <th className='p-2 border-r-2 px-8'>Version</th>
                  <th className='p-2  px-8'>Edit</th>
                </tr>
              </thead>
              <tbody className='bg-pink-500/40 mb-2 rounded'>
              {theRecord.map((item) => (
                <tr key={item.id}>
                <td className='p-2 border-r-2 '>{item.id}</td>
                <td className='p-2 border-r-2 '>{item.wor}</td>
                <td className='p-2 border-r-2 '>{item.chap}</td>
                <td className='p-2 border-r-2 '>{item.boo}</td>
                <td className='p-2 border-r-2 '>{item.ver}</td>
                <td className='p-2 '>
                  <button onClick={() => beginEdit(item.id)}>
                    edit
                  </button>
                </td>
                </tr>
              ))}
              </tbody>

            </table>
          ) : (
            <p>Nothing yet</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AddingEdit