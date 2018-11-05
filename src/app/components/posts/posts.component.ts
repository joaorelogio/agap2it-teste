import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  allPosts: any;
  pager: any = {};
  pagedPosts: any[];

  constructor(
    public postService: PostService
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getAllPosts().subscribe((data) => {
      this.allPosts = data;
      this.setPage(1);
    });
  }

  setPage(page: number) {
    this.pager = this.postService.getPagination(this.allPosts.length, page);
    this.pagedPosts = this.allPosts.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

}
