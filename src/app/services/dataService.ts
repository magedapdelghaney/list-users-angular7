import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UsersDataService {
    constructor(private httpClient: HttpClient) { }

    sendLocationUrl = 'http://94.130.110.214:8090/api/list';

    headerOptions =   {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };


    sendLocation(location) {
        return this.httpClient.post(this.sendLocationUrl, location, this.headerOptions);

    }

}
