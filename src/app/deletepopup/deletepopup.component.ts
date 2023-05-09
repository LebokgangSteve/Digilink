import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-deletepopup',
  templateUrl: './deletepopup.component.html',
  styleUrls: ['./deletepopup.component.css'],
})
export class DeletepopupComponent {
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(
    private toastr: ToastrService,
    private builder: FormBuilder,
    private service: AuthService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) {}

  editdata: any;
  ngOnInit(): void {
    this.service.GetAllRole().subscribe((res) => {
      this.rolelist = res;
    });
    if (this.data.usercode != null && this.data.usercode != '') {
      this.service.GetByCode(this.data.usercode).subscribe((res) => {
        this.editdata = res;
        this.registerform.setValue({
          id: this.editdata.id,
          fullName: this.editdata.fullName,
          password: this.editdata.password,
          confirmPassword: this.editdata.confirmPassword,
          role: this.editdata.role,
        });
      });
    }
  }

  rolelist: any;
  registerform = this.builder.group({
    id: this.builder.control(''),
    fullName: this.builder.control('', Validators.required),
    password: this.builder.control(''),
    confirmPassword: this.builder.control(''),
    role: this.builder.control('', Validators.required),
  });

  deleteUser() {
    if (this.registerform.valid) {
      this.service.delete(this.registerform.value.id).subscribe((res) => {});
      this.service.deletedUsers(this.registerform.value).subscribe((res) => {});
      //this.toastr.success('Deleted successfully'); need to fix toastr
      alert('Deleted successfully');
      this.router.navigate(['user']);
      this.dialog.closeAll();
    } else {
      alert('User Already Deleted');
      //this.toastr.warning('User Already Deleted');
    }
  }

  // checking input box
  onFullName(value: string) {
    this.fullName = value;
  }
  onEmail(value: string) {
    this.email = value;
  }
  onPassword(value: string) {
    this.password = value;
  }

  onConfirmPassword(value: string) {
    this.confirmPassword = value;
  }
}
