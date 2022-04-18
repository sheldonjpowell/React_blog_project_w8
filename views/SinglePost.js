import React from 'react'
import { useState, useEffect } from 'react'
import PostCards from '../components/PostCards';
import { useParams } from 'react-router-dom'

export default function SinglePost(props) {
    const { postId } = useParams();
    const [posts, setPosts] = useState({});
    console.log(postId)
    console.log(posts[postId])
    const [editMode, setEditMode] = useState(false)
    useEffect(()=> {
        fetch(`https://kekambas-blog.herokuapp.com//blog/posts?username=&password${postId}`)
        .then(res => res.json())
        .then(data => setPosts(data))
        console.log(`AfterUseEffect${postId}`)
    },[])

    // const handleEditSubmit = (e) => {
    //     e.preventDefault();

    //     let myHeaders = new Headers();
    //     let myToken = localStorage.getItem('token');
    //     myHeaders.append('Authorization', `Bearer ${myToken}`)
    //     myHeaders.append('Content-Type', 'application/json')

    //     let title = e.target.value
    //     let body = e.target.value

    //     console.log('Are you here')

    //     let data = JSON.stringify({title, body})
    //     console.log(data)

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
         
        <PostCards posts={posts[postId]} />
        {/* {posts.map(p => <PostCards posts={p} key={p.id} />)} */}
        

            <div>
                <button className='btn btn-info w-50' onClick={() => setEditMode(!editMode)}>Edit</button>
                <button className='btn btn-danger w-50'>Delete</button>
                {editMode ? (
                    <form>
                        <h3 className='text-center'>Edit {posts[postId].title}</h3>
                        <div className='form-group'>
                            <label htmlFor='title'>Title</label>
                            <input type='text' name='title' className='form-control' defaultValue={posts[postId].title} />
                            <label htmlFor='body'>Body</label>
                            <input type='text' name='body' className='form-control' defaultValue={posts[postId].body} />
                            <input type='submit' className='btn btn-dark w-100' value='Create Post' />

                        </div>
                    </form>
                ): null}
            </div>
        </>
        
    )
}

