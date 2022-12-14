import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from 'src/app/services/posts.service';

@Component({
    selector: 'posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent {

    @Input() postsList: Array<any> = [];
    @Input() usersList: Array<any> = [];
    @Output() postUpdated: EventEmitter<any> = new EventEmitter();

    constructor(
        public postService: PostService,
    ) { }

    addNewPost(post: unknown): void {
        this.postUpdated.emit(post);
    }

    updatePost(event: Event, post: any): void {
        // Functionality yet to be added
        console.log('New Text==========', (event.target as HTMLDivElement).innerHTML);
        console.log('Old Text==========', post.text);
    }

    userChanged(user: any, post: any): void {
        this.postUpdated.emit(post);
    }

}
