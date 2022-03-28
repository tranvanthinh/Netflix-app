import "./Register.scss"
import { useState, useRef } from "react"

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassWord] = useState("")

    const emailRef = useRef()
    const passwordlRef = useRef()

    const handleClickStart = () => {
        setEmail(emailRef.current.value)
        emailRef.current.focus()
    }
    const handleClickFinish = () => {
        setPassWord(passwordlRef.current.value)
        passwordlRef.current.focus()
    }

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere, Cancel anytime.</h2>
                <p>
                    Ready to  watch? Enter your email to create or restart your membership
                </p>
                {!email ? (
                    <div className="input">
                        <input type="email"
                            placeholder="Email address..."
                            ref={emailRef}
                        />
                        <button className="registerButton"
                            onClick={() => handleClickStart()}
                        >Get Started</button>
                    </div>
                ) : (
                    <form className="input">
                        <input type="password"
                            placeholder="Password..."
                            ref={passwordlRef}
                            style={{ fontSize: '16px' }}
                        />
                        <button className="registerButton"
                            onClick={() => handleClickFinish()}
                        >Start</button>
                    </form>
                )}
            </div>
        </div>
    )
}
