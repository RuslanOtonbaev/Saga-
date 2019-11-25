import React from 'react';
import ContentItem from '../content-item';

const fakeImage = require('../../../images/fake.svg');
const calendar = require('../../../images/wasting-time.svg');
const swap = require('../../../images/using-and-selling-your-data.svg');

const RentersContent = () => (
    <div className="flex">
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
    </div>
);

export default RentersContent;