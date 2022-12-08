import React from 'react';
import Shopping from './components/10x/Shopping';
import Home from './components/redux/Home';
import Post from './components/redux/Post';

function App(){
  let value = 20;
  return(
    <>
    <Home value={value}/>
    <Post />
    </>
  )
}

export default App;