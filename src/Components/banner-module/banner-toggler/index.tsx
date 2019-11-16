import * as React from 'react';
import {connect} from 'react-redux';
import {toggleBannerPanel} from '../../../actions'
import {StoreTypes} from '../../../types/types';

import styles from './index.module.css';

interface TogglerStatusProps{
    togglerStatus: string
}

interface ToggleEventProps{
    toggleEvent: (status:string) => void;
}

type Props = StoreTypes & TogglerStatusProps & ToggleEventProps

const BannerToggler = ({togglerStatus,toggleEvent}:Props) => {

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

const mapStateToProps:any = ({bannerToggler}:StoreTypes):TogglerStatusProps => ({
    togglerStatus: bannerToggler
})

const mapDispatchToProps:ToggleEventProps = ({
    toggleEvent: (status:string) => toggleBannerPanel(status)
})

export default connect<StoreTypes,ToggleEventProps,any>(mapStateToProps,mapDispatchToProps)(BannerToggler);