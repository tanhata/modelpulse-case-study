import React, { useState, useEffect } from 'react';

const ModelPulseCaseStudy = () => {
  const [loaded, setLoaded] = useState(false);
  const [activePersona, setActivePersona] = useState(0);
  const [activeIteration, setActiveIteration] = useState(2);
  const [expandedFinding, setExpandedFinding] = useState(null);
  const [activeComponent, setActiveComponent] = useState(0);
  const [activeState, setActiveState] = useState(0);
  const [activeMicroIteration, setActiveMicroIteration] = useState(3);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    setTimeout(() => setLoaded(true), 100);
    return () => document.head.removeChild(link);
  }, []);

  const defined = {
    myContributions: [
      { area: 'Research', tasks: ['Led 8-month ethnographic study across 12 companies', 'Conducted 67 semi-structured interviews', 'Observed 89 real incident responses', 'Built 3 design partner relationships'] },
      { area: 'Strategy', tasks: ['Defined ML-native monitoring framework', 'Developed adaptive complexity model', 'Created progressive disclosure system', 'Established metric hierarchies'] },
      { area: 'Design', tasks: ['All interface design in Figma', 'Design system with 40+ components', 'Interactive prototype with 6 views', 'Motion and interaction specifications'] },
      { area: 'Execution', tasks: ['Built working React prototype', 'Validated with usability testing', 'Iterated through 4 major versions', 'Documented component specifications'] }
    ],
    designPhilosophy: [
      { belief: 'ML monitoring requires ML-native thinking', detail: 'Generic infrastructure monitoring fails ML teams because it treats models as black boxes. Effective ML monitoring must understand concepts like drift, feature importance, and training convergence natively—not as afterthought metrics.' },
      { belief: 'Complexity should adapt to expertise', detail: 'A junior engineer and a principal ML architect need the same underlying data but wildly different presentations. Progressive disclosure lets everyone access their comfort level without building parallel products.' },
      { belief: 'Context switching is the hidden killer', detail: 'Every tool boundary is a cognitive cliff. When engineers jump between 8+ tools to investigate one issue, they lose state, miss correlations, and burn out. Unified workflows beat best-of-breed fragmentation.' },
      { belief: 'Alerts without actions create noise', detail: 'An alert that says "drift detected" without explaining what drifted, why it matters, and what to do about it is just anxiety. Every notification must carry its own resolution path.' }
    ],
    personas: [
      { name: 'Alex', role: 'ML Engineer (Mid-Level)', archetype: 'The Investigator', quote: "I know something's wrong but I don't know where to start looking.", goals: ['Quickly identify root cause of model issues', 'Understand drift without deep statistics PhD', 'Correlate model performance with data changes'], frustrations: ['Can\'t see what\'s happening inside the model', 'Generic alerts don\'t tell me what to do', 'Seniors get pulled in for basic triage'] },
      { name: 'Sam', role: 'Site Reliability Engineer', archetype: 'The Translator', quote: "They say 'the model is slow' and assume it's infra. I don't know what drift score means.", goals: ['Correlate infra metrics with model behavior', 'Quickly rule out infrastructure issues', 'Speak the same language as ML team'], frustrations: ['Blamed for ML issues outside my expertise', 'No single view connecting K8s and models', '30-minute war rooms for data quality issues'] },
      { name: 'Jessica', role: 'VP of Engineering', archetype: 'The Optimizer', quote: "$47K/month across 7 tools and I can't tell if we're paying for redundancy.", goals: ['Reduce tool sprawl and costs', 'Visibility into incident impact and resolution', 'Security and compliance across fewer tools'], frustrations: ['Can\'t justify tool spend to board', 'No visibility into actual MTTR', 'Engineers say they need all 7 tools'] }
    ],
    researchFindings: [
      { finding: 'Tool fragmentation was the root of all evil', severity: 'Critical', evidence: ['Average of 8.3 tools used per investigation', 'Engineers spent 40% of incident time context-switching', 'Critical correlations missed at tool boundaries'], outcome: 'Tools per investigation: 8.3 → 1.9' },
      { finding: 'Detection lag was measured in days, not minutes', severity: 'Critical', evidence: ['5.2 days average time to detect model degradation', 'Alerts triggered on symptoms, not causes', 'Engineers discovered issues from customer complaints'], outcome: 'Time to detection: 5.2 days → 4 hours' },
      { finding: 'False positives caused learned helplessness', severity: 'Critical', evidence: ['73% of alerts were false positives', 'Teams developed "alert blindness"', 'Critical issues buried in noise'], outcome: 'False positive rate: 73% → 12%' },
      { finding: 'Junior engineers couldn\'t self-serve', severity: 'High', evidence: ['Seniors pulled into 80% of investigations', 'No contextual help in existing tools', 'Steep learning curve for ML-specific metrics'], outcome: 'Self-serve resolution: 20% → 72%' },
      { finding: 'Infrastructure and ML metrics lived in silos', severity: 'High', evidence: ['K8s dashboards separate from model dashboards', 'Correlation done manually in spreadsheets', 'No unified timeline of events'], outcome: 'Cross-domain correlation: Manual → Automatic' }
    ],
    iterations: [
      { version: 'V1', title: 'Infrastructure Focus', hypothesis: 'Extending existing APM patterns to ML will work', results: { time: '4.8 days', resolution: '28%', sat: '2.4/5' }, learning: 'ML engineers don\'t think in infrastructure terms. Organizing by pods and containers forced mental translation that broke flow.', status: 'rejected' },
      { version: 'V2', title: 'Granular Telemetry', hypothesis: 'Exposing all metrics empowers sophisticated users', results: { time: '2.1 days', resolution: '71%', sat: '3.8/2.1' }, learning: 'Bimodal satisfaction: Senior engineers loved depth, junior engineers were paralyzed by options. 60/40 split.', status: 'partial' },
      { version: 'V3', title: 'Progressive Disclosure', hypothesis: 'Adaptive complexity serves all expertise levels', results: { time: '4 hrs', resolution: '89%', sat: '4.7/5' }, learning: 'Eye icons for "show more" achieved universal adoption. Everyone found their comfort level without separate products.', status: 'shipped' },
      { version: 'V4', title: 'Intelligence Layer', hypothesis: 'AI-powered insights accelerate resolution', results: { time: '30 min', resolution: '94%', sat: '4.8/5' }, learning: 'Automated root cause suggestions cut investigation time by 90%. But only worked because V3 established trust.', status: 'shipped' }
    ],
    microIterations: [
      { label: 'v3.1', title: 'Basic progressive disclosure', desc: 'Added collapsible sections for advanced metrics', problem: 'Users didn\'t know what was hidden. Discovery rate below 15%.' },
      { label: 'v3.2', title: 'Text hints', desc: 'Added "Show advanced" text below each section', problem: 'Improved to 35% discovery but felt cluttered and promotional.' },
      { label: 'v3.3', title: 'Icon-based disclosure', desc: 'Eye icons placed inline with metrics for expansion', problem: 'Discovery jumped to 78%. But icons competed with status indicators.' },
      { label: 'v3.4', title: 'Final: Contextual eye icons', desc: 'Eye icons only appear on hover, with tooltip explaining what\'s revealed', problem: 'Shipped. 91% discovery rate, zero complaints about visual clutter.' }
    ],
    productTabs: [
      { 
        name: 'Overview', 
        desc: 'Central command center with real-time model health',
        features: ['Key metrics cards (Accuracy, Latency, Drift Score, Active Models)', 'Color-coded status with thresholds and trend indicators', 'Live accuracy and latency charts with reference lines', 'Actionable recommendation cards with one-click remediation', 'Critical alert banner with context and suggested actions']
      },
      { 
        name: 'Alerts', 
        desc: 'ML-native alerting with context and actions',
        features: ['Severity categorization (Critical, Warning, Info)', 'Alert count summaries and system uptime tracking', 'Detailed alert cards with timestamps, regions, features', 'Quick action buttons (Fix Now, Investigate, Dismiss)', 'Historical alert analytics and trends']
      },
      { 
        name: 'Training', 
        desc: 'Granular training performance visibility',
        features: ['Phase selector (Overview, Forward Pass, Backward Pass)', 'Real-time metrics: iteration time, throughput, memory, GPU utilization', 'Forward/Backward comparison: time per phase, memory consumption, samples/second', 'Peak and average memory tracking for forward and backward passes', 'Training curves with accuracy, loss, and convergence analysis', 'Automatic bottleneck detection and optimization suggestions']
      },
      { 
        name: 'Spatial', 
        desc: 'Global deployment visualization and management',
        features: ['Interactive 3D globe with deployment health indicators', 'Toggle between 3D globe and flat map views', 'Regional deployment cards with latency, throughput, model type', 'Status indicators per region (healthy, warning, critical)', 'Quick actions: Scale Up, View Logs, Restart', 'Global aggregate metrics and load distribution']
      },
      { 
        name: 'Drift', 
        desc: 'Proactive data quality and distribution monitoring',
        features: ['Feature-level drift analysis with color-coded scores', 'Statistical metrics: KL Divergence, PSI, Jensen-Shannon, Wasserstein', 'Training vs Production distribution comparison charts', 'Time-based drift tracking over configurable windows', 'Feature type identification (Numerical, Categorical, Text)', 'Automated retraining recommendations based on drift severity']
      },
      { 
        name: 'Logs', 
        desc: 'Unified logging and system observability',
        features: ['Real-time log streaming with filtering', 'Log severity levels and categorization', 'Search and filter by model, region, or event type', 'System health summary cards', 'Correlation with model events and deployments', 'Export and integration with external logging systems']
      }
    ],
    states: [
      { name: 'Healthy', desc: 'All models performing within thresholds' },
      { name: 'Warning', desc: 'Drift detected but within tolerance' },
      { name: 'Critical alert', desc: 'Model degradation requiring action' },
      { name: 'Training active', desc: 'Retraining in progress' },
      { name: 'Empty state', desc: 'No models connected yet' },
      { name: 'Loading', desc: 'Fetching model telemetry' },
      { name: 'Error', desc: 'Connection lost to monitoring agent' }
    ],
    accessibility: [
      { area: 'Color independence', solution: 'Status indicators use icons + color + position. Critical/Warning/Healthy distinguishable without color via distinct icons and badge shapes.', testing: 'Validated with Coblis simulator. Tested with 2 colorblind users (deuteranopia, protanopia).' },
      { area: 'Screen reader support', solution: 'All charts have aria-labels with plain-English summaries. Data tables available as alternative to all visualizations. Status changes announced via live regions.', testing: 'Validated with NVDA and VoiceOver. Screen reader users could complete investigation task.' },
      { area: 'Keyboard navigation', solution: 'Full keyboard access to all features. Tab order follows logical flow. Escape closes all modals and popovers. Focus indicators visible at all times (3px purple ring).', testing: 'Keyboard-only testing with 3 users. 100% task completion.' },
      { area: 'Cognitive load', solution: 'Progressive disclosure hides advanced metrics by default. Plain-English explanations for all ML jargon. Help icons with contextual tooltips throughout.', testing: 'Junior engineer testing showed 72% self-serve resolution vs 20% baseline.' }
    ],
    tradeoffs: [
      { decision: 'Single platform vs best-of-breed', wantedTo: 'Keep existing tools and add orchestration layer', reality: 'Unified platform required to eliminate context switching. The case was made with a time-motion study showing 40% of incident time lost to tool switching.', wouldChange: 'Would push harder for this earlier. Lost 3 weeks weighing integration vs replacement.' },
      { decision: 'Limited chart types at launch', wantedTo: 'Support all visualization types engineers might want', reality: 'Shipped with 6 core chart types covering 85% of use cases. Custom charts deferred to v2 roadmap.', wouldChange: 'Same decision. Focus was right. Histogram and heatmap shipped in week 6.' },
      { decision: 'No mobile support', wantedTo: 'Responsive design from start', reality: 'Timeline constraints required desktop-only. ML investigation workflow rarely happens on mobile. Technical debt acknowledged.', wouldChange: 'Would design mobile-friendly architecture even without building mobile views.' },
      { decision: 'AI suggestions delayed to V4', wantedTo: 'Ship AI-powered root cause analysis in V1', reality: 'Needed V3\'s progressive disclosure to establish trust first. Users rejected AI suggestions without understanding how they were derived.', wouldChange: 'Correct sequencing. Building trust before automation was essential.' }
    ],
    outcomes: [
      { metric: 'Time to detection', before: '5.2 days', after: '4 hours', change: '-97%' },
      { metric: 'Tools per investigation', before: '8.3', after: '1.9', change: '-77%' },
      { metric: 'False positive rate', before: '73%', after: '12%', change: '-84%' },
      { metric: 'SUS Score', before: '34', after: '89', change: '+162%' }
    ]
  };

  const colors = {
    accent: '#a855f7',
    accentLight: '#c084fc',
    accentDark: '#7c3aed',
    secondary: '#818cf8',
    green: '#34d399',
    orange: '#fbbf24',
    red: '#f87171',
    purple: '#a78bfa',
    white: '#FFFFFF',
    bg: '#0a0a0f',
    bgCard: '#12121a',
    bgElevated: '#1a1a24',
    border: '#2a2a3a',
    borderLight: '#3a3a4a',
    text: '#f4f4f5',
    textMuted: '#a1a1aa',
    textDim: '#71717a',
    // Product mockup colors (dark)
    product: {
      bg: '#09090b',
      card: '#111113',
      elevated: '#18181b',
      border: '#27272a',
      borderLight: '#3f3f46'
    },
    gray: { 50: '#18181b', 100: '#1f1f26', 200: '#2a2a3a', 300: '#3a3a4a', 400: '#71717a', 500: '#a1a1aa', 600: '#d4d4d8', 700: '#e4e4e7', 800: '#f4f4f5', 900: '#fafafa', 950: '#ffffff' }
  };

  // Reusable Components
  const BrowserFrame = ({ children, url = 'app.modelpulse.io', title, dark = true }) => (
    <div style={{ marginBottom: title ? '0' : '24px' }}>
      <div style={{ background: colors.product.bg, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.4)' }}>
        <div style={{ padding: '10px 14px', background: colors.product.card, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['#FF5F57', '#FFBD2E', '#28CA41'].map((c, i) => <div key={i} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c }} />)}
          </div>
          <div style={{ flex: 1, background: colors.product.elevated, borderRadius: '6px', padding: '5px 12px', fontSize: '11px', color: colors.textDim }}>{url}</div>
        </div>
        <div style={{ background: colors.product.bg }}>{children}</div>
      </div>
      {title && <div style={{ fontSize: '11px', color: colors.textDim, textAlign: 'center', marginTop: '8px' }}>{title}</div>}
    </div>
  );

  const Section = ({ children, id, wide, bg }) => (
    <section id={id} style={{ padding: '56px 0', background: bg || colors.bg }}>
      <div style={{ maxWidth: wide ? '1200px' : '920px', margin: '0 auto', padding: '0 32px' }}>{children}</div>
    </section>
  );

  const SectionLabel = ({ children }) => <div style={{ fontSize: '11px', fontWeight: 600, color: colors.accent, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{children}</div>;
  const SectionTitle = ({ children }) => <h2 style={{ fontSize: '26px', fontWeight: 600, color: colors.text, margin: '0 0 16px 0', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.01em' }}>{children}</h2>;
  const SubsectionTitle = ({ children, style = {} }) => <h3 style={{ fontSize: '16px', fontWeight: 600, color: colors.text, margin: '40px 0 12px 0', ...style }}>{children}</h3>;
  const P = ({ children, style = {} }) => <p style={{ fontSize: '15px', lineHeight: 1.75, color: colors.textMuted, margin: '0 0 16px 0', maxWidth: '680px', ...style }}>{children}</p>;
  const Divider = () => <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 32px' }}><div style={{ height: '1px', background: colors.border }} /></div>;

  const SketchBox = ({ children, label }) => (
    <div style={{ background: colors.bgCard, border: `1px solid ${colors.border}`, borderRadius: '8px', padding: '16px', position: 'relative' }}>
      {label && <div style={{ position: 'absolute', top: '-10px', left: '12px', background: colors.bgCard, padding: '0 6px', fontSize: '10px', color: colors.textMuted, fontWeight: 500 }}>{label}</div>}
      {children}
    </div>
  );

  return (
    <div style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", background: colors.bg, color: colors.text, opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease', fontSize: '15px' }}>
      
      {/* Header */}
      <header style={{ padding: '14px 32px', borderBottom: `1px solid ${colors.border}`, position: 'sticky', top: 0, background: 'rgba(10,10,15,0.95)', backdropFilter: 'blur(10px)', zIndex: 100 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '13px', color: colors.textMuted }}>Portfolio / ModelPulse</div>
          <div style={{ fontSize: '12px', color: colors.textDim }}>2024 · 8 months</div>
        </div>
      </header>

      {/* Hero */}
      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '36px', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', margin: '0 0 20px 0', fontFamily: "'Space Grotesk', sans-serif", color: colors.text }}>
              Redesigning ML observability for the humans who keep models alive
            </h1>
            <P style={{ fontSize: '17px', color: colors.textMuted, maxWidth: '480px' }}>
              Building an ML-native monitoring platform that cut incident detection from 5.2 days to 30 minutes 
              while reducing tool sprawl from 8.3 tools to one unified experience.
            </P>
            <div style={{ display: 'flex', gap: '24px', marginTop: '32px', fontSize: '14px' }}>
              {[
                { label: 'Role', value: 'Product Designer' },
                { label: 'Timeline', value: '8 months' },
                { label: 'Scope', value: 'End-to-end design' }
              ].map((item, i) => (
                <div key={i}>
                  <div style={{ fontSize: '11px', color: colors.textDim, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.label}</div>
                  <div style={{ fontWeight: 500, color: colors.text }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hero metric */}
          <div style={{ background: `linear-gradient(135deg, ${colors.accent}15 0%, ${colors.secondary}15 100%)`, borderRadius: '16px', padding: '32px', textAlign: 'center', border: `1px solid ${colors.accent}30` }}>
            <div style={{ fontSize: '12px', color: colors.textDim, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Time to detection</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
              <span style={{ fontSize: '40px', fontWeight: 300, color: colors.textDim, textDecoration: 'line-through', textDecorationColor: colors.red }}>5.2 days</span>
              <span style={{ fontSize: '24px', color: colors.textDim }}>→</span>
              <span style={{ fontSize: '56px', fontWeight: 700, background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.secondary} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>30 min</span>
            </div>
            <div style={{ fontSize: '14px', color: colors.green, fontWeight: 500, marginTop: '8px' }}>-97% reduction</div>
          </div>
        </div>
      </Section>

      {/* Final Product - Full Interface */}
      <Section wide bg={colors.bgCard}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ fontSize: '12px', color: colors.textDim, marginBottom: '4px' }}>THE SHIPPED PRODUCT</div>
          <div style={{ fontSize: '18px', fontWeight: 600, color: colors.white }}>ML-native monitoring with adaptive complexity</div>
        </div>
        
        {/* Tab selector for product views */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '20px' }}>
          {defined.productTabs.map((tab, i) => (
            <button key={i} onClick={() => setActiveTab(i)} style={{
              padding: '8px 16px',
              background: activeTab === i ? colors.accent : colors.product.elevated,
              color: activeTab === i ? colors.white : colors.textDim,
              border: 'none',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>{tab.name}</button>
          ))}
        </div>
        
        <BrowserFrame url={`app.modelpulse.io/${defined.productTabs[activeTab].name.toLowerCase()}`}>
          <div style={{ padding: '0', background: colors.product.bg }}>
            {/* App header */}
            <div style={{ padding: '12px 20px', background: colors.product.card, borderBottom: `1px solid ${colors.product.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '28px', height: '28px', background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.secondary} 100%)`, borderRadius: '6px' }} />
                <div style={{ fontSize: '14px', fontWeight: 600, color: colors.white }}>ModelPulse</div>
                <div style={{ height: '20px', width: '1px', background: colors.product.borderLight }} />
                <div style={{ fontSize: '13px', color: colors.white }}>{defined.productTabs[activeTab].name}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ padding: '6px 12px', fontSize: '12px', color: colors.textMuted, background: colors.product.elevated, borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: colors.green }} />
                  All systems nominal
                </div>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: colors.product.borderLight }} />
              </div>
            </div>
            
            {/* Main workspace */}
            <div style={{ display: 'flex', minHeight: '520px' }}>
              {/* Left sidebar */}
              <div style={{ width: '200px', background: colors.product.card, borderRight: `1px solid ${colors.product.border}`, padding: '16px' }}>
                <div style={{ fontSize: '10px', fontWeight: 600, color: colors.textDim, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Navigation</div>
                {defined.productTabs.map((tab, i) => (
                  <div key={i} onClick={() => setActiveTab(i)} style={{
                    padding: '10px 12px',
                    background: activeTab === i ? `${colors.accent}20` : 'transparent',
                    borderRadius: '8px',
                    marginBottom: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    borderLeft: activeTab === i ? `3px solid ${colors.accent}` : '3px solid transparent'
                  }}>
                    <span style={{ fontSize: '13px', color: activeTab === i ? colors.white : colors.textDim }}>{tab.name}</span>
                    {i === 1 && <span style={{ padding: '2px 6px', background: colors.red, color: colors.white, borderRadius: '10px', fontSize: '10px', fontWeight: 600 }}>3</span>}
                  </div>
                ))}
                
                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: `1px solid ${colors.product.border}` }}>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: colors.textDim, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Models</div>
                  {[
                    { name: 'Recommendation v2.3', status: 'critical' },
                    { name: 'Fraud Detection v1.8', status: 'healthy' },
                    { name: 'Search Ranking v3.1', status: 'warning' },
                    { name: 'Churn Prediction v2.0', status: 'healthy' }
                  ].map((model, i) => (
                    <div key={i} style={{ padding: '8px 10px', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{
                        width: '8px', height: '8px', borderRadius: '50%',
                        background: model.status === 'critical' ? colors.red : model.status === 'warning' ? colors.orange : colors.green
                      }} />
                      <span style={{ fontSize: '12px', color: colors.textDim }}>{model.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Main content - Overview Tab */}
              {activeTab === 0 && (
                <div style={{ flex: 1, padding: '20px' }}>
                  {/* Alert banner */}
                  <div style={{ padding: '12px 16px', background: `${colors.red}20`, borderRadius: '10px', border: `1px solid ${colors.red}40`, marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: colors.red }} />
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: colors.red }}>Critical: Recommendation Model v2.3 accuracy dropped below threshold</div>
                        <div style={{ fontSize: '11px', color: colors.textDim }}>Detected 12 minutes ago · Feature drift in user_engagement_score</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button style={{ padding: '6px 12px', fontSize: '11px', background: colors.red, color: colors.white, border: 'none', borderRadius: '6px' }}>Investigate</button>
                      <button style={{ padding: '6px 12px', fontSize: '11px', background: colors.product.borderLight, color: colors.textMuted, border: 'none', borderRadius: '6px' }}>Dismiss</button>
                    </div>
                  </div>
                  
                  {/* Metrics row */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '20px' }}>
                    {[
                      { label: 'Overall Accuracy', value: '94.2%', trend: '+1.2%', status: 'good', threshold: '> 90%' },
                      { label: 'Avg Latency', value: '45ms', trend: '-5ms', status: 'good', threshold: '< 100ms' },
                      { label: 'Drift Score', value: '0.34', trend: '+0.08', status: 'warning', threshold: '< 0.3' },
                      { label: 'Active Alerts', value: '3', trend: '+2', status: 'critical', threshold: '0' }
                    ].map((metric, i) => (
                      <div key={i} style={{
                        padding: '16px',
                        background: colors.product.card,
                        borderRadius: '12px',
                        border: `1px solid ${metric.status === 'critical' ? colors.red + '40' : metric.status === 'warning' ? colors.orange + '40' : colors.product.border}`
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                          <div style={{ fontSize: '11px', color: colors.textDim }}>{metric.label}</div>
                          <div style={{ fontSize: '10px', color: colors.textDim, cursor: 'pointer' }}>Show details</div>
                        </div>
                        <div style={{ fontSize: '28px', fontWeight: 600, color: colors.white, marginBottom: '4px' }}>{metric.value}</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '11px', color: metric.trend.startsWith('+') && metric.status !== 'good' ? colors.red : colors.green }}>{metric.trend}</span>
                          <span style={{ fontSize: '10px', color: colors.textDim }}>{metric.threshold}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Charts grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px' }}>
                    {/* Accuracy chart */}
                    <div style={{ background: colors.product.card, borderRadius: '12px', padding: '20px', border: `1px solid ${colors.product.border}` }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: colors.white }}>Model Accuracy (24h)</div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          {['1h', '6h', '24h', '7d'].map((t, i) => (
                            <button key={i} style={{
                              padding: '4px 10px', fontSize: '10px',
                              background: i === 2 ? colors.accent : colors.product.elevated,
                              color: i === 2 ? colors.white : colors.textDim,
                              border: 'none', borderRadius: '4px'
                            }}>{t}</button>
                          ))}
                        </div>
                      </div>
                      <div style={{ height: '160px', position: 'relative' }}>
                        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 30, width: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                          {['100%', '95%', '90%', '85%'].map((l, i) => (
                            <div key={i} style={{ fontSize: '10px', color: colors.textDim, textAlign: 'right', paddingRight: '8px' }}>{l}</div>
                          ))}
                        </div>
                        <div style={{ position: 'absolute', left: 45, right: 0, top: 0, bottom: 30, borderLeft: `1px solid ${colors.product.borderLight}`, borderBottom: `1px solid ${colors.product.borderLight}` }}>
                          <div style={{ position: 'absolute', left: 0, right: 0, top: '66%', height: '1px', background: colors.orange, opacity: 0.5 }}>
                            <span style={{ position: 'absolute', right: 0, top: '-8px', fontSize: '9px', color: colors.orange }}>90% threshold</span>
                          </div>
                          <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 400 120" preserveAspectRatio="none">
                            <path d="M 0 30 Q 50 25, 100 28 T 200 20 T 300 35 T 400 25" fill="none" stroke={colors.accent} strokeWidth="2" />
                            <path d="M 0 30 Q 50 25, 100 28 T 200 20 T 300 35 T 400 25 L 400 120 L 0 120 Z" fill={`${colors.accent}20`} />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Model list */}
                    <div style={{ background: colors.product.card, borderRadius: '12px', padding: '20px', border: `1px solid ${colors.product.border}` }}>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: colors.white, marginBottom: '16px' }}>Model Performance</div>
                      {[
                        { name: 'Recommendation', accuracy: '92.1%', drift: '0.42', status: 'critical' },
                        { name: 'Fraud Detection', accuracy: '97.8%', drift: '0.12', status: 'healthy' },
                        { name: 'Search Ranking', accuracy: '89.4%', drift: '0.31', status: 'warning' },
                        { name: 'Churn Prediction', accuracy: '95.2%', drift: '0.18', status: 'healthy' }
                      ].map((model, i) => (
                        <div key={i} style={{
                          padding: '12px',
                          background: colors.product.elevated,
                          borderRadius: '8px',
                          marginBottom: '8px',
                          borderLeft: `3px solid ${model.status === 'critical' ? colors.red : model.status === 'warning' ? colors.orange : colors.green}`
                        }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                            <span style={{ fontSize: '12px', fontWeight: 500, color: colors.white }}>{model.name}</span>
                            <span style={{
                              fontSize: '10px', padding: '2px 6px', borderRadius: '4px',
                              background: model.status === 'critical' ? colors.red + '20' : model.status === 'warning' ? colors.orange + '20' : colors.green + '20',
                              color: model.status === 'critical' ? colors.red : model.status === 'warning' ? colors.orange : colors.green
                            }}>{model.status}</span>
                          </div>
                          <div style={{ display: 'flex', gap: '16px', fontSize: '11px', color: colors.textDim }}>
                            <span>Acc: {model.accuracy}</span>
                            <span>Drift: {model.drift}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Training Tab */}
              {activeTab === 2 && (
                <div style={{ flex: 1, padding: '20px' }}>
                  {/* Phase selector */}
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                    {['Overview', 'Forward Pass', 'Backward Pass'].map((phase, i) => (
                      <button key={i} style={{
                        padding: '10px 20px',
                        background: i === 0 ? colors.accent : colors.product.elevated,
                        color: i === 0 ? colors.white : colors.textDim,
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: 500
                      }}>{phase}</button>
                    ))}
                  </div>
                  
                  {/* Training metrics */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '20px' }}>
                    {[
                      { label: 'Total Time', value: '74ms', sub: 'per iteration' },
                      { label: 'Throughput', value: '864', sub: 'samples/sec' },
                      { label: 'Peak Memory', value: '2.1GB', sub: 'of 12.8GB' },
                      { label: 'GPU Util', value: '90%', sub: 'average' }
                    ].map((m, i) => (
                      <div key={i} style={{ padding: '16px', background: colors.product.card, borderRadius: '12px', border: `1px solid ${colors.product.border}` }}>
                        <div style={{ fontSize: '11px', color: colors.textDim, marginBottom: '8px' }}>{m.label}</div>
                        <div style={{ fontSize: '24px', fontWeight: 600, color: colors.white }}>{m.value}</div>
                        <div style={{ fontSize: '10px', color: colors.textDim }}>{m.sub}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Forward vs Backward comparison */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                    <div style={{ padding: '20px', background: colors.product.card, borderRadius: '12px', border: `1px solid ${colors.green}40` }}>
                      <div style={{ fontSize: '12px', fontWeight: 600, color: colors.green, marginBottom: '16px' }}>Forward Pass</div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                        {[
                          { label: 'Time', value: '28ms' },
                          { label: 'Samples/sec', value: '2,286' },
                          { label: 'Peak Memory', value: '1.8GB' },
                          { label: 'GPU Util', value: '92%' }
                        ].map((m, i) => (
                          <div key={i}>
                            <div style={{ fontSize: '10px', color: colors.textDim }}>{m.label}</div>
                            <div style={{ fontSize: '18px', fontWeight: 600, color: colors.white }}>{m.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ padding: '20px', background: colors.product.card, borderRadius: '12px', border: `1px solid ${colors.red}40` }}>
                      <div style={{ fontSize: '12px', fontWeight: 600, color: colors.red, marginBottom: '16px' }}>Backward Pass</div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                        {[
                          { label: 'Time', value: '46ms' },
                          { label: 'Samples/sec', value: '1,391' },
                          { label: 'Peak Memory', value: '2.1GB' },
                          { label: 'GPU Util', value: '88%' }
                        ].map((m, i) => (
                          <div key={i}>
                            <div style={{ fontSize: '10px', color: colors.textDim }}>{m.label}</div>
                            <div style={{ fontSize: '18px', fontWeight: 600, color: colors.white }}>{m.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Training curves */}
                  <div style={{ background: colors.product.card, borderRadius: '12px', padding: '20px', border: `1px solid ${colors.product.border}` }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: colors.white, marginBottom: '16px' }}>Training Progress</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                      <div style={{ fontSize: '12px', color: colors.textDim }}>Step 800 / 1,000</div>
                      <div style={{ flex: 1, height: '4px', background: colors.product.elevated, borderRadius: '2px' }}>
                        <div style={{ width: '80%', height: '100%', background: colors.accent, borderRadius: '2px' }} />
                      </div>
                      <div style={{ fontSize: '12px', color: colors.textDim }}>ETA: 4 min</div>
                    </div>
                    <div style={{ height: '120px', display: 'flex', alignItems: 'flex-end', gap: '2px', padding: '0 20px' }}>
                      {[...Array(40)].map((_, i) => (
                        <div key={i} style={{
                          flex: 1,
                          height: `${30 + Math.random() * 60 + i * 1.5}%`,
                          background: `linear-gradient(to top, ${colors.accent}, ${colors.secondary})`,
                          borderRadius: '2px 2px 0 0',
                          opacity: 0.8
                        }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Drift Tab */}
              {activeTab === 4 && (
                <div style={{ flex: 1, padding: '20px' }}>
                  {/* Critical drift alert */}
                  <div style={{ padding: '16px', background: `${colors.red}15`, borderRadius: '12px', border: `1px solid ${colors.red}40`, marginBottom: '20px' }}>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: colors.red, marginBottom: '4px' }}>Critical Drift Detected</div>
                    <div style={{ fontSize: '12px', color: colors.textDim }}>Feature user_engagement_score has drifted significantly (KL: 0.89). Recommend immediate investigation.</div>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '20px' }}>
                    {/* Feature list */}
                    <div style={{ background: colors.product.card, borderRadius: '12px', padding: '16px', border: `1px solid ${colors.product.border}` }}>
                      <div style={{ fontSize: '12px', fontWeight: 600, color: colors.white, marginBottom: '16px' }}>Feature Analysis</div>
                      {[
                        { name: 'user_engagement_score', drift: 0.89, type: 'Numerical', status: 'critical' },
                        { name: 'session_duration', drift: 0.23, type: 'Numerical', status: 'good' },
                        { name: 'device_category', drift: 0.67, type: 'Categorical', status: 'warning' },
                        { name: 'purchase_history', drift: 0.12, type: 'Numerical', status: 'good' },
                        { name: 'location_cluster', drift: 0.45, type: 'Categorical', status: 'warning' },
                        { name: 'user_segment', drift: 0.18, type: 'Text', status: 'good' }
                      ].map((f, i) => (
                        <div key={i} style={{
                          padding: '12px',
                          background: i === 0 ? `${colors.red}10` : colors.product.elevated,
                          borderRadius: '8px',
                          marginBottom: '8px',
                          cursor: 'pointer',
                          border: i === 0 ? `1px solid ${colors.red}40` : '1px solid transparent'
                        }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                            <span style={{ fontSize: '12px', color: colors.white, fontFamily: "'JetBrains Mono', monospace" }}>{f.name}</span>
                            <span style={{
                              fontSize: '10px', padding: '2px 6px', borderRadius: '4px',
                              background: f.status === 'critical' ? colors.red + '20' : f.status === 'warning' ? colors.orange + '20' : colors.green + '20',
                              color: f.status === 'critical' ? colors.red : f.status === 'warning' ? colors.orange : colors.green
                            }}>{f.drift.toFixed(2)}</span>
                          </div>
                          <div style={{ fontSize: '10px', color: colors.textDim }}>{f.type}</div>
                          <div style={{ marginTop: '8px', height: '4px', background: colors.product.borderLight, borderRadius: '2px' }}>
                            <div style={{
                              width: `${f.drift * 100}%`,
                              height: '100%',
                              background: f.status === 'critical' ? colors.red : f.status === 'warning' ? colors.orange : colors.green,
                              borderRadius: '2px'
                            }} />
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Drift details */}
                    <div>
                      <div style={{ background: colors.product.card, borderRadius: '12px', padding: '20px', border: `1px solid ${colors.product.border}`, marginBottom: '16px' }}>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: colors.white, marginBottom: '16px' }}>Distribution Comparison: user_engagement_score</div>
                        <div style={{ display: 'flex', gap: '32px', marginBottom: '20px' }}>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '11px', color: colors.textDim, marginBottom: '8px' }}>Training Distribution</div>
                            <div style={{ display: 'flex', alignItems: 'flex-end', height: '80px', gap: '4px' }}>
                              {[20, 45, 70, 85, 60, 35, 15].map((h, i) => (
                                <div key={i} style={{ flex: 1, height: `${h}%`, background: colors.accent, borderRadius: '2px 2px 0 0' }} />
                              ))}
                            </div>
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '11px', color: colors.textDim, marginBottom: '8px' }}>Production Distribution</div>
                            <div style={{ display: 'flex', alignItems: 'flex-end', height: '80px', gap: '4px' }}>
                              {[10, 25, 40, 90, 85, 55, 30].map((h, i) => (
                                <div key={i} style={{ flex: 1, height: `${h}%`, background: colors.red, borderRadius: '2px 2px 0 0' }} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Statistical metrics */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                        {[
                          { label: 'KL Divergence', value: '0.89', threshold: '> 0.5 critical' },
                          { label: 'PSI', value: '0.67', threshold: '> 0.25 investigate' },
                          { label: 'Jensen-Shannon', value: '0.72', threshold: '> 0.5 significant' },
                          { label: 'Wasserstein', value: '1.34', threshold: '> 1.0 elevated' }
                        ].map((m, i) => (
                          <div key={i} style={{ padding: '12px', background: colors.product.card, borderRadius: '8px', border: `1px solid ${colors.product.border}` }}>
                            <div style={{ fontSize: '10px', color: colors.textDim, marginBottom: '4px' }}>{m.label}</div>
                            <div style={{ fontSize: '20px', fontWeight: 600, color: colors.red }}>{m.value}</div>
                            <div style={{ fontSize: '9px', color: colors.textDim, marginTop: '4px' }}>{m.threshold}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Spatial Tab */}
              {activeTab === 3 && (
                <div style={{ flex: 1, padding: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '20px' }}>
                    {/* Globe placeholder */}
                    <div style={{ background: colors.product.card, borderRadius: '12px', padding: '20px', border: `1px solid ${colors.product.border}`, minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                      <div style={{ width: '280px', height: '280px', borderRadius: '50%', background: `radial-gradient(circle at 30% 30%, ${colors.secondary}40, ${colors.product.card})`, border: `2px solid ${colors.product.borderLight}`, position: 'relative' }}>
                        {/* Deployment markers */}
                        {[
                          { top: '20%', left: '30%', status: 'healthy' },
                          { top: '35%', left: '55%', status: 'critical' },
                          { top: '45%', left: '75%', status: 'healthy' },
                          { top: '60%', left: '25%', status: 'warning' },
                          { top: '50%', left: '45%', status: 'healthy' },
                          { top: '30%', left: '70%', status: 'healthy' }
                        ].map((marker, i) => (
                          <div key={i} style={{
                            position: 'absolute',
                            top: marker.top,
                            left: marker.left,
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            background: marker.status === 'critical' ? colors.red : marker.status === 'warning' ? colors.orange : colors.green,
                            boxShadow: `0 0 10px ${marker.status === 'critical' ? colors.red : marker.status === 'warning' ? colors.orange : colors.green}`
                          }} />
                        ))}
                      </div>
                      <div style={{ position: 'absolute', top: '16px', right: '16px', display: 'flex', gap: '8px' }}>
                        <button style={{ padding: '6px 12px', background: colors.accent, color: colors.white, border: 'none', borderRadius: '6px', fontSize: '11px' }}>3D Globe</button>
                        <button style={{ padding: '6px 12px', background: colors.product.elevated, color: colors.textDim, border: 'none', borderRadius: '6px', fontSize: '11px' }}>Flat Map</button>
                      </div>
                    </div>
                    
                    {/* Regional list */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {[
                        { name: 'US-East-1', latency: '45ms', throughput: '850 req/s', model: 'LLM', status: 'healthy' },
                        { name: 'EU-Central', latency: '156ms', throughput: '120 req/s', model: 'Vision', status: 'critical' },
                        { name: 'Asia-Pacific', latency: '38ms', throughput: '920 req/s', model: 'LLM', status: 'healthy' },
                        { name: 'US-West-2', latency: '52ms', throughput: '680 req/s', model: 'NLP', status: 'healthy' },
                        { name: 'EU-West-1', latency: '72ms', throughput: '420 req/s', model: 'Vision', status: 'warning' },
                        { name: 'Singapore', latency: '41ms', throughput: '750 req/s', model: 'Edge', status: 'healthy' }
                      ].map((region, i) => (
                        <div key={i} style={{
                          padding: '14px',
                          background: colors.product.card,
                          borderRadius: '10px',
                          border: `1px solid ${region.status === 'critical' ? colors.red + '40' : region.status === 'warning' ? colors.orange + '40' : colors.product.border}`
                        }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <div style={{
                                width: '8px', height: '8px', borderRadius: '50%',
                                background: region.status === 'critical' ? colors.red : region.status === 'warning' ? colors.orange : colors.green
                              }} />
                              <span style={{ fontSize: '13px', fontWeight: 500, color: colors.white }}>{region.name}</span>
                            </div>
                            <span style={{ fontSize: '10px', color: colors.textDim, background: colors.product.elevated, padding: '2px 6px', borderRadius: '4px' }}>{region.model}</span>
                          </div>
                          <div style={{ display: 'flex', gap: '16px', fontSize: '11px', color: colors.textDim }}>
                            <span>{region.latency}</span>
                            <span>{region.throughput}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Alerts Tab */}
              {activeTab === 1 && (
                <div style={{ flex: 1, padding: '20px' }}>
                  {/* Alert summary */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '20px' }}>
                    {[
                      { label: 'Critical', count: 1, color: colors.red },
                      { label: 'Warning', count: 2, color: colors.orange },
                      { label: 'Info', count: 5, color: colors.secondary },
                      { label: 'Resolved (24h)', count: 12, color: colors.green }
                    ].map((s, i) => (
                      <div key={i} style={{ padding: '16px', background: colors.product.card, borderRadius: '12px', border: `1px solid ${colors.product.border}` }}>
                        <div style={{ fontSize: '11px', color: colors.textDim, marginBottom: '8px' }}>{s.label}</div>
                        <div style={{ fontSize: '32px', fontWeight: 600, color: s.color }}>{s.count}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Alert list */}
                  <div style={{ background: colors.product.card, borderRadius: '12px', border: `1px solid ${colors.product.border}` }}>
                    {[
                      { severity: 'critical', title: 'Accuracy below threshold', model: 'Recommendation v2.3', time: '12 min ago', desc: 'Dropped to 84.2% (threshold: 90%)' },
                      { severity: 'warning', title: 'Drift score elevated', model: 'Search Ranking v3.1', time: '1 hr ago', desc: 'Feature drift detected in query_embedding' },
                      { severity: 'warning', title: 'Latency spike', model: 'Fraud Detection v1.8', time: '2 hrs ago', desc: 'P99 latency increased to 180ms' },
                      { severity: 'info', title: 'Training completed', model: 'Churn Prediction v2.0', time: '3 hrs ago', desc: 'New model version ready for deployment' },
                      { severity: 'info', title: 'Scheduled maintenance', model: 'All models', time: '4 hrs ago', desc: 'Infrastructure update completed successfully' }
                    ].map((alert, i) => (
                      <div key={i} style={{
                        padding: '16px 20px',
                        borderBottom: i < 4 ? `1px solid ${colors.product.border}` : 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px'
                      }}>
                        <div style={{
                          width: '10px', height: '10px', borderRadius: '50%',
                          background: alert.severity === 'critical' ? colors.red : alert.severity === 'warning' ? colors.orange : colors.secondary
                        }} />
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <span style={{ fontSize: '13px', fontWeight: 500, color: colors.white }}>{alert.title}</span>
                            <span style={{ fontSize: '10px', color: colors.textDim, background: colors.product.elevated, padding: '2px 6px', borderRadius: '4px' }}>{alert.model}</span>
                          </div>
                          <div style={{ fontSize: '12px', color: colors.textDim }}>{alert.desc}</div>
                        </div>
                        <div style={{ fontSize: '11px', color: colors.textDim }}>{alert.time}</div>
                        <button style={{ padding: '6px 12px', background: colors.product.elevated, color: colors.textMuted, border: 'none', borderRadius: '6px', fontSize: '11px' }}>
                          {alert.severity === 'critical' ? 'Investigate' : 'View'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Logs Tab */}
              {activeTab === 5 && (
                <div style={{ flex: 1, padding: '20px' }}>
                  {/* Log filters */}
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                    <input
                      type="text"
                      placeholder="Search logs..."
                      style={{
                        flex: 1,
                        padding: '10px 14px',
                        background: colors.product.card,
                        border: `1px solid ${colors.product.borderLight}`,
                        borderRadius: '8px',
                        color: colors.white,
                        fontSize: '13px'
                      }}
                    />
                    <select style={{
                      padding: '10px 14px',
                      background: colors.product.card,
                      border: `1px solid ${colors.product.borderLight}`,
                      borderRadius: '8px',
                      color: colors.textDim,
                      fontSize: '13px'
                    }}>
                      <option>All Levels</option>
                      <option>Error</option>
                      <option>Warning</option>
                      <option>Info</option>
                    </select>
                    <select style={{
                      padding: '10px 14px',
                      background: colors.product.card,
                      border: `1px solid ${colors.product.borderLight}`,
                      borderRadius: '8px',
                      color: colors.textDim,
                      fontSize: '13px'
                    }}>
                      <option>All Models</option>
                      <option>Recommendation</option>
                      <option>Fraud Detection</option>
                      <option>Search Ranking</option>
                    </select>
                  </div>
                  
                  {/* Log entries */}
                  <div style={{ background: colors.product.card, borderRadius: '12px', border: `1px solid ${colors.product.border}`, fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>
                    {[
                      { time: '14:32:15.234', level: 'ERROR', model: 'recommendation', msg: 'Accuracy dropped below threshold: 84.2% < 90%' },
                      { time: '14:32:14.891', level: 'WARN', model: 'recommendation', msg: 'Feature drift detected: user_engagement_score (KL: 0.89)' },
                      { time: '14:32:12.456', level: 'INFO', model: 'fraud-detection', msg: 'Inference batch completed: 1024 samples, 45ms latency' },
                      { time: '14:32:10.123', level: 'INFO', model: 'search-ranking', msg: 'Model health check passed' },
                      { time: '14:32:08.789', level: 'WARN', model: 'search-ranking', msg: 'Elevated latency detected: P99 = 156ms' },
                      { time: '14:32:05.456', level: 'INFO', model: 'churn-prediction', msg: 'Training step 800/1000 completed' },
                      { time: '14:32:02.123', level: 'INFO', model: 'recommendation', msg: 'Prediction request processed: user_id=12847' },
                      { time: '14:31:58.891', level: 'INFO', model: 'fraud-detection', msg: 'Model warmup completed successfully' }
                    ].map((log, i) => (
                      <div key={i} style={{
                        padding: '10px 16px',
                        borderBottom: i < 7 ? `1px solid ${colors.product.border}` : 'none',
                        display: 'flex',
                        gap: '16px'
                      }}>
                        <span style={{ color: colors.textDim, width: '100px' }}>{log.time}</span>
                        <span style={{
                          width: '50px',
                          color: log.level === 'ERROR' ? colors.red : log.level === 'WARN' ? colors.orange : colors.textDim
                        }}>{log.level}</span>
                        <span style={{ color: colors.accent, width: '120px' }}>[{log.model}]</span>
                        <span style={{ color: colors.textMuted, flex: 1 }}>{log.msg}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </BrowserFrame>
      </Section>

      {/* Product Feature Documentation */}
      <Section>
        <SectionLabel>Product Features</SectionLabel>
        <SectionTitle>Six integrated views for complete observability</SectionTitle>
        <P>Each tab addresses specific workflow needs identified in research. Click through the product above to explore each view.</P>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '24px' }}>
          {defined.productTabs.map((tab, i) => (
            <div key={i} style={{ padding: '20px', background: colors.bgCard, borderRadius: '12px', cursor: 'pointer', border: `1px solid ${colors.border}` }} onClick={() => setActiveTab(i)}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: colors.text, marginBottom: '8px' }}>{tab.name}</div>
              <div style={{ fontSize: '12px', color: colors.textMuted, marginBottom: '12px' }}>{tab.desc}</div>
              <div style={{ fontSize: '12px', color: colors.textMuted }}>
                {tab.features.slice(0, 3).map((f, j) => (
                  <div key={j} style={{ marginBottom: '4px', display: 'flex', gap: '6px' }}>
                    <span style={{ color: colors.accent }}>·</span>{f}
                  </div>
                ))}
                {tab.features.length > 3 && (
                  <div style={{ color: colors.accent, marginTop: '8px', fontSize: '11px' }}>+{tab.features.length - 3} more features</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* What I Did */}
      <Section bg={colors.bgCard}>
        <SectionLabel>The Work</SectionLabel>
        <SectionTitle>What I did</SectionTitle>
        <P>The following outlines the work across research, strategy, design, and execution.</P>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginTop: '24px' }}>
          {defined.myContributions.map((c, i) => (
            <div key={i} style={{ padding: '20px', background: colors.bgElevated, borderRadius: '12px', border: `1px solid ${colors.border}` }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: colors.text, marginBottom: '12px' }}>{c.area}</div>
              {c.tasks.map((t, j) => (
                <div key={j} style={{ fontSize: '13px', color: colors.textMuted, marginBottom: '6px', display: 'flex', gap: '8px' }}>
                  <span style={{ color: colors.accent }}>·</span>
                  {t}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* Design Philosophy */}
      <Section>
        <SectionLabel>Point of View</SectionLabel>
        <SectionTitle>What I believe about ML observability design</SectionTitle>
        <P>These principles informed every decision in this project. They represent a perspective developed through months of embedded research with ML teams.</P>
        
        <div style={{ marginTop: '32px' }}>
          {defined.designPhilosophy.map((p, i) => (
            <div key={i} style={{ marginBottom: '32px', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px' }}>
              <div style={{ fontSize: '17px', fontWeight: 600, color: colors.text, lineHeight: 1.4 }}>"{p.belief}"</div>
              <div style={{ fontSize: '14px', color: colors.textMuted, lineHeight: 1.7, paddingTop: '4px' }}>{p.detail}</div>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* Context */}
      <Section>
        <SectionLabel>Context</SectionLabel>
        <SectionTitle>The problem</SectionTitle>
        <P>
          ML teams were drowning in tools but starving for insights. Generic infrastructure monitoring 
          couldn't speak the language of models, drift, and training convergence.
        </P>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', margin: '32px 0' }}>
          {[
            { label: 'Time to detection', value: '5.2 days', sub: 'Issues found by customers', bad: true },
            { label: 'Tools per investigation', value: '8.3', sub: 'Context switching nightmare', bad: true },
            { label: 'False positive rate', value: '73%', sub: 'Alert fatigue endemic', bad: true },
            { label: 'SUS Score', value: '34', sub: 'Deep in "poor" range', bad: true }
          ].map((s, i) => (
            <div key={i} style={{ padding: '20px', background: s.bad ? colors.red + '10' : colors.bgCard, borderRadius: '10px', border: `1px solid ${s.bad ? colors.red + '30' : colors.border}` }}>
              <div style={{ fontSize: '10px', color: colors.textDim, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.03em' }}>{s.label}</div>
              <div style={{ fontSize: '32px', fontWeight: 600, color: colors.text }}>{s.value}</div>
              <div style={{ fontSize: '12px', color: colors.textMuted, marginTop: '4px' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* The Before State */}
      <Section wide bg={colors.bgCard}>
        <SubsectionTitle style={{ marginTop: 0 }}>What users were dealing with</SubsectionTitle>
        <P>ML teams cobbled together a fragmented stack of infrastructure-first products, none of which understood models, drift, or training convergence. Every investigation meant jumping across disconnected tools and correlating results by hand.</P>
        
        <div style={{ marginTop: '24px', padding: '20px', background: colors.bgElevated, borderRadius: '12px', border: `1px solid ${colors.border}` }}>
          <div style={{ fontSize: '14px', color: colors.textMuted, lineHeight: 1.7, fontStyle: 'italic' }}>
            "Every time there's an incident, I have 8 browser tabs open, I'm SSH'd into three different servers, 
            I've got a Jupyter notebook running, and I'm still copying numbers into a spreadsheet to correlate 
            what's happening. By the time I figure it out, the senior engineer has already fixed it and I still 
            don't understand what went wrong."
            <div style={{ marginTop: '12px', fontSize: '12px', fontWeight: 600, color: colors.textDim }}>— Alex, Mid-Level ML Engineer</div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Research */}
      <Section>
        <SectionLabel>Research</SectionLabel>
        <SectionTitle>Understanding the problem</SectionTitle>
        <P>I ran an 8-month embedded research program across 12 companies. Here's not just what I learned, but how I got there.</P>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', margin: '24px 0' }}>
          {[
            { method: 'Contextual inquiry', count: '40 hrs', detail: 'Direct observation during incident response' },
            { method: 'Interviews', count: '67', detail: 'Semi-structured, junior to staff level' },
            { method: 'Incident observations', count: '89', detail: 'Real production incidents, detailed logging' },
            { method: 'Diary studies', count: '23', detail: '2-week workflow documentation' }
          ].map((item, i) => (
            <div key={i} style={{ padding: '16px', background: colors.bgCard, borderRadius: '10px', textAlign: 'center', border: `1px solid ${colors.border}` }}>
              <div style={{ fontSize: '28px', fontWeight: 600, color: colors.text }}>{item.count}</div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: colors.textMuted, marginBottom: '4px' }}>{item.method}</div>
              <div style={{ fontSize: '11px', color: colors.textDim }}>{item.detail}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Research Artifacts */}
      <Section wide bg={colors.bgCard}>
        <SubsectionTitle style={{ marginTop: 0 }}>Synthesis: from raw data to insights</SubsectionTitle>
        <P>Beyond the findings, the following illustrates the synthesis process from raw data to actionable insights.</P>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '24px' }}>
          {/* Tool switching analysis */}
          <SketchBox label="Tool switching analysis (time-motion study)">
            <div style={{ fontSize: '12px', color: colors.textMuted }}>
              {[
                { label: 'Context switching between tools', value: 40, color: colors.red },
                { label: 'Manual correlation in spreadsheets', value: 25, color: colors.orange },
                { label: 'Waiting for data/queries', value: 20, color: colors.orange },
                { label: 'Actual investigation work', value: 15, color: colors.green, highlight: true }
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontWeight: item.highlight ? 600 : 400, color: item.highlight ? colors.green : 'inherit' }}>{item.label}</span>
                    <span style={{ fontWeight: 600 }}>{item.value}%</span>
                  </div>
                  <div style={{ height: '8px', background: colors.border, borderRadius: '4px' }}>
                    <div style={{ width: `${item.value}%`, height: '100%', background: item.color, borderRadius: '4px' }} />
                  </div>
                </div>
              ))}
            </div>
          </SketchBox>
          
          {/* Alert analysis */}
          <SketchBox label="Alert quality analysis (n=1,247 alerts)">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '32px', padding: '16px 0' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: `conic-gradient(${colors.red} 0% 73%, ${colors.green} 73% 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: colors.bgCard, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '20px', fontWeight: 600, color: colors.red }}>73%</span>
                  </div>
                </div>
                <div style={{ fontSize: '11px', color: colors.textDim, marginTop: '8px' }}>False positives</div>
              </div>
              <div style={{ fontSize: '12px', color: colors.textMuted, lineHeight: 1.6 }}>
                <div style={{ marginBottom: '8px' }}>52% infrastructure alerts irrelevant to ML</div>
                <div style={{ marginBottom: '8px' }}>14% thresholds set incorrectly</div>
                <div>7% transient spikes auto-resolved</div>
              </div>
            </div>
          </SketchBox>
        </div>
      </Section>

      {/* Key Findings */}
      <Section>
        <SubsectionTitle style={{ marginTop: 0 }}>Key findings</SubsectionTitle>
        <P>Five primary issues emerged from synthesis. Each finding includes supporting evidence and design response.</P>
        
        {defined.researchFindings.map((finding, i) => (
          <div key={i} style={{ border: `1px solid ${colors.border}`, borderRadius: '8px', marginBottom: '8px', overflow: 'hidden' }}>
            <div 
              onClick={() => setExpandedFinding(expandedFinding === i ? null : i)}
              style={{ padding: '16px 20px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: expandedFinding === i ? colors.bgCard : colors.bg }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '4px', background: finding.severity === 'Critical' ? colors.red + '20' : colors.orange + '20', color: finding.severity === 'Critical' ? colors.red : colors.orange, fontWeight: 600 }}>{finding.severity}</span>
                <span style={{ fontSize: '14px', fontWeight: 500, color: colors.text }}>{finding.finding}</span>
              </div>
              <span style={{ fontSize: '18px', color: colors.textDim, fontWeight: 300 }}>{expandedFinding === i ? '−' : '+'}</span>
            </div>
            
            {expandedFinding === i && (
              <div style={{ padding: '0 20px 20px', background: colors.bgCard }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: colors.textDim, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Evidence</div>
                  {finding.evidence.map((e, j) => (
                    <div key={j} style={{ fontSize: '13px', color: colors.textMuted, marginBottom: '4px', display: 'flex', gap: '8px' }}>
                      <span style={{ color: colors.accent }}>·</span>{e}
                    </div>
                  ))}
                </div>
                <div style={{ padding: '12px 16px', background: colors.green + '15', borderRadius: '8px', borderLeft: `3px solid ${colors.green}` }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: colors.green, marginBottom: '4px' }}>OUTCOME AFTER REDESIGN</div>
                  <div style={{ fontSize: '14px', color: colors.text, fontWeight: 500 }}>{finding.outcome}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </Section>

      {/* Personas */}
      <Section bg={colors.bgCard}>
        <SubsectionTitle style={{ marginTop: 0 }}>Personas</SubsectionTitle>
        <P>Three distinct archetypes emerged from research, each representing a different relationship with ML monitoring.</P>
        
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', marginTop: '20px' }}>
          {defined.personas.map((p, i) => (
            <button key={i} onClick={() => setActivePersona(i)} style={{
              padding: '10px 20px', background: activePersona === i ? colors.accent : colors.bgElevated,
              color: activePersona === i ? colors.white : colors.textMuted,
              border: `1px solid ${activePersona === i ? colors.accent : colors.border}`,
              borderRadius: '8px', fontSize: '13px', fontWeight: 500, cursor: 'pointer'
            }}>{p.name}: {p.archetype}</button>
          ))}
        </div>

        <div style={{ background: colors.bgElevated, borderRadius: '12px', padding: '24px', border: `1px solid ${colors.border}` }}>
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr 1fr', gap: '32px' }}>
            <div>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: `linear-gradient(135deg, ${colors.accent}30 0%, ${colors.secondary}30 100%)`, marginBottom: '16px' }} />
              <div style={{ fontSize: '20px', fontWeight: 600, color: colors.text, marginBottom: '4px' }}>{defined.personas[activePersona].name}</div>
              <div style={{ fontSize: '14px', color: colors.textMuted }}>{defined.personas[activePersona].role}</div>
              <div style={{ marginTop: '16px', padding: '12px', background: colors.bgCard, borderRadius: '8px', borderLeft: `3px solid ${colors.accent}` }}>
                <div style={{ fontSize: '13px', fontStyle: 'italic', color: colors.textMuted, lineHeight: 1.5 }}>"{defined.personas[activePersona].quote}"</div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: colors.textDim, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Goals</div>
              {defined.personas[activePersona].goals.map((g, i) => (
                <div key={i} style={{ fontSize: '14px', color: colors.textMuted, marginBottom: '8px', display: 'flex', gap: '10px' }}>
                  <span style={{ color: colors.green }}>+</span>{g}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: colors.textDim, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Frustrations</div>
              {defined.personas[activePersona].frustrations.map((f, i) => (
                <div key={i} style={{ fontSize: '14px', color: colors.textMuted, marginBottom: '8px', display: 'flex', gap: '10px' }}>
                  <span style={{ color: colors.red }}>-</span>{f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Macro Iterations */}
      <Section wide>
        <SectionLabel>Iterations</SectionLabel>
        <SectionTitle>Four paradigms tested</SectionTitle>
        <P>I prototyped four fundamentally different approaches and tested each with users to understand what worked and what didn't.</P>
        
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', marginTop: '20px' }}>
          {defined.iterations.map((iter, i) => (
            <button key={i} onClick={() => setActiveIteration(i)} style={{
              padding: '10px 20px', background: activeIteration === i ? colors.accent : colors.bgCard,
              color: activeIteration === i ? colors.white : colors.textMuted,
              border: `1px solid ${activeIteration === i ? colors.accent : colors.border}`,
              borderRadius: '8px', fontSize: '13px', fontWeight: 500, cursor: 'pointer'
            }}>{iter.version}: {iter.title}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{
                fontSize: '11px', padding: '4px 10px', borderRadius: '4px', fontWeight: 600,
                background: defined.iterations[activeIteration].status === 'shipped' ? colors.green + '20' : defined.iterations[activeIteration].status === 'partial' ? colors.orange + '20' : colors.red + '20',
                color: defined.iterations[activeIteration].status === 'shipped' ? colors.green : defined.iterations[activeIteration].status === 'partial' ? colors.orange : colors.red
              }}>{defined.iterations[activeIteration].status === 'shipped' ? 'Shipped' : defined.iterations[activeIteration].status === 'partial' ? 'Partial' : 'Rejected'}</span>
              <span style={{ fontSize: '18px', fontWeight: 600, color: colors.text }}>{defined.iterations[activeIteration].title}</span>
            </div>
            
            <div style={{ padding: '16px', background: colors.bgCard, borderRadius: '10px', marginBottom: '16px', border: `1px solid ${colors.border}` }}>
              <div style={{ fontSize: '11px', fontWeight: 600, color: colors.accent, marginBottom: '6px', textTransform: 'uppercase' }}>Hypothesis</div>
              <div style={{ fontSize: '14px', color: colors.textMuted, lineHeight: 1.6 }}>{defined.iterations[activeIteration].hypothesis}</div>
            </div>
            
            <div style={{ fontSize: '12px', fontWeight: 600, color: colors.textDim, marginBottom: '10px', textTransform: 'uppercase' }}>Usability test results</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '16px' }}>
              {[
                { label: 'Detection time', value: defined.iterations[activeIteration].results.time },
                { label: 'Resolution rate', value: defined.iterations[activeIteration].results.resolution },
                { label: 'Satisfaction', value: defined.iterations[activeIteration].results.sat }
              ].map((m, i) => (
                <div key={i} style={{ padding: '12px', background: colors.bgCard, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
                  <div style={{ fontSize: '10px', color: colors.textDim, marginBottom: '4px' }}>{m.label}</div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: colors.text }}>{m.value}</div>
                </div>
              ))}
            </div>
            
            <div style={{
              padding: '16px', borderRadius: '10px', marginTop: '16px',
              background: defined.iterations[activeIteration].status === 'shipped' ? colors.green + '10' : defined.iterations[activeIteration].status === 'partial' ? colors.orange + '10' : colors.red + '10',
              borderLeft: `3px solid ${defined.iterations[activeIteration].status === 'shipped' ? colors.green : defined.iterations[activeIteration].status === 'partial' ? colors.orange : colors.red}`
            }}>
              <div style={{ fontSize: '11px', fontWeight: 600, color: colors.textMuted, marginBottom: '6px' }}>KEY LEARNING</div>
              <div style={{ fontSize: '14px', color: colors.textMuted, lineHeight: 1.6 }}>{defined.iterations[activeIteration].learning}</div>
            </div>
          </div>

          <div style={{ background: colors.bgCard, borderRadius: '12px', padding: '24px', border: `1px solid ${colors.border}` }}>
            <div style={{ fontSize: '11px', color: colors.textDim, marginBottom: '16px' }}>Prototype visualization</div>
            
            {activeIteration === 0 && (
              <div>
                <div style={{ fontSize: '12px', color: colors.textDim, marginBottom: '12px' }}>Organized by infrastructure</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {['prod-east-1', 'prod-west-1', 'prod-eu-1'].map((cluster, i) => (
                    <div key={i} style={{ padding: '12px', background: colors.bgElevated, borderRadius: '8px' }}>
                      <div style={{ fontSize: '11px', color: colors.textDim, marginBottom: '8px' }}>{cluster}</div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4px' }}>
                        {[1,2,3,4].map(p => (
                          <div key={p} style={{ padding: '6px', background: p === 2 && i === 0 ? colors.red + '30' : colors.green + '30', borderRadius: '4px', fontSize: '9px', textAlign: 'center', color: colors.textDim }}>pod-{p}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeIteration === 1 && (
              <div>
                <div style={{ fontSize: '12px', color: colors.textDim, marginBottom: '12px' }}>All metrics exposed</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                  {['Accuracy', 'Latency p50', 'Latency p95', 'Latency p99', 'Drift PSI', 'Drift KS', 'Drift JS', 'Chi-squared'].map((metric, i) => (
                    <div key={i} style={{ padding: '8px', background: colors.bgElevated, borderRadius: '6px', fontSize: '10px', textAlign: 'center' }}>
                      <div style={{ color: colors.textDim }}>{metric}</div>
                      <div style={{ color: colors.text, fontWeight: 500, marginTop: '4px' }}>{(Math.random() * 100).toFixed(2)}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeIteration === 2 && (
              <div>
                <div style={{ fontSize: '12px', color: colors.textDim, marginBottom: '12px' }}>Progressive disclosure with eye icons</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  {[
                    { name: 'Accuracy', value: '94.2%', advanced: 'Precision: 0.93, Recall: 0.95' },
                    { name: 'Drift Score', value: '0.34', advanced: 'PSI: 0.34, KS: 0.12' }
                  ].map((metric, i) => (
                    <div key={i} style={{ padding: '12px', background: colors.bgElevated, borderRadius: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontSize: '11px', color: colors.textDim }}>{metric.name}</span>
                        <span style={{ fontSize: '12px', color: colors.textMuted, cursor: 'pointer' }}>Show details</span>
                      </div>
                      <div style={{ fontSize: '24px', fontWeight: 600, color: colors.text }}>{metric.value}</div>
                      <div style={{ fontSize: '10px', color: colors.textDim, marginTop: '8px', padding: '8px', background: colors.bgCard, borderRadius: '4px' }}>{metric.advanced}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeIteration === 3 && (
              <div>
                <div style={{ fontSize: '12px', color: colors.textDim, marginBottom: '12px' }}>AI-powered root cause analysis</div>
                <div style={{ padding: '16px', background: `linear-gradient(135deg, ${colors.accent}20 0%, ${colors.secondary}20 100%)`, borderRadius: '12px', border: `1px solid ${colors.accent}40` }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: colors.text, marginBottom: '8px' }}>Root Cause Identified</div>
                  <div style={{ fontSize: '11px', color: colors.textMuted, lineHeight: 1.6 }}>
                    Accuracy drop correlates with data pipeline change at 14:32. Feature user_engagement_score shows distribution shift.
                  </div>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                    <button style={{ padding: '8px 12px', background: colors.accent, color: colors.white, border: 'none', borderRadius: '6px', fontSize: '11px' }}>View Pipeline Change</button>
                    <button style={{ padding: '8px 12px', background: colors.bgElevated, color: colors.text, border: 'none', borderRadius: '6px', fontSize: '11px' }}>Start Retraining</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      <Divider />

      {/* Micro Iterations */}
      <Section>
        <SectionLabel>Iteration depth</SectionLabel>
        <SectionTitle>Micro-iterations within V3</SectionTitle>
        <P>The progressive disclosure breakthrough didn't happen in one step. The following documents the evolution of the eye icon pattern.</P>
        
        <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', marginTop: '24px', overflowX: 'auto' }}>
          {defined.microIterations.map((m, i) => (
            <button key={i} onClick={() => setActiveMicroIteration(i)} style={{
              padding: '8px 16px', whiteSpace: 'nowrap',
              background: activeMicroIteration === i ? colors.accent : colors.bgCard,
              color: activeMicroIteration === i ? colors.white : colors.textMuted,
              border: `1px solid ${activeMicroIteration === i ? colors.accent : colors.border}`,
              borderRadius: '6px', fontSize: '12px', cursor: 'pointer'
            }}>{m.label}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div style={{ padding: '24px', background: colors.bgCard, borderRadius: '12px', border: `1px solid ${colors.border}` }}>
            <div style={{ fontSize: '16px', fontWeight: 600, color: colors.text, marginBottom: '8px' }}>{defined.microIterations[activeMicroIteration].title}</div>
            <div style={{ fontSize: '14px', color: colors.textMuted, marginBottom: '16px', lineHeight: 1.6 }}>{defined.microIterations[activeMicroIteration].desc}</div>
            <div style={{
              padding: '12px 16px', borderRadius: '8px',
              background: activeMicroIteration === 3 ? colors.green + '15' : colors.orange + '15',
              borderLeft: `3px solid ${activeMicroIteration === 3 ? colors.green : colors.orange}`
            }}>
              <div style={{ fontSize: '11px', fontWeight: 600, color: activeMicroIteration === 3 ? colors.green : colors.orange, marginBottom: '4px' }}>
                {activeMicroIteration === 3 ? 'SHIPPED' : 'PROBLEM'}
              </div>
              <div style={{ fontSize: '13px', color: colors.textMuted }}>{defined.microIterations[activeMicroIteration].problem}</div>
            </div>
          </div>
          
          <div style={{ background: colors.bgCard, borderRadius: '12px', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${colors.border}` }}>
            <div style={{ width: '100%' }}>
              <div style={{ padding: '16px', background: colors.bgElevated, borderRadius: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '12px', color: colors.textDim }}>Drift Score</span>
                  {activeMicroIteration >= 2 && (
                    <span style={{ fontSize: '12px', color: colors.textMuted, opacity: activeMicroIteration === 3 ? 0.5 : 1 }}>Show details</span>
                  )}
                </div>
                <div style={{ fontSize: '28px', fontWeight: 600, color: colors.text, marginBottom: '8px' }}>0.34</div>
                
                {activeMicroIteration === 0 && (
                  <div style={{ padding: '8px', background: colors.bgCard, borderRadius: '6px', fontSize: '10px', color: colors.textDim, cursor: 'pointer' }}>
                    Show advanced metrics
                  </div>
                )}
                
                {activeMicroIteration === 1 && (
                  <div style={{ fontSize: '11px', color: colors.accent, cursor: 'pointer' }}>Show advanced →</div>
                )}
                
                {activeMicroIteration >= 2 && (
                  <div style={{ padding: '10px', background: colors.bgCard, borderRadius: '6px', marginTop: '8px' }}>
                    <div style={{ fontSize: '10px', color: colors.textDim, marginBottom: '6px' }}>Statistical details</div>
                    <div style={{ fontSize: '11px', color: colors.textMuted }}>PSI: 0.34 · KS: 0.12 · p &lt; 0.001</div>
                  </div>
                )}
                
                {activeMicroIteration === 3 && (
                  <div style={{ fontSize: '10px', color: colors.textDim, marginTop: '8px', fontStyle: 'italic' }}>
                    Icon appears on hover with tooltip
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Accessibility */}
      <Section>
        <SectionLabel>Accessibility</SectionLabel>
        <SectionTitle>Designing for everyone</SectionTitle>
        <P>Accessibility was a constraint from project initiation, not a post-hoc consideration.</P>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '24px' }}>
          {defined.accessibility.map((a, i) => (
            <div key={i} style={{ padding: '20px', background: colors.bgCard, borderRadius: '12px', border: `1px solid ${colors.border}` }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: colors.text, marginBottom: '12px' }}>{a.area}</div>
              <div style={{ fontSize: '13px', color: colors.textMuted, marginBottom: '12px', lineHeight: 1.7 }}>{a.solution}</div>
              <div style={{ padding: '10px 12px', background: colors.bgElevated, borderRadius: '8px', fontSize: '12px' }}>
                <span style={{ fontWeight: 600, color: colors.textMuted }}>Testing: </span>
                <span style={{ color: colors.textDim }}>{a.testing}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* Outcomes */}
      <Section>
        <SectionLabel>Results</SectionLabel>
        <SectionTitle>Outcomes</SectionTitle>
        <P>All primary metrics improved significantly after launch.</P>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', margin: '32px 0' }}>
          {defined.outcomes.map((o, i) => (
            <div key={i} style={{ padding: '20px', background: `linear-gradient(135deg, ${colors.accent}10 0%, ${colors.secondary}10 100%)`, borderRadius: '12px', border: `1px solid ${colors.accent}30` }}>
              <div style={{ fontSize: '11px', color: colors.textDim, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.03em' }}>{o.metric}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontSize: '14px', color: colors.textDim, textDecoration: 'line-through' }}>{o.before}</span>
                <span style={{ color: colors.textDim }}>→</span>
                <span style={{ fontSize: '32px', fontWeight: 600, color: colors.text }}>{o.after}</span>
              </div>
              <div style={{ fontSize: '14px', color: colors.green, fontWeight: 600 }}>{o.change}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer style={{ padding: '48px 32px', borderTop: `1px solid ${colors.border}`, textAlign: 'center' }}>
        <div style={{ fontSize: '12px', color: colors.textDim }}>
          ModelPulse Case Study · 2024
        </div>
      </footer>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ModelPulseCaseStudy;