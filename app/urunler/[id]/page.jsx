import { notFound } from "next/navigation";

export default async function ProductDetailPage({ params }){
    const { id } = params;
    const request = await fetch(`https://dummyjson.com/products/${id}`)
    const products = await request.json();
    return(
        <>
            <div className="main-conteiner">
            <div className="conteiner-products-detail">
            <div className="conteiner-left">
                <div className="conteiner-left-big-img">
                    <img src={products.thumbnail} alt=""/>
                </div>
                <div className="conteiner-left-small-img">
                    {products.images.map(image => (
                            <div className="conteiner-left-mini-img" >
                                <img src={image} alt=""/>
                            </div>
                    ))}
                </div>
            </div>
            <div className="conteiner-right">
                <div className="conteiner-right-conpany-text">
                    <h2>{products.category}</h2>
                    <h1>{products.brand}</h1>
                    <h3>{products.title}</h3>
                    <p>{products.description}</p>
                    <div className="conteiner-right-conpany-text-price">
                        <div className="conteiner-right-conpany-text-money">
                            <h1>${products.price}</h1>
                            ${products.discountPercentage ? `${(products.price / (1 - products.discountPercentage / 100)).toFixed(2)}`:""}
                        </div>
                        <div className="conteiner-right-conpany-text-sale">
                            <h5>{products.discountPercentage}</h5>
                        </div>
                    </div>
                    <div className="footer-buttons">
                        <div className="basket-quantity">
                            <a  className="basket-quantity-down">
                                -
                            </a>
                            <strong>0</strong>
                            <a className="basket-quantity-up">
                                +
                            </a>
                        </div>
                        <button id="card" className="add-to-card-button"><img src="assets/img/beyaz-sepet.svg" alt="" />Add to card</button>
                        
                    </div>
    
                </div>
    
            </div>
        </div>
            
            </div>
        </>
    )
}