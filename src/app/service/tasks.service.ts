import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Tasks, TasksResponse } from '../models/tasks';
import { Observable } from 'rxjs';
import { WindowLocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private http: HttpClient,private windowLocalStorageService: WindowLocalStorageService) { }
  token = this.windowLocalStorageService.getItem('Authorization') || "jdf kdjflkdsjflkjs";
  id = this.windowLocalStorageService.getItem('id') || "kdflkdjf";
  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.token);
    headers = headers.set('id', this.id);
    return headers;
  }
  getalltasks(){
    return this.http.get<Tasks[]>("https://task-manager-api-rqs7.onrender.com/api/v2/getalltask",{ headers: this.getHeaders() });
  }
  createtasks(data: any){
    return this.http.post("https://task-manager-api-rqs7.onrender.com/api/v2/createtask",data,{ headers: this.getHeaders() });
  }
  deletetasks(data: any){
    return this.http.delete(`https://task-manager-api-rqs7.onrender.com/api/v2/deletetask/${data}`,{ headers: this.getHeaders() });
  }
  updatetask(id: any,data: any){
    return this.http.put(`https://task-manager-api-rqs7.onrender.com/api/v2/updatetask/${id}`,data,{ headers: this.getHeaders() });
  }
  gettaskbyid(data: any){
    return this.http.get(`https://task-manager-api-rqs7.onrender.com/api/v2/gettaskbyid/${data}`,{ headers: this.getHeaders() });
  }
  getimportanttask(){
    return this.http.get(`https://task-manager-api-rqs7.onrender.com/api/v2/getimportanttask`,{ headers: this.getHeaders() });
  }
  getcompeletedtask(){
    return this.http.get(`https://task-manager-api-rqs7.onrender.com/api/v2/getimportanttask`,{ headers: this.getHeaders() });
  }
  getincompeletedtask(){
    return this.http.get(`https://task-manager-api-rqs7.onrender.com/api/v2/getimportanttask`,{ headers: this.getHeaders() });
  }
}