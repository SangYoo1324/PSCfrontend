import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent {

  constructor() {

  }
  ngOnInit(){
    // this.accordianConfigList.forEach((item)=>{
    //  item.options.forEach((i:any)=>{
    //    console.log(i.name);
    //  })
    // })

  }

  // item의 availConfig 부분만 추출
  // availConfig: [
  //   {
  //     name: 'CPU',
  //     options:[{name: 'AMD1 Ryzen 5 7600X 6-Core 4.7GHz (5.3GHz Max Boost)',
  //       price: 0},
  //       {name: 'AMD2 Ryzen 5 7600X 6-Core 4.7GHz (5.3GHz Max Boost)',
  //         price: 100},
  //       {name: 'AMD3 Ryzen 5 7600X 6-Core 4.7GHz (5.3GHz Max Boost)',
  //         price: 100}]
  //   },
  //   {
  //     name: 'GPU',
  //     options:[{name: 'AMD4 Ryzen 5 7600X 6-Core 4.7GHz (5.3GHz Max Boost)',
  //       price: 0}]
  //
  //   },
  //   {
  //     name: 'MotherBoard',
  //     options:[{name: 'AMD5 Ryzen 5 7600X 6-Core 4.7GHz (5.3GHz Max Boost)',
  //       price: 0}]
  //   },
  //   {
  //     name: 'RAM',
  //     options:[{
  //       name:  '32GB CORSAIR VENGEANCE DDR5 (2x16GB) 5600MHz',
  //       price: 0
  //     },
  //       {
  //         name:  '64GB CORSAIR VENGEANCE DDR5 (2x16GB) 5600MHz',
  //         price: 100
  //       }
  //     ]
  //   }
  // ],
  @Input() accordianConfigList!:any[];


  //selected 된 property들만 선택해서 전달
  @Input()
  selectedConfig:any;
  // =[
  //   {
  //     name: 'CPU',
  //     options:[{name: 'AMD1 Ryzen 5 7600X 6-Core 4.7GHz (5.3GHz Max Boost)',
  //       price: 0},

  //   },
  //   {
  //     name: 'GPU',
  //     options:[{name: 'AMD4 Ryzen 5 7600X 6-Core 4.7GHz (5.3GHz Max Boost)',
  //       price: 0}]
  //
  //   },
  //   {
  //     name: 'MotherBoard',
  //     options:[{name: 'AMD5 Ryzen 5 7600X 6-Core 4.7GHz (5.3GHz Max Boost)',
  //       price: 0}]
  //   },
  //   {
  //     name: 'RAM',
  //     options:[{
  //       name:  '32GB CORSAIR VENGEANCE DDR5 (2x16GB) 5600MHz',
  //       price: 0
  //     },
  //     ]
  //   }
  // ]



  // accordian button push
  push(id:string, index:number){
    const inputElement =  document.getElementById(id)! as HTMLInputElement
      inputElement.click();
    // name만 바뀌었으므로 name에 따라 price도 change
    this.selectedConfig[index] // CPU,GPU 여부
      .options[0].price =
      // 여기서 x는
      //{
        //       name:  '32GB CORSAIR VENGEANCE DDR5 (2x16GB) 5600MHz',
        //       price: 0
        //     }, 이런 객체
      this.accordianConfigList[index].options.find((x:any)=>x.name ===this.selectedConfig[index].options[0].name).price;

    this.onConfigChange();

  }

  //test
  test(){
    console.log(this.selectedConfig);
    console.log(this.selectedConfig[1].options[0]);
  }

  // take out selected options with price
  @Output() selectedConfigEmitter = new EventEmitter<any>();
  onConfigChange() {
    //   Object.keys(this.selectedConfig) // CPU, GPU, RAM ...
    //     .forEach((key)=>{               //key가 CPU, GPU, RAM인  오브젝트를 selectedConfig에서 찾고
    //     this.outputObject[key] =   this.accordianConfigList.find((i)=>i.name=== key)
    //       .options  // 찾은 오브젝트의 Optionsarray에서
    //       .find((x:any)=>x.name === this.selectedConfig[key])
    //     })
    //   console.log(this.outputObject);
    console.log(this.selectedConfig)
      this.selectedConfigEmitter.emit(this.selectedConfig);

  }
}
