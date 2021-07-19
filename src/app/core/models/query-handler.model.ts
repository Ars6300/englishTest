export interface QueryHandler {
  setNext(handler: QueryHandler): QueryHandler;
  handle(request: string): string;
}

export class QuestionHandler implements QueryHandler {
  private nextHandler: QueryHandler | undefined;

  public setNext(handler: QueryHandler): QueryHandler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: string): string {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return null!;
  }
}
