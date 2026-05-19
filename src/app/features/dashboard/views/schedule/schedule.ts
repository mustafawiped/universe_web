import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleEntry, MOCK_SCHEDULE, WEEKDAYS, TIME_SLOTS } from '../../models/schedule.model';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.html',
  styleUrl: './schedule.scss',
})
export class ScheduleComponent {
  readonly weekdays = WEEKDAYS;
  readonly timeSlots = TIME_SLOTS;
  readonly schedule = MOCK_SCHEDULE;

  getEntryForSlot(day: string, time: string): ScheduleEntry | undefined {
    return this.schedule.find(e => e.day === day && e.startTime === time);
  }

  getSpan(entry: ScheduleEntry): number {
    const start = parseInt(entry.startTime.split(':')[0], 10);
    const end = parseInt(entry.endTime.split(':')[0], 10);
    return end - start;
  }

  isOccupied(day: string, time: string): boolean {
    return this.schedule.some(e => {
      if (e.day !== day) return false;
      const start = parseInt(e.startTime.split(':')[0], 10);
      const end = parseInt(e.endTime.split(':')[0], 10);
      const slot = parseInt(time.split(':')[0], 10);
      return slot > start && slot < end;
    });
  }
}
