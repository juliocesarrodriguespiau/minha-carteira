import React from 'react';

import ContentHeader from '../../components/CotentHeader';

import SelecInput from '../../components/Selectinput';

import {Container} from './styles';

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
        </Container>
    );
}

export default List;