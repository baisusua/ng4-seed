import {
    Injectable
} from '@angular/core';
import {
    CanActivate,
    CanActivateChild,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import {
    StatusService
} from './status.service';

@Injectable()
export class CheckService implements CanActivate, CanActivateChild {
    constructor(public statusService: StatusService, public router: Router) {}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const name = state.url.split('/')[1];
        return this.checkStatus(name);
    }
    public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const name = state.url.split('/')[1];
        return this.checkStatus(name);
    }
    public checkStatus(name: string): boolean {
        const status = this.statusService.find(name);
        if (status) {
            return status;
        }
       alert('Error 暂无权限进入'+name+'页面！');
    }
}