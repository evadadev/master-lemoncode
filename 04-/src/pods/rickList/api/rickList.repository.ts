import { getApiRick } from "./rickList.api";
import { mapFromApiToVm } from "./rickList.mapper";

export const memberRepositoryRick = () => getApiRick().then(mapFromApiToVm);
