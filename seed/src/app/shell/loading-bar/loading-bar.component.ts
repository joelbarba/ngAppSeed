import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from './loading-bar.service';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss']
})
export class LoadingBarComponent implements OnInit {

  constructor(private loadingBar: LoadingBarService) { }

  ngOnInit() { }

}
