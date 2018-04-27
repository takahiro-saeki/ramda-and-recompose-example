import {withProps} from 'recompose'

export const withSelectedText = withProps(props => {
  if(typeof props.selectedText === 'number') {
    const merge = Object.assign({}, props, {selectedText: 'props.selectedText is number'})
    return merge
  }
  return props
})