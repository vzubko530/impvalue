import Link from 'next/link';

import styles from './ProductRow.module.css';

interface ProductRowProps {
  _id: string;
  title: string;
  sellerEmail: string;
  price: number;
}

const ProductRow = ({ _id, title, sellerEmail, price }: ProductRowProps) => {
  return (
    <Link href={`/products/view/${_id}`} className={styles.product_row}>
      <div>
        <span className={styles.product_row__seller}>{sellerEmail}</span>
        <span className={styles.product_row__title}>{title}</span>
      </div>
      <span className={styles.product_row__price}>{price} RUB</span>
    </Link>
  );
};

export default ProductRow;
