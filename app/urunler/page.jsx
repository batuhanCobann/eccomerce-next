import Link from "next/link";
import { notFound } from "next/navigation";


export default async function ProductsPage({params}) {
    const {id} = params;

    const request = await fetch("https://dummyjson.com/products");
    if(request.ok){
        const products = await request.json();
        console.log(products);
        return(
            <div className="conteiner-products">
                {products.products.map(product => (
                        <div className="products">
                        <img src={product.thumbnail} alt="" />
                        <div className="products-text">
                            <p>Degerlendirme:{product.rating}</p>
                            <h4>{product.brand}</h4>
                            <span>{product.title}</span>
                            <div class="products-price">
                                {product.discountPercentage ? `${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}`:""}
                                <h1>${product.price}</h1>
                                <br />
                                <button className="go-product"><Link href={`/urunler/${product.id}`} className="go-products"><h2>Ürüne git</h2></Link></button>

                            </div>                      
                        </div>
                        </div>
                ))}</div>
        )
    }else{
        return notFound();
    }

}