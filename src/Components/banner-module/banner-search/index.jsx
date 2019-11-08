import * as React from 'react';
import styles from './index.module.css';
import {connect} from 'react-redux'

import SearchResult from '../banner-search-result';
import {searchResultRequest} from "../../../actions";

const BannerSearch = ({callToServer, propsData}) => {
    const input = React.createRef();

    const searchSubmit = () => {
        callToServer(input.current.value);
        input.current.value = '';
    }

    return (
        <div className={styles.banner_search}>
            <input ref={input} 
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
            {propsData.result.length !== 0 && <SearchResult data={propsData.result}/>}
        </div>
    )

};

const mapStateToProps = state => ({
    propsData: state
});

const mapDispatchToProps = {
    callToServer: searchResultRequest
};


export default connect(mapStateToProps, mapDispatchToProps)(BannerSearch)