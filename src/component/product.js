import React from "react";
import "./product.css";
import { faker } from '@faker-js/faker';


const color = faker.commerce.color();
const department = faker.commerce.department();
const price = faker.commerce.price(50, 200, 2, '$');
const product = faker.commerce.product();
const description = faker.commerce.productDescription();
const image = faker.image.abstract(200, 200);


const Product = () => {
  return (
    <div className="card grey">
        <div className="flexer">
            <div className="name">
                <h2>{product}</h2>
            </div>
            <div className="image">
                <img 
                class="fit-picture"
                src={image}
                alt="Grapefruit slice atop a pile of other slices">
                </img>  
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
            <div className="price">
                <p>{price}</p>
            </div>
            
        <div>

        </div>
        </div>
    </div>
  );
};
export default Product;
