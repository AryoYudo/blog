import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function Blogs (){
    const [post, setPosts] = useState([]);
    
        // Mengambil Api
        useEffect (() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => setPosts(json));
        }, []);
        
        return (
        <>
        <h2>My Blog Post</h2>
        {post.map((item, index) => (
                <div key={index}>
                    <Link to={`/blog/${item.id}`}> - {item.title} </Link>
                </div>
            ))}
        </>
    )
}

export default Blogs;