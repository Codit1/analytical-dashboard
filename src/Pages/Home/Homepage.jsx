import React from 'react'

// for styles imp
import "./homepage.css"

// for mantine imp
import { Group, Text, Center, Badge, Stack } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

// for comp imp
import Loading1 from './components/Loading1';

// for icons imp
import { FaFileUpload } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { IoImagesOutline } from "react-icons/io5";
import { MdLensBlur } from "react-icons/md";
import { AiOutlineCloudUpload } from "react-icons/ai";

function Homepage() {
    return (
        <div className='bg-[#F2F6FF] h-screen'>

            <div className='p-3 shadow-md border-b border-b-slate-300'>
                <div className='flex justify-center space-x-2'>
                    <MdLensBlur size={30} stroke='2'/>
                    <h2 className='font-bold text-lg'>
                        <span>Data</span>
                        <span className='text-blue-300 italic'>Lens</span>
                    </h2>
                </div>
            </div>

            <div className='w-[80%] mx-auto mt-8'>
                <Dropzone
                    onDrop={(files) => console.log(files)}
                    onReject={(files) => console.log(files)}
                    maxSize={5 * 1024 ** 2}
                    accept={IMAGE_MIME_TYPE}
                    // h={{ base: "70vh" }}
                    bg="#E5EEFF"
                >
                    <Center h="65vh">
                        <Stack align="center" gap="2px">
                            <AiOutlineCloudUpload size={50} color="#1971C2" />

                            <Text size="xl" c={"black"} fw={"bold"}>
                                Drag File here or click to select files
                            </Text>

                            <div className=''>
                                <Text c={"gray"} fw={"bold"} fz={"sm"} ta={"center"}>Supported formats:</Text>
                                <Group gap={"sm"} mt={"4px"}>
                                    <Badge variant='light'>csv</Badge>
                                    <Badge >json</Badge>
                                    <Badge variant='light'>xlsx</Badge>
                                    <Badge>xls</Badge>
                                </Group>
                            </div>
                        </Stack>
                    </Center>
                </Dropzone>
            </div>

            <div>
                <Text fz={"md"} fw={"bold"} c={"gray"} ta={"center"} mt={"10px"}>Recent Analysis</Text>
                <div className='mt-2'>
                    <Group justify='center' align='center'>
                        <Badge>Telsa Cars</Badge>
                        <Badge>Toyota Sales force</Badge>
                        <Badge>BMW Data</Badge>
                        <Badge>Dizzy Sales list</Badge>
                    </Group>

                </div>
            </div>

        </div>
    )
}

export default Homepage
