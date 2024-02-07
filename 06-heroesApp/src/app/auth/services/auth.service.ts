import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';
import { Passenger } from '../../../../../01-typescript-intro/src/topics/11-optional-chaining';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environments.baseUrl;
  private user?: User;

  constructor( private http: HttpClient) {}

  get currentUser():User | undefined{

    if( !this.user ){
      return undefined;
    }
    return structuredClone(this.user);
  }

  login( email: string, password: string ):Observable<User>{
    return this.http.get<User>(`${ this.baseUrl }/users/1`)
      .pipe(
        tap( user => this.user = user ),
        tap( user => localStorage.setItem( 'token', `sadadasdas.kjdiofjijd.aseqwefasd` )
      )
    );
  }

  checkAuthentication():Observable<boolean>{

    const token = localStorage.getItem("token");

    if( !token ){
      return of(false);
    }

    return this.http.get<User>(`${this.baseUrl}/users/1`)
    .pipe(
      tap( user => this.user = user ),
      map( user => !!user),
      catchError( err => of(false))
    )
  }

  logout():void{
    this.user = undefined;
    localStorage.clear();
  }
}