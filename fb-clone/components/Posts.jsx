import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, {useState, useEffect} from 'react'
import { db } from '../firebase';
import Post from './Post'

const Posts = () => {


// state 

const [posts, setPosts ] = useState([]);

//use effect for the snapshots

 useEffect(() => {
   const unsubscribe = onSnapshot(query(collection(db, "posts"),orderBy("timestamp", "desc")), snapshot => {
        setPosts(snapshot.docs);
   });

   return unsubscribe;
 }, [db])


  return (
    <div>
        {/**post */}
        {posts.map((post) => (
           <Post 
           key={post.id}
           id={post.id}
           img={post.data().image}
           caption={post.data().caption}
           />
        ))}
    </div>
  )
}

export default Posts