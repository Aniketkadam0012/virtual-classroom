import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/session.service';


@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {
  session: any = {};
  comments: any[] = [];
  newComment = '';

  constructor(
    private sessionService: SessionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const sessionId = this.route.snapshot.paramMap.get('id');
    this.sessionService['getSessionById'](sessionId).subscribe(
      (data: { session: any; comments: any[]; }) => {
        this.session = data.session;
        this.comments = data.comments;
      },
      (error: any) => {
        console.log('Error fetching session', error);
      }
    );
  }

  addComment() {
   
  }

  replyToComment(commentId: number) {
   
  }

}
