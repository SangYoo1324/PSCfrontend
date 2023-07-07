import {animate, state, style, transition, trigger} from "@angular/animations";

export const transparency =
  trigger('animate_transparency',[
    // false일때 css 스타일 정의
    state('false', style({opacity:0, visibility:'hidden'})),
    // true일 때 css style 정의
    state('true',style({opacity:1, visibility:'visible'})),
    //transition: state 변화 경우의 수에 딸느 변화 지정
    transition('false=>true', animate('1000ms ease-in')),
    transition('true=>false', animate('1000ms ease-out'))
    ]
  );

export const expander = trigger('animate_expander',[
  state('false',style({opacity: 0 , visibility: 'hidden', height: 0})),
  state('true',style({opacity: 1 , visibility: 'visible', padding: '1rem 1rem'})),
  transition('false=>true', animate('500ms ease-in')),
  transition('true=>false', animate('500ms ease-in')),
]);

export const widthChange =
  trigger('animate_widthChange',[
      // false일때 css스타일 정의
      state('false',style({width:0})),
      // true 일때 css 스타일 정의
      state('true',style({width: '50%'})),
      // transition: state변화 경우의 수에 따른 변화 지정
      transition('false=>true', animate('500ms ease-in')),
      transition('true=>false', animate('500ms ease-out'))
    ]
  )
