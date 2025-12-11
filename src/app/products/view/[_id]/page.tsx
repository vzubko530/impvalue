import { getProductById } from '@/lib/api/products';
import { Button, Container, Typography } from '@mui/material';
import EditButton from '../components/EditButton';

const ProductPage = async ({
  params,
}: {
  params: Promise<{ _id: string }>;
}) => {
  const { _id } = await params;

  const product = await getProductById(_id);
  const {
    title,
    seller: { _id: sellerId },
    description,
    price,
  } = product;

  return (
    <Container>
      <Typography variant="h6">{title}</Typography>
      <span>{description}</span>
      <span>{price}</span>
      <Button variant="contained">Buy</Button>
      <EditButton sellerId={sellerId.toString()} />
    </Container>
  );
};

export default ProductPage;
