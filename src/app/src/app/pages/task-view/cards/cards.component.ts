import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Tasks } from '../../../../../models/tasks';
import { TasksService } from '../../../../../service/tasks.service';
import { ngxCsv } from 'ngx-csv';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [NgFor,NgClass,RouterLink,AsyncPipe,NgIf],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() tasks$!: Observable<Tasks[]>;
  data:any[] = [];
  constructor(private server: TasksService){
  }
  
  onDelete(task:any){
    const taskid = task.toString();
    this.server.deletetasks(taskid).subscribe((res: any)=>{
      alert(res.message);
      this.tasks$ = this.tasks$.pipe(
        map(tasks => tasks.filter(t => (t._id)?.toString()!== taskid))
      );
    })
  }
  onCsv(task:any){
    const taskid = task.toString();
    this.server.gettaskbyid(taskid).subscribe((task: any) => {
      const csvData = [
        {
          title: task.title,
          description: task.description,
          status: task.status,
          priority: task.priority,
          dueDate: task.dueDate,
        }
      ];
      const options = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true,
        showTitle: true,
        title: 'Task Data',
        useBom: true,
        noDownload: false,
        headers: [
          'title',
          'description',
          'status',
          'priority',
          'dueDate'
        ]
      };
      this.data = task; 
      // console.log(this.data);
      new ngxCsv(csvData, 'Task Data', options);
    })
  }
}
