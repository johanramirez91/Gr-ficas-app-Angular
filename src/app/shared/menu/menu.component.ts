import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string;
  texto: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent {
  menu: MenuItem[] = [
    {
      ruta: '/graficas/barra',
      texto: 'Barra',
    },
    {
      ruta: '/graficas/barras-doble',
      texto: 'Barras Doble',
    },
    {
      ruta: '/graficas/dona',
      texto: 'Dona',
    },
    {
      ruta: '/graficas/donahttp',
      texto: 'Dona Http',
    },
  ];
  constructor() {}
}
