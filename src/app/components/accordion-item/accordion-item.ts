import { Component, input, output } from '@angular/core';
import { AccordionItem as AccordionItemModel } from '../accordion/accordion.model';

@Component({
  selector: 'app-accordion-item',
  imports: [],
  templateUrl: './accordion-item.html',
  styleUrl: './accordion-item.css',
})
export class AccordionItem {
  // Ricevo dal componente padre i dati della singola voce.
  item = input.required<AccordionItemModel>();

  // Ricevo dal padre se questa voce è aperta oppure no.
  isOpen = input.required<boolean>();

  // Comunico al padre che l'utente ha cliccato sulla voce.
  toggle = output<void>();
}
