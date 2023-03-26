import React, { useEffect, useState } from 'react'
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import Postlist from './components/Postlist'
import MyModal from './components/UI/MyModal/MyModal'
import { FiPlusCircle } from 'react-icons/fi'
import { usePosts } from './components/hooks/usePost'
import PostService from './API/PostService'
import Loader from './components/UI/Loader/Loader'
import { useFetching } from './components/hooks/useFetching'

function Main() {
  const [posts,setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal,setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts,filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
    const posts = await PostService.getAll();
    setPosts(posts)
  })

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='w-[1000px] mx-auto my-10'>
        <div className='fixed bottom-10 right-10'>
          <FiPlusCircle
            size={48}
            className='text-gray-500 cursor-pointer'
            onClick={() => setModal(true)}
          />
        </div>
        <MyModal visible={modal} setVisible={setModal}> 
          <PostForm create={createPost} />
        </MyModal>
        <PostFilter filter={filter} setFilter={setFilter}/>
        {postError &&
          <h1>Error ${postError}</h1>
        }
        {isPostsLoading
          ? 
            <Loader />
          : 
            <Postlist posts={sortedAndSearchedPosts} remove={removePost}/>
        }
      </div>
    </div>
  );
}

export default Main;
