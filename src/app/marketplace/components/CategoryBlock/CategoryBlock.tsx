import Link from "next/link";

interface CategoryBlockProps {
    name: string;
    slug: string;
}

const CategoryBlock = ({name, slug}: CategoryBlockProps) => {
    return(
        <Link href={slug}>{name}</Link>
    )
}

export default CategoryBlock;