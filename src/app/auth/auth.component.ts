import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoadingMode = true;
  isLoading = false;
  error: string = null;

  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;

  private closeSub: Subscription;

  constructor(
    private AuthService: AuthService,
    private router: Router,
    private companyFactoryResolver: ComponentFactoryResolver
  ) {}

  onSwitchMode() {
    this.isLoadingMode = !this.isLoadingMode;
  }

  onSubmit(form: NgForm) {
    console.log('object');
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;

    let authObs: Observable<AuthResponseData>;

    if (this.isLoadingMode) {
      authObs = this.AuthService.login(email, password);
    } else {
      authObs = this.AuthService.signup(email, password);
    }
    authObs.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      (error) => {
        console.log(error);
        this.error = error;
        this.isLoading = false;
        this.showErrorAlert(error);
      }
    );
    form.reset();
  }

  onHandleError() {
    this.error = null;
  }

  private showErrorAlert(msg: string) {
    const alertComponentFactory = this.companyFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(
      alertComponentFactory
    );

    componentRef.instance.message = msg;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.closeSub) this.closeSub.unsubscribe();
  }
}
