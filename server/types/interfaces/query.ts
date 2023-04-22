import {ParsedQs} from 'qs'

export interface IQueryOrder extends ParsedQs {
	order: string
	take: string
	skip: string
}