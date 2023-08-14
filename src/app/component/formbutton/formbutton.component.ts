import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogModel } from 'src/app/shared/store/blog/blog.common';
import { getBlog } from 'src/app/shared/store/blog/blog.selector';

@Component({
  selector: 'app-formbutton',
  templateUrl: './formbutton.component.html',
  styleUrls: ['./formbutton.component.css']
})
export class FormbuttonComponent implements OnInit {
  constructor(private store: Store<{blog : BlogModel[]}>)
  {

  }

  display : boolean = false;
  blogList !:BlogModel[]
  ngOnInit(): void {
      this.store.select(getBlog).subscribe(item => {
        this.blogList = item;
        console.log(this.blogList);

      })
  }

  AddBlog(){
    this.display = true;
  }

}
