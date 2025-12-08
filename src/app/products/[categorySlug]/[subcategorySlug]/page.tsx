import styles from './page.module.css'

const ProductsPage = async ({params}: {params: Promise<{categorySlug: string, subcategorySlug: string}>}) => { 

    const {categorySlug, subcategorySlug} = await params;



    return(
        <div className={styles.products_page}>
            {categorySlug} {subcategorySlug}
        </div>
    )
}

export default ProductsPage;