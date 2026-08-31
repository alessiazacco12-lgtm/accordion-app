// Questo file contiene la logica del componente Accordion. Gestisce i dati delle domande e delle risposte e quale sezione è aperta.

// FASE 1 - IMPORT
import { Component, inject, signal } from '@angular/core';
import { AccordionService } from './accordion.service';

// FASE 2 - CONFIGURAZIONE DEL COMPONENTE
@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css',
})
export class Accordion {
  // FASE 3 - SERVICE -- Recupero il service che contiene i dati dell'Accordion.
  private accordionService = inject(AccordionService);

  // Recupero l'elenco delle domande e delle risposte dal service.
  items = this.accordionService.items;

  // FASE 4 - ELEMENTO APERTO -1 significa che inizialmente tutte le sezioni sono chiuse.
  openIndex = signal(-1);

  // FASE 5 - APERTURA/CHIUSURA -- Apro la sezione selezionata oppure la chiudo se è già aperta.
  toggleItem(index: number) {
    if (this.openIndex() === index) {
      this.openIndex.set(-1);
    } else {
      this.openIndex.set(index);
    }
  }
}
