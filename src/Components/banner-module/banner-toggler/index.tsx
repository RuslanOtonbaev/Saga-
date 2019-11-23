import * as React from 'react';
import {connect} from 'react-redux';
import {toggleBannerPanel} from '../../../actions'
import {StoreTypes} from '../../../types/types';
import {classReturner,togglerSideStatus} from '../../../helpers/toggle-class-returner';
import {BUY,RENT} from '../../../constants/Banner';

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
        <div className={togglerSideStatus(togglerStatus, styles)}>
            <button 
            onClick={() => toggleEvent(BUY)} 
            className={classReturner(togglerStatus, styles)}>
                Buy
            </button>
            <button 
            onClick={() => toggleEvent(RENT)}
            className={classReturner(togglerStatus, styles)}>
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