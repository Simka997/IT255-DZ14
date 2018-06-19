import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers} from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-cvet-tip',
  templateUrl: './update-cvet-tip.component.html',
  styleUrls: ['./update-cvet-tip.component.css']
})
export class UpdateCvetTipComponent implements OnInit {

  http: Http;
  router: Router;
  route: ActivatedRoute; 
  public data: any[];

  public updateCvetTipForm = new FormGroup({
    id: new FormControl(),
    tip: new FormControl(),
  });
  constructor(route: ActivatedRoute, http: Http, router: Router) {
    this.http = http; 
    this.router = router; 
    this.route = route;
   }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => { 
      let id = params['id']; 
      let headers = new Headers();
       headers.append('Content-Type', 'application/x-www-form-urlencoded'); 
       headers.append("token",localStorage.getItem("token"));
        this.http.get('http://localhost:8080/IT255-DZ14/getCvetTip.php?id='+id,{headers:headers}).subscribe(data => {
           this.data =JSON.parse(data['_body']).type;
                  
           this.updateCvetTipForm.controls['id'].setValue(this.data['id']);
           this.updateCvetTipForm.controls['tip'].setValue(this.data['tip']);
          },
           err => { this.router.navigate(['./']); 
          }
         ); 
        }); 
   }

   public updateCvetTip() {
    var data = "tip="+this.updateCvetTipForm.value.tip+"&id="+this.updateCvetTipForm.value.id;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append("token",localStorage.getItem("token"));
    this.http.post('http://localhost:8080/IT255-DZ14/updateCvetTip.php', data, { headers:headers }).subscribe( data => {
          if(data["_body"].indexOf("error") === -1){
            alert("Tip cveta uspesno izmenjen");
            this.router.navigateByUrl('allcvettipovi');
          }else{
            alert("Greska");
          }
        },err=>{this.router.navigateByUrl('');}
      );
  }


}
