import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {StoreTypes,Styles} from '../../../types/types';
import {AGENTS} from '../../../constants/Toggler';

import ContentAgents from '../content-agents';
import ContentRenters from '../content-renters';

const styles:Styles = require('./index.module.css');

interface RootState{
    togglerResult: string
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootState;

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

const mapStateToProps:({contentToggler}:StoreTypes) => RootState = ({contentToggler}:StoreTypes):RootState => ({
    togglerResult: contentToggler
})

const connector = connect(mapStateToProps,null);

export default connector(Content);