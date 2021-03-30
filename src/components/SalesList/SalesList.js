import React, { useState } from 'react';
import styled from 'styled-components';
import SalesListContext from '../../context/SalesListContext';
import SalesListTab from './SalesListTab';
import SalesListNav from './SalesListNav';
import SalesListItem from './SalesListItem';

import sales from '../../dummy';

const style = {};

style.SalesList = styled.div`
    padding: 15px;
`;

const SalesList = () => {

    const [selectedType, selectType] = useState('TRADE');
    const [selectedStatus, selectStatus] = useState('SALE');

    return (
        <style.SalesList>
            <SalesListContext.Provider value={{selectedType, selectType, selectedStatus, selectStatus}}>
                <SalesListTab/>
                <SalesListNav/>
                <SalesListItem itemType='filter'/>
                {sales.map(element => element.type===selectedType && element.saleStatus===selectedStatus && <SalesListItem key={element.saleId} sale={element} itemType='item'/>)}
            </SalesListContext.Provider>
        </style.SalesList>
    );
}

export default SalesList;