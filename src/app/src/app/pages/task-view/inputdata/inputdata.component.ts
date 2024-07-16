import { HttpClient } from '@angular/common/http';
import { Component, OnInit, input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { TasksService } from '../../../../../service/tasks.service';

@Component({
  selector: 'app-inputdata',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './inputdata.component.html',
  styleUrl: './inputdata.component.css'
})
export class InputdataComponent implements OnInit {
  id: string = '';
  isUpdate: boolean = false;
  constructor(private http: HttpClient, private router: Router, private server: TasksService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.id = params.get('id') ?? '';
        this.isUpdate = true;
        this.server.gettaskbyid(this.id).subscribe((task: any) => {
          this.userForm.patchValue({
            title: task.title,
            description: task.description,
            status: task.status,
            priority: task.priority,
            dueDate: task.dueDate,
          });
        });
      } else {
        this.id = '';
        this.isUpdate = false;
      }
    });
  }
  userForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl('Incomplete'),
    priority: new FormControl('low'),
    dueDate: new FormControl(''),
  })
  // onInput() {
  //   const inpObj = this.userForm.value;
  //   this.server.createtasks(inpObj).subscribe((res: any) => {
  //     if (!res.good) {
  //       alert(res.message);
  //     } else {
  //       this.router.navigateByUrl('/alltasks');
  //       alert("input success");
  //     }
  //   });
  // }
  onInput() {
    const inpObj = this.userForm.value;
    if (this.isUpdate) {
      this.server.updatetask(this.id, inpObj).subscribe((res: any) => {
        if (!res.good) {
          alert(res.message);
        } else {
          this.router.navigateByUrl('/alltasks');
          alert("Update success");
        }
      });
    } else {
      this.server.createtasks(inpObj).subscribe((res: any) => {
        if (!res.good) {
          alert(res.message);
        } else {
          this.router.navigateByUrl('/alltasks');
          alert("input success");
        }
      });
    }
  }

}
