
import { Routes,Route, redirect } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import New from './pages/New'
import Edit from './pages/Edit'
import Info from './pages/INfo'
import { useRef, useState , createContext, useEffect} from 'react'


let items = [
{ "id":1,
  "title" :"1번메모",
  "content":"1번입니다",
  "Newdate":new Date(2024, 5, 20, 10, 30, 0),
  "Editdate":null,
},
{
  "id":2,
  "title" :"2번메모입니다",
  "content":"2번입니다",
  "Newdate":new Date(2024, 8, 20, 10, 30, 0),
  "Editdate":null,
},
{ "id":3,
  "title" :"3번메모입니다",
  "content":"3번입니다",
  "Newdate":new Date(2024, 7, 10, 10, 30, 0),
  "Editdate":null,
},


]


export const notesContext = createContext();



const NewNote = (noteId,noteT,noteC,notes,setNotes) =>{
  const note = {
    "id":noteId++,
    "title" :noteT,
    "content":noteC,
    "Newdate":String(new Date()),
    "Editdate":null,
  }
  setNotes([...notes,note])

}

const DelNote = (noteId, notes, setNotes) => {
  setNotes(notes.filter((i) => !(Number(i.id) === Number(noteId))));
  

}

const EditNote = (noteId,noteT,noteC,notes,setNotes) =>{
  
  setNotes(notes.map((note) =>
    Number(note.id) === Number(noteId) ? { ...note, title: noteT, content: noteC ,Editdate: new Date()} : note
  ))
  
}

const maxid = (notes)=>{

  let mi =0;
  notes.map((note)=>{
    if(note.id > mi)mi = note.id
      
    }
  )
  return mi+1
}

function App() {

const [notes,setNotes] = useState(JSON.parse(localStorage.getItem('noteData')));
//const [notes,setNotes] = useState(items);

const noteId = useRef(maxid(notes))



useEffect(() => {
  localStorage.setItem('noteData', JSON.stringify(notes));
  
}, [notes]);
 
  return (
    <>
    <div className='App'>



      <notesContext.Provider value={{notes,setNotes,noteId,NewNote,EditNote,DelNote}}>
     <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/new' element = {<New/>}/>
      <Route path='/edit/:id' element = {<Edit/>}/>
      <Route path='/info/:id' element = {<Info/>}/>
     </Routes>
     </notesContext.Provider>
     </div>
    </>
  )
}

export default App
