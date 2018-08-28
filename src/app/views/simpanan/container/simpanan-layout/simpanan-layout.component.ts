import {Component, OnDestroy, OnInit} from '@angular/core';
import {navigation} from '@app/menu-tree';

@Component({
  selector: 'app-simpanan-layout',
  templateUrl: './simpanan-layout.component.html',
  styleUrls: ['./simpanan-layout.component.css']
})
export class SimpananLayoutComponent implements OnInit, OnDestroy {
  navigation = navigation.simpanan;
  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
