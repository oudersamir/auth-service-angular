export class User {
  userId?:string;
  firstName?:string;
	lastName?:string;
	userName?:string;
	email?:string;
	password?:string;
	confirmPassword?:string;
	constructor(username,password){
		this.userName=username;
		this.password=password;
	}

}