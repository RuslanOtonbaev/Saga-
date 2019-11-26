import * as React from 'react';
import {Styles} from '../../types/types';

const styles:Styles = require('./index.module.css');

const Loader = () => (
    <div className={styles.lds_ring}>
        <div />
        <div />
        <div />
        <div />
    </div>
)

export default Loader;