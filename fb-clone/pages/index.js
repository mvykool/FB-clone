import Head from 'next/head'
import Header from '../components/Header'



export default function Home({ posts }) {
 
  return (
    <div className='h-screen bg-custom-bg overflow-hidden'>
      <Head>
        <title>Facebook</title>
      </Head>

       {/** Header */}
     <Header/>

       <main className='flex'>
        {/** side bar */}
  
        {/**feed */}

        {/** widgets */}
      
       </main>
    </div>
  )
}

