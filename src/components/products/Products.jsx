import { useState } from 'react';
import { ProductsData } from '../../data/products';
import css from '../../components/products/Products.module.css';
import Plane from '../../assets/plane.png';

const Products = () => {
  const [menuProducts, setMenuProducts] = useState(ProductsData);

  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };
  const allFilter = () => {
    setMenuProducts(ProductsData);
  };

  return (
    <div className={css.container}>
      <img src={Plane} alt="" aria-hidden="true" />
      <h1>Our features products</h1>

      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={allFilter}>All</li>
          <li onClick={() => filter('skin care')}>Skin Care</li>
          <li onClick={() => filter('conditioner')}>Conditioners</li>
          <li onClick={() => filter('foundation')}>Foundations</li>
          <li onClick={() => filter('serum')}>Serums</li>
        </ul>

        <div className={css.list}>
          {menuProducts.map((product, index) => (
            <div className={css.product} key={index}>
              <div className="left-slider">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>{product.price}$</span>
                <div>ShopNow</div>
              </div>
              <img src={product.img} alt={product.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
