import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.css']
})
export class StopWatchComponent {

  hrs: any = '0' + 0;
  min: any = '0' + 0;
  sec: any = '0' + 0;
  ms: any = '0' + 0;

  startTimer : any;
  isRunning: boolean = false;

  start(): void {
    if(!this.isRunning){
      this.isRunning = true;
      this.startTimer = setInterval(() => {
        this.ms++;
        this.ms = this.ms < 10? '0'+ this.ms :this.ms;

        if(this.ms === 100){
          this.sec ++;
          this.sec = this.sec < 10? '0'+ this.sec :this.sec;
          this.ms = '0'+0;
        }

        if(this.sec === 60){
          this.min ++;
          this.min = this.min < 10? '0'+ this.min :this.min;
          this.sec = '0'+ 0;
        }

        if(this.min === 60){
          this.hrs ++;
          this.hrs = this.hrs < 10? '0'+ this.hrs :this.hrs;
          this.min = '0'+ 0;
        }
      },10)
    }else{
      this.stop();
    }
  }
  
  stop() : void {
    clearInterval(this.startTimer);
    this.isRunning = false;
  }

  reset() : void {
    clearInterval(this.startTimer);
    this.isRunning = false;
    this.hrs = this.min = this.sec = this.ms = '0'+0;
  }
}
