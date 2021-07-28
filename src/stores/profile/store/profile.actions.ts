import {Action} from 'chromerx';

export namespace ProfileActions {

  export enum TActions {
    Init = '[Profile] Init',
    Load = '[Profile] Load',
    Success = '[Profile] Load success'
  }

  export class Init implements Action {
    readonly type = TActions.Init;
  }

  export class Load implements Action {
    readonly type = TActions.Load;
  }

  export class Success implements Action {
    readonly type = TActions.Success;

    constructor(readonly payload: unknown) {
    }
  }

  export type TAll = Init | Load | Success;
}
