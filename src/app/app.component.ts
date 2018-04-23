import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { CategoryMainPage } from '../pages/category-main/category-main';
import { CombinePage } from '../pages/combine/combine';
import { GuidePage } from '../pages/guide/guide';
import { ArticalPage } from '../pages/artical/artical';
import { NewPage } from '../pages/new/new';
import { EntertainmentPage } from '../pages/entertainment/entertainment';
import { ForumPage } from '../pages/forum/forum';
import { CommunicatePage } from '../pages/communicate/communicate';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = CategoryMainPage;

  pages: Array<{icon:string,title: string, component: any}>;
  grouppages: Array<{icon:string,title: string, component: any}>;
  icons:any;

  constructor(public platform: Platform, public statusBar: StatusBar,public modal :ModalController) {
    
    // let splash = modal.create(SplashPage);
    // splash.present();
    // used for an example of ngFor and navigation

    this.pages = [
      { icon:'home',title: 'Home', component: CategoryMainPage },
      { icon:'list-box',title: '  A to Z', component: CombinePage },
      { icon:'book',title: ' ကျန်းမာရေးဆောင်းပါးများ', component: ArticalPage },
      { icon:'map',title: '  လမ်းညွှန်', component: GuidePage },
      { icon:'paper',title: '  သတင်း', component: NewPage },
      { icon:'happy',title: '  ဖျော်ဖြေရေး', component: EntertainmentPage },
      { icon:'people',title: '   စကားဝိုင်း', component: ForumPage }
      
      
    ];
    this.grouppages = [
      { icon:'information-circle',title: 'About Us', component: CommunicatePage },
      { icon:'paper',title: 'Terms and Condition', component: CommunicatePage },
      { icon:'contacts',title: ' Contact Us', component: CommunicatePage },
      { icon:'globe',title: 'Go to Website', component: CommunicatePage }
    ];

  }



  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
