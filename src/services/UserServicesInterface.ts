import { UserDomain } from "../entity/UserDomain";
import UserServicesInterface from "./UserInterface";

class UserServices implements UserServicesInterface {
   login(email: string, password: string): string {
      throw new Error("Method not implemented.");
   }
   register(user: UserDomain): string {
      throw new Error("Method not implemented.");
   }    

}