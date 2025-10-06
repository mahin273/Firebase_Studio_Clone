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
            <FileIcon extension={fileFolderData.name.split('.')[1]} />
          <p
            style={{
              paddingTop: '10px',
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
