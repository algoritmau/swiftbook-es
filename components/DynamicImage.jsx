import { useEffect, useState } from 'react'

import Image from 'next/image'

const DynamicImage = ({ baseName, alt, width, height }) => {
  const [imageSrc, setImageSrc] = useState('')

  useEffect(() => {
    const htmlElement = document.querySelector('html')

    /**
     * Checks whether the user has a dark mode preference by getting the value
     * of the color-scheme property of the HTML element using the getComputedStyle
     * method to update the image source based on the current color scheme.
     */
    const updateImageSrc = () => {
      const isDarkMode =
        getComputedStyle(htmlElement).getPropertyValue('color-scheme') ===
        'dark'

      setImageSrc(
        `/assets/images/${baseName}${isDarkMode ? '~dark' : ''}@2x.png`
      )
    }

    updateImageSrc() // call once to set initial value

    const observer = new MutationObserver(updateImageSrc)

    observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: ['style']
    })

    return () => observer.disconnect()
  }, [imageSrc])

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className="image"
    />
  )
}

export default DynamicImage
