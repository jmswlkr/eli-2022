import { container, imageWrap, textWrap, header } from './hero.module.scss'

export const Hero = () => {
  return (
    <section className={container} data-testid='hero-container'>
      <div className={textWrap} data-testid='text-wrap'>
        <h1 className={header} data-testid='header'>
          <span>About the</span>
          <span>Embodied Learning</span>
          <span>Institute</span>
        </h1>
      </div>
      <div className={imageWrap} data-testid='image-wrap'>
        <img
          src='https://res.cloudinary.com/jameswalker-work/image/upload/v1678442251/ELI/about--centered_tkpdza.png'
          alt='3 travelers stand silhoutted in front of a blue sky over an orange sunset in a hazy valley'
          data-testid='hero-image'
        />
      </div>
    </section>
  )
}
