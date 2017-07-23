import { Injectable } from "@angular/core";
import "rxjs/Rx";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class DataService {
  private url = "https://yesno.wtf/api";
  constructor(private http: Http) {}

  fetch(): Observable<void> {
    return this.http.get(this.url).map((response: Response) => {
      return response.json();
    });
  }
}
