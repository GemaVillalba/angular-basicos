import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroesBorrados : string[] = [];

  borrarHeroe(){
      console.log('Borrando ');
      const heroeBorrado = this.heroes.splice(0,1) || '';
      this.heroesBorrados.push(heroeBorrado.toString());
      console.log(heroeBorrado);
  }
}
