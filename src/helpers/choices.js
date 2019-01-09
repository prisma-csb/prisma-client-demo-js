const initialChoices = [
  'Reading data',
  'Writing data',
  'Other features'
]

const readingChoices = [
  {
    value: 'filtering-and-sorting',
    name: 'Filterting & Sorting',
  },
  {
    value: 'fluent-api',
    name: 'Fluent API',
  },
  {
    value: 'lists-and-single-objects',
    name: 'Lists and single objects',
  },
  {
    value: 'pagination',
    name: 'Pagination',
  },
]

const writingChoices = [
  {
    value: 'create-update-delete',
    name: 'Create, update & delete',
  },
  {
    value: 'upert',
    name: 'Upsert',
  },
  {
    value: 'declarative-nested-write',
    name: 'Declarative nested write (Transaction)',
  },
  {
    value: 'batching',
    name: 'Batching',
  },
  {
    value: 'field-selection',
    name: 'Field selection',
  },
]

const moreChoices = [{
  value: 'native-graphql',
  name: 'Native GraphQL'
}, {
  value: 'realtime-subscriptions',
  name: 'Realtime'

}]

module.exports = {
  initialChoices,
  readingChoices,
  writingChoices,
  moreChoices
}