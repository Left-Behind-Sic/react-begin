import React from "react";
import './styles/App.css';
import {useState} from "react";
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "Javascript - язык программирования"},
        {id: 2, title: "Javascript 2", body: "Javascript - язык программирования"},
        {id: 3, title: "Javascript 3", body: "Javascript - язык программирования"},
    ])

    const [title, setTitle] =useState('')
    function addNewPost(e){
        e.preventDefault();
        console.log(title)
    }

    return (
        <div className="App">

            <form >
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Название"
                />
                <MyInput type="text" placeholder="Описание"/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title="JS"/>
        </div>
    );
}

export default App;
