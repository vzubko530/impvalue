import styles from './ProductItem.module.css'

interface ProductItemProps {
    title: string;
    price: number;
}

const ProductItem = ({title, price}: ProductItemProps) => {
    return(
        <div>
            <span>{title}</span>
            <span>{price} RUB</span>
        </div>
    )
}

export default ProductItem;