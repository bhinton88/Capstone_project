import { useEffect, useRef } from "react"
import { Button } from "react-bootstrap";

const UploadWidget = ({cloudinaryData, addPhotoUrl}) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: cloudinaryData.cloudName,
      uploadPreset: cloudinaryData.uploadPreset,
      cropping:true
    }, function(error, result){
      if(!error && result && result.event === "success"){
        addPhotoUrl(result.info.secure_url)
      } 
    })
  }, [cloudinaryData])


  return (
    <Button onClick={() => widgetRef.current.open()}>
      Upload
    </Button>
  )

}

export default UploadWidget