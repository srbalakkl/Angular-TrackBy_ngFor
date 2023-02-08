import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trackby';

  users:Array<{name:string,id:number}> = [
    {name:'bala',id:1},
    {name:'goku',id:2},
    {name:'abi',id:3},
    {name:'sd',id:4},
  ];

  addAnotherObject(){
    this.users = [
      {name:'bala',id:1},
      {name:'goku',id:2},
      {name:'abi',id:3},
      {name:'sd',id:4},
      {name:'ani',id:5},
    ];
  }

  trackById(index:any,usr:any){
    return usr.id;
  }

}
