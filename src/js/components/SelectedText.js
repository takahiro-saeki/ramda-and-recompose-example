import React from 'react'
import { compose } from 'recompose'
import {withSelectedText} from './formUtils'

const SelectedText = ({ selectedText }) => <div>{selectedText}</div>

SelectedText.defaultProps = {
  selectedText: 'default'
}

export default compose(
  withSelectedText,
)(SelectedText)