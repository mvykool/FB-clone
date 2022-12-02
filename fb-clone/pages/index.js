import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import SideBar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import {auth} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Login from '../components/Login'



export default function Home() {
  const [user] = useAuthState(auth)

  if(!user) return <Login/>
 
  return (
    <div className='h-screen bg-custom-bg overflow-hidden'>
      <Head>
        <title>Facebook</title>
      </Head>

     <div>
        {/** Header */}
     <Header user={user} />

    <main className='flex'>
      {/** side bar */}
    <SideBar/>
     {/**feed */}
    <Feed />
      {/** widgets */}
    <Widgets/>
    </main>
     </div>
     
    </div>
  )
}

