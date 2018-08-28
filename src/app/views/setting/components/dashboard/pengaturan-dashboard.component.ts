import {Component, OnInit} from '@angular/core';
import { navigation } from '@app/menu-tree';
@Component({
  selector: 'app-pengaturan-dashboard',
  templateUrl: './pengaturan-dashboard.component.html',
  styleUrls: ['./pengaturan-dashboard.component.css']
})
export class PengaturanDashboardComponent implements OnInit {
  items = navigation.pengaturan;
  constructor() {
  }

  ngOnInit() {
  }

}
