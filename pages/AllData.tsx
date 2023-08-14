import Image from 'next/image'

interface eletype{
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:any;
  }
  
 function  AllData ({ele}:any) {

   
    let cartArray :any= [];
    
    

     function handleAddClick(ele:any){    
        if(localStorage.getItem("CartPro") !== null)
        {
        
            cartArray =(localStorage.getItem("CartPro"));
            cartArray = JSON.parse(cartArray);
        }      
        cartArray.push(ele);
        localStorage.setItem("CartPro", JSON.stringify(cartArray));
        alert("Product Added to cart")
    }

    return (

        <div  > 
           <div className="boxdiv" style={{display:"flex",  gap:"10px" , padding:"10px" , height:"350px", }} >
                <img src={ele.image} alt="image" width="120px" height="150px" style={{marginTop:"10px"}} />
                
                {/* <Image src="${ele.image}" width={120} height={150} alt="Picture of the author" /> */}
                <div>                    
                    <div className=""><h3 className="font-semibold">{ele.title}</h3></div>
                    <br />
                    <div><h5 className="">${ele.price}</h5></div>
                    <br />
                    <div  ><span style={{display:"inline-block", WebkitLineClamp:2, width:"300px", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}}>{ele.description}</span></div>

                    <div>
                        <br />
                        <button onClick={()=>handleAddClick(ele)} className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded">
                        Add to cart</button>
                        </div>
                </div>
           </div>
         
            
        
        <br />
        <br />
        </div>
    )
}
export default AllData;