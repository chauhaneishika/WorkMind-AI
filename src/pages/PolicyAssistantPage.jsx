import React, { useState } from 'react';
import {
  BookOpen,
  Sparkles,
  Send,
  FileText,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Clock,
  Layers
} from 'lucide-react';
import Badge from '../components/common/Badge';
import { policyDocuments, suggestedPolicyQuestions, policyQnAResponses } from '../data/mockData';

export function PolicyAssistantPage() {
  const [query, setQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      id: 'msg-init',
      sender: 'user',
      text: 'Can an employee carry forward unused leave after changing departments?'
    },
    {
      id: 'msg-resp',
      sender: 'ai',
      answer: policyQnAResponses['carry forward'].answer,
      reasoning: policyQnAResponses['carry forward'].reasoning,
      source: policyQnAResponses['carry forward'].source,
      clause: policyQnAResponses['carry forward'].clause,
      confidence: policyQnAResponses['carry forward'].confidence,
      relatedPolicies: policyQnAResponses['carry forward'].relatedPolicies
    }
  ]);

  const handleAsk = (questionText) => {
    const q = questionText || query;
    if (!q.trim()) return;

    const userMsg = { id: `usr-${Date.now()}`, sender: 'user', text: q };
    setChatHistory((prev) => [...prev, userMsg]);
    setQuery('');
    setIsProcessing(true);

    setTimeout(() => {
      // Find matching pre-computed response
      let matched = policyQnAResponses['carry forward'];
      const lower = q.toLowerCase();
      if (lower.includes('notice')) matched = policyQnAResponses['notice period'];
      else if (lower.includes('remote') || lower.includes('hybrid') || lower.includes('home')) matched = policyQnAResponses['remote'];
      else if (lower.includes('maternity') || lower.includes('parental') || lower.includes('baby')) matched = policyQnAResponses['maternity'];

      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        answer: matched.answer,
        reasoning: matched.reasoning,
        source: matched.source,
        clause: matched.clause,
        confidence: matched.confidence,
        relatedPolicies: matched.relatedPolicies
      };

      setChatHistory((prev) => [...prev, aiMsg]);
      setIsProcessing(false);
    }, 600);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-600 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Policy Intelligence Assistant</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            HR Policy Intelligence
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Ask complex HR policy questions and receive contextual, source-backed answers grounded in verified enterprise policy documents.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Zero-Hallucination Retrieval Augmented Generation
          </span>
        </div>
      </div>

      {/* Suggested Questions Quick Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-soft-sm space-y-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
          Suggested Complex Queries:
        </span>
        <div className="flex flex-wrap gap-2">
          {suggestedPolicyQuestions.map((sq, idx) => (
            <button
              key={idx}
              onClick={() => handleAsk(sq)}
              className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-brand-50 text-slate-700 hover:text-brand-700 border border-slate-200/60 transition-colors text-left"
            >
              {sq}
            </button>
          ))}
        </div>
      </div>

      {/* Two Column Layout: Chat Interface + Verified Knowledge Base */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Custom Enterprise Policy Intelligence Chat */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 shadow-soft-sm flex flex-col h-[650px] overflow-hidden">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {chatHistory.map((msg) => (
              <div key={msg.id} className="space-y-3">
                {msg.sender === 'user' ? (
                  <div className="flex justify-end">
                    <div className="bg-brand-600 text-white rounded-2xl rounded-tr-none px-5 py-3 max-w-lg text-xs font-medium shadow-sm">
                      {msg.text}
                    </div>
                  </div>
                ) : (
                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl rounded-tl-none p-5 space-y-4 max-w-2xl text-xs">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-brand-600" />
                        <span className="font-bold text-slate-900 uppercase text-[11px]">
                          WorkMind Policy Reasoning Engine
                        </span>
                      </div>
                      <Badge variant="success" size="sm">
                        Confidence: {msg.confidence}
                      </Badge>
                    </div>

                    {/* Answer */}
                    <div className="space-y-1">
                      <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider text-brand-700">
                        Answer
                      </span>
                      <p className="text-slate-800 text-sm font-semibold leading-relaxed">
                        {msg.answer}
                      </p>
                    </div>

                    {/* Policy Reasoning */}
                    <div className="space-y-1 bg-white p-3.5 rounded-xl border border-slate-200/80">
                      <span className="font-bold text-slate-700 block text-[11px] uppercase tracking-wider">
                        Policy Reasoning
                      </span>
                      <p className="text-slate-600 leading-relaxed">
                        {msg.reasoning}
                      </p>
                    </div>

                    {/* Source Citation Card (Crucial differentiator!) */}
                    <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-200 space-y-1">
                      <span className="font-bold text-indigo-900 block text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-brand-600" />
                        Relevant Policy Source
                      </span>
                      <p className="font-bold text-slate-900 text-xs">{msg.source}</p>
                      <p className="text-slate-600 text-[11px]">{msg.clause}</p>
                    </div>

                    {/* Related Policies */}
                    {msg.relatedPolicies && (
                      <div className="pt-2 flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] uppercase font-bold text-slate-400">Related Policies:</span>
                        {msg.relatedPolicies.map((rp, rIdx) => (
                          <span key={rIdx} className="text-[11px] px-2 py-0.5 rounded bg-slate-200/70 text-slate-700 font-medium">
                            {rp}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {isProcessing && (
              <div className="flex items-center gap-2 text-xs text-slate-500 italic p-3 bg-slate-50 rounded-xl max-w-xs animate-pulse">
                <Sparkles className="w-4 h-4 text-brand-600" />
                <span>Searching verified policy documents & cross-referencing clauses...</span>
              </div>
            )}
          </div>

          {/* Chat Input Bar */}
          <div className="p-4 border-t border-slate-200 bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAsk(query);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about carry-forward leaves, notice periods, remote work, paternity..."
                className="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
              />
              <button
                type="submit"
                disabled={!query.trim() || isProcessing}
                className="p-3 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-40 text-white shadow-sm transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Right Col: Verified Policy Documents Corpus */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-soft-sm space-y-4">
            <div>
              <h2 className="text-sm font-bold text-slate-900">Indexed HR Policy Documents</h2>
              <p className="text-xs text-slate-500">42 active documents embedded for semantic retrieval</p>
            </div>

            <div className="space-y-3">
              {policyDocuments.map((doc) => (
                <div key={doc.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">{doc.title}</span>
                    <Badge variant="primary" size="sm">{doc.version}</Badge>
                  </div>
                  <p className="text-slate-500 text-[11px] leading-snug">{doc.summary}</p>
                  <span className="text-[10px] text-slate-400 block pt-1">Author: {doc.author}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PolicyAssistantPage;
