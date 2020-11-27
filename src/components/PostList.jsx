import React, { useContext, useEffect } from 'react'
import { PostContext } from '../contexts/PostContext'
import PostItem from './PostItem/PostItem';

export default function PostList() {
    const { postList, categoryList } = useContext(PostContext);
    
    useEffect(() => {
        console.log(postList, categoryList)
    }, [postList, categoryList])

    return (
        <>
            {(postList && categoryList) && postList.results.map((post, i) => 
                <PostItem {...post} key={i} pills />    
            )}
        </>
    )
}
