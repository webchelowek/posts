import '../Styles/PostItem.css';
import MyButton from "../UI/MyButton/MyButton";

function PostItem(props) {

    return(
        <div className="postItem">
            <div className="postItem__content">
                <h2>{props.id}. {props.post.title}</h2>
                <p>{props.post.body}</p>
            </div>
            <MyButton onClick={() => props.deletePost(props.id)}>Delete</MyButton>
        </div>
    );
}

export default PostItem;