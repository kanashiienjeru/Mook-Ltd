import { PageProps } from '../Main/Main'
import './Result.css'

export default function Result({ open, close }: PageProps) {
  return (
    <div className={`result__overlay ${open ? 'active' : ''}`}>
    <div className="result__page">
        <img src={'/result.jpg'} alt="result"/>
        <button className='result__save'>Save</button>
        <button className="result__more" onClick={close}>More pics</button>

    </div>
</div>
  )
}
