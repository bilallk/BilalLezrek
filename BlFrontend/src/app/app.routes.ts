import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ToDoListPage } from './pages/todo-list/to-do-list.page';

export const routes: Routes = [
    { path: '', component: Home, },
    { path: 'todo/', component: ToDoListPage },

];
