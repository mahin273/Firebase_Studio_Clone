import { useState } from 'react';
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc';
import { FileIcon } from '../../atoms/FileIcon/FileIcon';
export const TreeNode = ({ fileFolderData }) => {
  const [visibility, setVisibility] = useState({});

  function toggleVisibility(name) {
    setVisibility({
      ...visibility,
      [name]: !visibility[name],
    });
  }

  function computeExtension() {
    const names = fileFolderData.name.split('.');
    return names[names.length - 1];

  }

  return (
    fileFolderData && (
      <div
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          color: 'black',
        }}
      >
        {fileFolderData.children ? (
          <button
            onClick={() => toggleVisibility(fileFolderData.name)}
            style={{
              border: 'none',
              cursor: 'pointer',
              otutline: 'none',
              color: 'white',
              backgroundColor: 'transparent',
              paddingTop: '15px',
              paddingBottom: '15px',
            }}
          >
            {visibility[fileFolderData.name] ? <VscChevronDown />:<VscChevronRight />}
            {fileFolderData.name}
          </button>
        ) : (
            <div style={{
              display: 'flex',
              alignItems: 'center',

            }}>
            <FileIcon extension={computeExtension(fileFolderData)} />
          <p
            style={{
              paddingTop: '5px',
              paddingBottom: '15px',
              cursor: 'pointer',
              margin: '5px',
            }}
          >
            {fileFolderData.name}
              </p>
              </div>
        )}
        {visibility[fileFolderData.name] &&
          fileFolderData.children &&
          fileFolderData.children.map(child => (
            <TreeNode fileFolderData={child} key={child.name} />
          ))}
      </div>
    )
  );
};
