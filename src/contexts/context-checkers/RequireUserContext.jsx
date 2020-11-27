import React, {useEffect, useContext, useState } from 'react'
import { getMe, getCountries } from '../providers/UserProvider';
import { UserContext } from "../UserContext";

export default function RequireUserContext({children, require}) {
    const [canRender, setCanRender] = useState(false)
    const {user, countries} = useContext(UserContext)

    useEffect(() => {
        setCanRender([user, countries].every(contextVar => {
            return Boolean(contextVar)
        }))
    }, [user, countries])
    return (
        <>
            {canRender && children}
        </>
    )
}
