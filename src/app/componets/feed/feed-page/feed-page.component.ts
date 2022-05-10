import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
