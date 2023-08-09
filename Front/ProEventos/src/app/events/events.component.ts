import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  public events: any = [];
  public eventsFilter :any = [];
  private _filterList: string = '';


public get filterList(){
  return this._filterList;
}
public set filterList(value: string){
  this._filterList = value;
  this.eventsFilter = this.filterList ? this.filterEvents(this.filterList) : this.events;

}

filterEvents(filterBy: string) : any{
  filterBy = filterBy.toLocaleLowerCase();

  return this.events.filter( (event: { theme: string; }) => event.theme.toLocaleLowerCase().indexOf(filterBy) !== -1 )


}

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getEvents();
  }
  public getEvents(): void{
    this.http.get('https://localhost:5001/api/events').subscribe(
      response =>{this.events = response;
      this.eventsFilter = this.events},
      error => console.log(error)
    );
  }

}
