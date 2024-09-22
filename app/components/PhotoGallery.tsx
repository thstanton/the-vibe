import Image from 'next/image'

export default function PhotoGallery() {
    return (
        <div className="flex justify-center bg-[#EB4A98] py-6">
            <div className="flex flex-col flex-wrap gap-4 md:flex-row">
                <Image
                    src="https://res.cloudinary.com/drbmqrolz/image/upload/v1725295392/The_Vibe_2_tydm67.png"
                    alt="The band in white by a brick wall"
                    width={400}
                    height={250}
                    className="object-cover drop-shadow-md"
                />
                <Image
                    src="https://res.cloudinary.com/drbmqrolz/image/upload/v1725295389/The_Vibe_1_twrpk5.png"
                    alt="The band dressed smartly on a plain white background"
                    width={400}
                    height={250}
                    className="object-cover drop-shadow-md"
                />
                <Image
                    src="https://res.cloudinary.com/drbmqrolz/image/upload/v1725296960/WhatsApp_Image_2024-09-02_at_17.56.29_ir2ful.jpg"
                    alt="The band in bomber jackets by a graffitied wall"
                    width={400}
                    height={250}
                    className="object-cover drop-shadow-md"
                />
            </div>
        </div>
    )
}
