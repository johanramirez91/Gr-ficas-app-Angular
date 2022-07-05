import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GraficasService {
  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get('http://localhost:3000/grafica');
  }

  getDataRedesSociales() {
    return this.getUsuarios().pipe(
      delay(1000),
      map((data) => {
        const labels = Object.keys(data);
        const values = Object.values(data);
        return { labels, values };
      })
    );
  }
}
