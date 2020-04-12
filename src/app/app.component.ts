import { Component, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSmartModalService } from 'ngx-smart-modal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Corona';
  key:any
  worldwide:any
  list:any
  timeSeries:any=[]
  object=Object.keys;
  loadingTime:any;
  filterData:any;
  isSymptoms:boolean=false;
  isAdvice:boolean=false;
  h=new Date()

  

  constructor( private renderer: Renderer2,public http:HttpClient,public ngxSmartModalService: NgxSmartModalService){
    let temp =new Date().getSeconds()
    this.languageChanges()
    this.http.get('https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief').toPromise().then(data => {
      console.log(data)
      this.worldwide=data;
    })

this.http.get('https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?onlyCountries=false').toPromise().then(data => {
  console.log(data)
  this.list=data;
  this.search()
  this.loadingTime=new Date().getSeconds() - temp;
  console.log(this.loadingTime)
})

  }

  ngAfterViewInit(){
    // setTimeout(() => {
    //   console.log('hello')
    //   var temp:HTMLElement= document.getElementById('column1');
    //   this.renderer.setStyle(temp,'background-color', 'red')
    // }, 2000);
  }

  latest:any=[]
  time(iso2,id?){
    this.http.get('https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/timeseries?iso2='+iso2).toPromise().then((data:any) => {
  this.timeSeries=data;
  let length =data[0].timeseries.length-1;
  Object.keys(data[0].timeseries).forEach((key,index) => {
    // console.log(key,index,data[0].timeseries[key])
    this.latest.push(
      {
        key,
        ...data[0].timeseries[key]
      }
      
      )
  })
  // console.log(this.latest)
  this.latest.reverse()
  this.ngxSmartModalService.open('myModal');


})
  }


  search(key?){
    this.filterData=this.list.filter(data =>{
      if(key){
       return data.countryregion.toLowerCase().includes(key.toLowerCase())
      }else{
       return data
      }
    })
  }

advice:any;
symptomData:any
titles:any
languageChanges(value?){
  if(!value || value == 'english'){
this.advice=this.adviceEnglish
this.symptomData=this.symptomEnglish
this.titles=this.englishTitle
  }else if (value == 'hindi'){
    this.advice=this.adviceHindi
    this.symptomData=this.symptomHindi
    this.titles=this.hindiTitle
  }
}

adviceEnglish= ['Wash your hands frequently','Maintain social distancing','Avoid touching eyes, nose and mouth',
  'Practice respiratory hygiene','If you have fever, cough and difficulty breathing, seek medical care early',
'Stay informed and follow advice given by your healthcare provider'];

adviceHindi= ['बार-बार हाथ धोएं','सामाजिक दूरी बनाए रखें','आंखों, नाक और मुंह को छूने से बचें',
'श्वसन स्वच्छता का अभ्यास करें','यदि आपको बुखार, खांसी और सांस लेने में कठिनाई है, तो जल्द चिकित्सा देखभाल की तलाश करें',
'सूचित रहें और अपने स्वास्थ्य सेवा प्रदाता द्वारा दी गई सलाह का पालन करें'];

symptomEnglish =['Cough','Fever','Tiredness','Difficulty breathing (severe cases)']
symptomHindi =['खांसी','बुखार','थकान','साँस लेने में कठिनाई (गंभीर मामले)']

hindiTitle ={
  may:{
  name:'लोग अनुभव कर सकते हैं:'
  },
  open:{
name:'खोलो'
  },
  close:{
    name:'बंद करो'
  },
  symptom:{
    name:'कोरोनावायरस के लक्षण '
  },
  advice:{
    name:'जनता के लिए सलाह : '
  },
  website:{
    name:'लोड करने में समय लगा : '
  },
  last:{
    name:'आखरी अपडेट:'
  },
  cases:{
    name:'दुनिया भर में कोरोनावायरस के मामले : '
  },
  deaths:{
    name:'लोगों की मृत्यु : '
  },
  recoverd:{
    name:'स्वस्थ होनेवाले :'
  },
  search:{
    name:' खोजे..'
  }
}

englishTitle ={
  may:{
  name:'People may experience:'
  },
  open:{
name:'Open'
  },
  close:{
    name:'Close'
  },
  symptom:{
    name:'Symptoms of Coronavirus '
  },
  advice:{
    name:'Advice for public'
  },
  website:{
    name:'Time took to load : '
  },
  last:{
    name:'Last Updated At :'
  },
  cases:{
    name:'Worldwide Coronavirus Cases : '
  },
  deaths:{
    name:'Deaths : '
  },
  recoverd:{
    name:'Recovered : '
  },
  search:{
    name:'Search..'
  }

}
}
