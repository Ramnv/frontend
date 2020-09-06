import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'teste1',
            done: true
        }, {
            _id: 2,
            description: 'teste2',
            done: false
        }, {
            _id: 3,
            description: 'teste3',
            done: false
        }]
    })
})

export default rootReducer