import '../styles/Result.css'
import {Link,useNavigate} from "react-router-dom"
import ResultTable from './ResultTable'
import { useDispatch ,useSelector} from 'react-redux';
import {attemptsNumber,earnPointsNumber,flagResult, getWrongAnswers, getWrongAnswersWithDetails } from '../helper/helper';

import {resetAllAction} from '../redux/questionReducer'
import {resetResultAction} from '../redux/resultReducer'
import { usePublishResult } from '../hooks/setResult';
import { startVerification } from '../redux/wrongAnswerReducer';


function Result() {
  const dispatch=useDispatch();
  const {questions:{queue,answers},result:{result,userId}} = useSelector(state => state)

  

  const totalPoints = queue.length*10;
  const attempts = attemptsNumber(result)
  const earnPoints = earnPointsNumber(result,answers,10)
 
  const flag = flagResult(totalPoints,earnPoints)

// Store user Result
usePublishResult({result,
                  username:userId,
                  attempts,
                  points:earnPoints,
                  achieved:flag ? "Passed" :"failed"});


  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  const wrongAnswers= getWrongAnswers(answers,result,data => data)
  const wrongAnsweredQuestions = queue.filter((quest,i) => getWrongAnswers(answers,result,data => data)
                                      .map((element) => (element.index))
                                      .includes(i))

  const finalResult = getWrongAnswersWithDetails(wrongAnsweredQuestions,wrongAnswers,data => data);

 

  const navigate = useNavigate();

  function onVerify() {
    dispatch(startVerification({ question: finalResult }));
    navigate('/verify', { replace: true });
  }

  return (
    <div className="container">
              <h1 className="title text-light"> Quiz Applictaion</h1>
                  <div  className="result flex-center">
                      <div  className="flex">
                            <span>Username</span>
                            <span className="bold">{userId || 0}</span>
                        
                      </div>  
                       <div  className="flex">
                            <span>Total Quiz Point</span>
                            <span className="bold">{totalPoints || 0}</span>
                        
                      </div>  
                       <div  className="flex">
                            <span>Total Questions</span>
                            <span className="bold">{queue.length || 0}</span>
                        
                      </div>   
                       <div  className="flex">
                            <span>Total Attempts</span>
                            <span className="bold">{attempts || 0}</span>
                        
                      </div>  
                       <div  className="flex">
                            <span>Total Earn  Points</span>
                            <span className="bold">{earnPoints || 0}</span>
                        
                      </div>   
                       <div  className="flex">
                            <span>Quiz Result</span>
                            <span style={{color : `${flag ? "#2aff95" :  "#ff2a66"}`}}className="bold">{flag ? "Passed" :  "Failed"}</span>
                        
                      </div>  


                      <div className="start">
                        <Link className="btn" to={'/'} onClick={onRestart}>Restart</Link>
                        <button className="btn"  style={{ background: '#1F6E8C' }} onClick={onVerify}> Verify</button>
                      </div>

                  </div>                           
                  <div >
                  <ResultTable></ResultTable>
                  </div>

    </div>
  )
}

export default Result
