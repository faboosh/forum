import React from 'react'
import GetPosts from '../components/getters/GetPosts'
import { H3 } from '../styles/StyledElements'
import PostCreateForm from '../components/PostCreateForm'

export default function PostCreatePage() {
    return (
        <>
            <GetPosts>
                <H3 fontSize="1.7em">Create Post</H3>
                <PostCreateForm />
            </GetPosts>
        </>
    )
}
