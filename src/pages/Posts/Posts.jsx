import React, { useEffect, useState } from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import PostService from '../../API/PostService'
import { useFetching } from '../../components/hooks/useFetching'
import { usePosts } from '../../components/hooks/usePost'
import PostFilter from '../../components/PostFilter'
import PostForm from '../../components/PostForm'
import Postlist from '../../components/Postlist'
import Loader from '../../components/UI/Loader/Loader'
import MyModal from '../../components/UI/MyModal/MyModal'
import Pagination from '../../components/UI/pagination/Pagination'
import { getPageCount } from '../../utils/pages'

function Main() {
  const [posts,setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal,setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const sortedAndSearchedPosts = usePosts(posts,filter.sort, filter.query)

  const [fetchPosts, isPostsLoading, postError] = useFetching( async (limit,page) => {
    const response = await PostService.getAllPosts(limit, page);
    setPosts(response.data)
    const totalCount = (response.headers['x-total-count'])
    setTotalPages(getPageCount(totalCount, limit))
  })

  const [fetchUsers] = useFetching(async () => {
    const response = await PostService.getAllUsers();
    setUsers(response.data);
  });

  useEffect(() => {
    fetchPosts(limit,page)
    fetchUsers();
  }, [])

  const createPost = (newPost) => {
    setPosts([newPost,...posts])
    setModal(false)
  }
  
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit,page)
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='w-[1000px] mx-auto my-10'>
        <div className='fixed bottom-10 right-10 z-10'>
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
            <Postlist posts={sortedAndSearchedPosts}  remove={removePost} users={users}/>
        }
        <Pagination 
          page={page} 
          changePage={changePage} 
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}

export default Main;
