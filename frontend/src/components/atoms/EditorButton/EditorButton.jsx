import './EditorButton.css'
export const EditorButton = ({ isActive }) => {

  function handleClick() {
    //Todo: Handle Click
  }
  return (
    <>
      <button
        className="editor-button"
        style={{
          color: isActive ? 'blue' : 'gray',
          backgroundColor: isActive ? '#transparent' : '#1e1e1e',
          borderTop: isActive ? '#d4d4d4' : 'transparent',
        }}
        onClick={handleClick}
      >
        file.js
      </button>
    </>
  );
}
