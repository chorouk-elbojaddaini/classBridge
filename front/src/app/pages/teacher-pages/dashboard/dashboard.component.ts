import { Component } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  averageGrades = [12, 14, 12];
  classLabels = ['Class A', 'Class B', 'Class C'];
  public chart: any;


  ngOnInit(): void {
    this.createChart();
  }


  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', 

      data: {
        labels: this.classLabels, 
	       datasets: [
          {
            label: "Classes",
            data: this.averageGrades,
            backgroundColor: '#60CCEC'
          }
        ]
      },
      options: {
        aspectRatio:2
      }
      
    });
  }



}  
  
