import { WorkflowAction } from './actions';
import { WorkflowStatus } from './constants';
import { Error, HistoryItem } from './response';

interface State {
  stateName?: string;
  flowName?: string;
  processId?: string;
  url?: string;
  isLoading: boolean;
  error?: Error;
  data?: Object;
  status?: WorkflowStatus;
  history?: HistoryItem[];
}

export const workflow = (
  state: State = { isLoading: false },
  action: WorkflowAction
) => {
  let { options, body, error } = action;
  switch (action.type) {
    case 'WF_INIT':
      return {
        ...state,
        url: options.url,
        flowName: options.flowName
      };
    case 'WF_SUCCESS':
      return {
        ...state,
        isLoading:
          ['EXTERNAL_ENTER', 'EXTERNAL_RETURN'].indexOf(body.result) > -1,
        status: WorkflowStatus[body.result],
        stateName: body.state || state.stateName,
        flowName: body.flow || state.flowName,
        processId: body.pid || state.processId,
        url: body.url || state.url,
        data: body.output || state.data,
        history: body.history || state.history
      };
    case 'WF_ERROR':
      return {
        ...state,
        isLoading: false,
        error: error
      };
    case 'WF_SEND_COMMAND':
      return {
        ...state,
        isLoading: true
      };

    default:
      return state;
  }
};
