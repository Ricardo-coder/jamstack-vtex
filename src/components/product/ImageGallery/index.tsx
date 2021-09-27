/** @jsx jsx */
import { jsx, useUISlider, YoutubeIframe, YoutubeThumb } from '@vtex/store-ui'
import { GatsbyImage } from 'gatsby-plugin-image'
import Bullets from 'src/components/ui/Bullets'
import Arrow from 'src/components/ui/Arrow'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
import type { FC, ComponentPropsWithoutRef } from 'react'

import styles from './styles.json'

type ImageItem = {
  type: 'image'
  props: { image: IGatsbyImageData; alt: string }
}

type VideoItem = {
  type: 'video'
  props: ComponentPropsWithoutRef<typeof YoutubeIframe>
}

interface Props {
  allItems: Array<VideoItem | ImageItem>
}

const ProductImageGallery: FC<Props> = ({ allItems }) => {
  const {
    page,
    items,
    totalPages,
    setPage,
    setNextPage,
    setPreviousPage,
    dragHandlers,
  } = useUISlider({
    allItems,
    pageSize: 1,
  })

  // this is safe, since there is only one item per page
  const [item] = items
  const displayDots = allItems.length > 1
  const displayArrows = allItems.length > 1

  return (
    <div sx={styles.container}>
      <div sx={styles.miniatureContainer}>
        {allItems.map((it, idx) => (
          <button
            key={`miniature-${idx}`}
            sx={
              idx === page ? styles.miniatureActive : styles.miniatureInactive
            }
            onClick={() => setPage(idx)}
            aria-label="select product image"
          >
            {it.type === 'video' ? (
              <YoutubeThumb src={it.props.src} loading="lazy" />
            ) : (
              <img
                alt={it.props.alt}
                {...it.props.image.images.fallback}
                loading="lazy"
                sizes="5vw"
              />
            )}
          </button>
        ))}
      </div>
      <div sx={styles.featured} {...dragHandlers}>
        {displayArrows && (
          <Arrow
            direction="left"
            sx={styles.arrowLeft}
            data-testid="previousProductImage"
            aria-label="previous image"
            onClick={setPreviousPage}
          />
        )}
        <div sx={styles.media}>
          {item.type === 'image' && (
            <GatsbyImage sx={styles.image} {...item.props} />
          )}
          {item.type === 'video' && <YoutubeIframe {...item.props} />}
        </div>
        {displayArrows && (
          <Arrow
            direction="right"
            sx={styles.arrowRight}
            data-testid="nextProductImage"
            aria-label="next image"
            onClick={setNextPage}
          />
        )}
        {displayDots && (
          <Bullets
            totalQuantity={totalPages}
            activeBullet={page}
            onClick={(_, idx) => setPage(idx)}
          />
        )}
      </div>
    </div>
  )
}

export default ProductImageGallery
