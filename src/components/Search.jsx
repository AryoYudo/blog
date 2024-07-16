import { useState } from "react";
function Search(props){

    const [search, setSearch] = useState("");

    const ChangeSearch = () =>{
        props.ChangeSearch(search);
    };

    const SearchKeyDown = e => {
        if (e.key === "Enter"){
            ChangeSearch();
        }
    }

    return (
        <>
        <div>
            <div>Cari Article: <input onChange={(e) => setSearch(e.target.value)} onKeyDown={SearchKeyDown}/>
            <button onClick={ChangeSearch}>Cari</button>
            </div>
            <small>Ditemukan {props.totalPosts} kata dari pencarian kata {search}</small>
        </div>
        </>
    )
}

export default Search;