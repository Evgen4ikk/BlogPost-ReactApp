import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: '' , picture: ''})

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: '' , picture: ''})
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
          value={post.picture}
          onChange={e => setPost({...post, picture:e.target.value})}
          type='text' 
          placeholder='Link to picture'
        />
        <MyButton type='submit' onClick={addNewPost}>Create Post</MyButton>
      </form>
    </div>
  )
}

export default PostForm
