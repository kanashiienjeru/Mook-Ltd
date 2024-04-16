import { useState } from 'react'

import './Upload.css'
import Result from '../Result/Result'
import { PageProps } from '../Main/Main'



export default function Upload({ close, open }: PageProps) {

    const [resultOpen, setResultOpen] = useState(false)

    const newCloseOthers = () => {
        close()
        setResultOpen(false)
    }

    const openResult = () => {
        setResultOpen(true)
    }


    return (
        <div className={`upload__overlay ${open ? 'active' : ''}`}>
            <div className="upload__page">
                <button onClick={newCloseOthers} className="upload__back__button">
                    <img src="/arrow-left.svg" alt="arrow" />
                    <p>Go back</p>
                </button>

                <div className='upload__image'>
                    <img src="/image1.jpg" alt="uploaded_img" />
                </div>

                <div className="upload__actions">
                    <button onClick={openResult}>
                        <img src={'/picture.svg'} alt="icon"/>
                        <p>Choose photo from gallery</p>
                    </button>
                    <button onClick={openResult}>
                        <img src={'/camera.svg'} alt="icon"/>
                        <p>Take photo with camera</p>
                    </button>
                </div>
            </div>

            <Result open={resultOpen} close={newCloseOthers} />
        </div>
    )
}
