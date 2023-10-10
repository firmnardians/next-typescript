import { ButtonHTMLAttributes, ChangeEvent, InputHTMLAttributes } from 'react';

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

export type SearchPageType = {
	value: string;
	isDisabled: boolean;
	onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
	onClickButton: () => void;
	result: number;
	onChangeSlider: (value: number | number[]) => void;
};

export type ResultType = {
	id: number;
	title: string;
	thumbnailUrl: string;
};

export type ResultStateType = {
	source: Array<ResultType>;
	isLoading: boolean;
	perpage: number;
	page: number;
};

export type TagType = {
	name: string;
	website: string;
};

export type TagStateType = {
	source: Array<TagType>;
	isLoading: boolean;
};
