import Products from '../products/Products';
import Container from '../../components/container/Container';

const Home = () => {
  return (
    <div className='my-10'>
      <Container>
        <h1 className='text-3xl mb-4'>Products</h1>
        <Products />
      </Container>
    </div>
  )
}

export default Home
