const createAction = (action_type, action_payload) => {
  return { type: action_type, payload: action_payload };
};

export default createAction;
