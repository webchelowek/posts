import '../Styles/PostForm.css'
import MyInput from "../UI/MyInput/MyInput";
import {useState} from "react";
import MyButton from "../UI/MyButton/MyButton";

function PostForm(props){
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const onBtnClick = (e) => {
        e.preventDefault();
        const newPost= {
            id: Date.now(),
            title,
            body
        }
        props.newPost(newPost)
        setTitle('');
        setBody('');
    }

    return(
        <form>
            <h2>Add post</h2>
            <div className="postForm">
                <div className="postForm__inputs">
                    <MyInput value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
                    <MyInput value={body} onChange={(e) => setBody(e.target.value)} placeholder="Enter body"/>
                    <MyButton className="postItem__btn" onClick={onBtnClick}>Add post</MyButton>
                </div>
            </div>
        </form>
    )
}

export default PostForm;