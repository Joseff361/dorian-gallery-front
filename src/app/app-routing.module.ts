import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { UploadComponent } from './components/upload/upload.component';


const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'upload', component: UploadComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full'},
  { path: '**', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
