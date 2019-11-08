import * as React from 'react';
import styles from './index.module.css';

export default class SectionToggler extends React.Component{
    render(){
        return(
            <div className={styles.toggle_wrapper}>
                <button className={styles.toggle_button}>Buyers and renters</button>
                <button className={[styles.toggle_button,styles.toggle_button_active].join(' ')}>Agents and broker</button>
            </div>
        )
    }
};