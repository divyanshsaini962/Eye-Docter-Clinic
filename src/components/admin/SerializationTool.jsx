import React, { useState } from 'react';

const SerializationTool = ({ data }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyJSON = () => {
    const serialized = JSON.stringify(data, null, 2);
    navigator.clipboard.writeText(serialized);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExportMarkdown = () => {
    const md = `# ${data.title}\n\n**Author:** ${data.author}\n**Tags:** ${data.tags}\n**Status:** ${data.status}\n\n---\n\n${data.content}`;
    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data.slug || 'blog-post'}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">🧬</span>
        <h3 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mt-1">Serialization Tools</h3>
      </div>
      
      <div className="grid grid-cols-1 gap-3">
        <button 
          type="button"
          onClick={handleCopyJSON}
          className={`w-full py-2 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${copied ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-white border-slate-100 text-slate-500 hover:border-teal-500/30'}`}
        >
          {copied ? '✅ Copied JSON' : '📋 Copy Clean JSON'}
        </button>
        
        <button 
          type="button"
          onClick={handleExportMarkdown}
          className="w-full py-2 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest bg-white border border-slate-100 text-slate-500 hover:border-teal-500/30 transition-all"
        >
          📄 Export Markdown (.md)
        </button>
      </div>
    </div>
  );
};

export default SerializationTool;
