import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers} from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dodavanje-cveca',
  templateUrl: './dodavanje-cveca.component.html',
  styleUrls: ['./dodavanje-cveca.component.css']
})
export class DodavanjeCvecaComponent implements OnInit {
  private cvet_tipovi : any[]; 
  public dodavanjeCvecaForm = new FormGroup({
    sifra: new FormControl(),
    naziv: new FormControl(),
    cena: new FormControl(),
    opis: new FormControl(),
    cvet_tip: new FormControl()
  });
  public addCvetTipForm = new FormGroup({
    tip: new FormControl()
  });
  constructor(private _http: Http, private _router: Router) { }

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
 public dodajCvet() {
    var data = "sifra="+this.dodavanjeCvecaForm.value.sifra+"&naziv="+this.dodavanjeCvecaForm.value.naziv+"&cena="+this.dodavanjeCvecaForm.value.cena+"&opi="+this.dodavanjeCvecaForm.value.opis+"&cvet_tip_id="+this.dodavanjeCvecaForm.value.cvet_tip;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append("token",localStorage.getItem("token"));
    this._http.post('http://localhost:8080/IT255-DZ14/dodajCvece.php',data, { headers:headers }).subscribe( data => {
      
          if(data["_body"].indexOf("error") === -1){
            alert("Uspesno dodavanje cveta");
            this._router.navigateByUrl('pretraga');
          }else{
            alert("Neuspesno dodavanje cveta");
          }
        
        }
      );
  }
  public addCvetTip() {
    const data = 'tip=' + this.addCvetTipForm.value.tip;
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));

    this._http.post('http://localhost:8080/IT255-DZ14/addcvettip.php', data, { headers: headers}).subscribe((result) => {
      this._router.navigateByUrl('alltipoviCvet');
   },
    err => {
      const obj = JSON.parse(err._body);
      const element  = <HTMLElement> document.getElementsByClassName('alert')[0];
      element.style.display = 'block';
      element.innerHTML = obj.error.split('\\r\\n').join('<br/>').split('\"').join('');
    }
  );

 }

}
