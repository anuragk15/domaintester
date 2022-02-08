
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
      }}>Host is {props.host}</button>
      <div>{props.host}</div>
    </div>
  )
}

/* export async function getStaticProps(context){
  return {props:context.req}
} */

export async function getServerSideProps(context) {
  const { req } = context;
   console.log(req.headers.host)
  return {
    props: { host: req.headers.host }, // will be passed to the page component as props
  }
}