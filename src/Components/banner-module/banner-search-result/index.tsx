import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux'
import {sendValueToStore} from '../../../actions';
import {Styles} from '../../../types/types';
import {SearchModal} from '../../../models/search';

const styles:Styles = require('./index.module.css');

interface RootState{
    location: Array<SearchModal>;
    neighborhood: Array<SearchModal>;
}

interface RootDispath{
    sendValueToStore: (value:string) => void;
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootState & RootDispath;

const SearchResult = ({location,neighborhood, sendValueToStore}:Props) => {

    const getValueUserSelected = (value:string):void => {
        value && sendValueToStore(value);
    }

    return(
        <div className={styles.search_result}>
            <ul className={styles.zip_result}>
                {location.length !== 0 &&
                <div className={styles.neighborhood}>
                    <span className={styles.location_template}>Location</span>
                    {location.map((item:any, index:number) => (
                        <span 
                            onClick={() => getValueUserSelected(item.value)} 
                            className={styles.neighborhood_result} 
                            key={index}>{item.value}
                        </span>
                    ))
                    }
                </div>
                }
                {neighborhood.length !== 0 &&
                    <div className={styles.neighborhood}>
                        <span className={styles.neighborhood_template}>Neighborhood</span>
                        {neighborhood.map((item:any, index:number) => (
                            <span 
                                onClick={() => getValueUserSelected(item.value)} 
                                className={styles.neighborhood_result}
                                key={index}>{item.value}
                            </span>
                        ))
                        }
                    </div>
                }
            </ul>
        </div>
    )
};

const mapStateToProps:({location,neighborhood}:RootState) => RootState = ({location,neighborhood}:RootState) => ({
    location,
    neighborhood
});

const mapDispatchToProps:() => RootDispath = () => ({
    sendValueToStore
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(SearchResult);