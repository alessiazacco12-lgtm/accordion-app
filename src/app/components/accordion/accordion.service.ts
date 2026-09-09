import { Injectable } from '@angular/core';
import { AccordionItem } from './accordion.model';

@Injectable({
  providedIn: 'root',
})
export class AccordionService {
  // Elenco delle domande e delle risposte dell'Accordion.
  items: AccordionItem[] = [
    {
      question: 'What is roadmap.sh?',
      answer:
        'roadmap.sh is a community effort to create learning paths, guides, project ideas and other similar content to help developers grow in their careers.',
    },
    {
      question: 'What are the plans for roadmap.sh?',
      answer: 'roadmap.sh plans to keep improving its learning resources and developer roadmaps.',
    },
    {
      question: 'How is roadmap.sh built?',
      answer: 'roadmap.sh is built using modern web technologies and community contributions.',
    },
    {
      question: 'Can I use roadmap.sh in my team?',
      answer: 'Yes, roadmap.sh can also be used as a reference for teams and learning paths.',
    },
    {
      question: 'How can I create custom roadmaps?',
      answer:
        'Custom roadmaps can be created by organizing topics and learning steps based on your goals.',
    },
    {
      question: 'Is roadmap.sh really 7th most starred project on GitHub?',
      answer:
        'roadmap.sh is one of the most popular open source projects for developer learning paths.',
    },
  ];
}
