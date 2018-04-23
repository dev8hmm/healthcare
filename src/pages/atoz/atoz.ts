import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the AtozPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-atoz',
  templateUrl: 'atoz.html',
})
export class AtozPage {
datalist:any
items :Array<{name:string,detail:string}>
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController,public http:HttpClient) {
    let loading =this.loadingCtrl.create({
      content :"Please wait..."
    });
    loading.present();
    this.http.get("http://192.168.0.106:8000/getAtoz"+this.navParams.data.id).subscribe(data =>{
      this.datalist = data;
      if(this.datalist.success){
         this.datalist.item.forEach(element => {
            this.items.push({
              name:element.name,
              detail:element.detail
            });
         });
      }else{

      }
    })

  }


}
