import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {catchError, timeout} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class LoadingService {
  private subject = new Subject<any>();

  showLoading() {
    this.subject.next(true);
  }
  hideLoading(){
    this.subject.next(false);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
