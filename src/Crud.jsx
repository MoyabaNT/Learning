import { useState } from 'react'

const Crud = () => {
    const [verse, setVerse] = useState('');
    const [version, setVersion] = useState('');
    const [chapter, setChapter] = useState('');
    const [book, setBook] = useState('');
    const [theTable, setTheTable] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const resetForm = () => {
        setVersion("");
        setVerse("");
        setChapter("");
        setBook("");
        setEditingId(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit is working");

        if (editingId) {
            const editedTable = theTable.map(item =>
                item.id === editingId
                    ? { ...item, vers: version, word: verse, chap: chapter, boo: book }
                    : item
            );
            setTheTable(editedTable);
        } else {
            const addToTable = {
                id: Date.now(),
                vers: version,
                word: verse,
                chap: chapter,
                boo: book,
            };
            setTheTable([...theTable, addToTable]);
            console.log(version, verse, chapter, book);
        }
        resetForm();
    };

    const startEditing = (id) => {
        const itemToEdit = theTable.find(item => item.id === id);
        if (itemToEdit) {
            setEditingId(id);
            setVersion(itemToEdit.vers);
            setVerse(itemToEdit.word);
            setChapter(itemToEdit.chap);
            setBook(itemToEdit.boo);
        }
    };

    return (
        <div>
            <div className='bg-pink-500 p-4'>
                <form className='bg-pink-400 p-4' onSubmit={handleSubmit}>
                    <h1 className='underline underline-offset-8 decoration-pink-500 text-center'>Add a book, verse, and chapter</h1>
                    <input 
                        value={version}
                        onChange={(e) => setVersion(e.target.value)}
                        type="text"
                        className="border-2 border-pink-500 p-4 outline-none mt-8 focus:ring-2 focus:ring-pink-600"    
                        placeholder='Enter book verison'
                        required
                    />
                    <input 
                        value={verse}
                        onChange={(e) => setVerse(e.target.value)}
                        type="text"
                        className="border-2 border-pink-500 p-4 outline-none mt-8 focus:ring-2 focus:ring-pink-600"    
                        placeholder='Enter verse'
                        required
                    />
                    <input 
                        value={chapter}
                        onChange={(e) => setChapter(e.target.value)}
                        type="text"
                        className='border-2 border-pink-500 p-4 mt-8 ml-2  outline-none focus:ring-2 focus:ring-pink-600'
                        placeholder='Enter chapter'
                        required
                    />
                    <input 
                        value={book}
                        onChange={(e) => setBook(e.target.value)}
                        type="text"
                        className='border-2 border-pink-500 p-4 mt-8 ml-2  outline-none focus:ring-2 focus:ring-pink-600'
                        placeholder='Enter book'
                        required
                    />
                    <button type="submit"
                        className='p-4 mt-2 hover:bg-pink-500 rounded-full'
                    >
                        {editingId ? "Save Changes" : "Add Verse"}
                    </button>
                </form>
                <div>
                    {theTable.length > 0 ? (
                        <table className='mt-4'>
                            <thead>
                                <tr className='border-2 '>
                                    <th className='border-r-2 p-2'>id</th>
                                    <th className='border-r-2 p-2 px-8'>Version</th>
                                    <th className='border-r-2 p-2 px-8'>Chapter</th>
                                    <th className='border-r-2 p-2 px-8'>Book</th>
                                    <th className='border-r-2 p-2 px-8'>Verse</th>
                                    <th className='border-r-2 p-2 px-8'>Edit</th>
                                </tr>
                            </thead>
                            <tbody className='p-4'>
                                {theTable.map((item) => (
                                    <tr key={item.id} className='border-2'>
                                        <td className='border-r-2 p-2 px-2'>{item.id}</td>
                                        <td className='border-r-2 p-2 px-8'>{item.vers}</td>
                                        <td className='border-r-2 p-2 px-8'>{item.chap}</td>
                                        <td className='border-r-2 p-2 px-8'>{item.boo}</td>
                                        <td className='border-r-2 p-2 px-8'>{item.word}</td>
                                        <td className='border-r-2 p-2 px-8'>
                                            <button onClick={() => startEditing(item.id)}>
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>nothing here</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Crud;