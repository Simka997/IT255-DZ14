import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers} from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-cvet',
  templateUrl: './update-cvet.component.html',
  styleUrls: ['./update-cvet.component.css']
})
export class UpdateCvetComponent implements OnInit {
  public cvet_tipovi: any[];
  http: Http;
  router: Router;
  route: ActivatedRoute; 
  public data: any[];

  public updateCvetForm = new FormGroup({
    id: new FormControl(),
    sifra: new FormControl(),
    naziv: new FormControl(),
    cena: new FormControl(),
    opis: new FormControl(),
    cvet_tip: new FormControl()
  });

  constructor(route: ActivatedRoute, http: Http, router: Router) {
    this.http = http; 
    this.router = router; 
    this.route = route;
    }

  ngOnInit() {
    this._getCvetTipovi();
    this.route.params.subscribe((params: Params) => { 
    let id = params['id']; 
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded'); 
    headers.append("token",localStorage.getItem("token"));
    this.http.get('http://localhost:8080/IT255-DZ14/getCvet.php?id='+id,{headers:headers}).subscribe(data => {
    this.data =JSON.parse(data['_body']).cvet;

           this.updateCvetForm.controls['id'].setValue(this.data['id']);
           this.updateCvetForm.controls['sifra'].setValue(this.data['sifra']);
           this.updateCvetForm.controls['naziv'].setValue(this.data['naziv']);
           this.updateCvetForm.controls['cena'].setValue(this.data['cena']);
           this.updateCvetForm.controls['opis'].setValue(this.data['opis']);
          
          },
           err => { this.router.navigate(['./']); 
          }
         ); 
        
        }); 
   }

  private _getCvetTipovi() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
    this.http.get('http://localhost:8080/IT255-DZ14/getCvetTip.php', {headers: headers}).subscribe((data): any => {
          this.cvet_tipovi = JSON.parse(data['_body']).cvet_tipovi;
        },
        err => {
          this.router.navigateByUrl('');
        }
      );    
  }

  public updateCvet() {
    var data = "sifra="+this.updateCvetForm.value.sifra+"&naziv="+this.updateCvetForm.value.naziv+"&cena="+this.updateCvetForm.value.cena+"&opi="+this.updateCvetForm.value.opis+"&cvet_tip_id="+this.updateCvetForm.value.cvet_tip+"&id="+this.updateCvetForm.value.id;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append("token",localStorage.getItem("token"));
    this.http.post('http://localhost:8080/IT255-DZ14/updateCvet.php', data, { headers:headers }).subscribe( data => {
          if(data["_body"].indexOf("error") === -1){
            alert("Cvet uspesno izmenjen");
            this.router.navigateByUrl('pretragacveca');
          }else{
            alert("Greska");
          }
        },err=>{this.router.navigateByUrl('');}
      );
  }
}
