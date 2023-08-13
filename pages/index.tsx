"use client"

// import '../styles/globals.css'
import React, {useState, useEffect} from 'react';
import AllData from './AllData';
import Link from 'next/link';


interface eletype{
  id:number;
  title:string;
  price:number;
  description:string;
  category:string;
  image:string;
  rating:any;
}

 function Home(){

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const getdata = await response.json();
        setData(getdata);
        // console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div >
      <div style={{display:"flex",}}  >

       <h1 className='text-4xl ' style={{marginLeft:"15px"}} >Product Page</h1>
       <Link href="/cart"><button id='button' style={{fontSize:"30px" }}>Cart</button> </Link>
      </div>
       <br />
       <br />
       <div className="mainBox">     
          {
            data.map((ele:eletype)=>{
              return <AllData key={ele.id} ele={ele}/>
            })
          }
        </div>
     </div>
  )
}
export default  Home;