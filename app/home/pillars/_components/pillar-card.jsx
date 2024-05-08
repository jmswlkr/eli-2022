'use client'

import { useLayoutContext } from '@/context'

import { PillarsModal } from './pillar-modal'

export function PillarCard({ title, icon, idx, allPillars }) {
  const { setContentModalOpen, setModalContent, contentModalOpen } =
    useLayoutContext()

  // set modal open and inject content.
  const handleOpenAndPopulateModal = (curIdx) => {
    if (curIdx !== undefined || curIdx === 0) {
      setModalContent(
        <PillarsModal
          currPillar={allPillars[curIdx]}
          allPillars={allPillars}
          idx={curIdx}
        />
      )
    }
    if (curIdx || curIdx === 0) {
      setContentModalOpen(!contentModalOpen)
    }
  }

  return (
    <div
      onClick={() => handleOpenAndPopulateModal(idx)}
      className='PILLAR_CARD cursor-pointer rounded-lg border-[.5px] border-[var(--color-tex-med)] hover:border-accent-300 lg:border-0 py-md lg:p-0 flex-col-center-top group gap-[35px] transition text-[var(--text-color-med)] hover:text-white'
    >
      <h4 className='P_TITLE head-3 lg:!head-5 text-center flex-col-center gap-sm !font-body tracking-[2px]'>
        {title}
      </h4>
      <span className='P_DIVIDER bg-accent-300 group-hover:opacity-100 w-8 h-1 opacity-0' />
      <span className='P_ICON group-hover:text-accent-300'>{icon}</span>
      <button className='P_EXPAND opacity-0 text-[16px] group-hover:opacity-100 tracking-[7px] font-thin text-accent-300 uppercase'>
        Expand
      </button>
    </div>
  )
}
