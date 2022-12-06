import { instance } from "../../../Services/Axiosservices";

export function GetUserInfoAPI() {
  return instance.get("/getuserinfo");
}

export function UpdateAddressAPI(item) {
  return instance.put("/updateaddress", item);
}

export function DeleteAddressAPI(id) {
  return instance.put("/deleteaddress", { id });
}
export function GetUserOrdersAPI() {
  return instance.get("/getorderproduct");
}
