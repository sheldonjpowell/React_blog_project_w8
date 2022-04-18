import React from 'react'

export default function PostCards(props) {
    const posts = props.posts
    console.log(posts)
    // console.log(props)

    return (
        <div className="card bg-body" >
            <div className="card-body">
                <h5 className="card-title text-light">{posts.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">By: {posts.author.username}</h6>
                <p className="card-text text-muted">{posts.content}</p>
                <a to="#" className="card-link link-secondary ">reference</a>
             
            </div>
        </div>
    )
}
