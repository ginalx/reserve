import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TargetComponent } from './target/target.component';

const routes: Routes = [
  {
    path: 'target',
    component: TargetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
