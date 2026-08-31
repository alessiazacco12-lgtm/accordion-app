import { Component } from '@angular/core';
import { Accordion } from './components/accordion/accordion';

@Component({
  selector: 'app-root',
  imports: [Accordion],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
