import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioComponentService {

  constructor(private http:HttpClient) {}

  getData():Observable<[]>{
    return this.http.get<[]>("http://127.0.0.1:8000/api/get/")
  }

  createTarea(tarea: object){
    return this.http.post("http://127.0.0.1:8000/api/post/",tarea);
  }

  deleteTarea(id: number){
    return this.http.delete("http://127.0.0.1:8000/api/delete/"+id+"/");
  }

  updateTarea(tarea: any){
    return this.http.put("http://127.0.0.1:8000/api/put/"+tarea.id+"/",tarea);
  }

}