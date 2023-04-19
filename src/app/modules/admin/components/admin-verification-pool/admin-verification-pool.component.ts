import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-verification-pool',
  templateUrl: './admin-verification-pool.component.html',
  styleUrls: ['./admin-verification-pool.component.scss']
})
export class AdminVerificationPoolComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.router.navigateByUrl('/admin/dashboard');
  }

}
