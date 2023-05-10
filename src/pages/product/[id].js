const Product = () => {
  const router = useRouter();
  const { product } = router.query;

  return (
    <h1>id: {product}</h1>
  );
};

export default Product;
