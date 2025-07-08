import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 9.99 },
  { id: 3, name: 'Product 3', price: 12.99 },
];

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ecommerce Website</title>
      </Head>
      <h1>Welcome to our ecommerce website!</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <a>
                {product.name} - ${product.price}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;