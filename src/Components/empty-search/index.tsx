import * as React from 'react';
import {Styles} from '../../types/types';

const styles:Styles = require('./index.module.css');

const emptySearch = () => (<div className={styles.empty_search} />)
export default emptySearch;