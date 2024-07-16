import { Inject, Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowLocalStorageService {
  private window: Window | null;

  constructor(@Inject(PLATFORM_ID) private platformId: string) {
    if (isPlatformBrowser(this.platformId)) {
      this.window = window;
    } else {
      this.window = null;
    }
  }

  get nativeWindow(): Window | null {
    return this.window;
  }

  getItem(key: string): string | null {
    if (this.window) {
      return this.window.localStorage.getItem(key);
    } else {
      return null;
    }
  }

  setItem(key: string, value: string): void {
    if (this.window) {
      this.window.localStorage.setItem(key, value);
    }
  }

  removeItem(key: string): void {
    if (this.window) {
      this.window.localStorage.removeItem(key);
    }
  }
}