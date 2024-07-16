// const ArticleStatus = (isNew) => {
//     console.log(isNew)
//     if (isNew == true){
//         return <span>-Baru</span>
//     }else{
//     }
// };

const NewArticel = () => {
    return <span> --Baru !! </span>;
};
function Article (props){
    console.log(props.isNew);
    return(
        <>
            <h3>{props.title}</h3>
            <small>
                Date: {props.date}, tags:{props.tags.join(", ")} {' '}
                {/* <ArticleStatus isNew={props.isNew}/> */}
                {props.isNew ? <NewArticel /> : "--Lama" }
            </small>
        </>
    );
}

export default Article;
