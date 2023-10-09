import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

export type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export type InputType = InputHTMLAttributes<HTMLInputElement>;

export type ProfileType = {
	id: number;
	image: string;
	fullname: string;
	username: string;
	is_following: boolean;
};

export type ProfileSourceType = Array<ProfileType>;
