import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../../../shared';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPageComponent implements OnInit {
  users$: Observable<IUser[]> = of<IUser[]>([]);

  constructor() {}

  ngOnInit(): void {
  }

  testMethod(user: IUser): void {}
}
