import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocetnaComponent } from '../pages/pocetna/pocetna.component';
import { OnamaComponent } from '../pages/onama/onama.component';
import { DodavanjeCvecaComponent } from '../pages/dodavanje-cveca/dodavanje-cveca.component';
import { RegistracijaComponent } from '../pages/registracija/registracija.component';
import { LoginComponent } from  '../pages/log-in/log-in.component';
import { NavbarComponent } from  '../pages/navbar/navbar.component';
import { SviTipoviCvetComponent } from  '../pages/svi-tipovi-cvet/svi-tipovi-cvet.component';
import { CvetComponent } from '../pages/cvet/cvet.component';
import { CveteComponent } from '../pages/cvete/cvete.component';
import { PretragaCvecaComponent } from '../pages/pretraga-cveca/pretraga-cveca.component';
import { UpdateCvetComponent } from '../pages/update-cvet/update-cvet.component';
import { UpdateCvetTipComponent } from '../pages/update-cvet-tip/update-cvet-tip.component';


const routes: Routes = [
 {
 path: '',
 component: PocetnaComponent,
 pathMatch: 'full'
 },
 {
 path: 'Onama',
 component: OnamaComponent,
 },
 {
path: 'dodavanjeCveca',
component: DodavanjeCvecaComponent,
},
{
path: 'registracija',
component: RegistracijaComponent,
},
{
path: 'Login',
component: LoginComponent,
},
{
path: 'navbar',
component: NavbarComponent,
},
{
path: 'sviTipovi',
component: SviTipoviCvetComponent,
},
{
path: 'cvet',
component: CvetComponent,
},
{
path: 'cvete',
component: CveteComponent,
},
{
path: 'pretragacveca',
component: PretragaCvecaComponent,
},
{
path: 'updatecvet',
component: UpdateCvetComponent,
},
{
path: 'updatecvettip',
component: UpdateCvetTipComponent,
}
];
@NgModule({
 imports: [
 RouterModule.forRoot(routes)
 ],
 exports: [
 RouterModule
 ],
 declarations: []
})
export class AppRoutingModule { }