
import React from "react";
import Card from './Card';

export default props => {
    
    const {min, max} = props

    return (
        <Card title="Soma dos Números" Blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{max + min}</strong>
                </span>
            </div>
        </Card>
    )
}