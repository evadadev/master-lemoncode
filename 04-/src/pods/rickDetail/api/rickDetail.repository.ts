import { getMemberApi } from "./rickDetail.api"
import { mapFromApiToVm } from "./rickDetail.mapper"

export const getMemberRepository = (id) => getMemberApi(id).then(mapFromApiToVm);