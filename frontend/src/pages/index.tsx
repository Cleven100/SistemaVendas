import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from 'components/layout';


const Home: React.FC = () => {

 return (
    <div>
      <Head>
        <title>APP de vendas</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Layout/>
     
    
    </div>
  )
}



export default Home
