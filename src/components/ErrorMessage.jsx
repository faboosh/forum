import React, { useState } from 'react'
import { P, Div, Cross } from '../styles/StyledElements'
import styled from 'styled-components';

const Alert = styled(Div)`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    cursor: pointer;
`

export default function ErrorMessage({message}) {
    const [dismissed, setDismissed] = useState(false)
    function dismiss() {
        setDismissed(true);
    }
    return (
        <>
            {(message && !dismissed) && (
                <Alert 
                    flex 
                    justify="center" 
                    align="center" 
                    padding="s" 
                    background="bright_red"
                    onClick={dismiss}
                >
                    <P 
                        fontSize="1.3em" 
                        fontWeight="500" 
                        color="faded_red" 
                        margin="0"
                    >{message}</P>
                </Alert>
            )
            }        
        </>
    )
}
