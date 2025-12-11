'use client';

import { Container } from '@mui/material';
import styles from './page.module.css';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/app/components/UserProvider/UserProvider';
import { SellerProductDTO } from '@/dtos/Product';
import { getProductsBySeller } from './actions';

const ProfilePage = () => {
  const [products, setProducts] = useState<SellerProductDTO | null>(null);

  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getProducts() {
      if (user?._id) {
        console.log(user);
        const products = await getProductsBySeller(user._id);
        setProducts(products);
      }
    }

    getProducts();
  }, [user, setProducts]);

  console.log(products);

  return (
    <div className={styles.profile_page}>
      <Container></Container>
    </div>
  );
};

export default ProfilePage;
