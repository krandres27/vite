/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom'
import Enzyme from 'enzyme'
import EnzymeAdapater from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new EnzymeAdapater() })
