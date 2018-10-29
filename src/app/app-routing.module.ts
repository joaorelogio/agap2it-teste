import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { EmptyComponent } from './components/empty/empty.component';
import { FormComponent } from './components/form/form.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: EmptyComponent
  }, {
    path: 'empty',
    component: EmptyComponent
  }, {
    path: 'form',
    component: FormComponent
  }, {
    path: 'posts',
    component: PostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
