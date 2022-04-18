import React from 'react'
import { useState, useEffect } from 'react'
import PostCards from '../components/PostCards';
import { useParams } from 'react-router-dom'

export default function SinglePost(props) {
    const { postId } = useParams();
    const [posts, setPosts] = useState(null);
    // console.log(posts)
    const [editMode, setEditMode] = useState(false)

    useEffect( () => {async function getData () {
        const res = await fetch(`https://kekambas-blog.herokuapp.com//blog/posts?username=&password${postId}`)
        const data = await res.json();
        await setPosts(data)
        console.log(data)
        console.log(posts)
    }getData()},[postId])
   

    // const handleEditSubmit = (e) => {
    //     e.preventDefault();

    //     let myHeaders = new Headers();
    //     let myToken = localStorage.getItem('token');
    //     myHeaders.append('Authorization', `Bearer ${myToken}`)
    //     myHeaders.append('Content-Type', 'application/json')

    //     let title = e.target.value
    //     let body = e.target.value

    //     let data = JSON.stringify({title, body})

    //     fetch(`https://kekambas-blog.herokuapp.com//blog/edit-posts?username=&password${postId}`,{
    //         method: 'PUT',
    //         headers: myHeaders,
    //         body: data
    //     }).then(res => res.json())
    //         .then(data => {
    //             setPosts(data)
    //         })
    // }
    
    return (
        <>
        {/* postId ?  */}
         
        {posts ? <PostCards posts={posts[postId]}  />: null}
        {/* <div className="card bg-body" >
            <div className="card-body">
                <h5 className="card-title text-light">somethins</h5>
                <h6 className="card-subtitle mb-2 text-muted">By: {} </h6>
                <p className="card-text text-muted">{posts.content}</p>
                <a to="#" className="card-link link-secondary ">reference</a>
            </div>  */}

            {/* <div>
                <button className='btn btn-info w-50' onClick={() => setEditMode(!editMode)}>Edit</button>
                <button className='btn btn-danger w-50'>Delete</button>
                {editMode ? (
                    <form>
                        <h3 className='text-center'>Edit {post.title}</h3>
                        <div className='form-group'>
                            <label htmlFor='title'>Title</label>
                            <input type='text' name='title' className='form-control' defaultValue={post.title} />
                            <label htmlFor='body'>Body</label>
                            <input type='text' name='body' className='form-control' defaultValue={post.body} />
                            <input type='submit' className='btn btn-dark w-100' value='Create Post' />

                        </div>
                    </form>
                ): null}
            // </div> */}
             {/* </div>  */}
        </>
        
    )
} 

