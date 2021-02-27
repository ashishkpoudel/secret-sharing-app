import { DomainEvent } from 'core/domain/domain-event';

export class DomainEventMessenger {
  private readonly listenerMap = new Map();

  async publish(event: DomainEvent) {
    if (this.listenerMap.has(event.constructor.name)) {
      await this.listenerMap.get(event.constructor.name)(event);
    }
  }

  listen(eventName: string, callback: Function) {
    this.listenerMap.set(eventName, callback);
  }
}
