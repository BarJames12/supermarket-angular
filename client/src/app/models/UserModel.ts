export class UserModel {
    public constructor(
        public username: string,
        public password: string,
        public confirmPassword?: string,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public city?: string,
        public address?: string,
        public userType?: boolean,

    ) { }

}