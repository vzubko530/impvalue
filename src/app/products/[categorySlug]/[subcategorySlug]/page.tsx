import { Container } from '@mui/material';
import styles from './page.module.css'

const ProductsPage = async ({params}: {params: Promise<{categorySlug: string, subcategorySlug: string}>}) => { 

    const {categorySlug, subcategorySlug} = await params;

    // const products = 



    return(
        <div className={styles.products_page}>
            <Container>
                {categorySlug} {subcategorySlug}
            </Container>
        </div>
    )
}

export default ProductsPage;