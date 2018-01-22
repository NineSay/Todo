import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ToolService } from '../../app/tool.service';

/**
 * Generated class for the NewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {
  
  name: any;
  color: any;
  select: any;
  id: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController) {
    this.id = ToolService.getInstance().UUID();            
    this.name = "";
    this.select = 1;
    this.color = "Fire";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage');
  }

  selectEvent(select, color) {
    this.select = select;
    this.color = color;
  }

  operateEvent(operate) {
    if(operate === 1){
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
