import { createContext } from 'react';
import {User} from "../types/user.type"

export const USERContext = createContext<User | null>(null)

