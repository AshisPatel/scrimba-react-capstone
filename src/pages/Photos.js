import React, { useContext }from "react"
import Image from "../components/Image"
import { getClass } from "../utils"
import { Context } from "../context/Context"

function Photos() {

    const { allPhotos } = useContext(Context);

    const photoGrid = allPhotos.map((photo, index) => {
        return <Image key={photo.id} img={photo} className={getClass(index)}/>
    })
    return (
        <main className="photos">
            {photoGrid}
        </main>
    )
}

export default Photos