import { useState } from 'react'
import PostForm from './components/PostForm'
import Postlist from './components/Postlist'

function Main() {
  const [posts,setPosts] = useState([
    {id:1 , title: 'Title-1', body: 'Body-1', picture: ''},
    {id:2 , title: 'Title-2', body: 'Body-2', picture: ''},
    {id:3 , title: 'Title-3', body: 'Body-3', picture: ''},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='w-[1000px] mx-auto'>
        <PostForm create={createPost}/>
        <Postlist posts={posts}/>
      </div>
    </div>
  );
}

export default Main;
