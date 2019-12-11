import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dice: any[] = [
    {
      id: 1,
      val: 4,
      label: "d4"
    },
    {
      id: 2,
      val: 6,
      label: "d6"
    },
    {
      id: 3,
      val: 8,
      label: "d8"
    },
    {
      id: 4,
      val: 10,
      label: "d10"
    },
    {
      id: 5,
      val: 12,
      label: "d12"
    },
    {
      id: 6,
      val: 20,
      label: "d20"
    }
  ];
  die: number;
  total_dice: number;
  success_on: number;
  modifier: number;
  simulations: number;

  success: number;
  success_count: number;
  failure: number;
  failure_count: number;

  year: number;

  constructor( ) {
    this.die = 6;
    this.total_dice = 3;
    this.success_on = 10;
    this.modifier = 0;
    this.simulations = 1000;

    this.success = 0;
    this.success_count = 0;
    this.failure = 0
    this.failure_count = 0;
    this.year = (new Date).getFullYear();
  }

  reset(){
    this.die = 6;
    this.total_dice = 3;
    this.success_on = 10;
    this.modifier = 0;
    this.simulations = 1000;

    this.success = 0;
    this.success_count = 0;
    this.failure = 0
    this.failure_count = 0;
  }


  runSimulation(){
    this.success_count = 0;
    this.failure_count = 0;
    let dice_sum = 0;

    for( let i = 0; i < this.simulations; i++ ){
      for( let j = 0; j < this.total_dice; j++ ){
        let result = this.roll( this.die );
        dice_sum += result;
      }
      dice_sum += Number( this.modifier );
      if( dice_sum >= this.success_on ){
        this.success_count++;
      } else {
        this.failure_count++;
      }
      dice_sum = 0;
    }
    this.success = this.success_count / this.simulations;
    this.failure = this.failure_count / this.simulations;
  }

  roll( side ){
    return Math.floor( Math.random() * side ) + 1;
  }

}
