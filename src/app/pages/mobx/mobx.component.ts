import {
    Component,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'mobx',
    templateUrl: './mobx.component.html',
    styleUrls: ['./mobx.component.css']
})
export class MobxComponent implements OnInit {

    public ngOnInit() {
        console.log('mobx页面初始化完成');
    }

}
