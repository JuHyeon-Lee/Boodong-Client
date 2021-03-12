import React, { useContext } from 'react';
import styled from 'styled-components';
import SalesListContext from '../../context/SalesListContext';

const style = {};

style.SalesListNav = styled.div`
    margin-top: 6px;
`;

style.SelectedNav = styled.label`
    display: inline-block;
    font-weight: bold;
    margin-right: 5px;
`;

style.UnselectedNav = styled.label`
    display: inline-block;
    margin-right: 5px;
`;

const SalesListNav = () => {
    const { selectedStatus, selectStatus } = useContext(SalesListContext);

    return(
        <style.SalesListNav>
            {selectedStatus==='SALE' ? <style.SelectedNav>판매중</style.SelectedNav> : <style.UnselectedNav onClick={() => selectStatus('SALE')}>판매중</style.UnselectedNav>}
            {selectedStatus==='SOLDOUT' ? <style.SelectedNav>판매완료</style.SelectedNav> : <style.UnselectedNav onClick={() => selectStatus('SOLDOUT')}>판매완료</style.UnselectedNav>}
            {selectedStatus==='HOLDING' ? <style.SelectedNav>보류중</style.SelectedNav> : <style.UnselectedNav onClick={() => selectStatus('HOLDING')}>보류중</style.UnselectedNav>}
        </style.SalesListNav>
    );
}

export default SalesListNav;