import React from 'react'

// for styles imp
import "./homepage.css"

// for mantine imp
import { Group, Text, Center } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

// for comp imp
import Loading1 from './components/Loading1';

// for icons imp
import { FaFileUpload } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { IoImagesOutline } from "react-icons/io5";

function Homepage() {
    return (
        <div className='mt-4 px-2'>

            {/* <div className='grid grid-cols-2 gap-2'>
                <Loading1/>
            </div> */}

            <div className='grid grid-cols-2 gap-4 lgc:grid-cols-4'>
                <div className='h-25 bg-[#5A5A5C] rounded-md skeleton'>
                    <Center h="100%">
                        <Text truncate ta="center" c={"white"} fw={"bold"}>No File to analysize</Text>
                    </Center>
                </div>
                <div className='h-25 bg-[#5A5A5C] rounded-md skeleton'>
                    <Center h="100%">
                        <Text truncate ta="center" c={"white"} fw={"bold"}>No File to analysize</Text>
                    </Center>
                </div>
                <div className='h-25 bg-[#5A5A5C] rounded-md skeleton'>
                    <Center h="100%">
                        <Text truncate ta="center" c={"white"} fw={"bold"}>No File to analysize</Text>
                    </Center>
                </div>
                <div className='h-25 bg-[#5A5A5C] rounded-md skeleton'>
                    <Center h="100%">
                        <Text truncate ta="center" c={"white"} fw={"bold"}>No File to analysize</Text>
                    </Center>
                </div>
            </div>

            <div className='mt-4'>
                <Dropzone
                    onDrop={(files) => console.log('accepted files', files)}
                    onReject={(files) => console.log('rejected files', files)}
                    maxSize={5 * 1024 ** 2}
                    accept={IMAGE_MIME_TYPE}
                    // h={{
                    //     base: "80vh"
                    // }}
                    bg={"#5A5A5C"}
                >
                    <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
                        <Dropzone.Accept>
                            <FaFileUpload size={52} color="white" stroke={1.5} />
                        </Dropzone.Accept>

                        <Dropzone.Reject>
                            <MdErrorOutline size={52} color="var(--mantine-color-red-6)" stroke={1.5} />
                        </Dropzone.Reject>

                        <Dropzone.Idle>
                            <IoImagesOutline size={52} color="var(--mantine-color-dimmed)" stroke={1.5} />
                        </Dropzone.Idle>

                        <div>
                            <Text size="xl" inline c={"white"}>
                                Drag images here or click to select files
                            </Text>

                            <Text size="sm" c={"white"} inline mt={7}>
                                Attach as many files as you like, each file should not exceed 5mb
                            </Text>
                        </div>
                    </Group>
                </Dropzone>
            </div>

            <Loading1/>
        </div>
    )
}

export default Homepage
