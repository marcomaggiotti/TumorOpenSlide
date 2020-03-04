const initialState = {
  slide: [{
    id: 'BRAC03',
    stain: 'H_E'
  }]
};

export const slideReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_CONTACT':
    return Object.assign({}, state, {
      contacts: [
        ...state.contacts,
        action.payload
      ]
    })
    default:
      return state
  }
}
