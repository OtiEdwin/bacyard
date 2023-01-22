import Head from 'next/head'
import Hero from "./heroSection";

export default function Home() {
  return (
      <div>
        <Head>
          <title>YARD | Briniging Web Hosting to your doorstep</title>
          <meta name="description" content="Yard is a web hosting service created to serve both end users and developers who wish to either develop and/or wish to deploy web-apps to the world wide web.\n Bringing Web Hosting to your doorstep" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        </Head>
        <Hero/>
      </div>      
  )
}


