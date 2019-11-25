import * as React from 'react';
import styles from './index.module.css';
import {connect} from 'react-redux';
import {StoreTypes} from '../../../types/types';
import {AGENTS} from '../../../constants/Toggler';

import ContentAgents from '../content-agents';
import ContentRenters from '../content-renters';

interface OwnStateTypes{
    togglerResult: string;
}

type Props = StoreTypes & OwnStateTypes;

const Content = ({togglerResult}:Props) => {
    return (
        <div className={styles.column_wrapper}>
            <h4 className={styles.column_title}>Top 3 things NYC Agents HATE:</h4>
            <div className='container'>
                <div className={styles.content_wrapper}>
                    {togglerResult === AGENTS ? <ContentAgents /> : <ContentRenters />}
                </div>
            </div>
        </div>
    )
};

const mapStateToProps:any = ({contentToggler}:StoreTypes) => ({
    togglerResult: contentToggler
})

export default connect<StoreTypes,any,any>(mapStateToProps, null)(Content);