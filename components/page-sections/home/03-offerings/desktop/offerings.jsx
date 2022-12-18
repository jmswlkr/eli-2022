// import React, { useEffect, useRef, useState } from 'react'
// import { useInView } from 'react-intersection-observer'
// import { motion, useAnimation } from 'framer-motion'

// import { baseUrl } from '@/utils/cloudinary'
// import { offerings } from '../offerings-data'

// import { Label } from 'components/elements/section-label/section-label'
// import { ArrowBtn } from 'components/elements/arrow-btn/arrow-btn'

// import { animationProps } from 'animation/animate'
// import { blurFadeIn } from 'animation/fade'

// import {
//   offerings as offeringsStyle,
//   label,
//   offeringTextContent,
//   title,
//   blurb,
//   sliderContainer,
//   slider,
//   blockPos,
//   block,
//   blockTitle,
//   // source,
//   // dest,
//   hide,
//   blockBtn,
//   zero,
//   one,
//   two,
//   three,
//   four,
//   five,
// } from './offerings.module.scss'

// export const Offerings = () => {
//   const sliderRef = useRef(null)
//   const [focusedOffering, setFocusedOffering] = useState(2)
//   const [distributedOfferingIdx, setDistributedOfferingIdx] = useState(2)
//   const [sectionRef, sectionInView] = useInView()
//   const controls = useAnimation()

//   useEffect(() => {
//     if (sectionInView) {
//       controls.start('visible')
//     }
//   }, [sectionInView, controls])

//   useEffect(() => {
//     let converted = focusedOffering

//     if (focusedOffering > 2) {
//       converted = focusedOffering - 3
//     }

//     setDistributedOfferingIdx(converted)
//   }, [focusedOffering])

//   const positionsIndex = [zero, one, two, three, four, five]

//   // Turn array into closed loop
//   const next = (currentIndex, length) => (currentIndex + 1) % length

//   // Navigate closed loop array by variable increments
//   const getNextByDegree = (curIdx, degree) => {
//     const len = positionsIndex.length
//     const nextDegree = next(curIdx + degree, len)

//     return nextDegree
//   }

//   // Set focused offering by 1 or two positions based on clicked block's position
//   const handleSetOffering = (clickedPosition) => {
//     let runTwice = clickedPosition === 1
//     const len = positionsIndex.length
//     const curIdx = focusedOffering

//     setFocusedOffering(next(curIdx, len))

//     if (runTwice) {
//       setTimeout(() => {
//         setFocusedOffering((prvState) => next(prvState, len))
//       }, 500)
//     }
//   }

//   return (
//     <section className={offeringsStyle} ref={sectionRef} id={'offerings'}>
//       <div className={label}>
//         <Label>Offerings Offerings Offerings </Label>
//       </div>
//       <div className={offeringTextContent}>
//         <h4 className={title}>
//           {offerings[distributedOfferingIdx].blurbTitle}
//         </h4>
//         <p className={blurb}>{offerings[distributedOfferingIdx].blurb}</p>
//       </div>
//       <div className={sliderContainer}>
//         <div className={`${slider}`} ref={sliderRef}>
//           {[...offerings, ...offerings].map((offr, idx) => {
//             const offsetDegree = idx - 2
//             const clickedPos = getNextByDegree(focusedOffering, offsetDegree)
//             return (
//               <motion.span
//                 key={idx}
//                 {...animationProps({
//                   controls,
//                   animation: blurFadeIn,
//                   del: 0.25,
//                 })}
//                 className={`${block} ${blockPos} ${
//                   positionsIndex[
//                     getNextByDegree(focusedOffering, offsetDegree)
//                   ] ?? hide
//                 }`}
//                 onClick={() => {
//                   if ([3, 4].includes(clickedPos)) return

//                   handleSetOffering(clickedPos)
//                 }}
//               >
//                 <img src={baseUrl(offr.imgUrlFrag, 'good')} alt={offr.name} />
//                 <h3 className={blockTitle}>
//                   {offr.title}
//                   <span className={blockBtn}>
//                     <ArrowBtn pageLink={`/offerings/${offr.path}`} />
//                   </span>
//                 </h3>
//               </motion.span>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }
