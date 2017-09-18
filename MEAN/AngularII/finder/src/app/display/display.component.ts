import { Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() EInfo;
  EmailInfo;
  constructor() { }
  ngOnInit() {
    this.EmailInfo = this.EInfo;
  }
}
