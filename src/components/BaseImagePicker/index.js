import React, { useState } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

import Icon from 'react-native-vector-icons/FontAwesome5'
import ImagePicker from 'react-native-image-picker'
import { Banner, PickImage } from './styles'

function BaseImagePicker({ onSelect }) {
  const [preview, setPreview] = useState(null)

  function chooseImage() {
    const options = {
      title: 'Select a banner',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }

    ImagePicker.showImagePicker(options, upload => {
      if (upload.didCancel || upload.error) {
        return
      }

      setPreview({ uri: `data:image/jpeg;base64,${upload.data}` })
      setBanner(upload)
    })
  }

  function setBanner(upload) {
    let prefix = new Date().getTime()
    let ext

    if (upload.fileName) {
      ;[prefix, ext] = upload.fileName.split('.')
      ext = ext.toLowerCase() === 'heic' ? 'jpg' : ext
    } else {
      ext = 'jpg'
    }

    const image = {
      uri: upload.uri,
      type: upload.type,
      name: `${prefix}.${ext}`,
    }

    onSelect(image)
  }

  return (
    <>
      {preview ? (
        <Banner source={preview} />
      ) : (
        <PickImage onPress={chooseImage}>
          <Text>
            <Icon name="camera" size={56} color="#bbb" />
          </Text>
          <Text>Pick an image</Text>
        </PickImage>
      )}
    </>
  )
}

BaseImagePicker.propTypes = {
  onSelect: PropTypes.func.isRequired,
}

export default BaseImagePicker
