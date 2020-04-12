import { Component, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Popper from 'popper.js';
import { NgxSmartModalService } from 'ngx-smart-modal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Corona';
  h=new Date();

  worldwide:any
  list:any
  timeSeries:any=[]

  object=Object.keys;

  identi:any

  constructor( private renderer: Renderer2,public http:HttpClient,public ngxSmartModalService: NgxSmartModalService){
    // setInterval(() =>{
    //   this.h=new Date()
    // },1000)


    this.http.get('https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief').toPromise().then(data => {
      console.log(data)
      this.worldwide=data;
    })

this.http.get('https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?onlyCountries=false').toPromise().then(data => {
  console.log(data)
  this.list=data;
})

  }

  ngAfterViewInit(){
    // setTimeout(() => {
    //   console.log('hello')
    //   var temp:HTMLElement= document.getElementById('column1');
    //   this.renderer.setStyle(temp,'background-color', 'red')
    // }, 2000);
  }

  time(iso2,id?){
    this.http.get('https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/timeseries?iso2='+iso2).toPromise().then((data:any) => {
  console.log(data)
  this.timeSeries=data;
  this.identi=id
  // Popper.modifiers.
  this.ngxSmartModalService.open('myModal');
})
  }

  close(){
  this.ngxSmartModalService.close('myModal');

  }


}
