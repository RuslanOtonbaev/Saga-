import * as React from 'react';
import styles from './index.module.css';
import {connect} from 'react-redux';
import {toggleContentPanel} from '../../../actions';
import {StoreTypes} from '../../../types/types';
import {RENTERS,AGENTS} from '../../../constants/Toggler';

interface DispatchPropsType{
    toggleContentPanel: (buttonValue:string) => void;
}

type Props = StoreTypes & DispatchPropsType;

const SectionToggler = ({toggleContentPanel,contentToggler}:Props) => {

    const detectActiveClass = (buttonValue:string) => {
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

const mapStateToProps:any = ({contentToggler}:StoreTypes) => ({
    contentToggler
});

const mapDispatchToProps:DispatchPropsType = ({
    toggleContentPanel
})

export default connect<StoreTypes,DispatchPropsType,any>(mapStateToProps,mapDispatchToProps)(SectionToggler);