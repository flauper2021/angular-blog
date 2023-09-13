import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake';

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

  private id: string | null ="0"

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe( value =>
      this.id = value.get("id"))

  }

}
