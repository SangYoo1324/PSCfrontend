import {Component, ViewChild} from '@angular/core';
import {PageTitleComponent} from "../page-title/page-title.component";
import {ItemService} from "../../_service/item.service";
import {ActivatedRoute} from "@angular/router";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css']
})
export class CustomizeComponent {

  totalPrice: number = 0;

  constructor(private itemService:ItemService, private activatedRoute:ActivatedRoute) {
  }

  @ViewChild('pageTitle') pageTitle!:PageTitleComponent;

  item!:Observable<any>;
  itemObject!:any;
  category1:string = '';

  ngOnInit(){

    console.log('routerparam :id = '+this.activatedRoute.snapshot.paramMap.get('id'));
    console.log('routerparam :category1 = '+this.activatedRoute.snapshot.paramMap.get('category1'));
    console.log('routerparam :category2 ='+this.activatedRoute.snapshot.paramMap.get('category2'));

    // router param 에서 category1(Gaming,Workstation,Acc), category2(desktop, laptop) 추출 해서 조건에따라 분기
    if(this.activatedRoute.snapshot.paramMap.get('category1') === 'gaming' &&
      this.activatedRoute.snapshot.paramMap.get('category2') === 'desktop'){
      this.item =this.itemService.getGamingDesktopList().pipe(map((items:any)=>items
      // router param 에서 id 꺼내옴
      .find((x:any)=>x.id === this.activatedRoute.snapshot.paramMap.get('id'))));
    }
    else if(this.activatedRoute.snapshot.paramMap.get('category1') === 'gaming' &&
      this.activatedRoute.snapshot.paramMap.get('category2') === 'laptop'){
        console.log('gaming laptop');
      this.item =this.itemService.getGamingLaptopList()
        .pipe(map((items:any)=>items
        // router param 에서 id 꺼내옴
        .find((x:any)=>x.id === parseInt(this.activatedRoute.snapshot.paramMap.get('id')!))))
    }
    else if(this.activatedRoute.snapshot.paramMap.get('category1') === 'workstation' &&
      this.activatedRoute.snapshot.paramMap.get('category2') === 'desktop'){
      this.item =this.itemService.getWorkstationDesktopList().pipe(map((items:any)=>items
        // router param 에서 id 꺼내옴
        .find((x:any)=>x.id === this.activatedRoute.snapshot.paramMap.get('id'))))
    }
    else if(this.activatedRoute.snapshot.paramMap.get('category1') === 'workstation' &&
      this.activatedRoute.snapshot.paramMap.get('category2') === 'laptop'){
      this.item =this.itemService.getWorkstationLaptopList().pipe(map((items:any)=>items
        // router param 에서 id 꺼내옴
        .find((x:any)=>x.id === this.activatedRoute.snapshot.paramMap.get('id'))))
    }
    else if(this.activatedRoute.snapshot.paramMap.get('category1') === 'accessories' &&
      this.activatedRoute.snapshot.paramMap.get('category2') === 'regular'){
      this.item =this.itemService.getAccessoriesList().pipe(map((items:any)=>items
        // router param 에서 id 꺼내옴
        .find((x:any)=>x.id === this.activatedRoute.snapshot.paramMap.get('id'))))
    }
    else{
      console.log('cannot find the data corresponding with category1 & category2');
    }
    // sets the category1 var(to distinguish gaming, workstation, acc )
    this.category1 = this.activatedRoute.snapshot.paramMap.get('category1')!
    this.item.subscribe(
      (data)=>{
        this.itemObject = data;
        this.totalPrice = data.price;
        this.makeSelectedConfigInput();
      }
    );

  }

  ngAfterViewInit(){
    this.pageTitle.title1.nativeElement.textContent = 'Customize';
    this.pageTitle.subTitle1.nativeElement.textContent = 'Customize your own memory, the best experience! ';

  }

  selectedConfigInput:any  = {}
  makeSelectedConfigInput(){
    const deepCopy  = JSON.parse(JSON.stringify(this.itemObject.availConfig));
    this.selectedConfigInput = [...deepCopy];
    //options에서 맨 첫번째 꺼 빼고 다 지움
    this.selectedConfigInput.forEach((i:any)=>{
      i.options.splice(1);
    });
    this.itemObject.availConfig.forEach((item:any)=>{
      item.options.forEach((i:any)=>{
        console.log(i.name);
      })
    })

  }


  selectedConfigEventReceiver(eventObject:any){
    console.log("Accordian에서 받아온 object: ");

    //일단 초기화 해주고
    this.totalPrice = parseInt(this.itemObject.price);
    //{CPU: {…}, GPU: {…}, MotherBoard: {…}, RAM: {…}}
    //오브젝트 순회하면서 item price 가져와서 total에 add
    eventObject.forEach((obj:any)=>{
      console.log(obj.options[0].name +":"+obj.options[0].price);
      this.totalPrice += parseInt(obj.options[0].price);
    });


  }
}
