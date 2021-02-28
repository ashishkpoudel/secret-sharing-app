import { Secret } from 'catalog/secret/domain/model/secret';
import { DomainEvent } from 'core/domain/domain-event';

export class SecretCreated implements DomainEvent {
  constructor(public readonly secret: Secret) { }
}
