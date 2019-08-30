import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome5'
import ImagePicker from 'react-native-image-picker'
import { BASE_URL } from 'react-native-dotenv'
import { Banner, PickBanner, PickAvatar, Avatar } from './styles'

function BaseImagePicker({ type, onSelect, previousImage }) {
  const [preview, setPreview] = useState(null)
  const [Container, setContainer] = useState(PickBanner)
  const [Image, setImage] = useState(Banner)

  useEffect(() => {
    if (previousImage) {
      setPreview({ uri: `${BASE_URL}/files/${previousImage.name}` })
    }
  }, [previousImage])

  useEffect(() => {
    switch (type) {
      case 'avatar':
        setContainer(PickAvatar)
        setImage(Avatar)
        break
      default:
        setContainer(PickBanner)
        setImage(Banner)
    }
  }, [type])

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
      setChosenImage(upload)
    })
  }

  function setChosenImage(upload) {
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
    <Container onPress={chooseImage}>
      {preview ? (
        <Image source={preview} />
      ) : (
        <>
          <Text>
            <Icon name="camera" size={56} color="#bbb" />
          </Text>
          <Text>Pick an image</Text>
        </>
      )}
    </Container>
  )
}

BaseImagePicker.propTypes = {
  type: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  previousImage: PropTypes.object,
}

BaseImagePicker.defaultProps = {
  type: 'banner',
  previousImage: null,
}

export default BaseImagePicker
