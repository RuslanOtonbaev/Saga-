import * as React from 'react';
import styles from './index.module.css';

import Toggler from '../banner-toggler/index';
import Search from '../banner-search/index';

export default class Banner extends React.Component{
    render(){
        return(
            <div className={styles.banner}>
                <h1 className={styles.title}>
                    The Empire State Building is the closest thing to heaven in this city.
                </h1>
                <Toggler />
                <Search />
                <div className={styles.banner_footer_content}>
                    <p className={styles.banner_footer_content_title}>City view</p>
                    <span className={styles.banner_footer_content_desc}>524  apartments with an excellent city view</span>
                </div>
            </div>
        )
    }
}