import {Service} from 'typedi';
import {from, map, Observable} from 'rxjs';
import axios from 'axios';

@Service()
export class ProfileService {

  getProfile(): Observable<unknown> {
    return from(axios.get('https://randomuser.me/api/')).pipe(map(res => res.data));
  }
}
