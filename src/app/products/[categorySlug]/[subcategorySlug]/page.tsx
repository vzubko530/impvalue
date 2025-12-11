import { getCategories, getCategoryBySlug } from '@/lib/api/categories';
import { getProductsBySubcategorySlug } from '@/lib/api/products';
import { getSubcategoryBySlug } from '@/lib/api/subcategories';

import Link from 'next/link';
import ProductRow from './components/ProductRow/ProductRow';
import { Button, Container, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SubcategoriesSwitcher from './components/SubcategoriesSwitcher/SubcategoriesSwitcher';

import styles from './page.module.css';

export async function generateStaticParams() {
  const categories = await getCategories();

  const params = [];

  for (const category of categories) {
    for (const subcategory of category.subcategories) {
      params.push({
        category: category.slug,
        subcategory: subcategory.slug,
      });
    }
  }

  return params;
}

const ProductsPage = async ({
  params,
}: {
  params: Promise<{ categorySlug: string; subcategorySlug: string }>;
}) => {
  const { categorySlug, subcategorySlug } = await params;

  const category = await getCategoryBySlug(categorySlug);
  const subcategory = await getSubcategoryBySlug(subcategorySlug);
  const products = await getProductsBySubcategorySlug(subcategorySlug);

  return (
    <div className={styles.products_page}>
      <Container>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          {category.name} {subcategory.name.toLocaleLowerCase()}
        </Typography>
        <div className={styles.product_page__toolbar}>
          <SubcategoriesSwitcher
            categorySlug={categorySlug}
            subcategorySlug={subcategorySlug}
          />
          <Link href={`/products/${categorySlug}/${subcategorySlug}/create`}>
            <Button size="small" variant="contained" endIcon={<AddIcon />}>
              Sell
            </Button>
          </Link>
        </div>

        <Stack spacing={1}>
          {products.map((product) => {
            const {
              title,
              _id,
              price,
              seller: { email },
            } = product;

            return (
              <ProductRow
                key={_id}
                title={title}
                _id={_id}
                sellerEmail={email}
                price={price}
              />
            );
          })}
        </Stack>
      </Container>
    </div>
  );
};

export default ProductsPage;
