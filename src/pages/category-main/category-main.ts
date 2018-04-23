import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import { ArticalPage } from '../artical/artical';
import { CalculationPage } from '../calculation/calculation';
import { GuidePage } from '../guide/guide';
import { AlertController } from 'ionic-angular';
import { ListByCategoryPage } from '../list-by-category/list-by-category';
import { Category } from '../../models/category';
import { HttpClient } from '@angular/common/http';
import { Network } from '@ionic-native/network';
import { Toast } from '@ionic-native/toast'

/**
 * Generated class for the CategoryMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-category-main',
  templateUrl: 'category-main.html'
})
export class CategoryMainPage {
  tab1Root: any = ArticalPage;
  tab2Root: any = CalculationPage;
  tab3Root: any = GuidePage;
  icons: string[];
  title: string[];
  artical:string;
  items: Array<{name: string,id:string,image:string,from:string}>;
  btnArticalColor:string ="#136615";
  btnCalculationColor:string ="#136615";
  btnGuideColor:string ="#136615";

  datalist :any;
  status :any
  mydata:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,public http:HttpClient,public network:Network,public toast:Toast,public alert:AlertController,public loadingCtrl:LoadingController) {
      this.artical="artical";
     this.btnArticalColor="#7bb47c";
     let loading = this.loadingCtrl.create({
      content: 'Please wait...'
       });
 
    loading.present();
      this.http.get("http://192.168.0.107:8000/ion/getCategory").subscribe(data => {
        this.items = [];
          this.datalist=data
                //console.log(this.datalist.success);
                if(this.datalist.success){
                  this.datalist.item.forEach(element => {
                   // console.log(element.category_name);
                    this.items.push({
                      name: element.category_name,
                      id:element.id,
                      image:"http://healthcare.com.mm/uploads/sliders/slider_1%20(7887)q.jpg",
                      from:"0"
                
                    });
                    
                  });
                  loading.dismiss();
                }else{
    
                }
       });
  
    this.network.onDisconnect().subscribe(() => {
      console.log('you are offline');
      let alert = this.alertCtrl.create({
        title: 'No Internet Connection',
        subTitle: 'Please Check Your Internet Connection!',
        buttons: ['Ok']
      });
      alert.present();
    });
    
  }


  getArtical(){
        let loading = this.loadingCtrl.create({
        content: 'Please wait...'
         });
   
      loading.present();
    this.btnArticalColor="#7bb47c";
    this.btnCalculationColor="#136615";
    this.btnGuideColor="#136615";
    this.artical="artical";

    this.http.get("http://192.168.0.107:8000/ion/getCategory").subscribe(data => {
      this.items = [];
        this.mydata=data
              console.log(this.datalist);
              if(this.mydata.success){
                this.mydata.item.forEach(element => {
                 console.log(element.category_name);
                  this.items.push({
                    name: element.category_name,
                    id:element.id,
                    image:"http://healthcare.com.mm/uploads/sliders/slider_1%20(7887)q.jpg",
                    from:"0"
              
                  });
                 
                });
                 loading.dismiss();
              }else{
  
              }
     });

  }


  getCalculation(){
    this.btnArticalColor="#136615";
    this.btnCalculationColor="#7bb47c";
    this.btnGuideColor="#136615";
    this.artical="calculation";
    this.items = [];
    this.title=[];
    this.icons=[];
    this.title =['','','','','',''];
    this.icons =['kowinpat.png','childgrow.png','inject.png','calcal.png','bmical.png','game.png']
    
    for (let i = 0; i <6; i++) {
      this.items.push({
        name: this.title[i],
        id:"0",
        image:this.icons[i],
        from:i+""
      });
  }
}

  getGuide(){
    this.btnArticalColor="#136615";
    this.btnCalculationColor="#136615";
    this.btnGuideColor="#7bb47c";
    this.artical="guide";
    this.items = [];
    this.title=[];
    this.icons=[];
    this.title =['အရေးပေါ် ','အထူးကုဆရာဝန်ကြီးများ','ဆေးရုံများ','ဆေးခန်းများ','ဓာတ်ခွဲခန်းများ','လူမှုအသင်းအဖွဲ့များ','ဆေးဆိုင်များ',' အခြား ']
    for (let i = 0; i <8; i++) {
   
      this.items.push({
        name: this.title[i],
        id:"0",
        image:this.icons[i],
        from:i+""
      });
  }
}

getDataByCategory(cat:any){
  this.navCtrl.push(ListByCategoryPage,{cat :cat})
}


goCalculate(data :Category){
  this.navCtrl.push(CalculationPage,{calculate :data})
}


}