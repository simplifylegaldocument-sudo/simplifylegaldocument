"use client";
import { motion } from "framer-motion";
import { 
  TriangleAlert, 
  CircleCheck, 
  Info, 
  Calendar, 
  CreditCard, 
  Users, 
  Clock, 
  Gavel, 
  ShieldAlert,
  ArrowDown
} from "lucide-react";


export default function ResultDashboard({ data }) {
  if (!data) return null;

  const getRiskColor = (level) => {
    switch (level?.toLowerCase()) {
      case "high": return "text-risk-high bg-risk-high/10 border-risk-high/20";
      case "medium": return "text-risk-med bg-risk-med/10 border-risk-med/20";
      case "low": return "text-risk-low bg-risk-low/10 border-risk-low/20";
      default: return "text-muted bg-muted/10 border-muted/20";
    }
  };

  const getRiskIcon = (level) => {
    switch (level?.toLowerCase()) {
      case "high": return <ShieldAlert className="w-5 h-5" />;
      case "medium": return <TriangleAlert className="w-5 h-5" />;
      default: return <CircleCheck className="w-5 h-5" />;
    }
  };

  return (
    <div id="results" className="py-20 max-w-6xl mx-auto px-6 space-y-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-serif font-bold mb-2">Analysis Results</h2>
        <p className="text-muted">Detected Type: <span className="text-primary font-medium">{data.document_type}</span></p>
        <div className="mt-4 flex justify-center">
          <div className={`px-4 py-2 rounded-full border flex items-center gap-2 font-bold uppercase text-xs tracking-widest ${getRiskColor(data.risk_score)}`}>
            {getRiskIcon(data.risk_score)} Overall Risk: {data.risk_score}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Executive Summary */}
        <div className="md:col-span-2 space-y-8">
          <section className="glass p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" /> Executive Summary
            </h3>
            <ul className="space-y-4">
              {data.summary?.length > 0 ? data.summary.map((item, i) => (
                <li key={i} className="flex gap-3 text-muted leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                  {item}
                </li>
              )) : <li className="text-muted italic">No summary points available.</li>}
            </ul>
          </section>

          <section className="glass p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <CircleCheck className="w-5 h-5 text-secondary" /> What You're Agreeing To
            </h3>
            <ul className="space-y-4">
              {data.what_you_agree_to?.length > 0 ? data.what_you_agree_to.map((item, i) => (
                <li key={i} className="flex gap-3 text-muted leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2.5" />
                  {item}
                </li>
              )) : <li className="text-muted italic">No specific obligations identified.</li>}
            </ul>
          </section>
        </div>

        {/* Key Terms */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold px-2">Key Terms</h3>
          <TermCard icon={<Users />} label="Parties" value={data.key_terms?.parties || "Not stated"} />
          <TermCard icon={<Clock />} label="Duration" value={data.key_terms?.duration || "Not stated"} />
          <TermCard icon={<CreditCard />} label="Payment" value={data.key_terms?.payment_terms || "Not stated"} />
          <TermCard icon={<ShieldAlert />} label="Termination" value={data.key_terms?.termination || "Not stated"} />
          <TermCard icon={<Gavel />} label="Governing Law" value={data.key_terms?.governing_law || "Not stated"} />
        </div>
      </div>

      {/* Red Flags */}
      <section>
        <h3 className="text-2xl font-serif font-bold mb-8 text-center">Red Flags & Risky Clauses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.red_flags?.length > 0 ? data.red_flags.map((flag, i) => (
            <div key={i} className={`p-6 rounded-2xl border ${getRiskColor(flag.risk_level)}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-xs uppercase tracking-widest">{flag.risk_level} Risk</span>
                {getRiskIcon(flag.risk_level)}
              </div>
              <p className="font-bold text-sm mb-2 text-text">Clause:</p>
              <p className="text-xs italic text-text/80 mb-4 bg-background/30 p-2 rounded border border-current/10">"{flag.clause || "Clause text missing"}"</p>
              <p className="font-bold text-sm mb-2 text-text">Why it matters:</p>
              <p className="text-sm opacity-90">{flag.reason || "Reason not provided"}</p>
            </div>
          )) : <div className="col-span-full text-center text-muted py-10 glass rounded-2xl italic">No significant red flags detected.</div>}
        </div>
      </section>

      {/* Questions to Ask */}
      <section className="bg-primary/5 border border-primary/20 p-8 rounded-3xl">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">
          <Calendar className="w-6 h-6" /> Questions to Ask Before Signing
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.questions_to_ask?.length > 0 ? data.questions_to_ask.map((q, i) => (
            <div key={i} className="flex gap-4 p-4 bg-background rounded-xl border border-border">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary">
                {i + 1}
              </div>
              <p className="text-sm font-medium">{q}</p>
            </div>
          )) : <p className="text-muted italic">No specific questions suggested.</p>}
        </div>
      </section>


      <div className="text-center pt-8 border-t border-border">
        <p className="text-xs text-muted mb-4 italic max-w-2xl mx-auto">
          {data.disclaimer}
        </p>
        <button onClick={() => window.print()} className="btn-secondary">
          Export as PDF Summary
        </button>
      </div>
    </div>
  );
}

function TermCard({ icon, label, value }) {
  return (
    <div className="glass p-4 rounded-xl flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-border flex items-center justify-center shrink-0 text-muted">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-muted mb-1">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}
