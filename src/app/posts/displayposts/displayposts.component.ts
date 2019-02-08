import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../../global-service.service';

@Component({
  selector: 'app-displayposts',
  templateUrl: './displayposts.component.html',
  styleUrls: ['./displayposts.component.css']
})
export class DisplaypostsComponent implements OnInit {
 answer: string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;
  postsData=[];

  constructor(public globalService : GlobalServiceService) { }

  ngOnInit() {
    this.getPosts();
  }
  upvote(id){
    let obj={
      'id':id
    }
    let params ={ service: 'updateVote',data:obj}
      this.globalService.put(params).subscribe(data=>{
        console.log(data);
        this.getPosts();
        //this.postsData = data;
        //console.log(this.postsData);
      },err=>{

      });

  }
  getPosts(){
    //if(true){
      /*let params ={ service: 'updateVote'}
      this.globalService.put(params).subscribe(data=>{
        console.log(data);
        this.postsData = data;
        console.log(this.postsData);
      },err=>{

      });
*/
  //  }
  //  else{  
    	let params ={ service: 'disPlayPosts'}
    	this.globalService.get(params).subscribe(data=>{
       	console.log(data);
        this.postsData = data;
        console.log(this.postsData);
    	},err=>{

    	});
   // }  
  }
  CreatePost(){
    let obj={
      'post':this.answer
    }
    let params ={ service: 'createPost',data:obj}
    this.globalService.post(params).subscribe(data=>{
      console.log(data);
       this.getPosts();
    },err=>{

    });
  }
   showAnswer() {
    this.showSpinner = true;

    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.showSpinner = false;
    }, 2000);
  }

}
