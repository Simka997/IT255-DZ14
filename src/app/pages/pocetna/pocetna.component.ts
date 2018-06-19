import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styles: ['./pocetna.component.css']
})
export class PocetnaComponent  { 
  private posts: any[];
  public sifra;
  public naziv;
  public cena;
  public opis;

  constructor(private _http: Http) {
    this._http.get("http://localhost/IT255-DZ14/index.php").subscribe(
      data => {
        this.posts= JSON.parse(data["_body"]);
      }
     
    );

}
}
