import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  public registracijaForm = new FormGroup({
    
    username: new FormControl(),
    password: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl()
  });

  constructor(private _http: Http, private _router: Router) { }
    ngOnInit() {
    if(localStorage.getItem('token')) {
      this._router.navigateByUrl('');
    }
   
  }
  public registracija() {

    let data = "username="+this.registracijaForm.value.username+"&password="+this.registracijaForm.value.password+"&firstName="+this.registracijaForm.value.firstName+"&lastName="+this.registracijaForm.value.lastName;

    const headers = new Headers();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');
  
    this._http.post('http://localhost:8080/IT255-DZ14/registracija.php', data, {headers:headers}).subscribe( data => {
        let obj = JSON.parse(data["_body"]);
        this._router.navigate(['registracija']);
        alert("Uspesno ste se registrovali");
     },
      err => {
        let obj = JSON.parse(err._body);
        let element  = <HTMLElement> document.getElementsByClassName("alert")[0];
        element.style.display = "block";
        element.innerHTML = obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
      }
    );
 
  
  }
}
