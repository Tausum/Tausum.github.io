import { System, SystemType } from "@/common/constant/system";

export type ConstantType = {
  System: SystemType
}

const Constant = (): ConstantType => {
  return {
    System
  }
}

export default Constant()

