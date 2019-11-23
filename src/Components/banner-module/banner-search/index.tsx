import * as React from 'react';
import styles from './index.module.css';
import {connect} from 'react-redux'
import {StoreTypes} from '../../../types/types';
import {searchResultRequest,clearDataFromServer} from "../../../actions";

import SearchResult from '../banner-search-result';
import EmptySearch from '../../empty-search';
import Loader from '../../loader';

interface SearchStateTypes{
    loading: boolean;
    result: any;
}

interface SearchDispathTypes{
    callToServer: (value:string) => void;
    clearData: () => void;
}

type EmptyFieldHook = { initialStatus: boolean };
type Props = StoreTypes & SearchStateTypes & SearchDispathTypes & EmptyFieldHook;

const BannerSearch = ({callToServer, loading, result, clearData, initialStatus}:Props) => {

    const input = React.createRef<HTMLInputElement>();
    const [emptyField, setEmptyField] = React.useState(initialStatus);

    const searchSubmit = () => {

        if(input.current && input.current.value){
            callToServer(input.current.value);
            setEmptyField(false);
            input.current.value = '';
            return;
        }

        clearData();
        setEmptyField(true);
    }

    const searchChecker = (length:number) => {
        if(length !== 0){
            return <SearchResult/>
        }

        return <EmptySearch />;
    }

    return (
        <div className={styles.banner_search}>
            <input 
                ref={input} 
                className={styles.banner_search_field} 
                type='text' 
                placeholder='New your, Ny...'/>
            {loading ?
                <Loader />
                :
                <button 
                    onClick={searchSubmit} 
                    className={styles.search_submit}
                />
            }
            {emptyField && 
                <div className={styles.empty_field_error}>
                    <p>The field is empty please write something for search =)</p>
                </div>
            }
            {result && searchChecker(result.length)}
        </div>
    )

};

const mapStateToProps:any = ({loading,result}:StoreTypes) => ({
    loading,
    result
});

const mapDispatchToProps:SearchDispathTypes = ({
    callToServer: searchResultRequest,
    clearData: clearDataFromServer
});


export default connect<StoreTypes,SearchDispathTypes,any>(mapStateToProps, mapDispatchToProps)(BannerSearch)