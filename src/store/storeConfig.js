
import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    numeros: function (state, action) {

        switch (action.type) {
            case 'NUN_MIN_ALTERADO':
                return {
                    ...state,
                    min: action.payload
                }
            case 'NUN_MAX_ALTERADO':
                return {
                    ...state,
                    max: action.payload
                }
            default:
                return {
                    min: 7,
                    max: 31
                }
        }

    },
    //apenas para teste
    nomes: function (state, action) {
        console.log('Reducer Nomes...')
        console.log(state, ' ', action)
        return [
            'Ana',
            'Bia',
            'Carlos',
        ]
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig