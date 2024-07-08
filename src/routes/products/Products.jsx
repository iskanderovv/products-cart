import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const Products = () => {
  const [url, setUrl] = useState('/products');
  const { data: products, errors } = useFetch(url);

  const truncate = (text, num) => text.length > num ? text.slice(0, num) + '...' : text;


  console.log(products);
  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8'>
      {products?.slice(0, 34).map(product => (
        <div key={product.id}>
          <Link to='/'>
            <img title={product.title} className='rounded' src={product.images[0]} alt={product.title} />
          </Link>
          <div>
            <h2 className='font-semibold min-h-12'> {truncate(product.title, 35)} </h2>
            <p className='text-xs min-h-10'>{truncate(product.description, 60)}</p>
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
