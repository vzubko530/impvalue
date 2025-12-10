import { Container, Typography } from '@mui/material';

import styles from './page.module.css';
import CreateProductForm from './components/CreateProductForm/CreateProductForm';

const CreateProductPage = async ({
  params,
}: {
  params: Promise<{ categorySlug: string; subcategorySlug: string }>;
}) => {
  const { categorySlug, subcategorySlug } = await params;

  return (
    <div className={styles.create_product_page}>
      <Container>
        <div className={styles.create_product_page__wrapper}>
          <Typography marginBottom={4} variant="h5">
            Create product
          </Typography>
          <CreateProductForm
            categorySlug={categorySlug}
            subcategorySlug={subcategorySlug}
          />
        </div>
      </Container>
    </div>
  );
};

export default CreateProductPage;
