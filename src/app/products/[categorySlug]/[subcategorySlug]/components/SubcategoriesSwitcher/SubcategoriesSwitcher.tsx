import { getSubcategoriesByCategorySlug } from '@/lib/api/subcategories';

import { Button } from '@mui/material';
import Link from 'next/link';

import styles from './SubcategoriesSwitcher.module.css';

interface SubcategoriesSwitcherProps {
  categorySlug: string;
  subcategorySlug: string;
}

const SubcategoriesSwitcher = async ({
  categorySlug,
  subcategorySlug,
}: SubcategoriesSwitcherProps) => {
  const subcategories = await getSubcategoriesByCategorySlug(categorySlug);

  return (
    <div className={styles.subcategory_switcher}>
      {subcategories.map((subcategory) => {
        const { _id, slug, name } = subcategory;
        return (
          <div key={_id} className={styles.subcategory_switcher__button}>
            <Link href={`/products/${categorySlug}/${slug}`}>
              <Button
                size="small"
                variant={slug === subcategorySlug ? 'contained' : 'outlined'}
              >
                {name}
              </Button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SubcategoriesSwitcher;
