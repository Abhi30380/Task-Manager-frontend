import { HttpInterceptorFn } from '@angular/common/http';
// import { LocalStorageService } from '../service/local-storage.service';

// @Injectable
export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  // debugger;
  // const localstorageservice = new LocalStorageService();
  // let  token = localstorageservice.getItem('Authorization') || 'bearer kdfjkldsfj';
  // let  id = localstorageservice.getItem('id') || 'bearer kdfjkldsfj';
  // let token = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhaW1zIjpbeyJuYW1lIjoidGNtMTIzIn0seyJqdGkiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFlYUWlPakUzTWpBNU5USXlORGw5LjRVdGtNTXYxdEFaSEF3SHJqeDk5V3VNbFVLdHVtQlI3a3RBU2wtOGFMUk0ifV0sImlhdCI6MTcyMDk1MjI0OSwiZXhwIjoxNzIxMTI1MDQ5fQ.fQKd4Asq-PnIYAXhPBwVdX002e_TIm7kxWLR31CqhcQ';
  // let id = '66929fcca46086a8086ffd6d';
  // console.log(token);
  // if(token){
  //   req = req.clone({
  //     setHeaders:{
  //       'Authorization': token,
  //       'id': id
  //     }
  //   });
  // }
  return next(req);
};
