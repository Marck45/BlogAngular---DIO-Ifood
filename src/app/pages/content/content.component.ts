import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  
  photoCover:string = '';
  contentTitler:string = '';
  contentDescription:string = '';
  private id:string|null = '';

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(){
    this.route.paramMap.subscribe(value =>{
      this.id = value.get('id');
    })

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string|null){

    const result  = dataFake.filter(articles => articles.id == id)[0];

   this.contentTitler = result.title;
   this.contentDescription = result.decription;
   this.photoCover = result.photoCover;

  }
  
}
