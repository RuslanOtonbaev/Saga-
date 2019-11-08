import * as React from 'react';
import styles from './index.module.css';
import {connect} from 'react-redux'

import SearchResult from '../banner-search-result';
import {searchResultRequest} from "../../../actions";

const BannerSearch = ({callToServer, propsData}) => {

    return (
        <div className={styles.banner_search}>
            <input className={styles.banner_search_field} type='text' placeholder='New your, Ny'/>
            {propsData.loading ?
                <div className={styles.lds_ring}>
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
                :
                <button onClick={callToServer} className={styles.search_submit}/>
            }
            <SearchResult data={propsData.result}/>
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