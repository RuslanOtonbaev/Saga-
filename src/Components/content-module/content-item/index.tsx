import * as React from 'react';
import {Styles} from '../../../types/types';

const styles:Styles = require('./index.module.css');

interface Props{
    image: string;
    title: string;
    description: string;
}

const ContentItem = ({image,title,description}:Props) => {
    return(
        <div className={styles.content_item}>
            <img 
                alt={'Content'} 
                className={styles.content_item_image} 
                src={image} 
            />
            <h4 className={styles.content_item_title}>{title}</h4>
            <p className={styles.content_item_descr}>{description}</p>
        </div>
    )
};

export default ContentItem;