import * as React from 'react';
import styles from './index.module.css';

const ContentItem = ({image,title,description}) => {
    return(
        <div className={styles.content_item}>
            <img alt={'Content'} className={styles.content_item_image} src={image} />
            <h4 className={styles.content_item_title}>{title}</h4>
            <p className={styles.content_item_descr}>{description}</p>
        </div>
    )
};

export default ContentItem;