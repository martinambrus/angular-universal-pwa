import { Component, Inject, OnInit } from '@angular/core';
import { EchoService } from '../services/echo.service';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: `second.component.html`,
    styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
    public response: Observable<any>;

    constructor(@Inject(EchoService) private echoService: EchoService) {}

    public ngOnInit(): void {
        this.response = this.echoService.makeCall();
    }
}