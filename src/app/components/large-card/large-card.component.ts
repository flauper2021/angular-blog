import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-card',
  templateUrl: './large-card.component.html',
  styleUrls: ['./large-card.component.css']
})
export class LargeCardComponent implements OnInit {

  @Input()
  Id: string = "0"
  @Input()
  photoCard: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  cardDescription: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
