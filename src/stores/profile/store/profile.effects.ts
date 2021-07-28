import {Service} from 'typedi';
import {Actions, Effect, Effects, ofType} from 'chromerx';
import {ProfileActions} from './profile.actions';
import {switchMap} from 'rxjs';
import {ProfileService} from '../profile.service';
import {ProfileStore} from '../profile.store';

@Service()
export class ProfileEffects extends Effects {

  @Effect()
  load$ = this.actions
    .pipe(ofType(ProfileActions.TActions.Load))
    .pipe(switchMap(() => this.profileService.getProfile()
      .pipe(switchMap(res => this.profileStore.saveState(new ProfileActions.Success(res))))
    ));

  constructor(private readonly actions: Actions,
              private readonly profileService: ProfileService,
              private readonly profileStore: ProfileStore) {
    super();
  }

  init() {
    this.profileStore.dispatch(new ProfileActions.Init());
  }
}
