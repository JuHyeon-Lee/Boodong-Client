import React, { useState } from 'react';
import styled from 'styled-components';
import SalesListContext from '../../context/SalesListContext';
import SalesListTab from './SalesListTab';
import SalesListNav from './SalesListNav';
import SalesListItem from './SalesListItem';

import sales from '../../dummy';

const style = {};

style.SalesList = styled.div`
    margin: 10px;
    padding: 10px;
    border: 1px solid rgb(180, 180, 180);
    border-radius: 6px;
`;

const SalesList = () => {

    const [selectedType, selectType] = useState('TRADE');
    const [selectedStatus, selectStatus] = useState('SALE');

    return (
        <style.SalesList>
            <SalesListContext.Provider value={{selectedType, selectType, selectedStatus, selectStatus}}>
                <SalesListTab/>
                <SalesListNav/>
                {/* <SalesListItem itemType='filter'/>
                {sales.map(element => element.type===selectedType && element.status===selectedStatus && <SalesListItem itemType='item' data={element}/>)} */}
            </SalesListContext.Provider>
        </style.SalesList>
    );
}

export default SalesList;