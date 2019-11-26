import * as React from 'react';
import {connect,ConnectedProps} from 'react-redux';
import {toggleBannerPanel} from '../../../actions'
import {classReturner,togglerSideStatus} from '../../../helpers/toggle-class-returner';
import {BUY,RENT} from '../../../constants/Banner';

import styles from './index.module.css';

interface RootState{
    togglerStatus: string
}

interface ComponentProps{
    bannerToggler:string
}

interface RootDispatch{
    toggleEvent: (status:string) => void;
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootState & RootDispatch

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

const mapStateToProps:({bannerToggler}:ComponentProps) => RootState = ({bannerToggler}:ComponentProps):RootState => ({
    togglerStatus: bannerToggler
})

const mapDispatchToProps:RootDispatch = ({
    toggleEvent: (status:string) => toggleBannerPanel(status)
})

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(BannerToggler);