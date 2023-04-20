import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../share/services/user/user.service";

@Component({
  selector: 'app-faq-page-context',
  templateUrl: './faq-page-context.component.html',
  styleUrls: ['./faq-page-context.component.scss']
})
export class FaqPageContextComponent implements OnInit {
  panelOpenState: boolean = false;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.userService.getUserData().subscribe(response => {
      console.log(response)
    }, error => {
      console.log(error)
    })
  }

}
