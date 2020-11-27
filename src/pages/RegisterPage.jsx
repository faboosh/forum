import React from 'react'
import { Div, H1 } from '../styles/StyledElements';
import RegisterForm from '../components/RegisterForm';
import CyclingText from '../components/CyclingText';

export default function RegisterPage() {
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
                margin="0 0 100px 0"
                minHeight="120px"
            >   
                JOIN THE <br/><CyclingText />
            </H1>
            <RegisterForm />
        </Div>
    )
}
