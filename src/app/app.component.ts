import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
        public data: Object[];
        public filterSettings: Object;
        ngOnInit() {
            this.filterSettings = { type: 'Menu' };
            this.data = [
                {
                    taskID: 1,
                    taskName: 'Planning',
                    startDate: new Date('02/03/2017'),
                    endDate: new Date('02/07/2017'),
                    progress: 100,
                    duration: 5,
                    priority: 'Normal',
                    approved: false,
                    subtasks: [
                        { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'),
                            endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
                        { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'),
                            endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Low', approved: true },
                        { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'),
                            endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
                        { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'),
                            endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
                    ]
                },
                {
                    taskID: 6,
                    taskName: 'Design',
                    startDate: new Date('02/10/2017'),
                    endDate: new Date('02/14/2017'),
                    duration: 3,
                    progress: 86,
                    priority: 'High',
                    approved: false,
                    subtasks: [
                        { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'),
                            endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
                        { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'),
                            endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
                        { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'),
                            endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'Low', approved: true },
                        { taskID: 10, taskName: 'Design Documentation', startDate: new Date('02/13/2017'),
                            endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'High', approved: true },
                        { taskID: 11, taskName: 'Design complete', startDate: new Date('02/14/2017'),
                            endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
                    ]
                }
            ]
		}
}
