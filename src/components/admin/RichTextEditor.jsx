"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css'; // Import Quill styling

// Dynamically import ReactQuill to avoid SSR "window is not defined" error
const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
  loading: () => <div className="h-64 bg-slate-50 animate-pulse rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 font-bold italic uppercase tracking-widest text-[10px]">Loading Editor...</div>,
});

const RichTextEditor = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'clean'],
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'link',
  ];

  return (
    <div className="quill-editor-container">
      <ReactQuill 
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 min-h-[300px] text-slate-700 font-medium leading-loose"
      />
      <style jsx global>{`
        .quill-editor-container .ql-toolbar.ql-snow {
          border: none;
          background: #f8fafc; /* slate-50 */
          border-bottom: 2px solid #f1f5f9; /* slate-100 */
          padding: 12px 24px;
          border-radius: 20px 20px 0 0;
        }
        .quill-editor-container .ql-container.ql-snow {
          border: none !important;
          min-height: 400px;
          font-family: inherit;
          font-size: 1rem;
        }
        .quill-editor-container .ql-editor {
          padding: 32px;
          min-height: 400px;
        }
        .quill-editor-container .ql-editor.ql-blank::before {
          color: #94a3b8; /* slate-400 */
          font-style: italic;
          left: 32px;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor;
