import { Injectable } from '@angular/core';
import './prototypes';

interface User {
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class Profile {
  public userId: string;
  public user: User;

  constructor() { }
}
