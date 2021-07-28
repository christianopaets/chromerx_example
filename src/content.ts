import 'reflect-metadata';
import {Container, Service} from 'typedi';
import {APP, TApplication} from 'chromerx';
import {ProfileStore} from './stores/profile/profile.store';
import {interval} from 'rxjs';

@Service()
export class Content {

  constructor(private readonly profileStore: ProfileStore) {
  }

  init(): void {
    interval(5000)
      .subscribe(() => this.profileStore.dispatch(new this.profileStore.actions.Load()));
    this.profileStore.select$('data').subscribe(res => console.log(res));
  }
}

Container.set(APP, TApplication.Content)
const content = Container.get(Content);

setTimeout(() => {
  content.init();
}, 1000);

