import {Component, OnInit} from '@angular/core';
import {navigation} from '@app/menu-tree';

@Component({
  selector: 'app-pengaturan-layout',
  templateUrl: './pengaturan-layout.component.html',
  styleUrls: ['./pengaturan-layout.component.css']
})
export class PengaturanLayoutComponent implements OnInit {
  navigation = navigation.pengaturan;
  constructor() {
  }

  ngOnInit() {
  }

}
