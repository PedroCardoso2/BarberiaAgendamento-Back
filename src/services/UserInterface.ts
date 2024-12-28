import { UserDomain } from "../entity/UserDomain";

interface UserServicesInterface {
    login(email : string, password : string): string
    register(user : UserDomain): string
}

export default UserServicesInterface;