
interface CreateUserDate {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | TechObject>
}

interface TechObject {
    title: string;
    experience: number;
}

export default function createUser({ name, email, password, techs }: CreateUserDate) {
    const user = {
        name,
        email,
        password,
    }
    return user;
}