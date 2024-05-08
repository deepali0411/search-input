import react from 'react';
import styles from './empty.module.scss';

const EmptyCard = (props) => {
    return (
        <div className={styles.container}>No User Found</div>
    )
};
export default EmptyCard;