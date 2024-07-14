import { useState } from "react";
function Search(props){

    const [search, setSearch] = useState("");
    const ChangeSearch = (event) =>{
        setSearch(event.target.value);
        props.ChangeSearch(event.target.value);
    };

    return (
        <>
        <div>
            <div>Cari Article: <input type="text" onChange={ChangeSearch} /></div>
            <small>Ditemukan {props.totalPosts} kata dari pencarian kata {search}</small>
        </div>
        </>
    )
}

export default Search;