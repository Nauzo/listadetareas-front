import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {ServicioComponentService}from './service/servicio-component.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'listadetareas-front';
  todoList:any =[] //
  public nombreTarea:string = '';
  //Constructor para llamar a la Api
  constructor(public api:  ServicioComponentService) { 
  }

  //Mostrar el listado de tareas agendadas al iniciar la pagina
  ngOnInit(){
    this.api.getData().subscribe((data)=>{
      this.todoList=data
    })
  }
  //agregar tarea
  addtarea(valor: string):void{
    let newItem = {
      id:0,
      body: valor
    }
    this.api.createTarea(newItem).subscribe(
      () => this.ngOnInit()
    );
    console.log('Tarea agregada');
  }
  //eliminar tarea de la lista
  eliminarTarea(id: number):void{
    this.api.deleteTarea(id).subscribe(
      () => this.ngOnInit()
    );
    console.log("tarea borrada");
  }
  //editar tarea de la lista
  actualizarTarea(id: number, valor: string):void{
    console.log(id);
    console.log(valor);
    let updateItem = {
      id:id,
      body: valor
    }
    this.api.updateTarea(updateItem).subscribe(
      () => this.ngOnInit()
    );
    console.log('Tarea editada');
  }

}
