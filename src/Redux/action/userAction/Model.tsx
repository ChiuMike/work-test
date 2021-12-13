export interface IAction {
    type: string;
    payload: IUser
}
export interface IUser {
    token: string;
}
export interface IAlertAction {
    type:string;
    payload:string
}