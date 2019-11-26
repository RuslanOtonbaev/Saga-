import * as React from 'react';
import {getRandomNumberFrom} from '../../../helpers/image-randomizer';
import {Styles} from '../../../types/types';

import Toggler from '../banner-toggler/index';
import Search from '../banner-search/index';

const styles:Styles = require('./index.module.css');
const background1:string = require('../../../images/banner_background.jpg');
const background2:string = require('../../../images/banner_background2.jpg');

export default class Banner extends React.Component{

    private getRandomBackground = ():string => {
        return getRandomNumberFrom(0,1) ? background1 : background2;
    }

    render(){
        return(
            <div className="container">
                <div 
                    style={{backgroundImage: `url(${this.getRandomBackground()})`}} 
                    className={styles.banner}>
                    <h1 className={styles.title}>
                        The Empire State Building is the closest thing to heaven in this city.
                    </h1>
                    <Toggler />
                    <Search />
                    <div className={styles.banner_footer_content}>
                        <p className={styles.banner_footer_content_title}>City view</p>
                        <span className={styles.banner_footer_content_desc}>524  apartments with an excellent city view</span>
                    </div>
                </div>
            </div>
        )
    }
}