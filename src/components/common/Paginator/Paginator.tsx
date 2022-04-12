import React, {useEffect, useState} from 'react'
import s from './Paginator.module.scss'

type PaginatorPropsType = {
   currentPage: number
   onPageChanged: (pageNumber: number) => void
   totalItemsCount: number
   pageSize: number
   portionSize?: number
}

export const Paginator = ({
                             pageSize,
                             onPageChanged,
                             currentPage,
                             totalItemsCount,
                             portionSize = 10,
                          }: PaginatorPropsType) => {

   const pagesCount = Math.ceil(totalItemsCount / pageSize)
   const pages = Array.from(Array(pagesCount).keys()).map(x => ++x)

   const portionCount = Math.ceil(pagesCount / portionSize)
   const [portionNumber, setPortionNumber] = useState<number>(1)
   const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
   const rightPortionPageNumber = portionNumber * portionSize

   useEffect(() => {
         setPortionNumber(Math.ceil(currentPage / portionSize))
      }, [currentPage, portionSize],
   )


   return (
      <div className={s.paginator}>
         <div>
            {portionNumber > 1 &&
              <button onClick={() => setPortionNumber(portionNumber - 1)}>{'<--'}</button>}
            {
               pages
                  .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                  .map(p => {
                     const currentPageClassName = currentPage === p ? s.selectedPage : ''
                     const pagesNumbersClassName = `${currentPageClassName} ${s.pagesNumbers}`

                     return (
                        <span key={p}
                              onClick={() => onPageChanged(p)}
                              className={pagesNumbersClassName}>{p + ' '}
                        </span>
                     )
                  })
            }

            {portionCount > portionNumber &&
              <button onClick={() => setPortionNumber(portionNumber + 1)}>{'-->'}</button>}
         </div>
      </div>
   )
}
