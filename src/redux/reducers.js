import { combineReducers } from 'redux'

const INITIAL_STATE = {
  listagem: [
    {
        date: '31/01/2019',
        name: "Pedro Carlos",
        phone: "31998875887",
        street: "Rua do Amendoim",
        number: 35,
        complement: "ap 202",
        neighborhood: "Serra",
        city: "Belo Horizonte",
        state: "MG"
    },
    {
        date: '31/01/2019',
        name: "João Rodrigues",
        phone: "3133386695",
        street: "Av do Contorno",
        number: 2288,
        complement: "ap 303",
        neighborhood: "Savassi",
        city: "Belo Horizonte",
        state: "MG"
    },
    {
        date: '31/01/2019',
        name: "Amanda Duarte",
        phone: "31987546325",
        street: "Av Amazonas",
        number: 3589,
        complement: "450",
        neighborhood: "Gutierrez",
        city: "Belo Horizonte",
        state: "MG"
    },
]
}

const lista =  (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_PESSOA':
      return { 
        ...state,
        listagem: [...state.listagem, action.payload]
      }
    case 'REMOVE_PESSOA':
      const newListagem = state.listagem;
      newListagem.splice(action.payload,1);
      return {
        ...state,
        listagem: newListagem
      }
    case 'EDIT_PESSOA':
      const pessoaEdited = action.payload.pessoaEdited;
      const listagemNew = state.listagem;
      listagemNew[action.payload.index] = pessoaEdited;
      return {
        ...state,
        listagem: listagemNew
      }
    default:
      return state
  }
}

export const reducers = combineReducers({
  listagem: lista,
})