import * as React from 'react';

const styles = require('./index.module.css');

const Loader = () => (
    <div className={styles.lds_ring}>
        <div />
        <div />
        <div />
        <div />
    </div>
)

export default Loader;