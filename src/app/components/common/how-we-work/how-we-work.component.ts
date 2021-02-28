import { Component, OnInit } from '@angular/core';
import { CATEGORY_DETAILS_ONE, CATEGORY_DETAILS_TWO } from 'src/assets/data/category';
import { HOWITWORK_DETAILS_ONE } from 'src/assets/data/howitworks';
declare let $: any;
@Component({
  selector: 'app-how-we-work',
  templateUrl: './how-we-work.component.html',
  styleUrls: ['./how-we-work.component.scss']
})
export class HowWeWorkComponent implements OnInit {

  howItWork = HOWITWORK_DETAILS_ONE;

  constructor() { }

  public currentPage: any;
  public currentIndex: any;
  public currentTarget: any;

  ngOnInit() {
    let that = this;
    this.currentPage = -1;
    $('.work-owl-carousel').owlCarousel({
      autoplay: true,
      center: true,
      loop: false,
      nav: false,
      items: 1,
      itemsDesktop: false,
      itemsDesktopSmall: false,
      itemsTablet: false,
      itemsMobile: false,
      autoplayTimeout: 10000
    });

    setInterval(() => {
      var active = $(".work-owl-carousel").find(".owl-item.active .item");
      console.log(active);
    }, 5000);
  }
}

