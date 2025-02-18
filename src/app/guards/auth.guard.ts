import { Inject } from "@angular/core";
import { CanActivateChildFn, Router } from "@angular/router";
export const AuthGuard:CanActivateChildFn=(ChildRoute,state)=>{
    const token=localStorage.getItem("access-token");
    if(token===null){
        const router=Inject(Router);
        router.navigateByUrl("/login");
        return false;
    }
    return true;
}