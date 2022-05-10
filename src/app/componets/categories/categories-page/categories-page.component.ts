import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-category-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
