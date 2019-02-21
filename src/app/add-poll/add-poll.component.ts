import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-poll',
  templateUrl: './add-poll.component.html',
  styleUrls: ['./add-poll.component.scss']
})
export class AddPollComponent implements OnInit {

  title: string
  description: string
  author: string
  topics: string[]
  topicTitle: string
  formStatus: boolean = false
  topicArray: any[] = []

  constructor(private apiService: ApiService,
              private auth: AuthService,
              private route: Router) { }

  ngOnInit() {
  }

  onSubmit(e) {
    e.preventDefault()

    let poll = {
      title: this.title,
      description: this.description,
      topics: this.topicArray,
      voters: [],
      author: localStorage.getItem('email')? localStorage.getItem('email') : localStorage.getItem('name')
    }

  if(this.topicArray.length < 2){
    alert('Your poll must have at least two options !')
  } else{
    this.apiService.postForm('poll', poll)
        .subscribe(response => {
          alert('poll créé !')
          this.route.navigate(['/mypoll'])
        })
  }
  }

  displayTopicForm() {
    this.formStatus = true
  }

  cancelTopic() {
    this.formStatus = false
  }

  addTopic() {
    let topic = {
      title: this.topicTitle,
      votes: 0
    }
    this.topicArray.push(topic)
    this.topicTitle = ''
    this.formStatus = false

  }

}
