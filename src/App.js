import './Styles/App.css';
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import {useEffect, useState} from "react";
import PostFilter from "./Components/PostFilter";
import MyModal from "./UI/MyModal/MyModal";
import MyButton from "./UI/MyButton/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import Pagination from "./UI/Pagination/Pagination";
import {getPageCount} from "./Utilities/pages";

function App() {

    const [filter, setFilter] = useState({
        sort: '',
        query: ''
    });
    const [posts, setPosts] = useState([]);
    const [allPosts, setAllPosts] = useState([])
    /*сверху будет все посты*/
    const [modal, setModal] = useState(false);
    const filteredAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    })

    useEffect( () => {
        fetchPosts();
    },[page])

    const changePage = (newPage) => {
        setPage(newPage);
    }

    const AddNewPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false)
    }

    const DeletePost = (id) => {
        setPosts(posts.filter((el) => el.id !== id))
    }

  return (
    <div className="App">
        <MyButton onClick={() => setModal(true)}>Add post</MyButton>
        <hr style={{
            marginBottom: "20px",
            marginTop: "20px"
        }}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
            />
        <MyModal active={modal} setActive={setModal}>
            <PostForm newPost={AddNewPost}/>
        </MyModal>
        {postError ? <h1 style={{textAlign: 'center'}}>Error: {postError}</h1>
            :
            isPostsLoading ? <Loader/>
            :   <div>
                    <PostList deletePost={DeletePost} post={filteredAndSearchedPosts}/>
                    <Pagination totalPages={totalPages} currentPage={page} changePage={changePage}/>
                </div>
        }

    </div>
  );
}

export default App;
