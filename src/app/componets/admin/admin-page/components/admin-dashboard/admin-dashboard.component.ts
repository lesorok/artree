import { Component, EventEmitter, ChangeDetectionStrategy, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/shared';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminDashboardComponent implements OnInit {
  @Input() testInput!: string;
  @Input() users: IUser[] = [];

  @Output() deleteUser = new EventEmitter<IUser>();

  constructor() {}

  ngOnInit(): void {}

  onDeleteUser(user: IUser) {
    if (confirm('Вы уверены, что хотите удалить этого пользователя?')) {
      this.deleteUser.emit(user);
    }
  }
}
