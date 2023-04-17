export const extractTestimonials = (content) => { 
  const {
    testimonialVideo1Text,
    testimonialVideo1Video,
    testimonialVideo1Thumb,
    testimonialVideo2Text,
    testimonialVideo2Video,
    testimonialVideo2Thumb,
    testimonialText1Titleauthor,
    testimonialText1Text,
    testimonialText2Titleauthor,
    testimonialText2Text,
    testimonialText3Titleauthor,
    testimonialText3Text,
  } = content

  return [
    {
      path: '/',
      text: <b>{testimonialVideo1Text[0]}</b>,
      videoThumb: testimonialVideo1Thumb.fields.file.url,
      videoUrl: testimonialVideo1Video.fields.file.url,
      name: testimonialVideo1Text[1],
    },
    {
      path: '/',
      text: <b>{testimonialVideo2Text[0]}</b>,
      videoThumb: testimonialVideo2Thumb.fields.file.url,
      videoUrl: testimonialVideo2Video.fields.file.url,
      name: testimonialVideo2Text[1],
    },
    {
      path: '/',
      text: (
        <>
          <b>{testimonialText1Titleauthor[0]}</b>{' '}
          <span>{testimonialText1Text}</span>
        </>
      ),
      name: testimonialText1Titleauthor[1],
    },
    {
      path: '/',
      text: (
        <>
          <b>{testimonialText2Titleauthor[0]}</b>{' '}
          <span>{testimonialText2Text}</span>
        </>
      ),
      name: testimonialText2Titleauthor[1],
    },
    {
      path: '/',
      text: (
        <>
          <b>{testimonialText3Titleauthor[0]}</b>{' '}
          <span>{testimonialText3Text}</span>
        </>
      ),
      name: testimonialText3Titleauthor[1],
    },
  ]
 }