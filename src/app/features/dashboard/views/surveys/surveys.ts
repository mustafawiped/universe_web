import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Survey, MOCK_SURVEYS } from '../../models/survey.model';

@Component({
  selector: 'app-surveys',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './surveys.html',
  styleUrl: './surveys.scss',
})
export class SurveysComponent {
  readonly surveys = signal<Survey[]>([...MOCK_SURVEYS]);

  participateSurvey(surveyId: string): void {
    this.surveys.update(list => list.map(s =>
      s.id === surveyId ? { ...s, isCompleted: true, totalResponses: s.totalResponses + 1 } : s
    ));
  }

  getMaxVotes(survey: Survey): number {
    return Math.max(...survey.options.map(o => o.votes));
  }
}
