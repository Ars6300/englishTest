export interface QueryHandler {
  setNext(handler: QueryHandler): QueryHandler;
  handle(request: string): string;
}



