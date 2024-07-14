import React from "react";
const ArticleStatus = ({isNew}) => {
    return isNew && <span>Baru!!</span>
};
function Article (props){
    console.log(props.isNew);
    return(
        <>
            <h3>{props.title}</h3>
            <small>
                Date: {props.date}, tags:{props.tags.join(", ")} {' '}
                <ArticleStatus isNew={props.isNew}/>
            </small>
        </>
    );
}

export default Article;
