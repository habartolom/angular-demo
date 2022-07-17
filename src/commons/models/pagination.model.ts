import { ResourceModel } from "./resource.model";

export class PaginationModel{
  count: number | undefined;
  next?: string;
  previous?: string;
  results!: ResourceModel[];
}
