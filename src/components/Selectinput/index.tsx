import React from 'react';

import { Container } from './styles';

const SelecInput: React.FC = ({ children }) => {
    return (
        <Container>
            <select>
                <option value="a">Júlio</option>
                <option value="b">César</option>
                <option value="c">Antônio</option>
            </select>
        </Container>
    );
}

export default SelecInput;