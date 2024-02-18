import { ReactNode } from 'react'

export type Page<Params extends string = string, SearchParams extends string = string> = {
  params: Record<Params, string>
  searchParams: Record<SearchParams, string>
}

export type Layout<ParallelRoutes extends string = string> = {
  children: ReactNode
} & Record<ParallelRoutes, ReactNode>
