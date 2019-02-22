import { Command } from './constants';
import { init, WorkflowAction, WorkflowOptions } from './actions';
import executeCommand, { OptionalParams } from './execute';
import { PushToHistory } from './helpers';

export type Dispatch = (actions: WorkflowAction) => void;

const initFlow = (options: WorkflowOptions, data?: Object) => (
  dispatch: any,
  getState: any
) => {
  dispatch(init(options));
  let { flowName, eventName } = getState().workspace.currentState;

  if (flowName === options.flowName && eventName) {
    dispatch(executeCommand(Command.EVENT, { name: eventName }, {}));
  } else {
   // PushToHistory(getState().workflow.flowName);
    dispatch(executeCommand(Command.START, { name: options.flowName }, data));
  }
};

const sendStateEvent = (name: string, data?: Object) => (
  dispatch: any
) => {
  dispatch(executeCommand(Command.EVENT, { name }, data));
};

const rollbackState = (stateId: string) => (
  dispatch: any
) => {
  dispatch(executeCommand(Command.ABORT, { name: stateId }));
};

export {initFlow, sendStateEvent, WorkflowOptions, rollbackState};
