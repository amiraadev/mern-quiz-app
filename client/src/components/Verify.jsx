import '../styles/Result.css'
import { useNavigate} from "react-router-dom"
import { useDispatch ,useSelector} from 'react-redux';
import CorrectedQuestion from './CorrectedQuestion';
import { moveNextVerif, movePrevVerif, resetTraceVerif } from '../redux/wrongAnswerReducer';



export default function Verify() {

    const dispatch=useDispatch();
    const navigate = useNavigate();
    const {wrongAnswers:{queueWrongAnswered,traceVerif}} = useSelector(state => state)

function onNext(){
    if(traceVerif < queueWrongAnswered.length-1){
      dispatch(moveNextVerif());
    } else {
      dispatch(resetTraceVerif())
      navigate('/finalPage', { replace: true });
    }
}

/** Prev button event handler */
function onPrev(){
    if(traceVerif > 0){
        /** decrease the traceVerif value by one using MovePrevQuestion */
        dispatch(movePrevVerif());
    }
}

  return (
    <div className='container' style={{color:"white"}}>
         <h1 className='title text-light'>Corrected Questions</h1>

                {/* display wrong answered questions */}
                <CorrectedQuestion />

                <div className='grid'>
                    { traceVerif > 0 ? <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>}
                    <button className='btn next' onClick={onNext}>Next</button>
                </div>
      
        
    </div>
  )
}
