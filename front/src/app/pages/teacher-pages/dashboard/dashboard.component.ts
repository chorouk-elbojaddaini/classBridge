import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { RegisterRequest } from 'src/app/models/register-request';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  averageGrades = [12, 14, 12];
  classLabels = ['Class A', 'Class B', 'Class C'];
  public chart: any;
  user : RegisterRequest | any;
 
  ngOnInit(): void {
    const authUserJSON:any = localStorage.getItem("authUser");
    this.user = JSON.parse(authUserJSON);
    

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
  
