import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationRequest } from 'src/app/model/authentication-request.model';
import {map} from 'rxjs/operators';
import { NewPassword } from 'src/app/model/newpassword.model';

const API_URL = "http://iiht-final-elb-386780132.ap-south-1.elb.amazonaws.com/api/v1.0/tweets/login";
export const Forgot_URL="http://iiht-final-elb-386780132.ap-south-1.elb.amazonaws.com/api/v1.0/tweets";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  test: Array<{firstName:string, lastName:string}> = [];
  constructor(public http : HttpClient) { }
  login(details : AuthenticationRequest):any{
    return this.http.post(API_URL,details).pipe(
      map((successData : Response)=>{
        // console.log(successData); 
        return successData;
      }),
      map(failureData=>{
        // console.log(failureData);
        return failureData;
      })
    );
  }
  forgotPassword(username : string, password : string, contact : string):any{
    let newPassword = new NewPassword(password,contact);
    // console.log(newPassword);
    return this.http.put(Forgot_URL+"/"+username+"/forgot",newPassword).pipe(
      map((successData : Response)=>{
        // console.log(successData); 
        return successData;
      }),
      map(failureData=>{
        // console.log(failureData);
        return failureData;
      })
    );
  }
}
