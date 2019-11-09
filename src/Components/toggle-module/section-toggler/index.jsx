import * as React from 'react';
import styles from './index.module.css';
import {connect} from 'react-redux';
import {toggleContentPanel} from '../../../actions';

const SectionToggler = ({toggleContentPanel,contentToggler}) => {

    const detectActiveClass = buttonValue => {
        if(contentToggler === buttonValue){
            return [styles.toggle_button,styles.toggle_button_active].join(' ') 
        }
        
        return styles.toggle_button;
    }

    return(
         <div className={styles.toggle_wrapper}>
            <button onClick={toggleContentPanel.bind('undefined','renters')}
                    className={detectActiveClass('renters')}>Buyers and renters</button>
            <button onClick={toggleContentPanel.bind('undefined','agents')} 
                    className={detectActiveClass('agents')}>Agents and broker</button>
        </div>
    )
    
};

const mapStateToProps = ({contentToggler}) => ({
    contentToggler
});

const mapDispatchToProps = ({
    toggleContentPanel
})

export default connect(mapStateToProps,mapDispatchToProps)(SectionToggler);