import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BaseAPIService {

    constructor(
        private http: HttpClient
    ) {}

    getCall() {}
}