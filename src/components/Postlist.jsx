import React from 'react';
import PostItem from './PostItem';
import { useSpring, animated } from 'react-spring';

const Postlist = ({ posts, remove }) => {
	
  const props = useSpring({
		opacity: 1,
		from: { opacity: 0 },
		config: { duration: 1000 },
	});
  if (!posts.length) {
    return (
      <div className='text-[64px] text-gray-600 text-center mt-[10%]'>
        Posts not found
      </div>
    );
  }

  return (
    <div>
      {posts.map((post) => (
      <animated.div key={post.id} style={props}>
        <PostItem remove={remove} post={post} />
      </animated.div>
      ))}
    </div>
  );
};

export default Postlist;