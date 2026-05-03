export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Team Productivity
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-resolve Slack threads<br />
          <span className="text-[#58a6ff]">based on keywords</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Slack Thread Autopilot monitors your threads and automatically marks them resolved the moment someone types <strong className="text-[#c9d1d9]">solved</strong>, <strong className="text-[#c9d1d9]">fixed</strong>, <strong className="text-[#c9d1d9]">done</strong>, or <strong className="text-[#c9d1d9]">shipped</strong>. No more stale open threads.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get started — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Connect via Slack OAuth in under 2 minutes. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "🔗", title: "Slack OAuth", desc: "One-click workspace connection, no tokens to manage." },
          { icon: "⚡", title: "Webhook-powered", desc: "Real-time detection the instant a keyword is posted." },
          { icon: "🛠️", title: "Custom keywords", desc: "Add your own trigger words beyond the defaults." }
        ].map(f => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-white mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited Slack workspaces",
              "Unlimited monitored threads",
              "Custom keyword rules",
              "Thread history dashboard",
              "Email support"
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start for $19/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does thread resolution work?",
              a: "We listen to Slack events via webhooks. When a message in a tracked thread contains a trigger keyword, we add a ✅ reaction and mark the thread resolved in your dashboard."
            },
            {
              q: "Which Slack permissions are required?",
              a: "We request channels:history, reactions:write, and app_mentions:read. We never read DMs or private channels unless explicitly invited."
            },
            {
              q: "Can I add custom keywords?",
              a: "Yes. From your dashboard you can add, edit, or remove any trigger keywords per channel or workspace-wide."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        © {new Date().getFullYear()} Slack Thread Autopilot. Not affiliated with Slack Technologies.
      </footer>
    </main>
  );
}
