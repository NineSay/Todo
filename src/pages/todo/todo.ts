import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, PopoverController, ModalController } from 'ionic-angular';

/**
 * Generated class for the TodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {
  
  todo: any;
  todos: any;
  done: any;
  dones: any;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public popoverCtrl: PopoverController,
              public storage: Storage) {
    this.todo = [];
    this.todos = [];
    this.done = [];
    this.dones = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoPage');
  }

  deleteEvent(data){
    
  }

  todoEvent(data){
    
  }

  doneEvent(data){
    
  }
  
  openEvent(data){

  }

}
