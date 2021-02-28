import { DomainEvent } from 'core/domain/domain-event';

export class AggregateRoot {
  private _domainEvents: any[] = [];

  public addDomainEvent(event: DomainEvent) {
    this._domainEvents.push(event);
  }

  public releaseDomainEvents() {
    const events = this._domainEvents;
    this._domainEvents = [];

    return this._domainEvents;
  }
}
