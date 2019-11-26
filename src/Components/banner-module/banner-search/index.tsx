import * as React from 'react';
import {connect,ConnectedProps} from 'react-redux'
import {searchResultRequest,clearDataFromServer} from "../../../actions";
import {Styles} from '../../../types/types';
import {SearchModal} from '../../../models/search';

import SearchResult from '../banner-search-result';
import EmptySearch from '../../empty-search';
import Loader from '../../loader';

const styles:Styles = require('./index.module.css');

interface RootState{
    loading: boolean;
    result: [] | SearchModal;
}

interface RootDispatch{
    clearData: () => void;
    callToServer: (value: string) => void;
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootDispatch;

const BannerSearch:React.FC<Props> = ({callToServer, loading, result, clearData}:Props) => {

    const input = React.createRef<HTMLInputElement>();
    const [emptyField, setEmptyField] = React.useState<boolean>(false);

    const searchSubmit = ():void => {

        if(input.current && input.current.value){
            callToServer(input.current.value);
            setEmptyField(false);
            input.current.value = '';
            return;
        }

        clearData();
        setEmptyField(true);
    }

    const searchChecker = (length:number):JSX.Element => {
        return length !== 0 ? <SearchResult/> : <EmptySearch />
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

const mapStateToProps: ({loading,result}:RootState) => RootState = ({loading,result}:RootState) => ({
    loading,
    result
});

const mapDispatchToProps:RootDispatch = ({
    callToServer: searchResultRequest,
    clearData: clearDataFromServer
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);


export default connector(BannerSearch);