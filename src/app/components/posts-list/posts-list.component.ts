import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { PostService } from 'src/app/services/main.service';
import { AddNewUserComponent } from '../add-new-user/add-new-user.component';

@Component({
    selector: 'posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent {

    @Input() postsList: Array<any> = [];
    @Input() usersList: Array<any> = [];
    @Output() postUpdated: EventEmitter<any> = new EventEmitter();
    @Output() newUserAdded: EventEmitter<any> = new EventEmitter();

    constructor(
        public postService: PostService,
    ) { }

    addNewPost(post: unknown): void {
        this.postUpdated.emit(post);
    }

    updatePostText(event: Event, post: any): void {
        post.text = (event.target as HTMLDivElement).innerHTML;
        console.log('Post ', post);
        this.postUpdated.emit(post);
    }

    addNewUser() {
        const newPostDialogRef = this.postService.openDialog(AddNewUserComponent);

        newPostDialogRef.afterClosed().subscribe((newUser: any) => {
            if (newUser.name) {
                this.newUserAdded.emit(newUser);
            }
        });
    }

    userChanged(user: any, post: any): void {
        post.userName = user.name;
        this.postUpdated.emit(post);
    }

}
