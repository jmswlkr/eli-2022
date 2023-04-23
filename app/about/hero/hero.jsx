import { container, imageWrap, textWrap, header } from './hero.module.scss'

export const Hero = ({ heroPreTitle, heroHeaderLines, heroImage }) => {
  
  return (
    <section className={container} data-testid='hero-container'>
      <div className={textWrap} data-testid='text-wrap'>
        <h1 className={header} data-testid='header'>
          <span>{heroPreTitle}</span>
          <span>{heroHeaderLines[0]}</span>
          <span>{heroHeaderLines[1]}</span>
        </h1>
      </div>
      <div className={imageWrap} data-testid='image-wrap'>
        <img
          src={heroImage.fields.file.url}
          alt='3 travelers stand silhoutted in front of a blue sky over an orange sunset in a hazy valley'
          data-testid='hero-image'
        />
      </div>
    </section>
  )
}
