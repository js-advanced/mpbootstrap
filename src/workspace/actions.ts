import * as Redux from 'redux';

interface WorkSpaceAction extends Redux.Action {
    type: 'OPEN_APP' | 'GET_CURRENT_STATE' | 'ERROR_OPEN_APP';
    bundleName?: string;
    currentState?: CurrentState;
}
interface CurrentState extends Redux.Action {
    flowName: string;
    stateName: string;
    eventName: string;
}

export const openApp = (bundleName: string): WorkSpaceAction => ({
    type: 'OPEN_APP',
    bundleName: bundleName
});

export const errorOpenApp = (bundleName: string): WorkSpaceAction => ({
    type: 'ERROR_OPEN_APP',
    bundleName: bundleName
});

export const getCurrentState = (currentState: CurrentState): WorkSpaceAction => ({
    type: 'GET_CURRENT_STATE',
    currentState
});