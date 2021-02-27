import { DomainEvent } from 'core/domain/domain-event';

export class AggregateRoot {
  private _domainEvents: any[] = [];

  public addDomainEvent(event: DomainEvent) {
    this._domainEvents.push(event);
  }

  public releaseDomainEvents() {
    return this._domainEvents;
  }
}
