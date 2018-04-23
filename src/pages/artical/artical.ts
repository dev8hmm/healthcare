import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { ListByCategoryPage } from '../list-by-category/list-by-category';

/**
 * Generated class for the ArticalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-artical',
  templateUrl: 'artical.html',
})
export class ArticalPage {
items:Array<{name:string,id:string}>
mydata :any
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public loadingCtrl:LoadingController) {
    let loading =this.loadingCtrl.create({
      content :"Please wait...."
    });
    loading.present();
    this.http.get("http://192.168.0.107:8000/ion/getCategory").subscribe(data => {
      this.items = [];
        this.mydata=data
              if(this.mydata.success){
                this.mydata.item.forEach(element => {
                 // console.log(element.category_name);
                  this.items.push({
                    name: element.category_name,
                    id:element.id
                  });
                 
                });
                 loading.dismiss();
              }else{
  
              }
     });
  }
  getDataByCategory(cat:any){
    this.navCtrl.push(ListByCategoryPage,{cat :cat})
  }
  


}
