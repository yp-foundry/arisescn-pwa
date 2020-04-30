import {} from '@vue/composition-api'

/**
 *
 * @param {Date} date date to convert
 */
export const useFormatDateToText = (date) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}
