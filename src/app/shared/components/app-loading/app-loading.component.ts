import {Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import * as fromService from '@app/core';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-loading',
  templateUrl: 'app-loading.component.html'
})
export class AppLoadingComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  payload;
  constructor(private service: fromService.LoadingService, private cf: ChangeDetectorRef) {
    this.subscription = this.service.getMessage()
      .subscribe(message => {
        this.payload = message;
        this.cf.detectChanges();
        console.log("loading trigger");
        console.log(message);
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
