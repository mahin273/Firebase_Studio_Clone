import { Editor } from '@monaco-editor/react';
import { useEffect, useState } from 'react';

export const EditorComponent = () => {
  const [editorState, setEditorState] = useState({
    theme: null,
  });


  async function downloadTheme() {
    const response = await fetch('/night-owl.json');
    const data = await response.json();
    setEditorState({ ...editorState, theme: data });
  }

  function handleEditorTheme(editor, monaco){
          if (editorState.theme && editorState.theme.base) {
            monaco.editor.defineTheme('night-owl', editorState.theme);
            monaco.editor.setTheme('night-owl');
          }
  }

  useEffect(() => {
    downloadTheme();
  }, []);

  return (
    <>
      {editorState.theme && (
        <Editor
          height={'90vh'}
          width={'100%'}
          defaultLanguage="javascript"
          defaultValue="//Welcome to Your Code Editor"
          options={{
            fontSize: 16,
            minimap: { enabled: true },
            wordWrap: 'on',
            showUnused: true,
            folding: true,
            lineNumbersMinChars: 3,
          }}
          onMount={handleEditorTheme}
        />
      )}
    </>
  );
};
