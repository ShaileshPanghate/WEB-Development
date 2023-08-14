
import Link from 'next/link';
import Image from 'next/image';

interface eletype{
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:any;
  }
  
function cart(){

    let productArray :any= [];
   
    productArray =(localStorage.getItem("CartPro"));
    productArray = JSON.parse(productArray);
            
       let sum: number = 0;
     productArray.map((ele)=>{
        sum += ele.price
     })

    return(
        <div>
            
            <div style={{display:"flex",}}  >
                <h1 style={{ margin:"30px"}}>cart page</h1>
                <Link href="/"><button id='button1'  style={{fontSize:"30px" }}>Product page</button> </Link>
            </div>
            <h2 style={{marginLeft:"30px"}}>

            Total : - {sum};
            </h2>
             <div style={{  gap:"10px"}}>

                {
                     productArray.map((ele:eletype,index)=>{
                        return <div key={index} style={{display:"flex",  margin:"30px"}}>
                                     <img src={ele.image} alt="" width="120px" height="150px"/>
                                   
                                        <div style={{ margin:"10px"}}>                    
                                            <div className=""><h3 className="font-semibold">{ele.title}</h3></div>
                                            <br />
                                            <div><h5 className="">${ele.price}</h5></div>
                                            <br />
                                        
                                        </div>
                                      
                                </div>
                      })
                }
               
           </div>
        </div>
    )
}
export default cart;