import { Container } from '@mui/material';
import styles from './page.module.css';
import { getCategories } from '@/lib/api/categories';
import CreateProductButton from './components/CreateProductButton/CreateProductButton';
import Link from 'next/link';

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

  return (
    <div className={styles.products_page}>
      <Container>
        <Link href={`/products/${categorySlug}/${subcategorySlug}/create`}>
          Sell
        </Link>
      </Container>
    </div>
  );
};

export default ProductsPage;
