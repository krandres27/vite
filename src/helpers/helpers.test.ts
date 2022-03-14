import { formatDate } from './formatDate'
import sortByDuteDate from './sortByDuteDate'

describe('helper functions', () => {
  it('format date helper returns the correct formated string when receiving a string as param', () => {
    const formatedDate = formatDate('2022-03-14T17:50:44.673Z')
    const expected = '03/14/2022'
    expect(formatedDate).toEqual(expected)
  })

  it('format date helper returns the correct formated string when receiving a Date as param', () => {
    const formatedDate = formatDate(new Date('2022-03-14T17:50:44.673Z'))
    const expected = '03/14/2022'
    expect(formatedDate).toEqual(expected)
  })

  it('object array is correctly accesinding sorted when an Todo{} is passed', () => {
    const entryArray = [
      {
        id: 3,
        description: 'Call Mom',
        isComplete: false,
        dueDate: new Date('2020-06-26T19:00:00.000Z'),
      },
      {
        id: 2,
        description: 'Fold laundry',
        isComplete: true,
        dueDate: new Date('2022-08-27T19:00:00.000Z'),
      },
      {
        id: 1,
        description: 'File 2020 Taxes',
        isComplete: true,
        dueDate: new Date('2020-03-10T17:50:44.673Z'),
      },
    ]

    const expected = [
      {
        id: 1,
        description: 'File 2020 Taxes',
        isComplete: true,
        dueDate: new Date('2020-03-10T17:50:44.673Z'),
      },
      {
        id: 3,
        description: 'Call Mom',
        isComplete: false,
        dueDate: new Date('2020-06-26T19:00:00.000Z'),
      },
      {
        id: 2,
        description: 'Fold laundry',
        isComplete: true,
        dueDate: new Date('2022-08-27T19:00:00.000Z'),
      },
    ]

    const sortedArray = sortByDuteDate(entryArray)

    expect(expected[0].id).toBe(sortedArray[0].id)
    expect(expected[1].id).toBe(sortedArray[1].id)
    expect(expected[2].id).toBe(sortedArray[2].id)
  })
})
