import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native'
import { Wrapper, ButtonIcon, Button, Text } from './styles'

function BaseButton({ width, icon, children, isLoading, ...rest }) {
  return (
    <Wrapper width={width}>
      <Button disabled={isLoading} {...rest}>
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <>
            <ButtonIcon icon={icon} />
            <Text>{children}</Text>
          </>
        )}
      </Button>
    </Wrapper>
  )
}

BaseButton.propTypes = {
  width: PropTypes.any,
  isLoading: PropTypes.bool,
  icon: PropTypes.string,
}

BaseButton.defaultProps = {
  width: '100%',
  isLoading: false,
  icon: null,
}

export default BaseButton
