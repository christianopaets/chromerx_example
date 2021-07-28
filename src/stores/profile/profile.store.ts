import {Service} from 'typedi';
import {Store} from 'chromerx';
import {ProfileState} from './store/profile.state';
import {ProfileActions} from './store/profile.actions';
import {ProfileReducer} from './store/profile.reducer';

@Service()
export class ProfileStore extends Store<ProfileState> {
  protected _storeName: string = 'profile';

  actions = ProfileActions;

  constructor(protected reducer: ProfileReducer) {
    super(reducer);
  }
}
