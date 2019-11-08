import * as React from 'react';
import {connect} from 'react-redux'
import styles from './index.module.css';

const SearchResult = ({location,neighborhood}) => {

    return(
        <div className={styles.search_result}>
            <ul className={styles.zip_result}>
                {location.length !== 0 &&
                <div className={styles.neighborhood}>
                    <span className={styles.location_template}>Location</span>
                    {location.map((item, index) => (
                        <span className={styles.neighborhood_result} key={index}>{item.value}</span>
                    ))
                    }
                </div>
                }
                {neighborhood.length !== 0 &&
                    <div className={styles.neighborhood}>
                        <span className={styles.neighborhood_template}>Neighborhood</span>
                        {neighborhood.map((item, index) => (
                            <span className={styles.neighborhood_result} key={index}>{item.value}</span>
                        ))
                        }
                    </div>
                }
            </ul>
        </div>
    )
};

const mapStateToProps = state => ({
    location: state.location,
    neighborhood: state.neighborhood
})

export default connect(mapStateToProps,null)(SearchResult);