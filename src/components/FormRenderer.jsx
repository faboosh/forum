import React, { useState, useEffect } from 'react'
import InputComponent from './InputComponent'
import FormBuilder from '../data/FormBuilder'
import { Div } from '../styles/StyledElements';

export default function FormRenderer({form, onChange, initial}) {
    if(!form) throw new Error('No form supplied');

    const formBuilder = new FormBuilder(form);
    
    const [formData, setFormData] = useState(initial ? {
        ...formBuilder.empty(),
        ...initial
    } : {...formBuilder.empty()});

    const [fields, setFields] = useState(null);

    function getFields() {
        formBuilder.fields()
        .then(fields => {
            setFields(fields);
        })
    }

    function onFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    }

    useEffect(() => {
        onChange({
            ...formData
        });
    }, [formData])

    useEffect(() => {
        getFields();
    }, [])

    return (
        <Div 
            flex
            wrap="wrap"
            justify="space-between"
        >
            {fields && 
                Object.entries(fields)
                    .map((field, i) => {
                        const [name, props] = field;

                        return (
                            <InputComponent 
                                width="100%"
                                value={
                                    formData[name]
                                }
                                {...props}
                                key={i}
                                onChange={onFormChange}
                            />
                        )
                    })
            }
        </Div>
    )
}
