import * as React from 'react';
import {connect} from 'react-redux';
import {toggleBannerPanel} from '../../../actions'
import styles from './index.module.css';

const BannerToggler = ({togglerStatus,toggleEvent}) => {

    return(
        <div className={togglerStatus === 'buy' ? styles.toggle_left_wrapper : styles.toggle_right_wrapper}>
            <button 
            onClick={toggleEvent.bind('undefined', 'buy')} 
            className={togglerStatus === 'buy' ? [styles.toggle_button,styles.active_button].join(' ') : styles.toggle_button}>
                Buy
            </button>
            <button 
            onClick={toggleEvent.bind('undefined', 'rent')}
            className={togglerStatus === 'rent' ? [styles.toggle_button,styles.active_button].join(' ') : styles.toggle_button}>
                Rent
            </button>
        </div>
    )

}

const mapStateToProps = state => ({
    togglerStatus: state.bannerToggler
})

const mapDispatchToProps = ({
    toggleEvent: (status) => toggleBannerPanel(status)
})

export default connect(mapStateToProps,mapDispatchToProps)(BannerToggler);