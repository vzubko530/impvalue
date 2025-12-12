import { getProductById } from '@/lib/api/products';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import EditButton from './components/EditButton/EditButton';
import Chat from './components/Chat/Chat';

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
      <Container>
        <Grid container spacing={6}>
          <Grid size={6}>
            <div className={styles.product_page__product}>
              <Typography variant="h6">{title}</Typography>
              <span className={styles.product_page__description}>
                {description}
              </span>
              <span className={styles.product_page__price}>{price}</span>
              <Button fullWidth variant="contained">
                Buy
              </Button>
              <EditButton sellerId={sellerId.toString()} />
            </div>
          </Grid>
          <Grid size={6}>
            <div className={styles.producy_page__chat}>
              <Chat productId={_id} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductPage;
