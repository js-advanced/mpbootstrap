import { Command } from './constants';
import { success, sendCommand, WorkflowAction } from './actions';
import { createGetParams } from './helpers';

interface QueryParams {
  [key: string]: any;
}

type CommandString = 'START' | 'END' | 'EVENT' | 'ROLLBACK' | 'EXIT' | 'ABORT';

export interface OptionalParams {
  /**
   * Название процесса
   */
  name?: string;
}

interface APIQueryParams extends QueryParams, OptionalParams {
  /**
   * Команда
   */
  cmd: CommandString;
}

export default (
  command: Command,
  params: OptionalParams = {},
  postdata: any = {}
) => (dispatch, getState) => {
  const { url, processId, flowName } = getState().workflow;
  dispatch(sendCommand());

  let queryParams: APIQueryParams = {
    cmd: Command[command],
    d: new Date().getTime().toString()
  };

  const getParam = { ...queryParams, ...params };

  fetch(`/${url}/${createGetParams(getParam)}`, {
    method: 'POST',
    body: JSON.stringify(postdata),
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(function(response: any) {
      return response.json();
    })
    .then(function(result: any) {
      dispatch(success(result));
    });
};