import { Injectable } from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  gamingLapTops:any[] = [
    { id: 1,
      url: '/assets/customPC1.jpg',
      price: 1200,
      availConfig: [
        {
          name: 'CPU',
          options:[{name: 'AMD1 Ryzen 5 7600X 6-Core 4.7GHz (5.3GHz Max Boost)',
            price: 0},
            {name: 'AMD2 Ryzen 5 7600X 6-Core 4.7GHz (5.3GHz Max Boost)',
              price: 100},
            {name: 'AMD3 Ryzen 5 7600X 6-Core 4.7GHz (5.3GHz Max Boost)',
              price: 100}]
        },
        {
          name: 'GPU',
          options:[{name: 'AMD4 Ryzen 5 7600X 6-Core 4.7GHz (5.3GHz Max Boost)',
            price: 0}]

        },
        {
          name: 'MotherBoard',
          options:[{name: 'AMD5 Ryzen 5 7600X 6-Core 4.7GHz (5.3GHz Max Boost)',
            price: 0}]
        },
        {
          name: 'RAM',
          options:[{
            name:  '32GB CORSAIR VENGEANCE DDR5 (2x16GB) 5600MHz',
            price: 0
          },
            {
              name:  '64GB CORSAIR VENGEANCE DDR5 (2x16GB) 5600MHz',
              price: 100
            }
          ]
        }
      ],
      name:'EVO-14',
      size:'(W) 7.87 x (H) 17.71 x (D) 10.6',
      bays: '2 x 2.5in SSDs',
      ports: ['2 x 2.5in SSDs', '2 x 2.5in SSDs'],
      special:['Airflow-optimized front and side panels deliver maximum ventilation',
      'Max GPU Fitment: 304(12) x 137(5.3) x 61(2.4)']
    },

  ]


  gamingDesktops:any[] = [
    { id: 1,
      url: '/assets/customPC1.jpg',
      weight: '1200',
      availConfig: [
        {
          name: 'CPU',
          options:[{name: 'AMD1 Ryzen 5 7600X 6-Core 4.7GHz (5.3GHz Max Boost)',
            price: 0},
            {name: 'AMD2 Ryzen 5 7600X 6-Core 4.7GHz (5.3GHz Max Boost)',
              price: 100},
            {name: 'AMD3 Ryzen 5 7600X 6-Core 4.7GHz (5.3GHz Max Boost)',
              price: 100}]
        },
        {
          name: 'GPU',
          options:[{name: 'AMD4 Ryzen 5 7600X 6-Core 4.7GHz (5.3GHz Max Boost)',
            price: 100}]

        },
        {
          name: 'MotherBoard',
          options:[{name: 'AMD5 Ryzen 5 7600X 6-Core 4.7GHz (5.3GHz Max Boost)',
            price: 100}]
        },
        {
          name: 'RAM',
          options:[{
            name:  '32GB CORSAIR VENGEANCE DDR5 (2x16GB) 5600MHz',
            price: 0
          },
            {
              name:  '64GB CORSAIR VENGEANCE DDR5 (2x16GB) 5600MHz',
              price: 100
            }
          ]
        }
      ],
      name:'EVO-14'},
  ]

  // gaming
  gamingLaptopList:any = of(this.gamingLapTops);
  gamingDesktopList:any = of(this.gamingDesktops);

  getGamingLaptopList(){
    return this.gamingLaptopList;
}
  getGamingDesktopList(){
    return this.gamingDesktopList;
  }

  // workstation
  workstationLaptopList:any = of(this.gamingLapTops);
  workstationDesktopList:any = of(this.gamingDesktops);

  getWorkstationLaptopList(){
    return this.gamingLaptopList;
  }
  getWorkstationDesktopList(){
    return this.gamingDesktopList;
  }

  //accessories
  accessoriesList:any = of(this.gamingLapTops);

  getAccessoriesList(){
    return this.gamingLaptopList;
  }


  constructor() { }
}
