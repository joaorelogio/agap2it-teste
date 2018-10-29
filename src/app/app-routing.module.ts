import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  { path: 'content', component: ContentComponent, children: [
    {
      path: '',
      component: EmptyComponent
    }, {
      path: 'content/empty',
      component: EmptyComponent
    }, {
      path: 'content/form',
      component: FormComponent
    }, {
      path: 'content/posts',
      component: PostsComponent
    }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
