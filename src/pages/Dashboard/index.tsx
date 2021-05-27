import React from 'react';

import ContentHeader from '../../components/CotentHeader';

import SelecInput from '../../components/Selectinput';

import {Container} from './styles';

const Dashboard: React.FC = () => {
    
    const options = [
        {value: 'Júlio Piau', label:'Júlio Piau'},
        {value: 'Rodolfo', label:'Rodolfo'},
        {value: 'Jose Lima', label:'Jose Lima'},
    ];

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">  
                <SelecInput options={options}/>
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;