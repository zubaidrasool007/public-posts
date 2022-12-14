import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewPostComponent } from './components/add-new-post/add-new-post.component';
import { PostService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Array<any> = [
    {
      userName: 'Andrew Tate',
      text: 'Hi there it is test text for the ticket',
      date: '2022-12-15T00:00:00.000Z',
      board: 'JIRA'
    },
    {
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
      if (newPost?.userName) this.posts.push(newPost);
    });
  }

}
