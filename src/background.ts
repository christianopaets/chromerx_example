import {Container, Service} from 'typedi';
import {ProfileModule} from './stores/profile/profile.module';
import {APP, TApplication} from 'chromerx';
import {ProfileStore} from './stores/profile/profile.store';

@Service()
export class Background {

  constructor(private readonly profileModule: ProfileModule,
              private readonly profileStore: ProfileStore) {
    this.profileStore.select$('data').subscribe(res => console.log(res));
  }
}

Container.set(APP, TApplication.Background)
const background = Container.get(Background);
