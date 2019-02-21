export enum Command {
  START = 'START',
  EVENT = 'EVENT',
  EXIT = 'EXIT',
  ABORT = 'ABORT',
  ROLLBACK = 'ROLLBACK'
}

export enum WorkflowStatus {
  SUCCESS,
  EXTERNAL_ENTER,
  EXTERNAL_RETURN,
  END
}
