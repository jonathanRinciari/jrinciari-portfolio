import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { WritingOverviewComponent } from './pages/writing-overview/writing-overview.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'writing', component: WritingOverviewComponent },
  { path: '**', redirectTo: ''}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})


export class AppRoutingModule {}
