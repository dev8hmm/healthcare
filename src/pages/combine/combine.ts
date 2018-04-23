import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AtozPage } from '../atoz/atoz';

/**
 * Generated class for the CombinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-combine',
  templateUrl: 'combine.html',
})
export class CombinePage {
  items:Array<{name:string,id:number}>;
  titleArr =['ရောဂါ A to Z','ဆေးဝါး A to Z'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items=[];
     for (let i = 0; i < 2; i++) {
      this.items.push({
        name: this.titleArr[i],
         id:0
      });
     }
     console.log(this.items);
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CombinePage');
  }


  getOwnData(id :string){
    this.navCtrl.push(AtozPage,{id:id});
  }
}
