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

    this.storage.get('Todo').then((value) => {
      if (value){
        this.todo = JSON.parse(value);
        for (let i = 0; i < this.todo.length; i++) {
          let todoID = this.todo[i]
          if (todoID) {
            this.storage.get(todoID).then((value) => {
              console.log(value)
              let todo = JSON.parse(value);
              this.todos.push(todo);
            });
          }
        }
      }
    });
    this.storage.get('Done').then((value) => {
      if (value){
        this.done = JSON.parse(value);
        for (let i = 0; i < this.done.length; i++) {
          let doneID = this.done[i]
          if (doneID) {
            this.storage.get(doneID).then((value) => {
              console.log(value)
              let done = JSON.parse(value);
              this.dones.push(done);
            });
          }
        }
      }
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoPage');
  }

  deleteEvent(data){
    // 删除树
    this.storage.remove(data.id);
    // 删除树的引用
    for (let i = 0; i < this.todo.length; i++){
      if (this.todo[i] == data.id){
        this.todo.splice(i,1);
        this.todos.splice(i, 1)
      }
    }
    // 删除树的引用
    for (let i = 0; i < this.done.length; i++){
      if (this.done[i] == data.id){
        this.done.splice(i,1);
        this.dones.splice(i, 1)
      }
    }
    
    let jsonTodo =  JSON.stringify(this.todo);
    this.storage.set('Todo', jsonTodo);
    let jsonDone =  JSON.stringify(this.done);
    this.storage.set('Todo', jsonDone);
  }

  todoEvent(data){
    
  }

  doneEvent(data){
    
  }

  openEvent(data){

  }

  createEvent(){
    let popover = this.popoverCtrl.create("NewPage");
    popover.onDidDismiss(data => {
      if (data) {
        console.log(data)
        this.todo.push(data.id)
        this.todos.push(data)
        let jsonTodo =  JSON.stringify(this.todo);
        this.storage.set('Todo', jsonTodo);
        let jsonData =  JSON.stringify(data);
        this.storage.set(data.id, jsonData);
      }
    });
    popover.present();
  }

}
