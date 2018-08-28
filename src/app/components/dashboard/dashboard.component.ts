import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dashboard-component',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  items = [
    {
      title: 'Modul Setting',
      path: '/pengaturan',
      description: 'Modul Setting',
    },
    {
      title: 'Modul Anggota',
      path: '/anggota',
      description: 'Modul Anggota',
    }, {
      title: 'Modul Unit Simpan Pinjam',
      path: '/usp',
      description: 'Modul Unit Simpan Pinjam',
    }
  ];


  constructor() {
  }

  ngOnInit() {
  }
}
