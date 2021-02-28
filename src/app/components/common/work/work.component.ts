import { NONE_TYPE } from '@angular/compiler';
import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor(private ngZone: NgZone) { }

  public currentPage : any ;
  public currentIndex : any ;
  public currentTarget : any ;
  ngOnInit() {
    let that=this;
    this.currentPage = -1;
    // console.log("currentPage", this.currentPage);

    var owl = $('.owl-carousel');
    // console.log("owl", owl);
    $('.owl-carousel').owlCarousel({
      autoplay: true,
      center: true,
      loop: true,
      nav: true,
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false,
      onClick : function callback(event: any){
        // console.log("event onClick", event);
      },
      onChange: function callback(event: any) {
        // console.log("event", event);
        
        let page = event.page.index;
        that.currentPage = page;
        // console.log("currentPage", that.currentPage);
        var item = event.item.index;
        that.currentIndex = item;
        // console.log("that.currentIndex", that.currentIndex);
        var element = event.target;
        that.currentTarget = element ;
        // console.log("that.currentTarget", that.currentIndex);
      }
    });
    
  }
 
   changePage(page){
    this.currentPage = page;
    console.log("currentPage", this.currentPage);
  }

}
