import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        name:'Douglas',
        email:'douglas@gmail.com',
        password:'1574',
        techs: [ 
            'Node.js',
            'Reactch.js',
            { title: 'JavaScript', experience: 100}
        ],
    });

    return response.json({ message: 'Hello World' });
}