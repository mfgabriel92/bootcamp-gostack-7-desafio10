import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native'
import { Wrapper, ButtonIcon, Button, Text } from './styles'

function BaseButton({ icon, children, isLoading, ...rest }) {
  return (
    <Wrapper>
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
  isLoading: PropTypes.bool,
  icon: PropTypes.string,
}

BaseButton.defaultProps = {
  isLoading: false,
  icon: null,
}

export default BaseButton
