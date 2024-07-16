import {useState, useEffect} from 'react'
import postsData from '../posts.json'
import Article from '../components/Article'
import Search from '../components/Search';


function HomePage() {    
    const [posts, setPosts] = useState(postsData);
    const [totalPosts, setTotalPosts] = useState();

    const ChangeSearch = (value) => {
        const fillteredPosts = posts.filter((item) => 
        item.title.includes(value)
        )
        setPosts(fillteredPosts);
        setTotalPosts(fillteredPosts.length);
    }
    useEffect (() =>{
        console.log("render")
        
        return () => {
            console.log("Clean up...")
        }
        
    }, []);

    return (
        <>
            <h1>Simple Blog</h1>
            <Search ChangeSearch={ChangeSearch} totalPosts={totalPosts}/>
            {posts.map(({title, tags, date, isNew}, index) => (
                <Article {...{title, tags , date, isNew}} key={index}/>
            ))}
        </>
    );
}


export default HomePage;