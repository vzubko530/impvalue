import { getProductById } from '@/lib/api/products';
import { Button, Container, Typography } from '@mui/material';
import EditButton from '../components/EditButton';

import styles from './page.module.css';

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
    <div className={styles.product_page}>
      <div className={styles.product_page__container}>
        <Typography variant="h6">{title}</Typography>
        <span className={styles.product_page__description}>{description}</span>
        <span className={styles.product_page__price}>{price}</span>
        <Button fullWidth variant="contained">
          Buy
        </Button>
        <EditButton sellerId={sellerId.toString()} />
      </div>
    </div>
  );
};

export default ProductPage;
