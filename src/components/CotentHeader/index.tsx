import React from 'react';

import SelecInput from '../../components/Selectinput';

import {Container, TitleContainer, Controllers} from './styles';

const ContentHeader: React.FC = () => {
    return (
        <Container>
            <TitleContainer>
                <h1>Título</h1>
            </TitleContainer>
            <Controllers>
                <SelecInput />
                <SelecInput />
            </Controllers>
        </Container>
    );
}

export default ContentHeader;