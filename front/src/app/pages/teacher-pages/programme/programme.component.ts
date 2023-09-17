import { Component, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, EventInput } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.scss']
})
export class ProgrammeComponent {
  calendarVisible = true;
  enable:boolean=true;
  events: EventInput[] = [ ];

  calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: this.events, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  currentEvents: EventApi[] = [];
  userId:any;

  constructor(private changeDetector: ChangeDetectorRef,private eventService:EventService) {
    const authUserJSON:any = localStorage.getItem("authUser");
    const user = JSON.parse(authUserJSON);
    this.userId = user.id;
  }

   ngOnInit(){
     this.getEventsFromDatabase();
    
    this.calendarOptions.initialEvents = this.events;
  }
  getEventsFromDatabase(){
    // Remplacez 1 par l'ID de l'utilisateur approprié
    this.eventService.getEvents(this.userId).subscribe({
      next: (response: any) => {
        // console.log('Événements récupérés depuis la base de données :', response);
        // Mettez à jour la liste INITIAL_EVENTS avec les événements de la base de données
        this.events = response.map((e: any) => ({
          // id: e.id,
          title: e.title,
          start: new Date(e.start_date), // Assurez-vous que la clé correspond au format attendu
          // end: e.end_date,     // Assurez-vous que la clé correspond au format attendu
          // allDay: e.allDay
        }))
        
        
      },
      error: (e) => console.log(e)
    });
  }

ngDoCheck(){

  if(this.enable ){
     console.log("ok ici enable");
   console.log("length",this.events)
   
     
     console.log("calendar",this.calendarOptions.initialEvents)
    //  this.events = [{
    //   title:"helloevent",
    //   start:new Date()
    //  },
    //  {title:"helloevent2",
    //  start:new Date("Sat Sep 18 2023")
    // }]
    this.calendarOptions.initialEvents = this.events;
     if(this.events.length >= 1){
     
  
      this.enable = false
      console.log("calendar",this.calendarOptions.initialEvents)


     }
  }
}

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection
    if (title) {
      const eventData = {
        title,
        start: selectInfo.startStr,
        end_date: selectInfo.endStr,
        allDay: selectInfo.allDay,
      };
  
      this.eventService.createEvent(eventData,this.userId).subscribe((response) => {
        // Handle the response if needed
        calendarApi.addEvent({
          id: this.userId, 
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
        });
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }

  
  getEvents() {
    // Remplacez 1 par l'ID de l'utilisateur approprié
    this.eventService.getEvents(this.userId).subscribe( {
      next:(response: any) =>       {
        console.log('Événements récupérés :', response);
        this.events = response.map((e:any) => ({
          id: e.id,
          title: e.title,
          start: e.start_date, // Assurez-vous que la clé correspond au format attendu
          // end: e.end_date,     // Assurez-vous que la clé correspond au format attendu
          // allDay: e.allDay
        }));
        console.log("events",this.events);
        this.events = [
          {title: "hello event",
            start:new Date(),
          end:new Date()}
        ]
    },
    error: (e) => console.log(e)
  });
  }

  
}
