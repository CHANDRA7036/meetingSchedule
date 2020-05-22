import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from
 './components/todos/todos.component';
import { AboutComponent } from 
'./components/pages/about/about.component';
import { CalendarComponent } from 
'./components/calendar/calendar.component';


const routes: Routes = [
  // { path: '',component:TodosComponent },
  // { path: 'about',component:AboutComponent },
  { path: 'calendar',component:CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
