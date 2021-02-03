import {
  Toast,
  Form,
  Field,
  Button,
  Popup,
  Picker,
  RadioGroup,
  Radio,
  Icon,
  Dialog,
  Tab,
  Tabs,
  List,
  PullRefresh,
  DatetimePicker,
  Cell,
  CheckboxGroup,
  Checkbox,
  Image as VanImage
} from 'vant'

const install = function (Vue:any, options:any) {
  Vue.use(Toast)
  Vue.use(Form)
  Vue.use(Field)
  Vue.use(Button)
  Vue.use(Popup)
  Vue.use(Picker)
  Vue.use(Radio)
  Vue.use(RadioGroup)
  Vue.use(Icon)
  Vue.use(Dialog)
  Vue.use(Tab)
  Vue.use(Tabs)
  Vue.use(List)
  Vue.use(Cell)
  Vue.use(PullRefresh)
  Vue.use(DatetimePicker)
  Vue.use(CheckboxGroup)
  Vue.use(Checkbox)
  Vue.use(VanImage)
}

export default {
  install
}
