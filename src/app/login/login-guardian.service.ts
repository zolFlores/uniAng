import { Router } from "@angular/router";
import { LoginService } from "./login.services";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginGuardian {
    constructor(private loginService: LoginService,
        private router: Router) { }

    CanActivateLogin() {
        if (this.loginService.getIdToken() != "") {
            console.log("true");
            return true;
        } else {
            console.log("False");
            this.router.navigate(["login"]);
            return false;
        }
    }
}