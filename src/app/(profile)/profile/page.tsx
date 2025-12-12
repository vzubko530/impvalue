'use client';

import { useContext, useEffect, useState } from 'react';

import { UserContext } from '@/app/components/UserProvider/UserProvider';

import { getProductsBySeller } from './actions';

import { Container, Stack, Typography } from '@mui/material';

import { SellerProductDTO } from '@/dtos/Product';

import styles from './page.module.css';
import ProfileProductRow from './components/ProfileProductRow';

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

  return (
    <div className={styles.profile_page}>
      <Container>
        <Stack spacing={6}>
          {products?.categories.map((category) => {
            return (
              <>
                <Typography variant="h5" color="blue" marginBottom={2}>
                  {category.name}
                </Typography>
                <Stack spacing={3}>
                  {category.subcategories.map((subcategory) => {
                    return (
                      <Stack spacing={3}>
                        <Typography variant="h6" marginBottom={2}>
                          {subcategory.name}
                        </Typography>
                        <Stack spacing={1}>
                          {subcategory.products.map((product) => {
                            const { title, price, _id } = product;
                            return (
                              <ProfileProductRow
                                _id={_id}
                                price={price}
                                title={title}
                              />
                            );
                          })}
                        </Stack>
                      </Stack>
                    );
                  })}
                </Stack>
              </>
            );
          })}
        </Stack>
      </Container>
    </div>
  );
};

export default ProfilePage;
