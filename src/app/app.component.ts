import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'LECCIONES APRENDIDAS';
  email:string=  'dreyluisdel92.4@gmail.com';
  msg:string = '';
 empleyees=[
   {'name':'Luis',position:'manager',email:'email@email.com'},
   {'name':'Juan',position:'Designer',email:'email@email.com'},
   {'name':'Pedro',position:'Programdor',email:'email@email.com'}
  ];
  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;
  addEmployee():void{
   this.empleyees.push(this.model);
   this.msg = 'campo agregado';
  }
  deleteEmployee(i):void{
    var answer = confirm('Estas seguro querer eliminarlo?');
    if(answer) {
      this.empleyees.splice(i, 1);
      this.msg = 'campo eliminado';
    }
  }
  myValue;
  editEmployee(i):void {
    this.hideUpdate = false;
    this.model2.name = this.empleyees[i].name;
    this.model2.position = this.empleyees[i].position;
    this.model2.email = this.empleyees[i].email;
    this.myValue = i;
  }

  updateEmployee():void {
    let i = this.myValue;
    for(let j = 0; j < this.empleyees.length; j++){
      if(i == j) {
        this.empleyees[i] = this.model2;
        this.msg = 'campo actualizado';
        this.model2 = {};
      }
    }
  }

  closeAlert():void {
    this.msg = '';
  }
}
