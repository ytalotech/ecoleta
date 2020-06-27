import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUpload } from 'react-icons/fi';

import './styles.css';

interface Props {
    // aceita receber uma função onFileUploaded, que é u arquivo File e retorna void
    onFileUploaded: (file: File) => void;
}

// vamos dizer que o Dropzone é um React.FC que ceita essa propriedade <Props> da interface
// recebo as (props) d components
const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
    const [selectedFileUrl, setSelectedFileUrl] = useState('');

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];

        //URL é uma vairavel global do react
        const fileUrl = URL.createObjectURL(file);

        setSelectedFileUrl(fileUrl);

        onFileUploaded(file);
    }, [onFileUploaded])
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*'
    })

    return (
        <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} accept="image/*" />
            {
                selectedFileUrl
                    ? <img src={selectedFileUrl} alt="Point thumbnail" />
                    : (
                        <p>
                            <FiUpload />
                            Imagem do estabelecimento
                        </p>
                    )
            }
        </div>
    )
}

export default Dropzone;