import {
    Component,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    public list: any[] = [{
        name:'movie'
    },{
        name:'movie'
    },{
        name:'movie'
    },{
        name:'movie'
    },{
        name:'movie'
    },{
        name:'movie'
    },{
        name:'movie'
    },{
        name:'movie'
    },{
        name:'movie'
    }];
    public ngOnInit() {
        console.log('电影列表初始化完成');
    }

}
