import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/interfaces';
import { NewStudentsService } from 'src/app/services/new-students.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent implements OnInit {
  fg: FormGroup = new FormGroup({});
  imageURL: string = '';
  chargingImage = false;

  constructor(
    private fb: FormBuilder,
    private newStudentsServices: NewStudentsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.newStudentsServices.newStudents$.subscribe((stundents: Student[]) => {
      console.log(stundents);
    });
    this.fg = this.fb.group({
      name: ['', Validators.required],
      patronus: [''],
      dateOfBirth: [''],
      image: ['', Validators.required],
    });
  }

  showPreview(event: Event) {
    if (event && event.target) {
      const file = (event.target as any).files[0];
      this.chargingImage = true;
      const reader = new FileReader();
      reader.onload = () => {
        this.imageURL = reader.result as string;
        this.fg.get('image')!.setValue(this.imageURL);
        this.chargingImage = false;
      };
      reader.readAsDataURL(file);
    }
  }

  submit() {
    const newDate = this.fg.value.dateOfBirth
      ? new Date(this.fg.value.dateOfBirth).toLocaleString().split(' ')[0].split('/').join('-')
      : this.fg.value.dateOfBirth;
    if (this.chargingImage || this.fg.invalid) return;
    this.newStudentsServices.add({...this.fg.value, dateOfBirth: newDate});
    this.router.navigateByUrl('/new-students')
  }
}
