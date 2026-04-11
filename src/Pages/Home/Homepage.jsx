import { useEffect, useState } from 'react'

// for styles imp
import "./homepage.css"

// for mantine imp
import { Group, Text, Center, Badge, Stack,  } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { notifications } from '@mantine/notifications';
import { nprogress } from '@mantine/nprogress';

// for redux imp
import { useSelector, useDispatch } from 'react-redux';
import { uploadDataset, selectUploadData, selectUploadError, selectUploadingDataset } from '@store/uploadDataset';

// for react-router imp
import { useNavigate } from 'react-router';

// for icons imp
import { MdLensBlur } from "react-icons/md";
import { AiOutlineCloudUpload } from "react-icons/ai";

function Homepage() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const uploadData = useSelector(selectUploadData)
    const uploadError = useSelector(selectUploadError)
    const uploadingDataset = useSelector(selectUploadingDataset)

    // state to hold previous uploaded dataset from LocalStorage
    const [ previousDataset, setPreviousDataset ] = useState([])

    // func to render previous datasets
    const renderPreviousDatasets = previousDataset.map((data, indx) => (
        <Badge onClick={() => navigate(`/analysis?id=${data.datasetId}`)} key={indx} >{data.name}</Badge>
    ))

    // func to upload dataset
    const sendDataset = (file) => {

        nprogress.start()

        const formdata = new FormData()

        formdata.append("file", file)

        dispatch(uploadDataset(formdata)).unwrap()
        .then((res) => {
            nprogress.complete()
            setPreviousDataset([...previousDataset, {name: file.name, datasetId: res.dataset_id }])
            localStorage.setItem("dataSets", JSON.stringify([...previousDataset, {name: file.name, datasetId: res.dataset_id }]))
            navigate(`/analysis?id=${res.dataset_id}`)
        })
        .catch(err => {
            notifications.show({
                ...err,
                color: "orange"
            })
            nprogress.stop()
        })
    }

    useEffect(() => {
        const previousDataset = localStorage.getItem("dataSets")

        if(previousDataset){
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setPreviousDataset(JSON.parse(previousDataset))
        } else{
            setPreviousDataset([])
        }
    }, [])

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
                    onDrop={(files) => {
                        console.log(files[0])

                        sendDataset(files[0])
                    }}
                    onReject={() => {
                        notifications.show({
                            title: "file error",
                            message: "the file you uploaded can't be processed"
                        })
                    }}
                    maxSize={5 * 1024 ** 2}
                    accept={[
                        "text/csv",
                        "application/json",
                        "application/vnd.ms-excel",
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                    ]}
                    bg="#E5EEFF"
                    loading={ uploadingDataset }
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
                                    <Badge variant='light'>.csv</Badge>
                                    <Badge>.json</Badge>
                                    <Badge color='orange'>.xls</Badge>
                                    <Badge color='orange' variant='light'>.xlsx</Badge>
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
                        {renderPreviousDatasets}
                    </Group>

                </div>
            </div>

        </div>
    )
}

export default Homepage
