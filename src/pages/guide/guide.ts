import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GuidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-guide',
  templateUrl: 'guide.html',
})
export class GuidePage {
 title :any
 items :Array<{name:string,id:string}>
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title =['အရေးပေါ် ','အထူးကုဆရာဝန်ကြီးများ','ဆေးရုံများ','ဆေးခန်းများ','ဓာတ်ခွဲခန်းများ','လူမှုအသင်းအဖွဲ့များ','ဆေးဆိုင်များ',' အခြား ']
    this.items =[];
    for (let i = 0; i <8; i++) {
      console.log(this.title[i]);
      
      this.items.push({
        name :this.title[i],
        id :"0"
      })
  }
  }



}
