import React from 'react'

export default function PostCards(props) {
    const post = props.posts
    return (
        <div className="card bg-body" >
            <div className="card-body">
                <h5 className="card-title text-light">{post.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">By: {post.author.username}</h6>
                <p className="card-text text-muted">{post.content}</p>
                <a to="#" className="card-link link-secondary ">reference</a>
             
            </div>
        </div>
    )
}
