import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ChangeTryb } from "./components/ChangeTryb";
import { Body } from "./components/Body";
import { AppContextProvider } from "./context/AppContext";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";
import Post from "./components/Post";
import PostsList from "./components/PostsList";
import NewPost from "./components/NewPost";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Body>
          <ChangeTryb />
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/postslist" element={<PostsList />} />
            <Route path="/:id?" element={<Post />} />
            <Route path="/post/new" element={<NewPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Body>
      </div>
    </AppContextProvider>
  );
}

export default App;
