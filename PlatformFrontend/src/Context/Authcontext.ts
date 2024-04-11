import { createContext } from 'react';

export interface USER
{
	id:number
    User: string,
    Role: string
}

export const USERContext = createContext<USER | null>(null)

