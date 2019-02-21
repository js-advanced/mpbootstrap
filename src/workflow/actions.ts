import * as Redux from 'redux';
import { Data as WorkflowData, Error as WorkflowError } from './response';

export interface WorkflowOptions {
  url: string;
  flowName?: string;
}

export interface WorkflowAction extends Redux.Action {
    type: 'WF_INIT' | 'WF_SUCCESS' | 'WF_SEND_COMMAND' | 'WF_ERROR';
    body?: WorkflowData;
    error?: WorkflowError;
    options?: WorkflowOptions;
    data?: Object;
}

export const init = (options: WorkflowOptions): WorkflowAction => ({
    type: 'WF_INIT',
    options: options
});

export const success = (body: WorkflowData): WorkflowAction => ({
    type: 'WF_SUCCESS',
    body
});

export const sendCommand = (): WorkflowAction => ({type: 'WF_SEND_COMMAND'});

export const error = (data: WorkflowError): WorkflowAction => ({
    type: 'WF_ERROR',
    error: data
});