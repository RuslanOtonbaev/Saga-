import * as React from 'react';
import styles from './index.module.css';
import {connect} from 'react-redux'

import SearchResult from '../banner-search-result';
import {searchResultRequest,clearDataFromServer} from "../../../actions";
import EmptySearch from '../../empty-search';

const BannerSearch = ({callToServer, propsData, clearData}) => {
    const input = React.createRef();

    const [emptyField, setEmptyFeild] = React.useState(false);

    const searchSubmit = () => {
        if(input.current.value){
            callToServer(input.current.value);
            setEmptyFeild(false);
            input.current.value = '';
            return;
        }

        clearData();
        setEmptyFeild(true);
    }

    const searchChecker = (data) => {
        if(data.length !== 0){
            return <SearchResult data={data}/>
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
            {propsData.loading ?
                <div className={styles.lds_ring}>
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
                :
                <button onClick={searchSubmit} className={styles.search_submit}/>
            }
            {emptyField && 
                <div className={styles.empty_field_error}>
                    <p>The field is empty please write something for search =)</p>
                </div>
            }
            {propsData.result && searchChecker(propsData.result)}
        </div>
    )

};

const mapStateToProps = state => ({
    propsData: state
});

const mapDispatchToProps = ({
    callToServer: searchResultRequest,
    clearData: clearDataFromServer
});


export default connect(mapStateToProps, mapDispatchToProps)(BannerSearch)