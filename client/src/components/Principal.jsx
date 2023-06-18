import { useRef } from "react"
import { Link } from "react-router-dom"
import { setUserId } from "../redux/resultReducer"
import '../styles/Principal.css'
import { useDispatch } from "react-redux"


function Principal() {
const dispatch = useDispatch();
    const inputRef = useRef(null)

    function startQuiz() {
   if (inputRef.current?.value){
       dispatch(setUserId(inputRef.current?.value));
   }
    } 
  return (
    <div className="container">
        <h1 className="title text-light"> Quiz Applictaion</h1>

        <ol>
            <li>You will be asked 20 questions one after another.</li>
            <li>10 points is awarded for the correct answer.</li>
            <li>Each question has three options. You can choose only one option.</li>
            <li>You can review and change answers before the quiz finish.</li>
            <li>The result will be declared at the end of the quiz.</li>
        </ol>

        <form id="form">
             <input ref={inputRef} className="userid" type="text" placeholder="name" />
        </form >

        <div className='start'>
             <Link  className='btn' to={'quiz'} onClick={startQuiz} >Start Quiz</Link>
        </div>
    </div>
  )
}

export default Principal
