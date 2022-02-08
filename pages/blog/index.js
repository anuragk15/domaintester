
import { useEffect,useState } from 'react';
import { useRouter } from 'next/router'

export default function Home(props) {
  const [locations,setLocations]=useState();

  useEffect(() => {
    console.log(window.location.hostname) 
    console.log(window.location.href)
    setLocations(window.location.href); // Logs `http://localhost:3000/blog/incididunt-ut-lobare-et-dolore`
}, [])
  const router=useRouter();
  const { asPath } = useRouter()
  return (
    <div>
     <h1>{locations}</h1> 
     <h1>{asPath} </h1>
      <button onClick={()=>{
        router.push('/blog/article')
      }}>Hello</button>
    </div>
  )
}

/* export async function getStaticProps(context){
  return {props:context.req}
} */