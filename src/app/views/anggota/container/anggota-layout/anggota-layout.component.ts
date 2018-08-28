import {Component, OnInit} from '@angular/core';
import {navigation} from '@app/menu-tree';

@Component({
  selector: 'app-anggota-layout',
  templateUrl: './anggota-layout.component.html',
  styleUrls: ['./anggota-layout.component.css']
})
export class AnggotaLayoutComponent implements OnInit {
  navigation = navigation.anggota;
  constructor() {
  }

  ngOnInit() {
  }

}
