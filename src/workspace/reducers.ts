const initialValues = {
    bundleName: '',
    currentState: {
        flowName: '',
        stateName: '',
        eventName: ''
    }
};

export const workspace = (state = initialValues, action) => {
    let { bundleName, currentState } = action;
    switch (action.type) {
        case 'OPEN_APP':
        return {
            ...state,
            errorbundleName: undefined,
            bundleName: bundleName
        };
        case 'ERROR_OPEN_APP':
        return {
            ...state,
            errorbundleName: bundleName
        };
        case 'GET_CURRENT_STATE':
        return {
            ...state,
            currentState: currentState
        };
        default:
            return state;
    }    
};