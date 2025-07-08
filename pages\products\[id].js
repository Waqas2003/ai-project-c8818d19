import { useRouter } from 'next/router';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = { id: 1, name: 'Product 1', price: 10.99 };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default ProductPage;