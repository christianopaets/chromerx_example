import {Service} from 'typedi';
import {Reducer} from 'chromerx';
import {ProfileState} from './profile.state';
import {ProfileActions} from './profile.actions';

@Service()
export class ProfileReducer extends Reducer<ProfileState> {
  defaultValue: ProfileState = {
    data: null
  };

  reducer(state: ProfileState, action: ProfileActions.TAll): ProfileState {
    switch (action.type) {
      case ProfileActions.TActions.Init: {
        return this.defaultValue;
      }

      case ProfileActions.TActions.Success: {
        return {
          ...state,
          data: action.payload
        };
      }
    }
    return state;
  }


}
