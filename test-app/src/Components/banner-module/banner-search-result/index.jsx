import * as React from 'react';
import styles from './index.module.css';

const SearchResult = ({data}) => {

    let location = [];
    let neighborhood = [];

    const renderContent = (data) => {
        data.map((item) => {
            switch(item.type) {
                case 'neighborhood':
                    neighborhood = [...neighborhood,item];
                    break;
                case 'borough':
                    location = [...location,item];
                    break;
                default:
                    break;
            }
        })
    };


    return(

        <div className={styles.search_result}>
            {renderContent(data)}
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

export default SearchResult;