import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pretraga-cveca',
  templateUrl: './pretraga-cveca.component.html',
  styleUrls: ['./pretraga-cveca.component.css']
})
export class PretragaCvecaComponent implements OnInit {

  data: any[];
  message: String;
  check:boolean;
  private cvece:Array<any> = [];
  private sifra = 0;
  private cena = 0;
  
  public searchForm = new FormGroup({
    id: new FormControl(),
  });

  public deleteForm = new FormGroup({
    id: new FormControl(),
  });

  constructor(private _http: Http, private _router: Router) { }

ngOnInit() {
 const headers = new Headers();
 headers.append('Content-Type', 'application/x-www-form-urlencoded');
 headers.append('token', localStorage.getItem('token'));
 this._http.get('http://localhost:8080/IT255-DZ14/getCvece.php', {headers: headers})
    .subscribe(data => {this.cvece = JSON.parse(data['_body']).cvece;},
 err => {this._router.navigate(['']);});
}
public removeRoom(event: Event, item: Number) { 
  var headers = new Headers(); 
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  headers.append('token', localStorage.getItem('token'));
  this._http.get('http://localhost:8080/IT255-DZ14/deleteCvet.php?id='+item, {headers:headers}).subscribe( data => {
  event.srcElement.parentElement.parentElement.remove();});}

public viewCvet(item: Number){
 this._router.navigate(['../scet', item]);}

public updateCvet(item: Number){
 this._router.navigate(['../updatecvet',item]);}
      
public searchRoom(){
  var id = this.searchForm.value.id; 
  var headers = new Headers(); 
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  headers.append('token', localStorage.getItem('token'));
  this._http.get('http://localhost:8080/IT255-DZ14/getCvetById.php?id='+id, {headers:headers})  .subscribe( data => {
  
  this.data =JSON.parse(data['_body']).room;
        if(this.data['id'] != null){
             this.check = true;
        }else{
             this.check = false;
             this.message="Trazeni cvet ne postoji";
            }
        }, err => {
          alert("nije dobro");
        });
      }

public deleteCvet(){
  var id = this.deleteForm.value.id; 
  var headers = new Headers(); 
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  headers.append('token', localStorage.getItem('token'));
  this._http.get('http://localhost:8080/IT255-DZ14/deleteCvet.php?id='+id, {headers:headers})  .subscribe( data => {
    }, err => {
      alert("nije dobro");
    });
  }




}
