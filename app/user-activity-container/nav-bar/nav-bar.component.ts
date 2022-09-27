import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  name : string;
  user:any;
  constructor(private router:Router) {}
  
  logout(){
    // console.log("logout called!")
    sessionStorage.clear();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });;
  }

  ngOnInit(): void {
    this.name = sessionStorage?.getItem('firstName')?.toLocaleUpperCase();
  }

}
