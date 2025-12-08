import Link from "next/link";

import styles from './CategoryBlock.module.css'

interface CategoryBlockProps {
    name: string;
    slug: string;
    subcategories: Array<SubcategoryDTO>
}

const CategoryBlock = ({name, slug, subcategories}: CategoryBlockProps) => {
    return(
        <div className={styles.category}>
            <Link className={styles.category__link} href={slug}>{name}</Link>
            <div className={styles.category__subcategories}>
                {subcategories.map((subcategory) => {
                    const {name, slug, _id} = subcategory;
                    return(
                        <Link key={_id} className={styles.category_subcategory_link} href={slug}>{name}</Link>
                    )
                } )}
            </div>
        </div>
        
    )
}

export default CategoryBlock;