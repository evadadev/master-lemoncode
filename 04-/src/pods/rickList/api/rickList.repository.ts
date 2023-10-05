import { getApiRick } from "./rickList.api";
import { mapFromApiToVm } from "./rickList.mapper";

export const memberRepositoryRick = (search) => getApiRick(search).then(mapFromApiToVm);
