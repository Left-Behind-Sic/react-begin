import React, {useMemo, useRef} from "react";
import './styles/App.css';
import {useState} from "react";
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/select/MySelect";
import PostFilter from "./Components/PostFilter";

function App(factory, deps) {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "Javascript - язык программирования"},
        {id: 2, title: "Javascript 2", body: "Javascript - язык программирования"},
        {id: 3, title: "Javascript 3", body: "Javascript - язык программирования"},
    ]);
    const [filter, setFilter] = useState({sort: '', query: ''})


    const sortedPosts = useMemo(() => {
        console.log("функция сортировки сработала")
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

    function createPost(newPost) {
        setPosts([...posts, newPost])
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>

            <hr style={{margin: '20px 0'}}/>

            <PostFilter filter={filter} setFilter={setFilter}/>

            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="JS"/>
        </div>
    )
        ;
}

export default App;
