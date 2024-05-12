import { useEffect, useState } from "react";
import './styles.css'


export default function LoadMoreData(){

    const [products,setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disable,setDisable] = useState(false)

    async function fetchProducts(){
        try{
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${
                count === 0?0:count*20}`
            )
            const result = await response.json();
            if(result && result.products && result.products.length){
                setProducts((prevData)=>[...prevData,...result.products])
            }
        }catch(err){
            alert(err)
        }
    }

    useEffect(()=>{
        fetchProducts()
        if(products && products.length == 100) setDisable(true)
    },[count])


    return (
        <div className="load-more-container">
            <div className="products">
                { products && products.length?
                products.map((item)=>(
                    <div key={item.id} className="product">
                    <img
                    src={item.thumbnail}
                    alt={item.title}
                    ></img>
                    <p>{item.title}</p>
                    </div>
                )):null
                }
            </div>
            <div className="load-more-button">
                <button disabled={disable} onClick={()=>setCount(count+1)}>
                    Load More Buttons
                </button>
                {disable?<p>You have reached the end limit</p>:null}
            </div>
        </div>
    )
}