import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  feed$: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
  	this.data.getData().subscribe(
  		data=> this.feed$ = data
  		);
  }

}
