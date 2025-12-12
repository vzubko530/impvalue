import Link from 'next/link';
import styles from './ProfileProductRow.module.css';

interface ProfileProductRow {
  _id: string;
  title: string;
  price: number;
}

const ProfileProductRow = ({ _id, price, title }: ProfileProductRow) => {
  return (
    <Link href={`/products/view/${_id}`} className={styles.profile_product_row}>
      <span className={styles.profile_product_row__title}>{title}</span>
    </Link>
  );
};

export default ProfileProductRow;
