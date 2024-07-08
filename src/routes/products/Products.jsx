import { useContext, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import AppContext from '../../context/store';

const Products = () => {
  const [url, setUrl] = useState('/products');
  const { data: products } = useFetch(url);
  const [state, dispatch] = useContext(AppContext);

  const truncate = (text, num) => text.length > num ? text.slice(0, num) + '...' : text;

  const handleProduct = (product) => {
    dispatch({type: 'CART_PRODUCT', product: product})
  }

  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8'>
      {products?.slice(0, 21).map(product => (
        <div key={product.id}>
          <Link to='/'>
            <img title={product.title} className='rounded' src={product.images[0]} alt={product.title} />
          </Link>
          <div>
            <h2 className='font-semibold min-h-12'> {truncate(product.title, 35)} </h2>
            <p className='text-xs min-h-10'>{truncate(product.description, 56)}</p>
            <strong>${product.price}</strong>
            <button 
            onClick={() => handleProduct(product)}
            className='block text-center bg-cyan-600 w-full py-1 rounded border-transparent hover:bg-transparent border-2 hover:text-cyan-600 transition hover:border-cyan-600  font-medium mt-4 text-white'>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products
