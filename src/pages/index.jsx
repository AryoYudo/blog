import {useState, useEffect} from 'react'
import postsData from '../posts.json'
import Article from '../components/Article'
import Search from '../components/Search';


function HomePage() {    
    const [posts, setPosts] = useState(postsData);
    const [totalPosts, setTotalPosts] = useState();
    const [externalPosts, setExtenalPosts] = useState([]);

    const ChangeSearch = (value) => {
        const fillteredPosts = posts.filter((item) => 
        item.title.includes(value)
        )
        setPosts(fillteredPosts);
        setTotalPosts(fillteredPosts.length);
    }
    useEffect (() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => setExtenalPosts(json));
    }, []);

    useEffect(() => {
        console.log("ada posts baru")
    }, []);

    return (
        <>
            <h1>Simple Blog</h1>
            <Search ChangeSearch={ChangeSearch} totalPosts={totalPosts}/>
            {posts.map(({title, tags, date, isNew}, index) => (
                <Article {...{title, tags , date, isNew}} key={index}/>
            ))}
            <hr />
            <h2>External Posts</h2>
            {externalPosts.map((item, index) => (
                <div key={index}>- {item.title}</div>
            ))}
        </>
    );
}


export default HomePage;