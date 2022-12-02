import React from 'react'
import InputBox from './InputBox'
import Posts from './Posts'
import Stories from './Stories'

const Feed = ({ posts}) => {
  return (
    <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mx-20 overflow-y-auto overflow-x-hidden scrollbar-hide'>
        <div className='mx-auto max-w-md md:max-w-lg lg:max-w-7xl'>
            {/**feed */}
            <Stories/>
            {/**input box */}
            <InputBox/>
            {/**posts */}
          <Posts/>
        </div>
    </div>
  )
}

export default Feed