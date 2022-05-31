import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
//
import { Domain } from '@/features'
import { Atoms } from '@/components'

// Interface

export type State = {
  collection: Domain.Article.Collection
}

export type TArticleCollectionProps = {
  state: State
}

export type TArticleCollectionPresenterProps = {
  state: State
}

// Component

export const ArticleCollection: FC<TArticleCollectionProps> = ({ state }) => {
  return <ArticleCollectionPresenter state={state} />
}

export const ArticleCollectionPresenter: FC<
  TArticleCollectionPresenterProps
> = ({ state: { collection } }) => {
  return (
    <section>
      <div className="px-4 lg:px-0">
        <div className="pb-6">
          <div className="flex justify-start items-center">
            {/* TODO: Typography Component */}
            <Atoms.Icon.DocumentTextIcon className="h-8 w-8 mr-2" />
            <h1 className="font-bold text-2xl">新着記事</h1>
          </div>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-8">
          {collection.contents.length > 0 ? (
            collection.contents.map(
              (item: Domain.Article.Entity, index: number) => {
                const { title, id, ogp, category, tags } = item
                return (
                  <article key={index} className="mb-10">
                    <div className="relative flex flex-col h-full rounded shadow-lg shadow-gray-300 bg-white">
                      <Image
                        src={ogp.image.url}
                        alt={ogp.title}
                        className="rounded-t"
                        layout="responsive"
                        width="1200"
                        height="630"
                      />
                      <div className="px-4 py-5 grow">
                        <div className="h-full flex flex-col justify-start">
                          <div className="flex flex-wrap justify-between items-center">
                            <Link href={`/categories/${category?.slug}`}>
                              <a className="cursor-pointer">
                                <span className="inline-block bg-black rounded text-white text-xs py-1 px-2 leading-none">
                                  {category?.displayName}
                                </span>
                              </a>
                            </Link>

                            <time
                              className="text-sm text-gray-400"
                              dateTime="2022-05-21"
                            >
                              2022.05.21
                            </time>
                          </div>
                          <h3 className="overflow-hidden font-medium text-lg tracking-tight py-5 text-gray-800">
                            <Link href={`/articles/${id}`}>
                              <a className="cursor-pointer">{title}</a>
                            </Link>
                          </h3>
                          {tags && (
                            <div className="mt-auto">
                              <ul className="flex flex-wrap -ml-1">
                                {tags.map(
                                  (item: Domain.Tag.Entity, index: number) => {
                                    const { displayName } = item
                                    return (
                                      <li
                                        key={index}
                                        className="m-1 text-sm text-gray-500"
                                      >
                                        {displayName}
                                      </li>
                                    )
                                  }
                                )}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                )
              }
            )
          ) : (
            <div>なし</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ArticleCollection
