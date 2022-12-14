import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'add-new-post',
    templateUrl: './add-new-post.component.html',
    styleUrls: ['./add-new-post.component.scss']
})
export class AddNewPostComponent {

    newPost: any = {
        userName: '',
        text: '',
        board: ''
    };

    constructor(
        public dialogRef: MatDialogRef<AddNewPostComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
        console.log('Users ', data);
    }

    onCloseClick(): void {
        this.dialogRef.close();
    }

}
