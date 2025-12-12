import { getSellerByProductId } from '@/lib/api/user';
import styles from './Chat.module.css';

interface ChatProps {
  productId: string;
}

const Chat = async ({ productId }: ChatProps) => {
  const seller = await getSellerByProductId(productId);

  console.log(seller);

  return (
    <div className={styles.chat}>
      <div className={styles.chat__header}>
        <span>Online</span>
        <span>{seller.username}</span>
      </div>
      <div className={styles.chat__viewbox}></div>
      <div className={styles.chat__sender}></div>
    </div>
  );
};

export default Chat;
