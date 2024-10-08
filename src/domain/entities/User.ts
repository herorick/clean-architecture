export class User {
  constructor(
    public readonly _id: string,
    public readonly id: string,
    public name: string,
    public password: string,
    public tokens: { token: string }[],
  ) {}
}
