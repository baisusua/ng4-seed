import {
    Component,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'ngrx',
    templateUrl: './ngrx.component.html',
    styleUrls: ['./ngrx.component.css']
})
export class NgrxComponent implements OnInit {

    public ngOnInit() {
        console.log('ngrx页面初始化完成');
    }

}
