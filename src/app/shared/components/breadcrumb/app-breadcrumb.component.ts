import {Component, EventEmitter, Output} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {Location} from '@angular/common';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './app-breadcrumb.component.html',
})
export class AppBreadcrumpComponent {
  title;
  constructor(private router: Router,
              private location: Location,
              private route: ActivatedRoute) {
    this.router
      .events
      .filter(event => event instanceof NavigationEnd)
      .map(() => {
        let child = this.route.firstChild;
        while (child) {
          if (child.firstChild) {
            child = child.firstChild;
          } else if (child.snapshot.data && child.snapshot.data['title']) {
            return child.snapshot.data['title'];
          } else {
            return null;
          }
        }
        return null;
      }).subscribe( (customData: any) => {
        this.title = customData;
    });
  }
  back(){
    this.location.back();
  }
}
