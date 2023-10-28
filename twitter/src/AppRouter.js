import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/main/MainPage';
import Profile from './components/profile/Profile';
import Home from './components/home/Home';
import Posts from './components/post/Posts';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Posts />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

