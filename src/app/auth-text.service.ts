import { Injectable } from "@angular/core";
import { Observable, of, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthTextService {
  private messageSubject = new BehaviorSubject<string[]>([]);
  public message: Observable<string[]> = this.messageSubject.asObservable();

  public headerSubject = new BehaviorSubject<string>("color");
  public headerColor: Observable<string> = this.headerSubject.asObservable();

  setAuthTitle(payload: string[]) {
    this.messageSubject.next(payload);
  }

  setHeaderColor(payload: string) {
    this.headerSubject.next(payload);
  }
  constructor() {}
}
