import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {JobTypeService} from "../../../../../../../share/services/job-type/job-type.service";
import {SnackBarService} from "../../../../../../../share/services/snack-bar/snack-bar.service";

@Component({
  selector: 'app-new-job-type',
  templateUrl: './new-job-type.component.html',
  styleUrls: ['./new-job-type.component.scss']
})
export class NewJobTypeComponent implements OnInit {

  newJobTypeForm = new FormGroup({
    typeName: new FormControl('', [Validators.required]),
    typeImage: new FormControl('', [Validators.required]),
  });

  constructor(
    private jobTypeService: JobTypeService,
    private snackBarService: SnackBarService,
  ) {
  }

  ngOnInit(): void {
  }

  newJobTypeFormSubmit(form: FormGroupDirective) {
    let typeName = this.newJobTypeForm.get('typeName')?.value!;
    let typeImage = this.newJobTypeForm.get('typeImage')?.value!;
    this.jobTypeService.newJobType(typeName, typeImage).subscribe(response => {
      console.log(response)
      console.log(response.code)
      if (response.code == 200) {
        this.snackBarService.openSuccessSnackBar('Success!', 'Close');
        this.refreshForm(form);
      }
    }, error => {
      this.refreshForm(form);
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    })
  }
  private refreshForm(form: FormGroupDirective) {
    form.resetForm();
  }
}
