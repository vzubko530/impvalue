import Link from "next/link";

import styles from './CategoryBlock.module.css'
import { SubcategoryDTO } from "@/dtos/Subcategory";

interface CategoryBlockProps {
    name: string;
    slug: string;
    subcategories: Array<SubcategoryDTO>
}

const CategoryBlock = ({name, slug, subcategories}: CategoryBlockProps) => {
    return(
        <div className={styles.category}>
            <Link className={styles.category__link} href={`products/${slug}`}>{name}</Link>
            <div className={styles.category__subcategories}>
                {subcategories.map((subcategory) => {
                    const {name, slug: subslug, _id} = subcategory;
                    return(
                        <Link key={_id} className={styles.category_subcategory_link} href={`products/${slug}/${subslug}`}>{name}</Link>
                    )
                } )}
            </div>
        </div>
        
    )
}

export default CategoryBlock;