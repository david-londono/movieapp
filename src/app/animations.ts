import { trigger, transition, style, animate, query, group } from '@angular/animations';

export const animations =  [
    trigger('routeAnimations', [
      transition('HomePage <=> fav', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
        group([
          query(':leave', [animate('600ms ease-out', style({ opacity: 0, transform: 'translateX(-100%)' }))], { optional: true }),
          query(':enter', [style({ opacity: 0, transform: 'translateX(100%)' }), animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0%)' }))], { optional: true })
        ])
      ]),
      transition('HomePage <=> OverviewPage', [ // Se aplica a todas las transiciones
        query(':enter, :leave', style({ position: 'absolute', width: '100%'}), { optional: true }),
        group([
          query(':leave', [
            style({ opacity: 1 }),
            animate('300ms ease', style({ opacity: 0 })) // 👈 Fade out
          ], { optional: true }),
          query(':enter', [
            style({ opacity: 0 }), 
            animate('300ms 200ms ease', style({ opacity: 1 })) // 👈 Fade in
          ], { optional: true })
        ])
      ]),
      transition('fav <=> OverviewPage', [ // Se aplica a todas las transiciones
        query(':enter, :leave', style({ position: 'absolute', width: '100%'}), { optional: true }),
        group([
          query(':leave', [
            style({ opacity: 1 }),
            animate('300ms ease', style({ opacity: 0 })) // 👈 Fade out
          ], { optional: true }),
          query(':enter', [
            style({ opacity: 0 }), 
            animate('300ms 200ms ease', style({ opacity: 1 })) // 👈 Fade in
          ], { optional: true })
        ])
      ])
    ])
  ]