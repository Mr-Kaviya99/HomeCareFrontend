import { Component, OnInit } from '@angular/core';
import {TabItem} from "../../../../../share/dto/TabItem";

@Component({
  selector: 'app-job-type',
  templateUrl: './job-type.component.html',
  styleUrls: ['./job-type.component.scss']
})
export class JobTypeComponent implements OnInit {
  tabs: TabItem[] = [
    {
      label: 'New Job Type',
      icon: '',
      route: '/admin/dashboard/job-type/new'
    },
    {
      label: 'All Job Type',
      icon: '',
      route: '/admin/dashboard/job-type/all'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
