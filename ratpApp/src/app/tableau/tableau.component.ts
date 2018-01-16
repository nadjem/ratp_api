import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map"
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  title='commerces de proximité agréés RATP';
  searchForm : FormGroup;
  sorted:boolean=true;
  querie='';
apiUrl='https://data.ratp.fr/api/records/1.0/search/?dataset=liste-des-commerces-de-proximite-agrees-ratp&q='+this.querie+'&rows=1052&sort=-code_postal&facet=tco_libelle&facet=code_postal';
apiUrl2='https://data.ratp.fr/api/records/1.0/search/?dataset=liste-des-commerces-de-proximite-agrees-ratp&q='+this.querie+'&rows=1052&sort=code_postal&facet=tco_libelle&facet=code_postal';



ratpData;
  p: number = 1;
  constructor(private http:Http, private spinnerService: Ng4LoadingSpinnerService,fb: FormBuilder ,
  ) { this.searchForm = fb.group(
    {
      'searchInput':''
    }
  )}




  sortIt(){
    this.sorted =true;

    this.ratpData = {};
    this.spinnerService.show();
    this.http.get(this.apiUrl).subscribe(data =>{
      this.ratpData = data.json();
      this.spinnerService.hide();
    })
  }
  unSortIt(){
    this.sorted=false;
    this.ratpData = {};
    this.spinnerService.show();
    this.http.get(this.apiUrl2).subscribe(data =>{
      this.ratpData = data.json();
      this.spinnerService.hide();
    })
  }
  onSubmit(value: any):void{
   console.log(value.searchInput);
    this.spinnerService.show();
    this.sorted =true;
   this.querie = value.searchInput;
    this.apiUrl='https://data.ratp.fr/api/records/1.0/search/?dataset=liste-des-commerces-de-proximite-agrees-ratp&q='+this.querie+'&rows=1052&sort=-code_postal&facet=tco_libelle&facet=code_postal';
    this.apiUrl2='https://data.ratp.fr/api/records/1.0/search/?dataset=liste-des-commerces-de-proximite-agrees-ratp&q='+this.querie+'&rows=1052&sort=code_postal&facet=tco_libelle&facet=code_postal';
    console.log(this.apiUrl);
    this.http.get(this.apiUrl).subscribe(data =>{
      this.ratpData = data.json();
      this.spinnerService.hide();
    })
  }
  ngOnInit() {
    this.spinnerService.show();
    this.http.get(this.apiUrl).subscribe(data =>{
      this.ratpData = data.json();
      this.spinnerService.hide();
    })
  }

}
