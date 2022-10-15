import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';
import { UserEditModalComponent } from './modals/user-edit-modal/user-edit-modal.component';
import { UserCardComponent } from './user-card/user-card.component';

import { UserCrudPage } from './user-crud.page';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';

describe('UserCrudPage', () => {
  
  let spectator: Spectator<UserCrudPage>;
  const createComponent = createComponentFactory({
    component: UserCrudPage,
    imports: [
      IonicModule.forRoot(),
    ],
    declarations: [
      UserCrudPage,
      UserCardComponent,
      UserListComponent,
      UserEditModalComponent,
      UserEditComponent
    ],
    providers: [
      provideMockStore({})
    ]
  });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
