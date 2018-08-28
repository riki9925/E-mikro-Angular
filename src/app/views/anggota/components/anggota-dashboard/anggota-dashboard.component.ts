import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {navigation} from '@app/menu-tree';

@Component({
  selector: 'app-anggota-dashboard',
  templateUrl: 'anggota-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AnggotaDashboardComponent implements OnInit {
  items = navigation.anggota;

  constructor() {
  }

  ngOnInit() {
  }


}
