import * as React from 'react';
import styles from './index.module.css';
import {connect} from 'react-redux';
import ContentItem from '../content-item';

const fakeImage = require('../../../images/fake.svg');
const calendar = require('../../../images/wasting-time.svg');
const swap = require('../../../images/using-and-selling-your-data.svg');

const Content = ({togglerResult}) => {

    const titleChanger = () => {
        if(togglerResult === 'agents'){
            return(
                <>
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
                </>
            )
        }

        return (
            <>
                <ContentItem
                    image={fakeImage}
                    title={'Fake Photos of property listings:'}
                    description={`At Yurtah, fake listings are removed
                     from our platform and we constantly work to reassure th
                    at all listings are posted with Actual Photos as well as Video Tours.`}
                />
                <ContentItem
                    image={calendar}
                    title={'Wasting time:'}
                    description={`Yurtah provides online calendar, where
                     you can schedule all your open-house viewings. 
                    No more endless calls and back-and-forth messaging.
                     Your time is what we put first.`}
                />
                <ContentItem
                    image={swap}
                    title={'Using and Selling Your Data:'}
                    description={`Most Property Listing Aggregates collect 
                    and sell your data. At Yurtah, we connect you 
                    directly to the listings agent. No middlemen and 
                    data manipulation involved.`}
                />
            </>
        )
    }

    return (
        <div className={styles.column_wrapper}>
            <h4 className={styles.column_title}>Top 3 things NYC Agents HATE:</h4>
            <div className='container'>
                <div className={styles.content_wrapper}>
                    {titleChanger()}
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = ({contentToggler}) => ({
    togglerResult: contentToggler
})

export default connect(mapStateToProps, null)(Content);