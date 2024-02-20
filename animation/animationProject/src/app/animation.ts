import { animate, state, style, transition, trigger } from '@angular/animations';

export let fade = trigger('fade', [
    state('void', style({ opacity: 0, backgroundColor: 'deepskyblue' })),
    // transition('void <=>*', [animate(2000)]),
    transition(':enter, :leave', [animate(2000)]),
]);
