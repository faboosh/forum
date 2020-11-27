import React from 'react'
import { Div, H1 } from '../styles/StyledElements';
import LoginForm from '../components/LoginForm';
import CyclingText from '../components/CyclingText';

export default function LoginPage() {
    return (
        <Div 
            flex
            justify="space-between"
            align="center"
            height="100vh"
            padding="0 0 20vh 0"
            borderRadius="borderRadius"
        >
            <H1 
                fontSize="2.5em" 
                padding="0 0 m 0"
                minHeight="120px"
            >   
                JOIN THE <br/><CyclingText />
            </H1>
            <LoginForm />
        </Div>
    )
}
