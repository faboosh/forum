import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Div, P, Button } from '../styles/StyledElements'

const DropdownToggle = styled(Div)`
    cursor: pointer;
`;

const DropdownWrapper = styled(Div)`
    position: relative;
`;

const DropdownItems = styled(Div)`
    position: absolute;
    z-index: 1000;
    left: 0;
    right: 0;
`;

const DropdownItem = styled(Button)`
    z-index: -1;
    display: inline-block;
    position: relative;
    color: ${({theme}) => theme.colors.light1};
    cursor: pointer;

    &:after {
        display: none;
    }

    &:hover,
    &:focus {
        background: ${({theme}) => theme.colors.dark1}
    }
`;

export default function SelectMenu({placeholder, options, onChange, name, value, ...rest}) {

    const [selected, setSelected] = useState(value ? {
        title: name,
        value: value || ""
    } : null)

    const [open, setOpen] = useState(false)
    const [focused, setFocused] = useState(false)

    function toggleOpen() {
        setOpen(!open) 
    }

    useEffect(() => {
        console.log(selected);
        if(selected) {
            onChange({
                target: {
                    name: name,
                    value: selected.value || ""
                }
            }) 
        }
    }, [selected]);

    useEffect(() => {

    }, [focused])

    return (
        <DropdownWrapper 
            tabIndex="0"
            margin="0" 
            background={open ? "dark1" : "dark0_soft"} 
            borderRadius="borderRadius"
            onFocus={() => {
                setOpen(true)
            }}
            {...rest}
        >
            <DropdownToggle 
                borderRadius="0"
                padding="s" 
                margin="0 0 2px 0"
                onMouseDown={toggleOpen}
            >
                <P 
                    margin="0" 
                    color={selected ? "light1" : "dark3"} 
                    fontSize="1.15em"
                >
                    {selected ? selected.label : placeholder}
                </P>
            </DropdownToggle>
            {open && (
                <DropdownItems background="dark0_soft">
                    {options.map && options.map((option, i) => {
                        return (
                            <DropdownItem 
                                tabIndex="0"
                                background="dark0_soft" 
                                padding="s"
                                margin="0 0 2px 0" 
                                width="100%" 
                                fontSize="1.1em" 
                                textAlign="left"
                                borderRadius="0"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelected(option)
                                    setOpen(false)
                                }}
                                key={i}
                            >
                                {option.label}
                            </DropdownItem>
                        )
                    })}            
                </DropdownItems> 
            )}   
        </DropdownWrapper>
    )
}
