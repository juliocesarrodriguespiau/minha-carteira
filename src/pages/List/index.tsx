import React from 'react';

import ContentHeader from '../../components/CotentHeader';

import SelecInput from '../../components/Selectinput';

import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import {Container, Content} from './styles';

const List: React.FC = () => {

    const options = [
        {value: 'Júlio Piau list', label:'Júlio Piau list'},
        {value: 'Rodolfo list', label:'Rodolfo list'},
        {value: 'Jose Lima list', label:'Jose Lima list'},
    ];

    return (
        <Container>
            <ContentHeader title="Saídas" lineColor="#E44C4E">  
                <SelecInput options={options}/>
            </ContentHeader>

            <Content>
                <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="29/05/2021"
                    amount="R$ 130,00"
                />
            </Content>
        </Container>
    );
}

export default List;