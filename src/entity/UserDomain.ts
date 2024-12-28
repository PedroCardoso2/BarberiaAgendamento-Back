export class UserDomain {

    private name: string;
    private email: string;
    private phone: string;
    private password: string;
   
   
    /**
     * Constructor for the UserDomain class
     * @param {Object} parameters - An object with the parameters to be set
     * @param {string} parameters.name - The user's name
     * @param {string} parameters.email - The user's email
     * @param {string} parameters.phone - The user's phone
     * @param {string} parameters.password - The user's password
     */


    constructor(name: string, email: string, phone: string, password: string){
        if(name != null || email != null || phone != null || password != null){throw new Error("User with problem creating")}
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }

    // Getter and setter methods for each property
    public getName(): string
    {
        return this.name;
    }
    public setName(name: string): void
    {
        this.name = name;
    }
    public getEmail(): string
    {
        return this.email;
    }
    public setEmail(email: string): void
    {
        this.email = email;
    }
    public getPhone(): string
    {
        return this.phone;
    }
    public setPhone(phone: string): void
    {
        this.phone = phone;
    }
    public getPassword(): string
    {
        return this.password;
    }
    public setPassword(password: string): void
    {
        this.password = password;
    }


}