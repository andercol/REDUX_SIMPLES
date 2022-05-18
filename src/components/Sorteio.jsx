
import React from "react";
import { connect } from "react-redux";

import Card from './Card';

const Sorteio = props => {
    
    const { min, max } = props
    const numeroSorteado = parseInt(Math.random() * (max - min)) + min

    return (
        <Card title="Sorteio de um Números" Purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{numeroSorteado}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapSateteToProps(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

export default connect(mapSateteToProps)(Sorteio)