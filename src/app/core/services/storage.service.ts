import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  local = window.localStorage;
  session = window.sessionStorage;
  constructor() {}

  setLocalItem(key: string, value: any): void {
    try {
      this.local.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  getLocalItem<T>(key: string): T | null {
    try {
      const data = this.local.getItem(key);
      return data !== null ? JSON.parse(data) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  removeItem(key: string): void {
    try {
      this.local.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  }

  clear(): void {
    try {
      this.local.clear();
    } catch (error) {
      console.error(error);
    }
  }

  setSessionItem(key: string, value: any): void {
    try {
      this.session.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  getSessionItem<T>(key: string): T | null {
    try {
      const data = this.session.getItem(key);
      return data !== null ? JSON.parse(data) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  clearSession(): void {
    try {
      this.session.clear();
    } catch (error) {
      console.error(error);
    }
  }
}
