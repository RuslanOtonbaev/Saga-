import * as React from 'react';
import {connect} from 'react-redux'
import styles from './index.module.css';
import {sendValueToStore} from '../../../actions';
import {StoreTypes} from '../../../types/types';

interface SearchStateTypes{
    location: any;
    neighborhood: any; // any type is used for data from the backend until models are created
}

interface SearchDispatchTypes{
    sendValueToStore: (value:string) => void;
}

type Props = StoreTypes & SearchStateTypes & SearchDispatchTypes;

const SearchResult = ({location,neighborhood, sendValueToStore}:Props) => {

    const getValueUserSelected = (value:string) => {
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
                            onClick={getValueUserSelected.bind('undefined', item.value)} 
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
                            <span onClick={getValueUserSelected.bind('undefined', item.value)} 
                                  className={styles.neighborhood_result}
                                  key={index}>{item.value}</span>
                        ))
                        }
                    </div>
                }
            </ul>
        </div>
    )
};

const mapStateToProps:any = ({location,neighborhood}:StoreTypes) => ({
    location,
    neighborhood
});

const mapDispatchToProps:() => SearchDispatchTypes = () => ({
    sendValueToStore
})

export default connect<StoreTypes,SearchDispatchTypes,any>(mapStateToProps,mapDispatchToProps)(SearchResult);