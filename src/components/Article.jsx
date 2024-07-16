import { useContext } from "react";
import { GlobalContext } from "../context";

const NewArticel = () => {
    return <span> --Baru !! </span>;
};
function Article (props){
    const user = useContext(GlobalContext);
    console.log(props.isNew);
    return(
        <>
            <h3>{props.title}</h3>
            <small>
                Date: {props.date}, tags:{props.tags.join(", ")} {' '}
                {/* <ArticleStatus isNew={props.isNew}/> */}
                {props.isNew ? <NewArticel /> : "--Lama" }
            </small>
            <div>
                <small>Ditulis Oleh {user.username}</small>
            </div>
        </>
    );
}

export default Article;
