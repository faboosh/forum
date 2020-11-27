import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { SatisfyingButton, Div, Input, P, Span } from '../styles/StyledElements';
import ErrorMessage from './ErrorMessage';
import UserKit from '../data/UserKit';
import FormRenderer from './FormRenderer';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

export default function RegisterForm() {
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({})
    const history = useHistory();
    const { setUser, setAuth } = useContext(UserContext);

    function onRegister() {
        UserKit.register(formData)
        .then(res => res.json())
        .then(data => {
            setUser(data)
            setAuth(true)
            history.push('/home')
        })
        .catch(err => {
            setErrorMessage("Something went very, very wrong")
        })
    }

    useEffect(() => {
        console.log(formData);
    }, [formData])

    return (
        <Div width="50%">

            <FormRenderer form='register' onChange={setFormData} />
            <ErrorMessage message={errorMessage}/>

            <P 
                textAlign="right" 
                margin="s s m 0"
            >
                Already have an account? 
                <Link to="/" style={{textDecoration: 'none'}}>
                    <Span color="bright_blue"> Log in here!</Span>
                </Link>
            </P>
            <Div
                flex
            >       
                <SatisfyingButton 
                    color="aqua" 
                    padding="s xl" 
                    width="100%" 
                    margin="0 0 0 0"
                    onClick={onRegister}
                >REGISTER</SatisfyingButton>

            </Div>
        </Div>
    )
}
