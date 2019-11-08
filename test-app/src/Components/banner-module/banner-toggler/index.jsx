import * as React from 'react';
import styles from './index.module.css';

export default class BannerToggler extends React.Component{
    render(){
        return(
            <div className={styles.toggle_wrapper}>
                <button className={[styles.toggle_button,styles.active_button].join(' ')}>Buy</button>
                <button className={styles.toggle_button}>Rent</button>
            </div>
        )
    }
}