import {Container, Grid } from '@mui/material';

import { getCategories } from '@/lib/api/categories';

import styles from './page.module.css'
import CategoryBlock from './components/CategoryBlock/CategoryBlock';

const MarketplacePage = async () => {
    
    const categories = await getCategories();

    console.log(categories)

    return(
        <div className={styles.marketplace_page}>
            <Container>
                <Grid container spacing={2}>
                    {
                        categories.map((category) => {
                            const {name, subcategories, slug, _id} = category
                            return(
                                <Grid key={_id} size={4}>
                                    <CategoryBlock name={name} slug={slug} subcategories={subcategories} />
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