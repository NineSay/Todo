import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  name: any;
  color: any;
  select: any;
  id: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController) {
    this.id = this.navParams.get('id');         
    this.name = this.navParams.get('name');
    this.select = this.navParams.get('select');
    this.color = this.navParams.get('color');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  selectEvent(select, color) {
    this.select = select;
    this.color = color;
  }

  operateEvent(operate) {
    if(operate === 1 && this.name != ""){
      let data = {}
      data["id"] = this.id;
      data["name"] = this.name;
      data["color"] = this.color;
      this.viewCtrl.dismiss(data);
    } else {
      this.viewCtrl.dismiss();
    }
  }
}
