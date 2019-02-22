import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Params, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {map, switchMap, mergeMap} from 'rxjs/operators';
import { Poll } from '../interface/poll.interface';

@Component({
  selector: 'app-list-poll',
  templateUrl: './list-poll.component.html',
  styleUrls: ['./list-poll.component.scss']
})
export class ListPollComponent implements OnInit {

isMyPoll: boolean = false
texte: string = "Bonjour"
// polls: Array<Poll>
polls: Poll[]

  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              public auth: AuthService) { }

  ngOnInit() {

    this.route.url
      .pipe(
        mergeMap((url) => {
          if(url[0].path === 'poll') {
            this.isMyPoll = false
            return this.apiService.getAllList('poll')
          } else {
              this.isMyPoll = true
              return this.apiService.getSomeList('mypoll', localStorage.getItem('email'))
          }
        })
      ).subscribe((polls: Poll[]) => {
          this.polls = polls
      })
  }

  delete(id,index) {
    if(confirm('Voulez-vous vraimer supprimer ce poll ?')) {
      this.apiService.deleteItem('poll', id)
      .subscribe((rep) => {
        this.polls.splice(index, 1)
        console.log(rep)
      })
    }

  }

}


