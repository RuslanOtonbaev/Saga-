import * as React from 'react';
import styles from './index.module.css';

import ContentItem from '../content-item';

const fakeImage = require('../../../images/fake.svg');
const calendar = require('../../../images/wasting-time.svg');
const swap = require('../../../images/using-and-selling-your-data.svg');

const Content = () => {
    return (
        <div className={styles.column_wrapper}>
            <h4 className={styles.column_title}>Top 3 things NYC Agents HATE:</h4>
            <div className='container'>
                <div className={styles.content_wrapper}>
                    <ContentItem
                        image={fakeImage}
                        title={'Stealing Your Leads:'}
                        description={`This is being done on almost all aggregates: your
                        leads are given to third party agents. At Yurtah, protecting
                        agents is a primary mission. Hence, your leads are yours 100%.`}
                    />
                    <ContentItem
                        image={calendar}
                        title={'Inability to Reach Potential Customers Fast:'}
                        description={`With Yurtah, all the marketing tools are going to work
                        for you. But we need your help. We have simple rules: Unique
                        Descriptions of all the listings and Truthful Photos & Videos.`}
                    />
                    <ContentItem
                        image={swap}
                        title={'Sharing Commision:'}
                        description={`We don’t charge for any lead nor for the subscription. Built by Agents
                        for Agents, Yurtah won’t charge you a dime for
                        closed deals. The power & money  is given directly
                         into your hands.`}
                    />
                </div>
            </div>
        </div>
    )
};

export default Content;