import {Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import * as fromService from '@app/core';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-alert',
  templateUrl: 'app-alert.component.html'})
export class AppAlertComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  payload;
  constructor(private service: fromService.MessageService, private cf: ChangeDetectorRef) {
    this.subscription = this.service.getMessage()
      .subscribe(message => {
        this.payload = message;
        setTimeout(() => {
          this.payload = null;
        }, 10000);
        this.cf.detectChanges();
        console.log("alert trigger");
        console.log(message);
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
