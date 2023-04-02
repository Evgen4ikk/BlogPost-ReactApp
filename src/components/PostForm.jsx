import React, { useContext, useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'
import { AuthContext } from '../context/context'

const PostForm = ({create}) => {
  const { userInfo } = useContext(AuthContext)
  const [picture, setPicture] = useState('');
  const [post, setPost] = useState({
		username: userInfo.username,
		status: 'myPost',
		title: '',
		body: '',
		image: '',
	})

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
      picture: picture
    }
    create(newPost)
    setPost({ userId: userInfo.username, status:'myPost', title: '', body: '', image: '' })
    setPicture('');
  }

  return (
    <div>
      <form>
        <MyInput 
          value={post.title}
          onChange={e => setPost({...post, title:e.target.value})}
          type='text' 
          placeholder='Post title'
        />
        <MyInput
          value={post.body}
          onChange={e => setPost({...post, body:e.target.value})}
          type='text' 
          placeholder='Post Description'
        />
        <MyInput 
          value={picture}
          onChange={e => setPicture(e.target.value)}
          type='text' 
          placeholder='Link to picture'
        />
        <MyButton type='submit' onClick={addNewPost}>Create Post</MyButton>
      </form>
    </div>
  )
}

export default PostForm
