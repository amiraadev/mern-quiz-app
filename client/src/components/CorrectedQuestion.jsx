import { useSelector } from 'react-redux'

export default function CorrectedQuestio() {


    const {wrongAnswers:{queueWrongAnswered,traceVerif}} = useSelector(state => state)
    // console.log(queueWrongAnswered);

  return (
    <div className='questions'>
        <h2 className='text-light'>{traceVerif + 1}-{queueWrongAnswered[traceVerif]?.question}</h2>
            <ul key={queueWrongAnswered[traceVerif]?.id}>
            {queueWrongAnswered[traceVerif]?.options.map((q, i) => (
                <li key={i}>
                    <input
                        type="radio"
                        value={false}
                        name="options"
                        id={`q${i}-option`}
                        disabled
                    />
                    <label
                        className={queueWrongAnswered[traceVerif].wrongAnswer == i ? 'wrong-answer text-primary' :queueWrongAnswered[traceVerif].rightAnswer == i ? 'right-answer text-primary' :' text-primary' }
                        htmlFor={`q${i}-option`}
                    >
                       {q}
                    </label>
                    <div  className={`check ${queueWrongAnswered[traceVerif].wrongAnswer === i ? ' checked-wrong wrong-checked checked' : ''}`}></div>
                </li>
            ))}
        </ul>
</div>

  )
}