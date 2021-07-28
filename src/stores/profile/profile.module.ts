import {Service} from 'typedi';
import {StoreModule} from 'chromerx';
import {ProfileState} from './store/profile.state';
import {ProfileStore} from './profile.store';
import {ProfileEffects} from './store/profile.effects';

@Service()
export class ProfileModule extends StoreModule<ProfileState> {

  constructor(protected readonly store: ProfileStore,
              protected readonly effects: ProfileEffects) {
    super(store, effects);
  }
}
