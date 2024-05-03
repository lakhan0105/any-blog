import { useEffect, useRef } from "react";
import tinymce from "tinymce";

function MyEditor() {
  const editorRef = useRef(null);

  useEffect(() => {
    tinymce.init({
      selector: `#${editorRef.current.id}`,
      plugins: ["paste"], // Add more plugins as needed
      toolbar:
        "undo redo | bold italic | alignleft aligncenter alignright | code",
      height: 500,
      setup: (editor) => {
        editor.on("init", () => {
          // Fetch initial content or perform other setup tasks
        });

        editor.on("change", () => {
          // Handle changes to the editor content
        });
      },
    });

    return () => {
      tinymce.remove(editorRef.current);
    };
  }, []);

  return <textarea ref={editorRef} id="my-editor" />;
}

export default MyEditor;
