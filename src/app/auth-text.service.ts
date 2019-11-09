import { Injectable } from "@angular/core";
import { Observable, of, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthTextService {
  private messageSubject = new BehaviorSubject<string[]>([]);
  public message: Observable<string[]> = this.messageSubject.asObservable();

  setAuthTitle(payload: string[]) {
    this.messageSubject.next(payload);
  }
  constructor() {}
}
