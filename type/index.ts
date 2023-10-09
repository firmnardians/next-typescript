import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

export type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export type InputType = InputHTMLAttributes<HTMLInputElement>;

export type ProfileSourceType = Array<{
	id: number;
	image: string;
	fullname: string;
	username: string;
	is_following: boolean;
}>;
