import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SinglePost(props) {
    const { postId } = useParams();
    const [post, setPost] = useState({})
    useEffect(()=> {
        fetch('https://kekambas-blog.herokuapp.com//blog/posts/1')
    })
    return (
        <div>SinglePost - {postId}</div>
    )
}

