import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-radio-group-list', IndexField)
  app.component('detail-radio-group-list', DetailField)
  app.component('form-radio-group-list', FormField)
})
