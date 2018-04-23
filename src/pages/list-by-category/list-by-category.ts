import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import { PostDetailPage } from '../post-detail/post-detail';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ListByCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-list-by-category',
  templateUrl: 'list-by-category.html',
})
export class ListByCategoryPage {
  id :any
  title:string;
  datalist :any;
  page =0;
  items :Array<{id:string,title:string,content:string,abb:string,postdate:string,read:string,share:string,view:string,like:string,image:string}>
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public loadingCtrl:LoadingController) {
    this.id = navParams.data.cat.id;
    this.title =navParams.data.cat.name
    console.log(this.id);
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.http.get("http://192.168.0.107:8000/ion/post/"+this.id+"/0").subscribe(data =>{
      this.datalist =data
      if(this.datalist.success){
        this.datalist.item.forEach(element => {
          this.items.push({
            id : element.id,
            title : element.title,
            content :element.content,
            abb :element.abb,
            postdate :element.postdate,
            read :element.read,
            share :element.share,
            view :element.view,
            like :element.like,
            image :element.image

           });
          
        });
        loading.dismiss();
      
      }else{

      }
   
    })
    this.items =[];
    for(let i=1;i<20;i++)  {
    
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListByCategoryPage');
  }

  goDetail(item :any){
    //console.log(item);
    this.navCtrl.push(PostDetailPage,{item:item});
  }


  doInfinite(infiniteScroll) {
    this.page = this.page+10;
    setTimeout(() => {
      this.http.get("http://192.168.0.107:8000/ion/post/"+this.id+"/"+this.page).subscribe(data =>{
        this.datalist =data
        if(this.datalist.success){
          this.datalist.item.forEach(element => {
            this.items.push({
              id : element.id,
              title : element.title,
              content :element.content,
              abb :element.abb,
              postdate :element.postdate,
              read :element.read,
              share :element.share,
              view :element.view,
              like :element.like,
              image :element.image
  
             });
             infiniteScroll.complete();
          });
        
        }else{
  
        }
     
      })
      
    }, 1000);
  }

}
