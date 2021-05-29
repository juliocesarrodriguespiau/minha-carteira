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
                <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Telefone"
                    subtitle="29/05/2021"
                    amount="R$ 230,00"
                />
                
                <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Água"
                    subtitle="29/05/2021"
                    amount="R$ 30,00"
                />
                <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Internet"
                    subtitle="29/05/2021"
                    amount="R$ 180,00"
                />
                <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Faculdade"
                    subtitle="29/05/2021"
                    amount="R$ 1030,00"
                />
                <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Viagem"
                    subtitle="29/05/2021"
                    amount="R$ 6130,00"
                />
                <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Aluguel"
                    subtitle="29/05/2021"
                    amount="R$ 2130,00"
                />
                <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Cartão de Crédito"
                    subtitle="29/05/2021"
                    amount="R$ 5130,00"
                />
                <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Reforma de casa"
                    subtitle="29/05/2021"
                    amount="R$ 80130,00"
                />
                <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Compras Shopping"
                    subtitle="29/05/2021"
                    amount="R$ 3130,00"
                />
                <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Viagem"
                    subtitle="29/05/2021"
                    amount="R$ 1130,00"
                />
                <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="29/05/2021"
                    amount="R$ 630,00"
                />
            </Content>
        </Container>
    );
}

export default List;