import React, { useContext } from 'react';
import styled from 'styled-components';
import SalesListContext from '../../context/SalesListContext';

const style = {};

style.SalesListTab = styled.div`
    display: inline-block;
    margin-right: 5px;
`;

style.SelectedTab = styled.label`
    display: inline-block;
    font-weight: bold;
    margin-right: 5px;
`;

style.UnselectedTab = styled.label`
    display: inline-block;
    margin-right: 5px;
`;

const SalesListTab = () => {
    const { selectedType, selectType } = useContext(SalesListContext);

    return(
        <style.SalesListTab>
            {selectedType==='TRADE' ? <style.SelectedTab>매매</style.SelectedTab> : <style.UnselectedTab onClick={() => selectType('TRADE')}>매매</style.UnselectedTab>}
            {selectedType==='JEONSE' ? <style.SelectedTab>전세</style.SelectedTab> : <style.UnselectedTab onClick={() => selectType('JEONSE')}>전세</style.UnselectedTab>}
            {selectedType==='WALLSE' ? <style.SelectedTab>월세</style.SelectedTab> : <style.UnselectedTab onClick={() => selectType('WALLSE')}>월세</style.UnselectedTab>}
        </style.SalesListTab>
    );
}

export default SalesListTab;