import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { IpService } from '../services/ip.service';
import { AuthService } from '../services/auth.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import {map, mergeMap, catchError} from 'rxjs/operators';
import { empty } from 'rxjs';

@Component({
  selector: 'app-detail-poll',
  templateUrl: './detail-poll.component.html',
  styleUrls: ['./detail-poll.component.scss']
})
export class DetailPollComponent implements OnInit {

  poll
  topicTitle
  id: string
  formStatus: boolean = false

  barChartType = 'PieChart'
  barChartData = []
    barOption = {
      pieHole: 0.5,
      height: 300,
      chartArea: {
        height: '80%',
        width: '80%'
      },
      legend: {
        alignment: 'center',
        position: 'bottom'
      },
      animation: {
        duration: 1000,
        easing: 'out',
        startup: true
    }
  }

  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              public auth: AuthService,
              private router: Router,
              private ip: IpService) {}

  ngOnInit() {
      this.route.params
      .pipe(
        mergeMap((params) => {
          this.id = params.id
         return this.apiService.getItem('poll', this.id)
       }),
        catchError(err => {throw(err)})
      ).subscribe(poll => {
        this.poll = poll
        this.barChartData = this.poll.topics.map(topic => {
          return [topic.title, topic.votes]
        })
      })
  }

  createBarChartData(poll) {
    let data = poll.topics.map(topic => {
          return [topic.title, topic.votes]
    })
    return data
  }

  displayTopicForm() {
    this.formStatus = true
  }

  cancelTopic() {
    this.formStatus = false
  }

  addTopic() {
    if(!this.topicTitle) {
      alert('Provide a title for the option !')
    } else {
      let data = {title: this.topicTitle, votes: 0}
        this.apiService.updateItem('poll', this.id, data)
        .subscribe(response => {
          this.poll = response['poll']
          this.barChartData = this.createBarChartData(this.poll)
          this.formStatus = false
    })
    }
  }

  vote(i) {
    this.ip.getIpAddress()
    .pipe(
      mergeMap(response => {
        let ip = response['ip']

        if(this.poll.voters.indexOf(ip) != -1) {
            alert('You have already voted !')
            return empty()
        } else {
          this.poll.topics[i].votes++
          this.poll.voters.push(ip)
          let data = {topics: this.poll.topics, voters: this.poll.voters}
          return this.apiService.updateVote(this.id, i, data)
        }

      })
    ).subscribe(response => {
      this.barChartData = this.createBarChartData(this.poll)
    })
  }


}
