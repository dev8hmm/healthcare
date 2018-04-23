import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalculationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-calculation',
  templateUrl: 'calculation.html',
})
export class CalculationPage {
  musicAlertOpts: { title: string, subTitle: string };
  datalist: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.datalist=navParams.data.calculate;

    this.musicAlertOpts = {
      title: '1994 Music',
      subTitle: 'Select your favorite'
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculationPage');
  }
  stpSelect() {
    console.log('STP selected');
  }

}
