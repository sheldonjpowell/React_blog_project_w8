import React from 'react'
import { useState, useEffect } from 'react'
import PostCards from '../components/PostCards';

export default function Blog(props) {
    const [posts, setPosts] = useState([]);

    const sortingMethods = {
        byDateAsc: (a, b) => new Date(a.author.date_created) - new Date(b.author.date_created),
        byDateDesc: (a, b) => new Date(b.author.date_created) - new Date(a.author.date_created),
        byAuthAsc: (a, b) =>  a.author.username.toLowerCase() >  b.author.username.toLowerCase() ? 1 : -1,
        byAuthDesc: (a, b) =>  a.author.username.toLowerCase() >  b.author.username.toLowerCase() ? -1 : 1
        }

    const sortPosts = (method) => {
        console.log(method)
        console.log(sortingMethods[method])
        let sortedPosts = [...posts].sort(sortingMethods[method])
        setPosts(sortedPosts)
        
    }


    useEffect(() => {
        fetch('https://kekambas-blog.herokuapp.com//blog/posts?username=&password"')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <>
        <h1 className='text-center'>AWW YEAH!</h1>
        {/* <button onClick={()=>sortPosts('byDateDesc')} className='btn btn-primary'>ME</button> */}
        <hr></hr>
        <div className='row'>
            <div className='offset-8 col-4'>
                <select onChange={(e)=>sortPosts(e.target.value)} className="form-select" aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="byDateAsc">By Date Ascending</option>
                    <option value="byDateDesc">By Date Descending</option>
                    <option value="byAuthAsc">By Username Ascending</option>
                    <option value="byAuthDesc">By Username Descending</option>
                </select>

            </div>
        </div>
        {posts.map(p => <PostCards posts={p} key={p.id} />)}
        </>
    )
}
