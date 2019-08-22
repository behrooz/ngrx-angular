import { User } from 'src/app/models/user';

export interface  state{
    
    isAuthenticated: boolean;
    user:  User | null;
    errorMessage: string | null;
}

export const initialState: state ={
    isAuthenticated: false,
    user: null,
    errorMessage: null    
}