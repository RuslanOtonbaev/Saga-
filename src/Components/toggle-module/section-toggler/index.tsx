import * as React from 'react';
import styles from './index.module.css';
import {connect, ConnectedProps} from 'react-redux';
import {toggleContentPanel} from '../../../actions';
import {StoreTypes} from '../../../types/types';
import {RENTERS,AGENTS} from '../../../constants/Toggler';

interface RootState{
    contentToggler: string
}

interface RootDispatch{
    toggleContentPanel: (value: string) => void;
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootState & RootDispatch;

const SectionToggler = ({toggleContentPanel,contentToggler}:Props) => {

    const detectActiveClass = (buttonValue:string):string => {
        return contentToggler === buttonValue ? [styles.toggle_button,styles.toggle_button_active].join(' ')  : styles.toggle_button;
    }

    return(
         <div className={styles.toggle_wrapper}>
            <button onClick={() => toggleContentPanel(RENTERS)}
                    className={detectActiveClass(RENTERS)}>Buyers and renters</button>
            <button onClick={() => toggleContentPanel(AGENTS)} 
                    className={detectActiveClass(AGENTS)}>Agents and broker</button>
        </div>
    )
    
};

const mapStateToProps:({contentToggler}:StoreTypes) => RootState = ({contentToggler}:StoreTypes):RootState => ({
    contentToggler
});

const mapDispatchToProps:RootDispatch = ({
    toggleContentPanel
})

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connector(SectionToggler);