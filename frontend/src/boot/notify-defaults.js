import { Notify } from 'quasar'
import { boot } from 'quasar/wrappers'

export default boot(async () => {
  Notify.setDefaults({
    position: 'bottom',
    timeout: 3000,
    progress: false,
    group: true,
    multiLine: false,
    iconSize: '2rem'
  })

  Notify.registerType('error', {
    color: 'red-9',
    icon: 'error',
    badgeColor: 'red',
    badgeTextColor: 'white'
  })

  Notify.registerType('success', {
    color: 'green-8',
    icon: 'check',
    badgeColor: 'green',
    badgeTextColor: 'white'
  })

  Notify.registerType('other', {
    color: 'blue-grey-7',
    icon: 'error',
    badgeColor: 'grey',
    badgeTextColor: 'white'
  })

  Notify.registerType('info', {
    color: 'blue-7',
    icon: 'error',
    badgeColor: 'blue',
    badgeTextColor: 'white'
  })

  Notify.registerType('warning', {
    color: 'orange-8',
    icon: 'error',
    badgeColor: 'orange',
    badgeTextColor: 'white'
  })
})
