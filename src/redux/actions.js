export const addPessoa = pessoa => ({
  type: 'ADD_PESSOA',
  payload: pessoa
})

export const removePessoa = idPessoa => ({
  type: 'REMOVE_PESSOA',
  payload: idPessoa,
})

export const editPessoa = (pessoaEdited, index)  => ({
  type: 'EDIT_PESSOA',
  payload: {pessoaEdited, index},
})