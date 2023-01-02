import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'add-new-user',
    templateUrl: './add-new-user.component.html',
    styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent {

    newUser: any = { name: '', _id: null };

    constructor(
        public dialogRef: MatDialogRef<AddNewUserComponent>,
    ) {
    }

    onCloseClick(): void {
        this.dialogRef.close();
    }
}
