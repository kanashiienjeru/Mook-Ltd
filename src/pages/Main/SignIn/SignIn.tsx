import { useState } from 'react'
import './SignIn.css'
import { PageProps } from '../Main'


export default function SignIn({ open, close }: PageProps) {

    const [emailValue, setEmailValue] = useState('')
    const [passwordValue,setPasswordValue] = useState('')
    return (
        <div className={`auth__overlay ${open ? 'active' : ''}`}>
            <div className="auth__page">
                <img className="auth__close" onClick={close} src="/close.svg" alt="close"/>
                <form className='auth__form'>
                    <input 
                    placeholder="Email" 
                    name="email" 
                    type="email" 
                    value={emailValue} 
                    onChange={e => setEmailValue(e.target.value)} 
                    />
                    <input 
                    placeholder="Password" 
                    name="password"  
                    type="password" 
                    value={passwordValue} 
                    onChange={e => setPasswordValue(e.target.value)}
                    />
                    <button type="submit">Sign in</button>
                </form>
            </div>
        </div>
    )
}
