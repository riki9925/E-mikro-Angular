import {Component, OnInit} from '@angular/core';
import {navigation} from '@app/menu-tree';

@Component({
  selector: 'app-simpanan-dashboard-component',
  templateUrl: './simpanan-dashboard.component.html'
})
export class SimpananDashboardComponent implements OnInit {
  items = navigation.simpanan;

  constructor() {
  }

  ngOnInit() {
  }
}
