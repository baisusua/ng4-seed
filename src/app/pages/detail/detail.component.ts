import {
    Component,
    OnInit,
} from '@angular/core';
import {
    ActivatedRoute
} from '@angular/router';
import 'rxjs/add/operator/map';
@Component({
    selector: 'detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
    public name: string = '--';
    public id: string | number = '--';
    public type: string = '--';
    public link: string = 'books';
    constructor(
        public activatedRoute: ActivatedRoute
    ) {
        /*  */
    }
    public ngOnInit() {
        console.log('书籍/电影 详情页面初始化完成');

        this.activatedRoute.params.map(params => params.id).subscribe((id) => {
            this.id = id;
        }, (error) => {
            console.log(error);
        });

        this.activatedRoute.queryParams.map(params => params.name).subscribe((name) => {
            this.name = name;
            if(name){
                if(name.indexOf('book')>-1){
                    this.type = '书籍';
                }
                if(name.indexOf('movie')>-1){
                    this.type = '电影';
                    this.link = 'movies';
                }
            }
        }, (error) => {
            console.log(error);
        });

    }
}