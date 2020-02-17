import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from './app-constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
    
  constructor(private http: HttpClient) { }

  private urlUsuario = AppConstants.BASE_URL_REST + AppConstants.USUARIO;

  getUsuariosList(): Observable<any> {
    let urlList = AppConstants.BASE_URL_REST + AppConstants.USUARIO;
    return this.http.get(`${urlList}`);
  }

  getUsuario(id: number): Observable<any> {
    return this.http.get(this.urlUsuario + '/' + id);
  }

  createUsuario(usuario: Object): Observable<Object> {
    return this.http.post(this.urlUsuario, usuario);
  }

  updateUsuario(id: number, value: any): Observable<Object> {
    return this.http.put(this.urlUsuario + '/' + id, value);
  }

  deleteUsuario(id: number): Observable<any> {
    return this.http.delete(this.urlUsuario + '/' + id, { responseType: 'text' });
  }
  
}
