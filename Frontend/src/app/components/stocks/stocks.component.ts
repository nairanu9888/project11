import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpService } from '../../services/http-service.service';
import { ChartBtnRendererComponent } from '../customCells/chart-btn-renderer/chart-btn-renderer.component';
import { BuyBtnRendererComponent } from '../customCells/buy-btn-renderer/buy-btn-renderer.component';
import { SellBtnRendererComponent } from '../customCells/sell-btn-renderer/sell-btn-renderer.component';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class StocksComponent implements OnInit {
 
  frameworkComponents: any;

  constructor(private dialog: MatDialog,
    private http: HttpService) { 
      this.frameworkComponents = {
        btnCellRenderer: BuyBtnRendererComponent,
        chartBtnRenderer: ChartBtnRendererComponent,
        sellBtnRenderer: SellBtnRendererComponent
      }
    }
    
  columnDefs=[

    {headerName:"Stock", field:"stock", headerClass:"h1", filter:true},
    
    {headerName:"Current Market Price", 
    field:"cmp", 
    headerClass:"h1"},

    {headerName:"High", 
    field:"high", 
    headerClass:"h1"},

    {headerName:"Low", 
    field:"low", 
    headerClass:"h1"},

    {headerName:"Buy", 
    field:"buy", 
    width:100,
    cellRenderer: "btnCellRenderer",
    cellRendererParams: {
      clicked: function(field: any) {
        //alert(`${field} was clicked`);
      }
    },
    headerClass:"h1"},

    {headerName:"Sell", 
    field:"sell", 
    width:100,
    cellRenderer: "sellBtnRenderer",
    cellRendererParams: {
      clicked: function(field: any) {
        //alert(`${field} was clicked`);
      }
    },
    headerClass:"h1"},

    {headerName:"View Chart", 
    field:"chart", 
    width:100,   
    cellRenderer: "chartBtnRenderer",  
    cellRendererParams: {
      clicked: function(field: any) {
      }
    }},
    
  ];

  rowData=[
    {stock:'aapl', net_profit_loss:'111',},
    {stock:'jj', net_profit_loss:'1411',},
  ];


  ngOnInit(): void {
  }

}