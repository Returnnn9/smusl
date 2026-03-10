export type Listener = () => void;

export class EventEmitter {
 private listeners = new Set<Listener>();

 subscribe = (listener: Listener): (() => void) => {
  this.listeners.add(listener);
  return () => {
   this.listeners.delete(listener);
  };
 };

 protected emitChange() {
  this.listeners.forEach((listener) => listener());
 }
}
