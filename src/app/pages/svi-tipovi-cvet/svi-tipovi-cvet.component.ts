import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'; 
import {Router} from '@angular/router';

@Component({
  selector: 'app-svi-tipovi-cvet',
  templateUrl: './svi-tipovi-cvet.component.html',
  styleUrls: ['./svi-tipovi-cvet.component.css']
})
export class SviTipoviCvetComponent implements OnInit {

  private cvet_tipovi : any[]; 
  constructor(private _http: Http, private _router: Router) {
  }
  ngOnInit() {
    this._getCvetTipovi();
  }

  private _getCvetTipovi() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
    this._http.get('http://localhost:8080/IT255-DZ14/getTipoveCveca.php', {headers: headers}).subscribe((data): any => {
          this.cvet_tipovi = JSON.parse(data['_body']).cvet_tipovi;
        },
        err => {
          this._router.navigateByUrl('');
        }
      );
  }
  public removeCvetTip(event: Event, item: Number) { 
    var headers = new Headers(); 
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
     this._http.get('http://localhost:8080/IT255-DZ14/deleteCvetTip.php?id='+item, {headers:headers})  .subscribe( data => {
        event.srcElement.parentElement.parentElement.remove();
      }); 
    }
    public updateCvetTip(item: Number){

      this._router.navigate(['../updatecvettip',item]);
        
      }


}
