import React from 'react';
import useFileUpload from '../../hooks/useFileUpload';

const FileSelector: React.FC = () => {
  const { file, handleFileChange } = useFileUpload();

  return (
    <div className="flex flex-col items-center">
      <input type="file" onChange={handleFileChange} className="mb-4" />
      {file && <p>Selected file: {file.name}</p>}
    </div>
  );
};

export default FileSelector;