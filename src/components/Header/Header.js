import React from 'react';
import styled from 'styled-components';

const style = {};

style.Header = styled.header`
    display: flex;
    padding: 10px;
    background-color: #f1f1f1;
`;

style.User = styled.label`
    font-size: 20px;
    font-weight: bold;
`;

const Header = () => {
    return (
        <style.Header>
            <style.User>인하공인중개사</style.User>
        </style.Header>
    )
};

export default Header;