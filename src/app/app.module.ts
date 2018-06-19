import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import {OnamaComponent} from './pages/onama/onama.component';
import { PocetnaComponent } from './pages/pocetna/pocetna.component';
import { SearchpipePipe } from './pipes/searchpipe.pipe';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DodavanjeCvecaComponent } from './pages/dodavanje-cveca/dodavanje-cveca.component';
import { RegistracijaComponent } from './pages/registracija/registracija.component';
import { LoginComponent } from './pages/log-in/log-in.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { SviTipoviCvetComponent } from './pages/svi-tipovi-cvet/svi-tipovi-cvet.component';
import { CvetComponent } from './pages/cvet/cvet.component';
import { CveteComponent } from './pages/cvete/cvete.component';
import { PretragaCvecaComponent } from './pages/pretraga-cveca/pretraga-cveca.component';
import { UpdateCvetComponent } from './pages/update-cvet/update-cvet.component';
import { UpdateCvetTipComponent } from './pages/update-cvet-tip/update-cvet-tip.component';


@NgModule({
  declarations: [
    AppComponent,
    OnamaComponent,
    PocetnaComponent,
    SearchpipePipe,
    DodavanjeCvecaComponent,
    RegistracijaComponent,
    LoginComponent,
    NavbarComponent,
    SviTipoviCvetComponent,
    CvetComponent,
    CveteComponent,
    PretragaCvecaComponent,
    UpdateCvetComponent,
    UpdateCvetTipComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
