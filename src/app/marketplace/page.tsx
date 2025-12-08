import { Button, Container, Grid } from '@mui/material';
import styles from './page.module.css'
import { CategoryDTO } from '@/dtos/Category';

const MarketplacePage = async () => {
    const resp = await fetch(`${process.env.PUBCLIC_BASE_URL}/api/categories`, {
        next: {
            revalidate: 60
        }
    });

    const categories = await resp.json();

    return(
        <div className={styles.marketplace_page}>
            <Container>
                <Grid container spacing={2}>
                    {
                        categories.map((category: CategoryDTO) => {
                            return(
                                <Grid size={4}>
                                    {category.name}
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default MarketplacePage;