type Role = {
    id: string;
    name: string;
    color: string;
    userIDs: string[];
}

type User = {
    id: string;
    email: string;
    username: string;
    name: string;
    surname: string;
    roleIDs: string[];
    roles: Role[];
}