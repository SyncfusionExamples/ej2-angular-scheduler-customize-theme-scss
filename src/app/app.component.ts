import { Component } from '@angular/core';
import {
    ScheduleComponent, EventSettingsModel, ResizeService,  DragAndDropService
} from '@syncfusion/ej2-angular-schedule';
import { timelineResourceData, resourceData } from './data';
import { extend } from '@syncfusion/ej2-base';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    providers: [ ResizeService, DragAndDropService]
})
export class AppComponent {
    public scheduleObj: ScheduleComponent;
     public selectedDate: Date = new Date(2018, 3, 4);
   public eventSettings: EventSettingsModel = {
        dataSource: <Object[]>extend([], resourceData.concat(timelineResourceData), null, true)
    };
}

