// STYLE HELPERS
export const toggleSelectedItem = (target, listClassName) => {
  const allDays = document.querySelectorAll(listClassName)

  allDays.forEach((d) => {
    d.classList.remove('selected')
  })
  setTimeout(() => {
    target.classList.add('selected')
  })
}

export const styleInitDate = (curDate) => {
  const startDay = new Date(curDate).getDate()
  const days = document.querySelectorAll('.react-calendar__tile')
  days.forEach((d) => {
    if (d.children[0].textContent == startDay) {
      d.classList.add('selected')
    }
  })
}
