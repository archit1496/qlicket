import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-air-ticket',
  templateUrl: './air-ticket.component.html',
  styleUrls: ['./air-ticket.component.scss']
})
export class AirTicketComponent implements OnInit {
  // priceFilter = {
  //   filter: ''
  // };
  filter = {
    priceFilter: '',
    arrivalFilter:'',
    durationFilter:''
  };
  // arrivalFilter={
  //   filter: ''
  // }
  unFilteredData;
  ticketJson = [
    {
      boardingLocation: 'Delhi',
      boardingTime: '17:45',
      durationHour: '2',
      durationMinute:'30',
      arrivalTime: '10:00',
      arrivalLocation: 'Prayagraj India',
      price: '5000',
      emiAmount: '300',
      flightName: 'Vistara',
      refundStatus: 'Partially Refunded',
      flightImage: 'assets/vistara.png'

    },
    {
      boardingLocation: 'Delhi',
      boardingTime: '17:45',
      durationHour: '1',
      durationMinute:'30',
      arrivalTime: '23:00',
      arrivalLocation: 'Mumbai India',
      price: '2000',
      emiAmount: '200',
      flightName: 'Spice Jet',
      refundStatus: 'Refunded',
      flightImage: 'assets/spiceJet.jpeg'

    },
    {
      boardingLocation: 'Delhi',
      boardingTime: '17:45',
      durationHour: '3',
      durationMinute:'30',
      arrivalTime: '20:00',
      arrivalLocation: 'Mumbai India',
      price: '3000',
      emiAmount: '500',
      flightName: 'Spice Jet',
      refundStatus: 'Partially Refunded',
      flightImage: 'assets/spiceJet.jpeg'
    },
    {
      boardingLocation: 'Delhi',
      boardingTime: '12:45',
      durationHour: '5',
      durationMinute:'30',
      arrivalTime: '20:00',
      arrivalLocation: 'Mumbai India',
      price: '8000',
      emiAmount: '500',
      flightName: 'Spice Jet',
      refundStatus: 'Partially Refunded',
      flightImage: 'assets/spiceJet.jpeg'
    },
    {
      boardingLocation: 'Delhi',
      boardingTime: '16:45',
      durationHour: '4',
      durationMinute:'30',
      arrivalTime: '5:00',
      arrivalLocation: 'Mumbai India',
      price: '7000',
      emiAmount: '500',
      flightName: 'Spice Jet',
      refundStatus: 'Partially Refunded',
      flightImage: 'assets/spiceJet.jpeg'
    },


  ]
  constructor() {
    this.unFilteredData = [...this.ticketJson];

  }

  ngOnInit() {
  }
  onPriceFilterClick() {
    if (this.filter.priceFilter === '') {
      this.filter.priceFilter = 'ascending';
      this.filterPriceDataAscending();
    }
    else if (this.filter.priceFilter === 'ascending') {
      this.filter.priceFilter = 'descending';
      this.filterPriceDataDescending();
    }
    else if (this.filter.priceFilter === 'descending') {
      this.filter.priceFilter = '';
      this.ticketJson = [...this.unFilteredData];
      this.arrivalTimeFinalFiltercheck();
      this.fightDurationFinalFiltercheck();
    }

  }
  filterPriceDataAscending() {
    this.ticketJson.sort((a, b) => {
      return (<number>Number(a.price) - <number>Number(b.price));
    })
  }
  filterPriceDataDescending() {
    this.ticketJson.sort((a, b) => {
      return (<number>Number(b.price) - <number>Number(a.price));
    })
  }
  onDurationFilterClick(){
    if (this.filter.durationFilter === '') {
      this.filter.durationFilter = 'ascending';
      this.filterDurationDataAscending();
    }
    else if (this.filter.durationFilter === 'ascending') {
      this.filter.durationFilter = 'descending';
      this.filterDurationDataDescending();
    }
    else if (this.filter.durationFilter === 'descending') {
      this.filter.durationFilter = '';
      this.ticketJson = [...this.unFilteredData];
      this.arrivalTimeFinalFiltercheck();
      this.fightPriceFinalFiltercheck();
    }
  }
  filterDurationDataAscending(){
    this.ticketJson.sort((a, b) => {
      return (<any>(a.durationHour+(<any>(a.durationMinute)/60)) - <any>(b.durationHour+(<any>(b.durationMinute)/60)) );
    })
  }
  filterDurationDataDescending() {
    this.ticketJson.sort((a, b) => {
      return (<any>(b.durationHour+(<any>(b.durationMinute)/60)) - <any>(a.durationHour+(<any>(a.durationMinute)/60)) );
    })
  }
  onArrivalFilterClick() {
    if (this.filter.arrivalFilter === '') {
      this.filter.arrivalFilter = 'ascending';
      this.filterArrivalDataAscending();
    }
    else if (this.filter.arrivalFilter === 'ascending') {
      this.filter.arrivalFilter = 'descending';
      this.filterArrivalDataDescending();
    }
    else if (this.filter.arrivalFilter === 'descending') {
      this.filter.arrivalFilter = '';
      this.ticketJson = [...this.unFilteredData];
      this.fightPriceFinalFiltercheck();
      this.fightDurationFinalFiltercheck();
    }
  }
  filterArrivalDataAscending() {
    this.ticketJson.sort((a, b) => {
      return (<any>(a.arrivalTime.split(':').join('')) - <any>(b.arrivalTime.split(':').join('')));
    })
  }
  filterArrivalDataDescending() {
    this.ticketJson.sort((a, b) => {
      return (<number>Number(b.arrivalTime.split(':').join('')) - <number>Number(a.arrivalTime.split(':').join('')));
    })
  }
  arrivalTimeFinalFiltercheck(){
    if (this.filter.arrivalFilter === 'ascending') {
      this.filterArrivalDataAscending();
    }
    else if (this.filter.arrivalFilter === 'descending') {
        this.filterArrivalDataDescending();
    }
  }
  fightPriceFinalFiltercheck(){
    if (this.filter.priceFilter === 'ascending') {
      this.filterPriceDataAscending();
    }
    else if (this.filter.priceFilter === 'descending') {
      this.filterPriceDataDescending();
    }
  }
  fightDurationFinalFiltercheck(){
    if (this.filter.durationFilter === 'ascending') {
      this.filterDurationDataAscending();
    }
    else if (this.filter.durationFilter === 'descending') {
      this.filterDurationDataDescending();
    }
  }
  onClearFilter(){
    this.filter.arrivalFilter='';
    this.filter.priceFilter='';
    this.filter.durationFilter='';
    this.ticketJson = [...this.unFilteredData];
  }
}
