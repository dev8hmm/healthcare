import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { Facebook } from '@ionic-native/facebook';
import { CategoryMainPage } from '../pages/category-main/category-main';
import { ArticalPage } from '../pages/artical/artical';
import { GuidePage } from '../pages/guide/guide';
import { CalculationPage } from '../pages/calculation/calculation';
import { ListByCategoryPage } from '../pages/list-by-category/list-by-category';
import { PostDetailPage } from '../pages/post-detail/post-detail';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Network } from '@ionic-native/network';
import { Toast } from '@ionic-native/toast';
import { CombinePage } from '../pages/combine/combine';
import { AtozPage } from '../pages/atoz/atoz';
import { ForumPage } from '../pages/forum/forum';
import { EntertainmentPage } from '../pages/entertainment/entertainment';
import { NewPage } from '../pages/new/new';
import { CommunicatePage } from '../pages/communicate/communicate';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CategoryMainPage,
    ArticalPage,
    GuidePage,
    CombinePage,
    CalculationPage,
    ListByCategoryPage,
    PostDetailPage,
    AtozPage,
    ForumPage,
    EntertainmentPage,
    NewPage,
    CommunicatePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CategoryMainPage,
    ArticalPage,
    GuidePage,
    CombinePage,
    CalculationPage,
    ListByCategoryPage,
    PostDetailPage,
    AtozPage,
    ForumPage,
    EntertainmentPage,
    NewPage,
    CommunicatePage
  ],
  providers: [
    StatusBar,
    HttpClient,
    Facebook,
    Network,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
