export interface Tasks {
    _id?: string;
    title: string;
    description: string;
    status: string;
    priority: string;
    dueDate: string;
    history?: History[];
    createdAt?: string;
    updatedAt?: string;
  }
  
  export interface History {
    _id: string;
  }
  export interface TasksResponse {
    tasks: Tasks[];
  }
  export interface Input{
    title:String;
    description: String;
    status: String;
    priority: String;
    duedate: String;
  }