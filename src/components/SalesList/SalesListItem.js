import React from 'react';
import styled from 'styled-components';

const style = {};

style.SalesListItem = styled.div`
    padding: 5px;
    border-bottom: 1px solid rgb(180, 180, 180);
    &:nth-child(3){
        margin-top: 10px;
        border-top: 1px solid rgb(180, 180, 180);
    }
`;

style.SaleRegisteredDate = styled.label`
    display: inline-block;
    width: 120px;
`;

style.SaleName = styled.label`
    display: inline-block;
    width: 200px;
`;

style.SaleDonghosu = styled.label`
    display: inline-block;
    width: 140px;
`;

style.SalePyung = styled.label`
    display: inline-block;
    width: 75px;
`;

style.SaleDirection = styled.label`
    display: inline-block;
    width: 75px;
`;

style.CompleteButton = styled.button`
    margin-left: 10px;
`;

const SalesListItem = (input) => {
    const {itemType, sale} = input;
    return (
        <style.SalesListItem>
            {itemType==='filter' ? (
                <>
                    <style.SaleRegisteredDate>등록일</style.SaleRegisteredDate>
                    <style.SaleName>아파트</style.SaleName>
                    <style.SaleDonghosu>동호수</style.SaleDonghosu>
                    <style.SalePyung>평수</style.SalePyung>
                    <style.SaleDirection>방향</style.SaleDirection>
                </>
            ) : (
                <>
                    <style.SaleRegisteredDate>{sale.registeredDate}</style.SaleRegisteredDate>
                    <style.SaleName>{sale.name}</style.SaleName>
                    <style.SaleDonghosu>{sale.dong}동 {sale.hosu}호</style.SaleDonghosu>
                    <style.SalePyung>{sale.pyung}평</style.SalePyung>
                    <style.SaleDirection>{sale.direction}향</style.SaleDirection>
                    {sale.saleStatus==='SALE' && 
                        <>
                            <button>보류</button>
                            <style.CompleteButton>거래완료</style.CompleteButton>
                        </>
                    }
                </>
            )}
        </style.SalesListItem>
    );
}

export default SalesListItem;