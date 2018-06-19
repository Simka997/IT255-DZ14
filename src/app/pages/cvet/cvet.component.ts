import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'; 
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cvet',
  templateUrl: './cvet.component.html',
  styleUrls: ['./cvet.component.css']
})
export class CvetComponent implements OnInit {

  http: Http;
  router: Router;
  route: ActivatedRoute; 
  data: any[];

  constructor(route: ActivatedRoute, http: Http, router: Router) {
     this.http = http; 
     this.router = router; 
     this.route = route;
     }
  
  ngOnInit() {

    if (localStorage.getItem('token')) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }


    this.route.params.subscribe((params: Params) => { 
      let id = params['id']; 
      let headers = new Headers();
       headers.append('Content-Type', 'application/x-www-form-urlencoded'); 
       headers.append("token",localStorage.getItem("token"));
        this.http.get('http://localhost:8080/IT255-DZ14/getCvet.php?id='+id,{headers:headers}).subscribe(data => {
           this.data =JSON.parse(data['_body']).data;},
           err => { this.router.navigate(['./']); 
          }
         ); 
        
        }); 
  }

  public isLogin: boolean;
  
  
   public logOut() {
     localStorage.removeItem('token');
     this.isLogin = false;
     location.reload();
   }


}
