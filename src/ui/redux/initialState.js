const initialState = {
  auth: {
    loading: false,
    authed: false,
    user: {},
    token: '',
    currentStep: 0
  },
  data: {
    loading: false,
    groomers: [],
    bookings: [],
    approved: false
    // newGroomers: [],
    // activeGroomers: [],
    // banGroomers: []
  }
}

export default initialState;