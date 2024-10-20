import {useNavigate, useParams } from "react-router-dom"
import { useContext } from "react"
import { notesContext } from "../App";
import Header from "../component/Header";
import './Info.css'

const Info = () =>{

    const {notes,DelNote,setNotes} = useContext(notesContext);
    const nav = useNavigate();
    const { id } = useParams();
    const now = notes.find((note)=>Number(id)===Number(note.id))

    return (<div >
        <Header leftChild={<button className="prev" onClick={()=>{nav(-1)}}>{"<"}</button>} middleChild={"내 글"} rightChild={
            <button key = {1} onClick={()=>{nav(`../edit/${id}`)}}>수정하기</button>}/>
                <div className="info">
        <div className="title">{now.title}</div>
        <div className="cont">{now.content}</div>
        </div>
        <button className="delB" onClick={()=>{nav(-1);setTimeout(()=>{DelNote(id,notes,setNotes)},300);}}>
            삭제하기</button>
        </div>)
}

export default Info