import {Component, OnInit} from '@angular/core';
import {navigation} from '@app/menu-tree';

@Component({
  selector: 'app-usp-dashboard',
  templateUrl: './usp-dashboard.component.html',
  styleUrls: ['./usp-dashboard.component.css']
})
export class UspDashboardComponent implements OnInit {
  items = navigation.usp;

  constructor() {
  }

  ngOnInit() {
  }

}
