import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/User/user/User.interface';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  emitUser = new Subject();

  constructor() {}

  Users: User[] = [
    {
      id: '12345',
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      login: 'johndoe',
      password: 'password123',
      isDeleted: false,
    },
    {
      id: '54321',
      firstName: 'Jane',
      lastName: 'Doe',
      age: 28,
      login: 'janedoe',
      password: 'password456',
      isDeleted: true,
    },
    {
      id: '67890',
      firstName: 'Bob',
      lastName: 'Smith',
      age: 42,
      login: 'bobsmith',
      password: 'password789',
      isDeleted: false,
    },
    {
      id: '13579',
      firstName: 'Alice',
      lastName: 'Jones',
      age: 25,
      login: 'alicejones',
      password: 'passwordabc',
      isDeleted: true,
    },
    {
      id: '24680',
      firstName: 'Mike',
      lastName: 'Brown',
      age: 35,
      login: 'mikebrown',
      password: 'passworddef',
      isDeleted: true,
    },
    {
      id: '36912',
      firstName: 'Sarah',
      lastName: 'Williams',
      age: 29,
      login: 'sarahwilliams',
      password: 'passwordghi',
      isDeleted: false,
    },
    {
      id: '98765',
      firstName: 'David',
      lastName: 'Lee',
      age: 38,
      login: 'davidlee',
      password: 'passwordjkl',
      isDeleted: true,
    },
    {
      id: '45678',
      firstName: 'Karen',
      lastName: 'Chen',
      age: 27,
      login: 'karenchen',
      password: 'passwordmno',
      isDeleted: false,
    },
    {
      id: '24601',
      firstName: 'Tony',
      lastName: 'Nguyen',
      age: 31,
      login: 'tonynguyen',
      password: 'passwordpqr',
      isDeleted: false,
    },
    {
      id: '13579',
      firstName: 'Emily',
      lastName: 'Wang',
      age: 26,
      login: 'emilywang',
      password: 'passwordstu',
      isDeleted: false,
    },
  ];
  getUserData(user: any) {
    this.emitUser.next(user);
  }
  changeUserStatus(id: string) {
    for (const user of this.Users) {
      if (user.id === id) {
        user.isDeleted = !user.isDeleted;
      }
    }
  }
}
