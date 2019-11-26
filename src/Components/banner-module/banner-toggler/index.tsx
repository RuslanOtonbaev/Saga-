import * as React from 'react';
import {connect,ConnectedProps} from 'react-redux';
import {toggleBannerPanel} from '../../../actions'
import {StoreTypes,Styles} from '../../../types/types';
import {classReturner,togglerSideStatus} from '../../../helpers/toggle-class-returner';
import {BUY,RENT} from '../../../constants/Banner';

const styles:Styles = require('./index.module.css');

interface RootState{
    togglerStatus: string
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

const mapStateToProps:({bannerToggler}:StoreTypes) => RootState = ({bannerToggler}:StoreTypes):RootState => ({
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