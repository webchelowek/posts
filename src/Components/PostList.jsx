import PostItem from "./PostItem";
import "../Styles/PostList.css";
import {CSSTransition, TransitionGroup} from "react-transition-group";

function PostList(props) {

    return(
        <div className="postList">
            {props.post.length ?
                <h1 className="postList__header">Posts</h1>
            :   <h1 className="postList__header">Posts not found</h1>}
            <TransitionGroup>
                    {props.post.map((postItem, index) => {
                        return(
                            <CSSTransition
                                key={postItem.id}
                                timeout={500}
                                classNames="post"
                            >
                                <PostItem number={index + 1} post={postItem} id={postItem.id}  deletePost={props.deletePost}/>
                            </CSSTransition>
                        )
                    })}
            </TransitionGroup>
        </div>
    );
}

export default PostList;