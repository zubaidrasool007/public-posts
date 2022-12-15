import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

export const monthNames = [
    "Jan", "Feb", "March", "April", "May", "June",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec"
];

@Injectable()
export class PostService {

    constructor(private dialog: MatDialog) {
    }

    getUserNameInitial(userName: string): string {
        const [firstName, lastName] = userName.split(' ');
        return lastName ? firstName[0] + lastName[0] : firstName[0];
    }

    openDialog(component: ComponentType<any>, data?: any): MatDialogRef<ComponentType<any>> {
        return this.dialog.open(component, { disableClose: true, width: '350px', data });
    }

    getPostDate(date: string): string {
        const postDateObject = new Date(date);
        let postDate: string | number = postDateObject.getDate();
        switch (postDate) {
            case 1:
                postDate = postDate + 'st';
                break;
            case 2:
                postDate = postDate + 'nd';
                break;
            case 3:
                postDate = postDate + 'rd';
                break;

            default:
                postDate = postDate + 'th';
                break;
        }
        return monthNames[postDateObject.getMonth()] + ' ' + postDate;
    }

}