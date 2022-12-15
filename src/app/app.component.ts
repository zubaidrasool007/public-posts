import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewPostComponent } from './components/add-new-post/add-new-post.component';
import { PostService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Array<any> = [
    {
      _id: 1,
      userName: 'Andrew Tate',
      text: 'Hi there it is test text for the ticket',
      date: '2022-12-15T00:00:00.000Z',
      board: 'JIRA'
    },
    {
      _id: 2,
      userName: 'James',
      text: 'Hi there it is test text for the ticket',
      date: '2022-12-15T00:00:00.000Z',
      board: 'JIRA'
    }
  ];

  users: Array<any> = [
    { _id: 1, name: 'Harvey Specter' },
    { _id: 2, name: 'Mike Ross' },
    { _id: 3, name: 'Louis Lit' },
  ];

  constructor(private postService: PostService)  {}

  addNewPost(): void {
    const newPostDialogRef = this.postService.openDialog(AddNewPostComponent, this.users);

    newPostDialogRef.afterClosed().subscribe((newPost: any) => {
      newPost._id = this.posts.length + 1;
      if (newPost?.userName) this.posts.push(newPost);
    });
  }

  handleNewUser(newUser: any) {
    newUser._id = this.users.length + 1;
    this.users.push(newUser);
  }

  handleUpdatedPost(post: any): void {
    const index = this.posts.findIndex(x => x._id === post._id);
    this.posts[index] = post;
  }

}
