import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { ObsVerificationData, ObsVerificationResponse } from '../models/obs-verification.model';
import { IObsVerificationService } from '../ports/obs-verification.port';

/**
 * Mock implementation of OBS student verification.
 *
 * SRP: This service is solely responsible for OBS verification logic.
 * OCP: Swap this with a real HTTP-backed implementation by providing
 *      a different class against the OBS_VERIFICATION_SERVICE token.
 */
@Injectable({ providedIn: 'root' })
export class ObsVerificationService implements IObsVerificationService {

  verifyStudent(data: ObsVerificationData): Observable<ObsVerificationResponse> {
    const isValid = data.studentNumber.length >= 8 && data.firstName.length > 0;

    const response: ObsVerificationResponse = {
      verified: isValid,
      message: isValid
        ? 'OBS Doğrulaması Başarılı'
        : 'OBS Kaydı Bulunamadı veya Bilgiler Hatalı',
    };

    return of(response).pipe(delay(1500));
  }
}
