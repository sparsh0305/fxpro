
            (function() {
                var ARW = '<span aria-hidden="true">&#8599;</span>'
                  , MARK = '<svg viewBox="-2 -2 104 104" fill="none" aria-hidden="true"><defs><clipPath id="rc1"><path d="M17.67 5.38 Q22.90 0.00 30.40 0.05 L96.60 0.47 Q100.00 0.49 100.00 3.89 L100.00 74.04 Q100.00 77.64 97.47 80.21 L82.53 95.37 Q77.97 100.00 71.47 100.00 L3.20 100.00 Q0.00 100.00 0.00 96.80 L0.00 27.19 Q0.00 23.59 2.51 21.00 Z M21.66 76.27 Q21.66 78.87 24.26 78.85 L75.37 78.40 Q77.97 78.38 77.97 75.78 L77.97 24.47 Q77.97 21.87 75.37 21.88 L24.26 22.10 Q21.66 22.11 21.66 24.71 Z "/></clipPath></defs><g clip-path="url(#rc1)"><rect x="-2" y="-2" width="104" height="104" fill="#538c82"/><polygon points="0.0,23.6 21.7,22.1 21.7,78.9 0.0,100.0" fill="#538c82"/><polygon points="21.7,78.9 78.0,78.4 78.0,100.0 0.6,100.0" fill="#c2ad80"/><polygon points="100.0,0.5 100.0,77.6 78.0,100.0 78.0,21.9" fill="#dec796"/><polygon points="22.9,0.0 100.0,0.5 78.0,21.9 1.9,22.4" fill="#6DB8AB"/></g></svg>';
                var MC = 0;
                function mark() {
                    return MARK.split('rc1').join('rcm' + (++MC))
                }
                /* CONTACT FORM: paste your form endpoint between the quotes (e.g. https://formspree.io/f/xxxxxxxx). While empty, the form runs in prototype mode and nothing is sent. */
                var FORM_ENDPOINT = '';
                var $ = function(s, r) {
                    return (r || document).querySelector(s)
                }
                  , app = $('#app');
                var D = document
                  , root = D.documentElement
                  , RM = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
                if (!RM)
                    root.classList.add('js');
                function esc(s) {
                    return String(s).replace(/[&<>"]/g, function(c) {
                        return {
                            '&': '&amp;',
                            '<': '&lt;',
                            '>': '&gt;',
                            '"': '&quot;'
                        }[c]
                    })
                }
                function toast(m) {
                    var el = $('#toast');
                    el.textContent = m;
                    el.classList.add('on');
                    clearTimeout(toast.t);
                    toast.t = setTimeout(function() {
                        el.classList.remove('on')
                    }, 2200)
                }
                var STATS = [['', 'Multi-bank', 'Connectivity'], ['', '<i data-c=\"25\">25</i>+', 'Currencies via local rails'], ['', '<i data-c=\"30\">30</i>+', 'Countries via SWIFT'], ['', 'Pan India', 'Presence']];
                var ABOUT = 'FxPro is a specialised financial services partner enabling global trade and treasury operations through technology-enabled and banking-backed solutions. We combine deep domain expertise, strategic partnerships and a client-first approach to deliver end-to-end solutions for cross-border payments, FX, trade finance, compliance and treasury for importers, exporters and global businesses.';
                var PIL = [['globe', 'Global Expertise'], ['gear', 'Technology Driven'], ['network', 'End-to-End Solutions'], ['users', 'Trusted Partnerships']];
                var PLAT = [['Easebuzz', 'RBI Authorised Payment Aggregator (PA-CB)', ['Global collection accounts (US, UK, EU, Canada)', 'Local rails in multiple currencies', 'Competitive & transparent FX rates', 'Digital FIRC/FIRA and automated compliance', 'Faster settlements with end-to-end tracking']], ['PayGlocal', 'RBI Authorised Cross Border Payment Platform', ['Local collection rails in key markets', 'Competitive FX and lower transaction costs', 'Integrated compliance and reporting', 'Ideal for exporters, SaaS, IT/ITES and e-commerce']], ['Xflow', 'RBI Authorised Cross Border Payment Solutions', ['Cross-border payments and trade solutions', 'Digital trade documentation and workflow', 'Faster and transparent settlements', 'Built for modern global businesses']]];
                var SERV = [{
                    id: 'collections',
                    k: 'A',
                    t: 'Cross-Border Collections & Payments',
                    d: 'Global collection accounts and local rails in 25+ currencies, with SWIFT and local payment options.',
                    i: ['Global collection accounts', 'Local rails in 25+ currencies', 'SWIFT & local payment options', 'Faster settlements & real-time tracking']
                }, {
                    id: 'trade-support',
                    k: 'B',
                    t: 'Trade Transaction Support',
                    d: 'End-to-end support for imports and exports, from documentation to payment tracking.',
                    i: ['End-to-end support for imports and exports', 'Documentation and coordination', 'Shipment and payment tracking', 'Advisory on trade structures']
                }, {
                    id: 'gateways',
                    k: 'C',
                    t: 'International Payment Gateways',
                    d: 'Accept global payments via local rails with seamless settlement to INR.',
                    i: ['Accept global payments via local rails', 'Multi-currency collections', 'Ideal for e-commerce, SaaS, IT/ITES', 'Seamless settlement to INR']
                }, {
                    id: 'compliance',
                    k: 'D',
                    t: 'Regulatory Compliance Outsourcing',
                    d: 'RBI and FEMA compliance support with documentation, monitoring and advisory.',
                    i: ['RBI and FEMA compliance support', 'Documentation and KYC assistance', 'Transaction monitoring & reporting', 'Regulatory updates and advisory']
                }, {
                    id: 'fx',
                    k: 'E',
                    t: 'FX Rate Outsourcing & Hedging',
                    d: 'Competitive, transparent FX rates with spot, forward, swap and options support.',
                    i: ['Competitive & transparent FX rates', 'Zero/low FX markup options', 'Spot, forward, swap and options', 'FX risk management advisory'],
                    n: 'FX markup is distinct from the underlying exchange rate, conversion charges and other applicable fees. Hedging is executed through authorised counterparties.'
                }, {
                    id: 'edf',
                    k: 'F',
                    t: 'EDF Submission & Closures',
                    d: 'Timely EDF filing, follow-up, closure support and reconciliation.',
                    i: ['Timely EDF filing and follow-up', 'Closure support and reconciliation', 'Coordinate with AD banks', 'End-to-end documentation support']
                }, {
                    id: 'trade-finance',
                    k: 'G',
                    t: 'Trade Finance Solutions',
                    d: 'Import and export finance advisory, guarantees, LC advisory and working capital.',
                    i: ['Import & export finance advisory', 'Bank guarantees and LC advisory', 'Working capital solutions', 'Channel financing support'],
                    n: 'Funding is subject to lender assessment, product eligibility and applicable regulations.'
                }, {
                    id: 'capital',
                    k: 'H',
                    t: 'Capital Account Advisory',
                    d: 'Inbound and outbound investments, ODI, FDI and overseas structures.',
                    i: ['Inbound and outbound investments', 'ODI, FDI and overseas structures', 'Advisory on repatriation and reporting'],
                    n: 'Statutory filings and certifications are undertaken by the relevant authorised parties.'
                }];
                var DIFF = [['badge', 'Authorised Reseller of Leading Platforms', 'Easebuzz, PayGlocal and Xflow'], ['network', 'End-to-End Trade & Treasury Solutions', 'Payments, FX, trade finance, compliance and advisory'], ['search', 'Transparent Pricing', 'Competitive FX rates with no hidden charges'], ['lock', 'No Separate Current Account Opening', 'Receive international payments without opening a separate bank account in most cases'], ['user', 'Dedicated Relationship & Operational Support', 'Single point of contact for all your trade and FX needs'], ['users', 'Experienced Team', 'Deep domain expertise across global markets, banking and trade']];
                var IND = [['code', 'IT / ITES / Web Development'], ['cloud', 'SaaS and Software Exports'], ['box', 'D2C Exporters and E-commerce'], ['plane', 'Travel and Hospitality'], ['cap', 'Education and Ed-tech'], ['factory', 'Manufacturing and Engineering'], ['ship', 'Trading Companies (Importers & Exporters)'], ['chat', 'Marketing and Consultancy Services'], ['briefcase', 'Other Professional Services']];
                var RAILS = [['US', 'ACH', 'USD'], ['UK', 'Faster Payments', 'GBP'], ['EU', 'SEPA', 'EUR'], ['CA', 'EFT', 'CAD']];
                var CUR = [['USD', 'US Dollar'], ['GBP', 'British Pound'], ['EUR', 'Euro'], ['CAD', 'Canadian Dollar'], ['AED', 'UAE Dirham'], ['AUD', 'Australian Dollar'], ['SGD', 'Singapore Dollar'], ['JPY', 'Japanese Yen'], ['CNY', 'Chinese Yuan']];
                var BEN = [['coins', 'Lower FX Costs', 'Competitive & transparent rates with zero/low markup'], ['shield', 'No Correspondent Bank Charges', 'Save USD 15-50 per transaction'], ['lock', 'No Separate Current Account', 'Receive payments without opening a separate account'], ['bolt', 'Faster Collections and Settlements', 'Local rails with end-to-end tracking'], ['doc', 'Automated FIRA / Credit Advice', 'Digital documentation and history'], ['badge', 'Regulatory Compliance Support', 'RBI and FEMA compliant processes'], ['eye', 'Real-time Visibility', 'Tracking and reporting dashboard'], ['users', 'End-to-End Support', 'From onboarding to ongoing operations'], ['chart', 'Scalable Solutions', 'For growing business needs']];
                var PROC = [['search', 'Understand Your Needs', 'Assess business requirements and suggest the right solutions'], ['doc', 'Onboarding & KYC', 'Quick and compliant onboarding with minimal documentation'], ['gear', 'Integrate & Activate', 'Enable access to partner platforms and set up workflows'], ['send', 'Execute Transactions', 'Make collections, payments and manage FX/trade transactions'], ['chart', 'Monitor & Optimise', 'Track transactions, access reports and optimise costs'], ['users', 'Ongoing Support', 'Dedicated relationship management and continuous support']];
                var TECH = [['lock', 'Bank-grade Security', 'Data protection and secure infrastructure'], ['eye', 'Real-time Tracking', 'Transaction status and reporting dashboard'], ['gear', 'Automated Compliance', 'Digital documentation and workflow'], ['shield', 'RBI Compliant', 'Fully aligned with regulatory standards and guidelines']];
                var PPL = [['Jitender Arya', 'Director', '+91 98911 37307', 'jitenderarya@fxproservices.in'], ['Sparsh Aggarwal', 'Director', '+91 98116 31672', 'sparsh.aggarwal@fxproservices.in'], ['Sumity Chabbra', 'Head \u2013 Cross Border', '+91 98110 61769', 'sumity.chabbra@fxproservices.in']];
                function ib(i, w) {
                    return '<span class="ib">' + ico(i, w || 26) + '</span>'
                }
                var LOGO = {
                    Easebuzz: '/assets/img/b40c0b554c.png',
                    PayGlocal: '/assets/img/2b9ea00692.png',
                    Xflow: '/assets/img/9d5ad0d395.png'
                };
                var LC = {
                    Easebuzz: '#2B5BEA',
                    PayGlocal: '#2F66F0',
                    Xflow: '#111'
                };
                function stats() {
                    return '<div class="strip"><div class="w">' + STATS.map(function(x) {
                        return '<div class="sti"><b>' + x[1] + '</b><span>' + x[2] + '</span></div>'
                    }).join('') + '</div></div>'
                }
                function platforms() {
                    return '<div class="w sec">' + hd('Partner platforms', 'Authorised reseller of leading platforms.', 'FxPro is an authorised reseller and distribution partner of leading RBI-authorised cross-border and trade platforms, enabling us to offer a wide range of solutions under one roof.') + '<div style="margin-top:30px">' + PLAT.map(function(p) {
                        return '<div class="pr"><div><img class="lgi" src="' + LOGO[p[0]] + '" alt="' + p[0] + '"><p class="sub">Authorised Reseller &middot; ' + p[1] + '</p></div><div>' + ul(p[2]) + '<button type="button" class="mb">More features</button></div></div>'
                    }).join('') + '</div></div>'
                }
                function stabs() {
                    return '<div class="stab"><div class="stl" role="tablist">' + SERV.map(function(s, i) {
                        return '<button type="button" class="stb' + (i ? '' : ' on') + '" role="tab" data-id="' + s.id + '"><em>0' + (i + 1) + '</em>' + s.t + '</button>'
                    }).join('') + '</div><div>' + SERV.map(function(s, i) {
                        return '<div class="spn' + (i ? '' : ' on') + '" id="p-' + s.id + '">' + ib(SIC[s.id], 40) + '<h3>' + s.t + '</h3><p class="lead">' + s.d + '</p>' + ul(s.i) + '<div class="row" style="margin-top:24px"><a class="btn b1" href="/book-consultation/?s=' + s.id + '">Discuss this ' + ARW + '</a><a class="btn b2" href="/services/#' + s.id + '">Full details</a></div></div>'
                    }).join('') + '</div></div>'
                }
                function why() {
                    return '<div class="w sec">' + hd('Key differentiators', 'Why choose FxPro.', 'A combination of domain expertise, trusted partnerships and a client-first approach to deliver real value.') + '<div class="nl">' + DIFF.map(function(d, i) {
                        return '<div class="ni"><span class="nn">0' + (i + 1) + '</span><div><b>' + d[1] + '</b><p>' + d[2] + '</p></div></div>'
                    }).join('') + '</div></div>'
                }
                function benefits() {
                    return '<div class="bnd"><div class="w sec"><div class="bw"><div>' + hd('Key client benefits', 'Delivering measurable value.', 'Partner with FxPro to simplify international trade and treasury operations, reduce costs and gain greater control.') + '<div class="bfx"><div><small>No correspondent bank charges</small><strong>USD 15&ndash;50</strong><span>Saved per transaction</span></div><div><small>Lower FX costs</small><strong>Zero / low</strong><span>FX markup, with competitive &amp; transparent rates</span></div></div></div><div class="bl">' + BEN.slice(2).map(function(d) {
                        return '<div class="bli">' + ib(d[0], 28) + '<div><b>' + d[1] + '</b><p>' + d[2] + '</p></div></div>'
                    }).join('') + '</div></div></div></div>'
                }
                function process() {
                    return '<div class="dk2 dk3"><div class="w sec">' + hd('Our process', 'A simple and seamless process.', 'We ensure a smooth and transparent journey from onboarding to execution and ongoing support.') + '<div class="hs tm" style="margin-top:40px">' + PROC.map(function(x, n) {
                        return '<div class="ts"><div class="no">' + ico(x[0], 24) + '</div><b>' + (n + 1) + '. ' + x[1] + '</b><p>' + x[2] + '</p></div>'
                    }).join('') + '</div></div></div>'
                }
                function industries() {
                    return '<div class="w sec">' + hd('Industries we serve', 'Built for businesses that trade globally.', 'Our solutions cater to a wide range of businesses involved in international trade and global operations.') + '<div class="ig">' + IND.map(function(x) {
                        return '<span class="ch2">' + ib(x[0], 20) + x[1] + '</span>'
                    }).join('') + '</div></div>'
                }
                function tech() {
                    return '<div class="w sec">' + hd('Technology &amp; compliance', 'Secure. Compliant. Technology-enabled.', 'We leverage advanced technology and robust compliance frameworks to ensure secure, efficient and transparent operations.') + '<div class="tc">' + TECH.map(function(x) {
                        return '<div>' + ib(x[0], 30) + '<b>' + x[1] + '</b><p>' + x[2] + '</p></div>'
                    }).join('') + '</div></div>'
                }
                function aboutX() {
                    return tech() + industries()
                }
                var SOL = [{
                    id: 'inward',
                    k: 'A',
                    t: 'Inward Remittances',
                    s: 'Collecting money from abroad',
                    h: 'Receive Globally. Settle Efficiently. Stay Compliant.',
                    d: 'FxPro coordinates the operational lifecycle of eligible export receipts, from collection arrangements and transaction tracking to FX settlement coordination and regulatory documentation.',
                    f: [['Global Collection Infrastructure', 'Multi-currency virtual accounts and local collection rails in supported markets, subject to provider availability and eligibility.'], ['Optimised FX & INR Settlement', 'Competitive FX pricing, transparent settlement economics and access to eligible spot or forward contracts at agreed market-linked rates.'], ['Dedicated Merchant Dashboard', 'Transaction visibility, settlement status, reconciliation support and historical transaction information, where provided by the platform partner.'], ['Export Compliance Support', 'Support for purpose documentation, e-BRC follow-up, applicable export declarations and related regulatory closure workflows.']],
                    o: 'Better collection visibility, streamlined workflows and improved control over export receivables.',
                    n: 'Any \u201czero FX markup\u201d positioning applies only where it reflects the actual commercial terms of the relevant product. FX markup is distinct from the underlying exchange rate, conversion charges and other applicable fees. Real-time tracking is subject to platform capabilities.'
                }, {
                    id: 'outward-remittances',
                    k: 'B',
                    t: 'Outward Remittances',
                    s: 'Import payments and international fund transfers',
                    h: 'Smarter Import Payments. Controlled Costs. Stronger Compliance.',
                    d: 'FxPro coordinates international payment workflows, documentation, FX booking support, banking follow-ups and transaction closure.',
                    f: [['Transaction Outsourcing', 'Payment initiation coordination, documentation checks, bank follow-ups and payment status tracking.'], ['FX Booking & Hedging', 'Support with spot, forward and other eligible hedging arrangements through authorised counterparties.'], ['Merchanting Trade & High-Seas Sales (HSS)', 'Transaction structuring and documentation coordination, subject to applicable requirements.'], ['Trade Finance Support', 'Access facilitation for eligible import funding and working capital solutions.'], ['LC & Bank Guarantee Cost Management', 'Review of pricing, commissions, collateral requirements and alternative banking proposals.'], ['Foreign Currency Funding', 'Assessment and facilitation of eligible foreign-currency funding options, including advance-import funding where permitted.'], ['Delayed & Third-Party Payment Support', 'Assessment of delayed import payments and third-party payment arrangements against applicable regulatory and bank requirements.'], ['BOE\u2013ORM Closure Support', 'Reconciliation and follow-up for outstanding bills of entry and outward remittance records.']],
                    o: 'Better payment visibility, fewer fragmented follow-ups and more disciplined transaction management.'
                }, {
                    id: 'trade-finance',
                    k: 'C',
                    t: 'Trade Finance Solutions',
                    s: 'Structured funding, better banking coordination',
                    h: 'Capital Structured Around Your Trade Cycle.',
                    d: 'We help businesses evaluate eligible trade finance options, compare commercial terms and coordinate documentation and execution with lending institutions.',
                    l: ['Pre-Shipment Credit in Foreign Currency (PCFC)', 'Export Packing Credit (EPC)', 'Post-Shipment Export Finance', 'Buyer\u2019s Credit and Supplier\u2019s Credit, where permitted', 'Foreign Currency Demand Loan (FCDL)', 'Export Bill Discounting', 'Letter of Credit (LC) Structuring Support', 'Bank Guarantee (BG) Cost Optimisation', 'Working Capital & Trade Credit Advisory'],
                    n: 'Funding is subject to lender assessment, product eligibility and applicable regulations.'
                }, {
                    id: 'hedging',
                    k: 'D',
                    t: 'Hedging Solutions',
                    s: 'Better visibility over currency risk',
                    h: 'Turn Currency Risk Into Strategic Control.',
                    d: 'We support exposure assessment, rate comparison, forward booking coordination and reporting to help businesses manage foreign exchange risk more systematically.',
                    l: ['Foreign Exchange Exposure Assessment', 'Forward Contract Booking Support', 'Spot and Forward Rate Comparison', 'Hedge Planning and Exposure Mapping', 'Import and Export Payable/Receivable Matching', 'Hedge maturity and utilisation tracking', 'Currency Risk Reporting', 'FX Policy and Internal Control Framework'],
                    n: 'Hedging is executed through authorised counterparties.'
                }, {
                    id: 'regulatory',
                    k: 'E',
                    t: 'Regulatory Compliance',
                    s: 'Documentation, tracking and closure under one framework',
                    h: 'Complex Requirements. Structured Execution.',
                    d: 'We coordinate transaction documentation, maintain outstanding-item trackers and support timely follow-ups with banks and relevant authorised professionals.',
                    l: ['Export and Import Transaction Documentation', 'EDF/SOFTEX-Related Support, where applicable', 'e-BRC Follow-up and Reconciliation', 'Export Obligation and Realisation Tracking', 'Bill of Entry\u2013Outward Remittance (BOE\u2013ORM) Reconciliation', 'Outstanding Export and Import Transaction Monitoring', 'FIRA/FIRC Documentation Coordination, as applicable', 'FEMA/RBI Reporting and Closure Support', 'FDI and ODI Transaction Support', 'FC-GPR, FC-TRS, ECB and OPI Documentation Support, as applicable'],
                    n: 'Regulatory services are advisory, documentation, coordination or filing support, as appropriate to FxPro\u2019s authorisations and engagement scope. Statutory filings, certifications and regulated activities are undertaken by the relevant authorised parties.'
                }, {
                    id: 'capital-account',
                    k: 'F',
                    t: 'Capital Account Transactions',
                    s: 'Cross-border investments and borrowings',
                    h: 'Structuring Cross-Border Capital With Precision.',
                    d: 'We support eligible transaction documentation, reporting coordination and banking workflows associated with international investments and borrowings.',
                    l: ['Foreign Direct Investment (FDI)', 'Overseas Direct Investment (ODI)', 'Foreign Currency\u2013Gross Provisional Return (FC-GPR) filing support', 'Foreign Currency\u2013Transfer of Shares (FC-TRS) filing support', 'FCTRS / ESOP transactions', 'External Commercial Borrowings (ECB)', 'Overseas Portfolio Investment (OPI)', 'Cross-Border Equity and Debt Transaction Documentation', 'Capital Account Reporting and Regulatory Coordination'],
                    n: 'Statutory filings and certifications are undertaken by the relevant authorised parties.'
                }, {
                    id: 'treasury-funds',
                    k: 'G',
                    t: 'Corporate Treasury & Idle Funds',
                    s: 'Make business funds work smarter',
                    h: 'Make Your Business Funds Work Smarter.',
                    d: 'Funds lying idle in current accounts may be an opportunity to improve treasury efficiency without compromising operational liquidity. FxPro supports businesses in reviewing balances, mapping cash-flow requirements and identifying potential surplus funds.',
                    f: [['Idle Balance Assessment', 'Identify potential surplus balances across current accounts and banking relationships.'], ['Cash Flow & Liquidity Planning', 'Map operating expenses, vendor payments, statutory obligations and near-term funding requirements.'], ['Surplus Funds Identification', 'Distinguish operational balances from funds potentially available for short-term deployment.'], ['Liquid Mutual Fund Solutions', 'Facilitate access to suitable liquid mutual fund options through appropriately registered and authorised investment partners, subject to eligibility.'], ['Short-Term Treasury Planning', 'Evaluate liquidity requirements, investment horizons, access timelines and risk considerations.'], ['Investment & Liquidity Reporting', 'Support visibility over deployed funds, expected liquidity needs and portfolio information, subject to the agreed service scope.']],
                    n: 'Investment products are offered only through appropriately registered and authorised partners. Mutual fund investments are subject to market risks.'
                }];
                var EDGE = [['STRUCTURE', 'Design the right financial architecture.'], ['EXECUTE', 'Coordinate transactions with precision.'], ['PROTECT', 'Manage FX and financial risk.'], ['OPTIMISE', 'Improve cost, liquidity and working capital.'], ['COMPLY', 'Navigate regulatory and documentation requirements.']];
                var WHY = [['Cost Optimisation', 'Identify opportunities to reduce avoidable banking, foreign exchange and trade transaction costs.'], ['Operational Efficiency', 'Reduce manual follow-ups and fragmented banking workflows.'], ['Treasury Expertise', 'Improve visibility over currency exposure, funding requirements and transaction timing.'], ['Compliance Discipline', 'Support accurate documentation, reporting and regulatory closure processes.'], ['Integrated Execution Support', 'Coordinate across banking, trade, treasury and compliance requirements.'], ['Dedicated Relationship Management', 'A structured point of coordination for your banking and trade operations.']];
                var WHY2 = [['Specialist Expertise', 'Deep-domain knowledge across Trade, FX & Treasury.'], ['Independent Perspective', 'Solutions structured around the client\u2019s requirements.'], ['End-to-End Support', 'From structuring to execution and closure.'], ['Cost & Risk Focused', 'Designed to improve financial efficiency and control.'], ['Institutional Approach', 'Disciplined processes. Structured execution. Professional governance.']];
                var MODEL = [['Assess', 'Review existing banking relationships, transaction volumes, cost structures, workflows and compliance requirements.'], ['Structure', 'Define the scope of outsourcing, operating procedures, responsibilities, reporting formats and escalation matrix.'], ['Execute', 'Coordinate agreed transactions, documentation, bank follow-ups, funding workflows and treasury activities.'], ['Monitor', 'Track pending transactions, settlement status, outstanding documentation, transaction closures and agreed service metrics.'], ['Optimise', 'Conduct periodic reviews to identify cost efficiencies, process improvements and opportunities to strengthen banking arrangements.']];
                var ENG = [['Transaction-Based Support', 'For businesses requiring assistance with specific banking and trade transaction workflows.'], ['Monthly Outsourced Desk', 'For businesses seeking continuous support across defined trade operations, remittances, documentation and banking coordination.'], ['Integrated Trade & Treasury Desk', 'For businesses seeking a coordinated operating model covering cross-border transactions, trade finance, FX support and compliance workflows.'], ['Specialised Advisory & Review', 'For targeted assignments involving banking cost reviews, funding assessments, treasury processes and operational improvement.']];
                var SERVE = ['Importers and Exporters', 'International Trading Companies', 'IT/ITES and SaaS Businesses', 'Manufacturing and Industrial Enterprises', 'D2C and E-Commerce Exporters', 'Professional and Consulting Services', 'Businesses with Complex Trade Finance Requirements'];
                var SPEC = ['Local Payment Rails', 'EDF Tracking and Submission', 'Regulatory Pendency Closures', 'FX and Trade Product Structuring', 'International Payment Gateways', 'Working Capital Assessment', 'Capital Account Transaction Structuring'];
                var OUTS = ['Reduce dependence on fragmented internal follow-ups.', 'Improve visibility over banking and FX costs.', 'Maintain better control over outstanding transactions.', 'Strengthen documentation and reconciliation discipline.', 'Improve coordination across finance, treasury and banking teams.', 'Allow internal teams to focus on core business and strategic financial decisions.'];
                var ENQ = [['consultation', 'Book a consultation'], ['referral', 'Refer a business (FxPro Connect)'], ['proposal', 'Request a commercial proposal'], ['business', 'Business enquiry'], ['trade', 'Trade finance & treasury'], ['payments', 'Cross-border payments'], ['compliance', 'Regulatory & compliance support']];
                function hd(e, h, s) {
                    return '<div class="eb">' + e + '</div><h2 class="h2">' + h + '</h2>' + (s ? '<p class="lead" style="margin:16px 0 0">' + s + '</p>' : '')
                }
                function ul(a, c) {
                    return '<ul class="ul' + (c ? ' c2' : '') + '">' + a.map(function(x) {
                        return '<li>' + x + '</li>'
                    }).join('') + '</ul>'
                }
                function cta(t) {
                    return '<div class="cta"><div class="w"><div class="eb">' + (t || 'Get in touch') + '</div><h2 class="h2">Let\u2019s simplify your global trade.</h2><p class="lead" style="margin-top:16px">Partner with FxPro to optimise your international trade, FX and treasury operations.</p><div class="row"><a class="btn b1" href="/book-consultation/">Book a Consultation ' + ARW + '</a><a class="btn b2" href="/services/">Explore Our Services</a></div></div></div>'
                }
                function pil(n, t, d) {
                    return '<div class="pil">' + (n ? '<div class="num">' + n + '</div>' : '') + '<h3 class="h3">' + t + '</h3><p>' + d + '</p></div>'
                }
                function svc(s) {
                    return '<a class="sv" href="/services/#' + s.id + '"><div class="num">0' + (SERV.indexOf(s) + 1) + '</div><h3 class="h3">' + s.t + '</h3><p>' + s.d.split('. ')[0].replace(/\.$/, '') + '.</p><div class="go"><span>View scope</span>' + ARW + '</div></a>'
                }
                function ico(n, w) {
                    var P = {
                        user: '<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20c.8-4 4-6 7.5-6s6.7 2 7.5 6"/>',
                        briefcase: '<rect x="3.5" y="7.5" width="17" height="12" rx="2.2"/><path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3.5 13h17"/>',
                        network: '<circle cx="12" cy="5.5" r="2.4"/><circle cx="5.5" cy="18" r="2.4"/><circle cx="18.5" cy="18" r="2.4"/><path d="M10.9 7.6L6.6 15.9M13.1 7.6l4.3 8.3M8 18h8"/>',
                        lock: '<rect x="5" y="10.5" width="14" height="10" rx="2.2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5M12 14.5v2.5"/>',
                        doc: '<path d="M7 3.5h7l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9.5A1.5 1.5 0 0 1 5.5 20V5A1.5 1.5 0 0 1 7 3.5z"/><path d="M14 3.5V8h4M8.5 12.5h7M8.5 16h5"/>',
                        search: '<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5 5M8.2 12.8l4.6-4.6"/>',
                        globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.6 2.4 3.8 5.2 3.8 8.5s-1.2 6.1-3.8 8.5c-2.6-2.4-3.8-5.2-3.8-8.5S9.4 5.9 12 3.5z"/>',
                        shield: '<path d="M12 3.5l7 2.8v5.4c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6.3z"/><path d="M8.8 12l2.3 2.3 4.2-4.6"/>',
                        coins: '<ellipse cx="12" cy="6.5" rx="6.5" ry="2.8"/><path d="M5.5 6.5v5c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8v-5M5.5 11.5v5c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8v-5"/>',
                        send: '<path d="M5 19L19 5M9 5h10v10"/>',
                        refresh: '<path d="M20 11a8 8 0 0 0-14.5-4M4 13a8 8 0 0 0 14.5 4M5.5 3.5V7H9M18.5 20.5V17H15"/>',
                        users: '<circle cx="9" cy="8.5" r="3"/><circle cx="17" cy="9.5" r="2.4"/><path d="M3.5 19c.6-3.3 3-5 5.5-5s4.9 1.7 5.5 5M15 14.2c2.6-.3 4.8 1 5.5 4.3"/>',
                        chart: '<path d="M4 19.5h16M6 16l4-4 3 3 5-6"/>',
                        badge: '<circle cx="12" cy="9" r="5"/><path d="M9 13.5L8 20l4-2 4 2-1-6.5"/>',
                        spark: '<path d="M12 3.5l1.9 5.6 5.6 1.9-5.6 1.9L12 18.5l-1.9-5.6L4.5 11l5.6-1.9z"/>',
                        bank: '<path d="M3.5 9.5L12 4l8.5 5.5M5.5 10v7M10 10v7M14 10v7M18.5 10v7M3.5 20h17"/>',
                        pin: '<path d="M12 21s6.5-5.6 6.5-11a6.5 6.5 0 0 0-13 0c0 5.4 6.5 11 6.5 11z"/><circle cx="12" cy="10" r="2.4"/>',
                        gear: '<circle cx="12" cy="12" r="3"/><path d="M12 3.5v2.6M12 17.9v2.6M3.5 12h2.6M17.9 12h2.6M6 6l1.9 1.9M16.1 16.1L18 18M18 6l-1.9 1.9M7.9 16.1L6 18"/>',
                        bolt: '<path d="M13 3.5L6 13.5h5l-1 7 7-10h-5z"/>',
                        eye: '<path d="M2.8 12S6.2 6 12 6s9.2 6 9.2 6-3.4 6-9.2 6S2.8 12 2.8 12z"/><circle cx="12" cy="12" r="2.6"/>',
                        card: '<rect x="3" y="6" width="18" height="12.5" rx="2.4"/><path d="M3 10.5h18M7 15h3.5"/>',
                        code: '<path d="M8.5 8l-4 4 4 4M15.5 8l4 4-4 4M13.5 5.5l-3 13"/>',
                        cloud: '<path d="M7 18.5a4 4 0 0 1-.6-7.9 5.5 5.5 0 0 1 10.6 1.2A3.4 3.4 0 0 1 17 18.5z"/>',
                        box: '<path d="M12 3.5l8 4v9l-8 4-8-4v-9zM4 7.5l8 4 8-4M12 11.5v9"/>',
                        plane: '<path d="M3.5 13.5l17-8-5 14-3.5-5.5zM11.7 14L20.5 5.5"/>',
                        cap: '<path d="M2.5 9.5L12 5l9.5 4.5L12 14zM6.5 11.7v4.3c0 1.4 2.5 2.7 5.5 2.7s5.5-1.3 5.5-2.7v-4.3"/>',
                        factory: '<path d="M3.5 20.5v-8l5.5 3v-3l5.5 3v-8h4v13zM3.5 20.5h17"/>',
                        ship: '<path d="M3.5 14.5h17l-2 5h-13zM7.5 14.5v-4h9v4M12 10.5V5"/>',
                        chat: '<path d="M4.5 5.5h15v10.5h-8l-4 3.5V16h-3z"/>',
                        phone: '<path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2z"/>',
                        mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="2.2"/><path d="M4 7l8 6 8-6"/>',
                        wa: '<path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2.2-1-.9.9a4 4 0 0 1-2.2-2.2l.9-.9-1-2.2z"/>',
                        keypad: '<circle cx="6.5" cy="5" r="1.3"/><circle cx="12" cy="5" r="1.3"/><circle cx="17.5" cy="5" r="1.3"/><circle cx="6.5" cy="10.5" r="1.3"/><circle cx="12" cy="10.5" r="1.3"/><circle cx="17.5" cy="10.5" r="1.3"/><circle cx="6.5" cy="16" r="1.3"/><circle cx="12" cy="16" r="1.3"/><circle cx="17.5" cy="16" r="1.3"/><circle cx="12" cy="21" r="1.3"/>',
                        cal: '<rect x="3.5" y="5" width="17" height="15" rx="2.2"/><path d="M3.5 10h17M8 3.5v3M16 3.5v3"/>',
                        clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'
                    };
                    return '<svg viewBox="0 0 24 24" width="' + (w || 56) + '" height="' + (w || 56) + '" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[n] || '') + '</svg>'
                }
                var SIC = {
                    'collections': 'globe',
                    'trade-support': 'send',
                    'gateways': 'card',
                    'compliance': 'shield',
                    'fx': 'refresh',
                    'edf': 'doc',
                    'trade-finance': 'bank',
                    'capital': 'coins'
                };
                function svr(s) {
                    var im = s.img ? '<img src="' + s.img + '" alt="" loading="lazy">' : ico(SIC[s.id] || 'doc') + '<em>0' + (SERV.indexOf(s) + 1) + '</em>';
                    return '<a class="sr" href="/services/#' + s.id + '"><div class="sthumb">' + im + '</div><div class="sbody"><h3 class="h3">' + s.t + '</h3><p>' + s.d.split('. ')[0].replace(/\.$/, '') + '.</p></div></a>'
                }
                function conn(c) {
                    return '<div class="sr"><div class="sthumb">' + ico(c[4]) + '<em>' + c[0] + '</em></div><div class="sbody"><h3 class="h3">' + c[1] + '</h3><p class="sub">' + c[2] + '</p><p>' + c[3] + '</p></div></div>'
                }
                function sol(s) {
                    return '<a class="sv dk" href="/solutions/' + s.id + '/"><div class="num">0' + (SOL.indexOf(s) + 1) + '</div><h3 class="h3">' + s.t + '</h3><p>' + s.s + '.</p><div class="go"><span>Explore solution</span>' + ARW + '</div></a>'
                }
                                /* ===== v3 additions ===== */
                var GOOGLE_FORM_URL = ''; /* paste your Google Form link here (the normal "viewform" link) to embed it on the Contact page */
                var SOLI = {
                    'inward': 'globe',
                    'outward-remittances': 'send',
                    'trade-finance': 'bank',
                    'hedging': 'refresh',
                    'regulatory': 'shield',
                    'capital-account': 'coins',
                    'treasury-funds': 'chart'
                };
                function li(a) {
                    return a.map(function(x) {
                        return '<li>' + x + '</li>'
                    }).join('')
                }
                function explorer() {
                    return '<div class="xg" role="list">' + SERV.map(function(s, i) {
                        var first = s.d.split('. ')[0].replace(/\.$/, '') + '.';
                        var det = '<span class="xic lg">' + ico(SIC[s.id] || 'doc', 34) + '</span><div class="eb">Service 0' + (i + 1) + '</div><h3 class="xh">' + s.t + '</h3><p class="lead">' + s.d + '</p>' + ul(s.i) + (s.n ? '<div class="fn">' + s.n + '</div>' : '') + '<div class="row" style="margin-top:22px"><a class="btn b1" href="/book-consultation/?s=' + s.id + '">Discuss this ' + ARW + '</a><a class="btn b2" href="/services/#' + s.id + '">Full details</a></div>';
                        return '<article class="xc" role="listitem" tabindex="0" data-id="' + s.id + '" data-t="' + esc(s.t) + '" data-n="0' + (i + 1) + '" aria-label="' + esc(s.t) + ' - open details"><div class="xtop"><span class="xic">' + ico(SIC[s.id] || 'doc', 26) + '</span><span class="xn">0' + (i + 1) + '</span></div><h3>' + s.t + '</h3><p>' + first + '</p><ul class="xm">' + li(s.i.slice(0, 3)) + '</ul><span class="xgo">Explore<i>&#8599;</i></span><div class="xd" hidden>' + det + '</div></article>'
                    }).join('') + '</div>'
                }
                function pcard(p, i) {
                    var ini = p[0].split(' ').map(function(w) {
                        return w.charAt(0)
                    }).join('').slice(0, 2);
                    var num = p[2].replace(/[^\d+]/g, '');
                    var wa = num.replace('+', '');
                    var first = p[0].split(' ')[0];
                    var msg = encodeURIComponent('Hello ' + first + ', I would like to speak with FxPro about my trade, FX and treasury requirements.');
                    return '<article class="pcx"><div class="pav" aria-hidden="true"><span>' + ini + '</span></div><div class="pin"><b>' + p[0] + '</b><span>' + p[1] + '</span></div><div class="pact"><a class="pa wa" target="_blank" rel="noopener" href="https://wa.me/' + wa + '?text=' + msg + '">' + ico('wa', 18) + 'WhatsApp</a><a class="pa" href="tel:' + num + '">' + ico('phone', 18) + 'Call</a><button type="button" class="pa dial" data-num="' + num + '" data-name="' + esc(p[0]) + '">' + ico('keypad', 18) + 'Dial pad</button><a class="pa" href="mailto:' + p[3] + '?subject=' + encodeURIComponent('FxPro enquiry') + '">' + ico('mail', 18) + 'Email</a></div><div class="pdt"><a href="tel:' + num + '">' + ico('phone', 15) + p[2] + '</a><a href="mailto:' + p[3] + '">' + ico('mail', 15) + p[3] + '</a></div></article>'
                }
                function aboutProfile() {
                    return '<div class="w sec">' + hd('Company profile', 'FxPro at a glance.', 'A specialised trade and treasury partner, built around authorised platforms, banking connectivity and a client-first approach.') + '<div class="bento">' + '<div class="bx b-big"><div class="bxi">' + ico('bank', 30) + '</div><small>Who we are</small><h3>FxPro Services India Private Limited</h3><p>' + ABOUT + '</p><div class="bx-chips"><span>' + ico('pin', 16) + 'New Delhi, India</span><span>' + ico('globe', 16) + 'Pan India presence</span><span>' + ico('shield', 16) + 'RBI-authorised partner platforms</span></div></div>' + '<div class="bx b-seal"><div class="seal" aria-hidden="true"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" stroke-opacity=".35" stroke-dasharray="3 5"/><circle cx="60" cy="60" r="44" fill="none" stroke="currentColor" stroke-opacity=".6"/></svg>' + ico('badge', 40) + '</div><small>Authorised reseller</small><h3>Distribution partner of leading platforms</h3><div class="bx-logos">' + PLAT.map(function(p) {
                        return '<img src="' + LOGO[p[0]] + '" alt="' + p[0] + '">'
                    }).join('') + '</div></div>' + '<div class="bx"><div class="bxi">' + ico('network', 28) + '</div><small>Connectivity</small><h3>Multi-bank</h3><p>Banking-backed solutions and technology-enabled platforms under one roof.</p></div>' + '<div class="bx"><div class="bxi">' + ico('globe', 28) + '</div><small>Reach</small><h3><i data-c="25">25</i>+ currencies</h3><p>Local rails and SWIFT across 30+ countries.</p></div>' + '<div class="bx"><div class="bxi">' + ico('lock', 28) + '</div><small>Compliance</small><h3>RBI compliant</h3><p>Processes aligned with regulatory standards and guidelines.</p></div>' + '<div class="bx b-lead"><div class="bxi">' + ico('users', 28) + '</div><small>Leadership</small><h3>Hands-on directors</h3><div class="avs">' + PPL.map(function(p) {
                        return '<span title="' + esc(p[0]) + '">' + p[0].split(' ').map(function(w) {
                            return w.charAt(0)
                        }).join('').slice(0, 2) + '</span>'
                    }).join('') + '</div><a class="bx-a" href="/contact/">Meet the team ' + ARW + '</a></div>' + '</div></div>'
                }
                function dealership() {
                    return '<div class="dk2 dk3"><div class="w sec" id="dealership">' + hd('Authorised dealership', 'Authorised reseller &amp; distribution partner.', 'FxPro is an authorised reseller and distribution partner of leading RBI-authorised cross-border and trade platforms, enabling a wide range of solutions under one roof.') + '<div class="dl">' + PLAT.map(function(p, i) {
                        return '<article class="dc"><div class="dc-top"><span class="dc-stamp">' + ico('badge', 18) + 'Authorised Reseller</span><span class="dc-n">0' + (i + 1) + '</span></div><div class="dc-logo"><img src="' + LOGO[p[0]] + '" alt="' + p[0] + '"></div><p class="dc-sub">' + p[1] + '</p>' + ul(p[2]) + '<div class="dc-f"><span>' + ico('shield', 16) + 'Sold &amp; supported by FxPro</span></div></article>'
                    }).join('') + '</div></div></div>'
                }
                function leaders() {
                    return '<div class="w sec" id="leadership">' + hd('Leadership &amp; contacts', 'The people behind FxPro.', 'Reach our team directly by email, WhatsApp or phone.') + people() + '</div>'
                }
                function people() {
                    return '<div class="pcg">' + PPL.map(pcard).join('') + '</div>'
                }
                function reach() {
                    var L = CUR.concat([['+25', 'more currencies']]);
                    L = L.concat(L);
                    var ring = function(items, r, dur, cls) {
                        return '<div class="ring ' + (cls || '') + '" style="--r:' + r + 'px;--dur:' + dur + 's"><u></u>' + items.map(function(c, i) {
                            var a = Math.round(360 / items.length * i);
                            return '<i style="--a:' + a + 'deg"><s><b>' + c + '</b></s></i>'
                        }).join('') + '</div>'
                    };
                    return '<div class="dk2 rch"><div class="w sec"><div class="rg"><div>' + hd('Global reach &amp; currency coverage', 'Local rails in 25+ currencies.', 'Collect and make payments globally through local payment rails and SWIFT across 30+ countries.') + '<div class="rl">' + RAILS.map(function(r) {
                        return '<div><strong>' + r[0] + '</strong><span>' + r[1] + '</span><small>' + r[2] + '</small></div>'
                    }).join('') + '</div></div><div class="orb" aria-hidden="true"><div class="core">' + ico('globe', 46) + '<span>25+</span></div>' + ring(['USD', 'GBP', 'EUR', 'CAD'], 118, 40) + ring(['AED', 'AUD', 'SGD', 'JPY', 'CNY'], 196, 60, 'rev') + '</div></div><p class="note" style="margin:28px 0 14px;color:#8fa39d">Other key currencies via local rails / SWIFT</p></div><div class="mq"><div>' + L.map(function(c) {
                        return '<span class="cp"><b>' + c[0] + '</b>' + c[1] + '</span>'
                    }).join('') + '</div></div></div>'
                }
                function slist() {
                    return '<div class="w sec" style="padding-top:34px" id="sol-grid"><div class="xg sg" role="list">' + SOL.map(function(x, i) {
                        var pv = (x.f ? x.f.map(function(y) {
                            return y[0]
                        }) : x.l).slice(0, 3);
                        return '<a class="xc sl" role="listitem" href="/solutions/' + x.id + '/"><div class="xtop"><span class="xic">' + ico(SOLI[x.id] || 'spark', 26) + '</span><span class="xn">0' + (i + 1) + '</span></div><span class="xsc">' + x.s + '</span><h3>' + x.t + '</h3><p>' + x.h + '</p><ul class="xm">' + li(pv) + '</ul><span class="xgo">Explore solution<i>&#8599;</i></span></a>'
                    }).join('') + '</div></div>'
                }
                function contactV3(q) {
                    var d = D.createElement('div');
                    d.innerHTML = pages.contactOld(q);
                    var form = d.querySelector('#cf').outerHTML;
                    var po = PPL.map(function(p, i) {
                        return '<option value="' + i + '" data-wa="' + p[2].replace(/[^\d]/g, '') + '" data-mail="' + p[3] + '" data-first="' + p[0].split(' ')[0] + '">' + p[0] + ' – ' + p[1] + '</option>'
                    }).join('');
                    var eo = ENQ.map(function(e) {
                        return '<option value="' + e[1] + '">' + e[1] + '</option>'
                    }).join('');
                    var gf = GOOGLE_FORM_URL ? '<div class="gfw"><iframe src="' + GOOGLE_FORM_URL + (GOOGLE_FORM_URL.indexOf('?') > -1 ? '&' : '?') + 'embedded=true" title="FxPro consultation form" loading="lazy"></iframe></div><div class="row" style="margin-top:14px"><a class="btn b2" target="_blank" rel="noopener" href="' + GOOGLE_FORM_URL + '">Open the form in a new tab ' + ARW + '</a></div>' : '<div class="gfp"><span class="xic lg">' + ico('doc', 34) + '</span><h3 class="h3">Consultation request form</h3><p class="lead" style="margin:10px 0 18px">Prefer a Google Form? Your consultation form will appear here and responses will land straight in your Google Sheet.</p><span class="fn">[Google Form link: to be supplied. Paste it into GOOGLE_FORM_URL in the page code to embed it here.]</span></div>';
                    return '<div class="w ph"><div class="crumb"><a href="/">Home</a> / Contact</div>' + hd('Contact &amp; book a consultation', 'Let’s simplify your global trade.', 'Partner with FxPro to optimise your international trade, FX and treasury operations. Speak to our team directly or send us an enquiry.') + '</div>' + '<div class="w sec" style="padding-top:40px" id="talk"><div class="eb" style="margin-bottom:18px">Talk to a person</div>' + people() + '</div>' + '<div class="w sec" id="book"><div class="two ctw"><div class="card cx" id="fc"><div class="ctabs" role="tablist"><button type="button" class="ct on" role="tab" data-t="p-enq">' + ico('chat', 18) + 'Quick enquiry</button><button type="button" class="ct" role="tab" data-t="p-sch">' + ico('cal', 18) + 'Schedule a call</button><button type="button" class="ct" role="tab" data-t="p-gf">' + ico('doc', 18) + 'Google Form</button></div><div class="cb" style="padding:28px">' + '<div class="cpn on" id="p-enq"><h3 class="h3" style="font-size:26px;margin-bottom:18px">Speak to FxPro</h3>' + form + '</div>' + '<div class="cpn" id="p-sch"><h3 class="h3" style="font-size:26px;margin-bottom:6px">Schedule a call</h3><p class="note" style="margin:0 0 18px">Choose who you want to speak with and when. We’ll confirm your slot on WhatsApp or email.</p><form class="form" id="sf" novalidate><label class="fld">Speak with<select class="in" id="sw">' + po + '</select></label><div class="f2"><label class="fld">Preferred date<input class="in" type="date" id="sd"></label><label class="fld">Preferred time (IST)<select class="in" id="st"><option>10:00 – 12:00</option><option>12:00 – 15:00</option><option>15:00 – 18:00</option></select></label></div><div class="f2"><label class="fld">Your name<input class="in" id="sn" autocomplete="name"></label><label class="fld">Company<input class="in" id="sc" autocomplete="organization"></label></div><label class="fld">Topic<select class="in" id="sq">' + eo + '</select></label><div class="row"><a class="btn b1" id="swa" target="_blank" rel="noopener" href="#">' + ico('wa', 18) + ' Request on WhatsApp</a><a class="btn b2" id="sml" href="#">' + ico('mail', 18) + ' Request by email</a></div></form></div>' + '<div class="cpn" id="p-gf">' + gf + '</div>' + '</div></div>' + '<aside class="cside"><div class="pil"><div class="num">What to expect</div><ol class="cst"><li><b>Share your requirement</b><span>Corridors, volumes and your current banking set-up.</span></li><li><b>Discovery call</b><span>We map the right platforms and solutions for you.</span></li><li><b>Tailored proposal</b><span>Scope, deliverables and commercials, clearly defined.</span></li></ol></div><div class="pil"><div class="num">Helpful to have ready</div><ul class="ul"><li>Type of business and sector</li><li>Countries and currencies you trade in</li><li>Approximate monthly transaction volume</li><li>Current banks and any pain points</li></ul></div><div class="pil"><div class="num">Find us</div><p style="display:flex;gap:10px;align-items:flex-start">' + ico('pin', 22) + '<span>New Delhi, India<br>www.fxproservices.in</span></p></div></aside></div></div>' + cta()
                }

                window.FXPPL = PPL;
                var pages = {
                    home: function() {
                        return '<div class="herow"><div class="blob b-a"></div><div class="blob b-b"></div><div class="w"><div class="hero hx"><div><div class="eb">Simplifying international trade</div><h1 class="h1">Your Strategic Partner for <span class="em">Global Trade</span> and <span class="em">Treasury Solutions</span></h1><p class="lead">Enabling businesses to trade across borders with confidence: payments, FX, trade finance, compliance and treasury under one roof.</p><div class="row"><a class="btn b1" href="/book-consultation/">Book a Consultation ' + ARW + '</a><a class="btn b2" href="/services/">Explore Our Services</a></div><div class="pills"><span>Seamless</span><span>Compliant</span><span>Cost-efficient</span><span>Scalable</span></div></div></div></div></div>' + stats() + '<div class="w sec"><div class="two"><div>' + hd('Company profile', 'About FxPro', ABOUT) + '<div class="row" style="margin-top:20px"><a class="btn b2" href="/about/">More about us ' + ARW + '</a></div></div><div class="pls">' + PIL.map(function(p) {
                            return '<div class="pl">' + ib(p[0], 30) + p[1] + '</div>'
                        }).join('') + '</div></div></div>' + platforms() + '<div class="w sec" id="home-services">' + hd('Our services', 'Comprehensive trade, FX &amp; treasury solutions.', 'End-to-end solutions customised to your business needs. Tap any card to explore what is included.') + '<div style="margin-top:34px">' + explorer() + '</div><div class="row" style="margin-top:28px"><a class="btn b2" href="/services/">All services ' + ARW + '</a></div></div>' + why() + reach() + benefits() + process() + industries() + tech() + '<div class="w sec"><div class="card"><div class="ch"><span>FxPro Connect</span><span class="tag">REFERRAL PROGRAMME</span></div><div class="cb"><h3 class="h3">Refer Opportunities. Create Value. Share Success.</h3><p class="lead" style="margin:10px 0 18px">Know a business that needs better trade, FX or treasury solutions? Introduce it, and FxPro manages the engagement.</p><div class="row"><a class="btn b1" href="/partners/">Explore FxPro Connect ' + ARW + '</a></div></div></div></div>' + cta()
                    },
                    about: function() {
                        var AI = ['search', 'doc', 'gear', 'chart', 'refresh'];
                        return '<div class="w ph"><div class="crumb"><a href="/">Home</a> / About</div><div class="eb">About FxPro</div><div class="abh"><h1 class="h1">A specialised partner for <span class="em">global trade</span> and treasury.</h1><p class="lead">' + ABOUT + '</p></div></div>' + '<div style="margin-top:48px">' + stats() + '</div>' + aboutProfile() + dealership() + '<div class="w sec"><div class="pg4">' + PIL.map(function(p) {
                            return '<div>' + ib(p[0], 34) + p[1] + '</div>'
                        }).join('') + '</div></div>' + '<div class="w sec"><div class="two"><div>' + hd('Who we are', 'Your strategic outsourcing partner.') + '<p class="lead" style="margin-top:18px">Managing international trade involves more than sending and receiving money. It requires continuous coordination across banks, foreign exchange, trade finance, transaction documentation, regulatory reporting and payment settlements. FxPro offers a structured outsourcing model that brings these activities under a coordinated operating framework.</p><p class="lead">We work alongside business owners, CFOs and finance teams to manage defined banking and trade-related workflows, improve operational efficiency and reduce the burden of day-to-day follow-ups.</p></div><div><div class="eb">Specialised solutions</div><div class="ig">' + SPEC.map(function(x) {
                            return '<span class="ch2">' + ib('spark', 18) + x + '</span>'
                        }).join('') + '</div></div></div></div>' + '<div class="dk2"><div class="w sec">' + hd('The FxPro edge', 'Five principles behind every engagement.') + '<div class="eg">' + EDGE.map(function(e) {
                            return '<div><b>' + e[0] + '</b><p>' + e[1] + '</p></div>'
                        }).join('') + '</div></div></div>' + '<div class="w sec">' + hd('Why choose FxPro', 'Specialist, independent and institutional.') + '<div class="nl">' + WHY2.map(function(w, i) {
                            return '<div class="ni"><span class="nn">0' + (i + 1) + '</span><div><b>' + w[0] + '</b><p>' + w[1] + '</p></div></div>'
                        }).join('') + '</div></div>' + '<div class="w sec"><div class="two"><div>' + hd('Why outsource', 'Bring structure to the operational side of international business.', 'International transactions can create a fragmented operating environment when collections, payments, funding, FX and compliance are managed independently. A structured outsourcing arrangement can help your business:') + '</div><div>' + ul(OUTS).replace('class="ul"', 'class="ul hl"') + '</div></div></div>' + '<div class="w sec">' + hd('How we work', 'Assess. Structure. Execute. Monitor. Optimise.') + '<div class="hs tm tm5" style="margin-top:40px">' + MODEL.map(function(m, i) {
                            return '<div class="ts"><div class="no">' + ico(AI[i], 24) + '</div><b>' + (i + 1) + '. ' + m[0] + '</b><p>' + m[1] + '</p></div>'
                        }).join('') + '</div></div>' + leaders() + cta()
                    },
                    services: function() {
                        return '<div class="w ph"><div class="crumb"><a href="/">Home</a> / Services</div>' + hd('Services', 'Comprehensive trade, FX &amp; treasury solutions.', 'End-to-end solutions customised to your business needs.') + '</div><div class="w sec" style="padding-top:34px" id="svc-explore">' + explorer() + '</div><div class="w sec" id="svc-details" style="padding-top:70px">' + hd('Full details', 'Everything each service covers.', 'Open any service to see its scope, inclusions and next steps.') + '<div class="acc" style="margin-top:30px">' + SERV.map(function(s, i) {
                            return '<div class="ar' + (i ? '' : ' open') + '" id="' + s.id + '"><button type="button" class="ah" aria-expanded="' + (i ? 'false' : 'true') + '"><span class="an">0' + (i + 1) + '</span><span class="at">' + s.t + '<small>' + s.d + '</small></span><span class="ap"></span></button><div class="ab"><div><div class="abi"><div><p class="lead mdp">' + s.d + '</p>' + (s.n ? '<div class="fn">' + s.n + '</div>' : '') + '<div class="row" style="margin-top:20px"><a class="btn b1" href="/book-consultation/?s=' + s.id + '">Discuss this ' + ARW + '</a></div></div><div>' + ul(s.i) + '</div></div></div></div></div>'
                        }).join('') + '</div></div>' + platforms() + cta()
                    },
                    solutions: function() {
                        return '<div class="w ph"><div class="crumb"><a href="/">Home</a> / Solutions</div><div class="eb">Solutions</div><div class="abh"><h1 class="h1">What FxPro delivers, <span class="em">scenario by scenario.</span></h1><p class="lead">Where Services describe how we support you, Solutions describe what we deliver: for collections, payments, funding, hedging, compliance and capital transactions.</p></div></div>' + slist() + cta()
                    },
                    detail: function(id) {
                        var s = SOL.filter(function(x) {
                            return x.id === id
                        })[0];
                        if (!s)
                            return pages.solutions();
                        var i = SOL.indexOf(s)
                          , nx = SOL[(i + 1) % SOL.length]
                          , pv = SOL[(i + SOL.length - 1) % SOL.length];
                        return '<div class="w ph"><div class="crumb"><a href="/">Home</a> / <a href="/solutions/">Solutions</a> / ' + s.t + '</div><div class="eb">Solution &middot; ' + s.s + '</div><div class="abh"><div><h1 class="h1" style="font-size:clamp(32px,4.8vw,60px)">' + s.t + '</h1><p style="font-size:clamp(20px,2.4vw,28px);font-weight:600;letter-spacing:-.01em;margin:0;color:var(--tx)">' + s.h + '</p></div><div><p class="lead">' + s.d + '</p><div class="row"><a class="btn b1" href="/book-consultation/?sol=' + s.id + '">Book a Consultation ' + ARW + '</a></div></div></div></div>' + (s.f ? '<div class="w sec">' + hd('What you get', s.t) + '<div class="nl">' + s.f.map(function(f, j) {
                            return '<div class="ni"><span class="nn">0' + (j + 1) + '</span><div><b>' + f[0] + '</b><p>' + f[1] + '</p></div></div>'
                        }).join('') + '</div></div>' : '<div class="w sec"><div class="two"><div>' + hd('What it covers', s.t) + '</div><div>' + ul(s.l).replace('class="ul"', 'class="ul hl"') + '</div></div></div>') + (s.o ? '<div class="w sec"><div class="eb" style="margin-bottom:14px">The outcome</div><blockquote class="pq">' + s.o + '</blockquote></div>' : '') + (s.n ? '<div class="w sec"><div class="fn">' + s.n + '</div></div>' : '') + '<div class="w sec"><div class="pn"><a href="/solutions/' + pv.id + '/"><small>&larr; Previous</small><b>' + pv.t + '</b></a><a href="/solutions/' + nx.id + '/"><small>Next &rarr;</small><b>' + nx.t + '</b></a></div></div>' + cta()
                    },
                    connect: function() {
                        var P = [['01', 'FxPro Associate', 'Independent professionals and business contacts', 'Refer companies that need FX optimisation, export-import support, trade finance or treasury services. Earn approved referral rewards for qualifying business.', 'user'], ['02', 'FxPro Professional Partner', 'Eligible CAs, consultants and trade professionals', 'Develop a structured referral relationship with lead registration, defined commercial terms and periodic performance reviews.', 'briefcase'], ['03', 'FxPro Strategic Partner', 'Eligible agencies, business networks and advisory firms', 'Build a continuing pipeline through formal partnerships, industry associations, business communities and approved co-marketing.', 'network'], ['04', 'FxPro Confidential Lead Network', 'People who prefer not to be publicly associated with a referral', 'Submit a business lead discreetly. Initial lead intelligence can be accepted without an identity, but it is unpaid until a lawful, eligible and verifiable referral arrangement is established. This is not a channel for concealed commissions to bank employees.', 'lock']];
                        var J = [['Spot an opportunity', 'An eligible partner identifies a business that may benefit from FxPro.'], ['Register the lead', 'Submit the company name, public website and broad requirement using a secure form or unique referral link.'], ['FxPro takes ownership', 'The sales team validates the lead, checks existing relationships and manages all prospect communication.'], ['Track the outcome', 'The partner sees progress through a private reference number without accessing confidential client details.'], ['Receive the reward', 'Once the client generates eligible revenue and all verification, documentation and payment conditions are met, the reward is calculated and paid on the agreed cycle.']];
                        var WJ = [['coins', 'Earn attractive rewards on eligible business you introduce.'], ['refresh', 'Benefit from recurring revenue-linked rewards under approved terms.'], ['users', 'Let FxPro manage the sales process and client engagement.'], ['chart', 'Track registered referrals through a structured process.'], ['badge', 'Build a long-term commercial relationship with a specialist trade and treasury solutions partner.']];
                        var FL = [['network', 'Refer Opportunities'], ['spark', 'Create Value'], ['coins', 'Share Success']];
                        var CI = ['search', 'doc', 'shield', 'chart', 'coins'];
                        return '<div class="w ph"><div class="crumb"><a href="/">Home</a> / Connect</div><div class="eb">Introducing FxPro Connect</div><div class="abh"><h1 class="h1">Refer Opportunities. Create Value. <span class="em">Share Success.</span></h1><div><p class="lead"><b style="color:var(--ink)">Every business has financial opportunities. Many simply need the right connection.</b></p><p class="lead">FxPro Connect is a business referral programme designed for eligible professionals, consultants, business associates and strategic partners who know companies looking to optimise their FX costs, cross-border transactions, trade finance, regulatory documentation and treasury operations.</p><div class="row"><a class="btn b1" href="/contact/?t=referral">Register a lead ' + ARW + '</a><a class="btn b2" href="/partners/#categories">Partner categories</a></div></div></div></div><div style="margin-top:48px"><div class="strip"><div class="w">' + [['Simple', 'Referrals'], ['Transparent', 'Rewards'], ['Private', 'Source handling'], ['Recurring', 'Potential']].map(function(x) {
                            return '<div class="sti"><b>' + x[0] + '</b><span>' + x[1] + '</span></div>'
                        }).join('') + '</div></div></div>' + '<div class="dk2"><div class="w sec">' + hd('The promise', 'Introduce a business. FxPro does the rest.', 'Introduce a business that needs better trade, FX or treasury solutions. FxPro manages the engagement, and eligible referral partners can earn rewards linked to the business they help generate.') + '<div class="eg eg3"><div><b>Refer Opportunities</b><p>You open the door.</p></div><div><b>Create Value</b><p>FxPro builds the relationship.</p></div><div><b>Share Success</b><p>You share in the success.</p></div></div></div></div>' + '<div class="w sec"><div class="bw"><div>' + hd('Why join', 'Why join FxPro Connect?') + '</div><div class="bl">' + WJ.map(function(w) {
                            return '<div class="bli">' + ib(w[0], 28) + '<div><b style="font-weight:500">' + w[1] + '</b></div></div>'
                        }).join('') + '</div></div></div>' + '<div class="w sec" id="categories">' + hd('Partner categories', 'The four partner categories.') + '<div class="nl">' + P.map(function(p, n) {
                            return '<div class="ni"><span class="nn">0' + (n + 1) + '</span><div><b>' + p[1] + '</b><p style="color:var(--tx);font-weight:500;margin-bottom:6px">' + p[2] + '</p><p>' + p[3] + '</p></div></div>'
                        }).join('') + '</div></div>' + '<div class="w sec">' + hd('How it works', 'Referring takes less than a minute.') + '<div class="hs tm tm5" style="margin-top:40px">' + J.map(function(m, n) {
                            return '<div class="ts"><div class="no">' + ico(CI[n], 24) + '</div><b>' + (n + 1) + '. ' + m[0] + '</b><p>' + m[1] + '</p></div>'
                        }).join('') + '</div><div class="fn" style="margin-top:34px">All rewards are subject to eligibility, written terms, applicable law, professional obligations and compliance approval. Confidentiality does not override employer policies or legal disclosure requirements.</div></div>' + '<div class="cta"><div class="w"><div class="eb">Join the network</div><h2 class="h2">Turn valuable business connections into meaningful commercial opportunities.</h2><p class="lead" style="margin-top:16px">Join the FxPro Connect network and let FxPro manage the sales process and client engagement.</p><div class="row"><a class="btn b1" href="/contact/?t=referral">Register a lead ' + ARW + '</a><a class="btn b2" href="/book-consultation/">Talk to us</a></div></div></div>'
                    },
                    pricing: function() {
                        return '<div class="w ph"><div class="crumb"><a href="/">Home</a> / Pricing</div><div class="eb">Pricing</div><div class="abh"><h1 class="h1">Transparent Pricing. Defined Deliverables. <span class="em">Measurable Value.</span></h1><p class="lead">Every business has a different transaction profile, banking structure and funding requirement. FxPro offers engagement models aligned with the scope and complexity of your requirements.</p></div></div><div class="w sec" style="padding-top:48px"><div class="eb" style="margin-bottom:18px">Engagement models</div><div>' + ENG.map(function(e, i) {
                            return '<div class="mr"><span class="nn">0' + (i + 1) + '</span><div><h3>' + e[0] + '</h3><p>' + e[1] + '</p></div><a class="btn b2" href="/contact/?t=proposal&m=' + i + '">Choose this model ' + ARW + '</a></div>'
                        }).join('') + '</div><p class="lead" style="margin-top:28px;max-width:760px">Our commercials are structured around agreed scope, transaction complexity, service levels and deliverables.</p><div class="row"><a class="btn b1" href="/contact/?t=proposal">Request a Commercial Proposal ' + ARW + '</a></div></div><div class="w sec">' + hd('What shapes a proposal', 'Scope in, price out.') + '<div class="pg4" style="margin-top:34px">' + [['Scope', 'The workflows and services you want us to coordinate.'], ['Complexity', 'Transaction volumes, corridors, banks and documentation involved.'], ['Service levels', 'Turnaround, reporting and escalation you need.'], ['Deliverables', 'Defined outputs, trackers and MIS you receive.']].map(function(p, i) {
                            return '<div><span class="nn">0' + (i + 1) + '</span><div>' + p[0] + '<p style="font:400 15px/1.5 Inter,sans-serif;color:var(--mut);margin:6px 0 0">' + p[1] + '</p></div></div>'
                        }).join('') + '</div></div>' + cta('Pricing')
                    },
                    legal: function(title, intro, secs) {
                        return '<div class="w ph"><div class="crumb"><a href="/">Home</a> / ' + title + '</div>' + hd('Legal', title, intro) + '</div><div class="w lg-sec" style="padding-top:20px;padding-bottom:20px">' + secs.map(function(s) {
                            return '<h2>' + s[0] + '</h2><p>' + s[1] + '</p>'
                        }).join('') + '</div>' + cta()
                    },
                    privacy: function() {
                        return pages.legal('Privacy policy', '[The full privacy policy is to be supplied by the company\u2019s legal team before launch. The structure below shows where each part will sit.]', [['Information we collect', '[To be supplied by legal.]'], ['How we use information', '[To be supplied by legal.]'], ['Sharing with banks, partners and authorised parties', '[To be supplied by legal.]'], ['Retention and security', '[To be supplied by legal.]'], ['Your choices and rights', '[To be supplied by legal.]'], ['Contact', '[Email and registered office: to be supplied.]']])
                    },
                    terms: function() {
                        return pages.legal('Terms of use', '[The full terms are to be supplied by the company\u2019s legal team before launch.]', [['Use of this website', '[To be supplied by legal.]'], ['Services and engagement terms', 'Engagements are based on an agreed scope, service levels and deliverables. [Full terms: to be supplied by legal.]'], ['Intellectual property', '[To be supplied by legal.]'], ['Limitation of liability', '[To be supplied by legal.]'], ['Governing law', '[To be supplied by legal.]']])
                    },
                    disclaimer: function() {
                        return pages.legal('Disclaimer', 'Please read this alongside the information on each service and solution page.', [['Advisory and coordination', 'All regulatory services are advisory, documentation, coordination or filing support, as appropriate to FxPro\u2019s authorisations and engagement scope. Statutory filings, certifications and regulated activities are undertaken by the relevant authorised parties.'], ['Funding', 'Funding is subject to lender assessment, product eligibility and applicable regulations.'], ['Foreign exchange and hedging', 'Hedging is executed through authorised counterparties. FX markup is distinct from the underlying exchange rate, conversion charges and other applicable fees. Platform features such as real-time tracking are subject to the capabilities of the platform partner.'], ['Investment products', 'Investment products are offered only through appropriately registered and authorised partners. Mutual fund investments are subject to market risks.'], ['Regulatory status', '[Regulatory status and risk disclosures: to be supplied by compliance before launch.]']])
                    },
                    notfound: function() {
                        return '<div class="w ph" style="text-align:center;padding:100px 24px 0"><div class="eb">404</div><h1 class="h1" style="max-width:760px;margin-left:auto;margin-right:auto">This page has moved or does not exist.</h1><div class="row" style="justify-content:center;margin-top:10px"><a class="btn b1" href="/">Back to home</a><a class="btn b2" href="/contact/">Contact us</a></div></div>' + cta()
                    },
                    contact: function(q) {
                        return contactV3(q)
                    },
                    contactOld: function(q) {
                        var t = q.t || 'consultation';
                        return '<div class="w ph"><div class="crumb"><a href="/">Home</a> / Contact</div></div><div class="w" style="padding-top:6px"><div class="two"><div>' + hd('Contact &amp; book a consultation', 'Let\u2019s simplify your global trade.', 'Partner with FxPro to optimise your international trade, FX and treasury operations. Speak to our team directly or send us an enquiry.') + people() + '</div><div class="card" id="fc"><div class="cb" style="padding:28px"><h3 class="h3" style="font-size:26px;margin-bottom:18px">Speak to FxPro</h3><form class="form" id="cf" novalidate><label class="fld">I would like to<select class="in" name="type">' + ENQ.map(function(e) {
                            return '<option value="' + e[0] + '"' + (e[0] === t ? ' selected' : '') + '>' + e[1] + '</option>'
                        }).join('') + '</select></label><div class="f2"><label class="fld">Full name<input class="in" name="name" autocomplete="name"><span class="err"></span></label><label class="fld">Business email<input class="in" name="email" type="email" autocomplete="email"><span class="err"></span></label></div><div class="f2"><label class="fld">Company<input class="in" name="company" autocomplete="organization"><span class="err"></span></label><label class="fld">Phone (optional)<input class="in" name="phone" type="tel" autocomplete="tel"></label></div><label class="fld">Tell us about your requirement<textarea class="in" name="msg" rows="4" placeholder="Type of transactions, corridors, current banking arrangements\u2026">' + esc(prefill(q)) + '</textarea></label><label style="font-size:13px;color:var(--mut);display:flex;gap:10px;align-items:flex-start"><input type="checkbox" name="ok" style="margin-top:3px"> <span>I agree to be contacted about my enquiry. [Consent text and privacy link: to be supplied by legal.]</span></label><span class="err" id="cerr"></span><button class="btn b1" type="submit">Send enquiry ' + ARW + '</button></form></div></div></div></div>' + cta()
                    }
                };
                function foot() {
                    return '<div class="w"><div class="fc"><div><a class="brand" href="/" style="margin-bottom:14px">' + mark() + '<span class="lg">f<i>x</i>pro</span></a><div style="max-width:300px">Simplifying International Trade.</div><div class="sg" style="margin-top:14px;font-size:11px;letter-spacing:.24em;font-weight:500;color:var(--tx)">FX | TRADE | BANKING | TREASURY | COMPLIANCE</div></div><div><h4>Services</h4>' + SERV.map(function(s) {
                        return '<a href="/services/#' + s.id + '">' + s.t + '</a>'
                    }).join('') + '</div><div><h4>Solutions</h4>' + SOL.map(function(s) {
                        return '<a href="/solutions/' + s.id + '/">' + s.t + '</a>'
                    }).join('') + '</div><div><h4>Company</h4><a href="/about/">About</a><a href="/partners/">FxPro Connect</a><a href="/pricing/">Pricing</a><a href="/contact/">Contact &amp; Book a Consultation</a><span style="display:block;margin-top:12px">New Delhi, India<br>www.fxproservices.in</span></div></div><div class="lgl">FxPro Services India Private Limited [CIN and registered office address to be supplied]. All regulatory services are advisory, documentation, coordination or filing support, as appropriate to FxPro\u2019s authorisations and engagement scope. Statutory filings, certifications and regulated activities are undertaken by the relevant authorised parties. Funding is subject to lender assessment, product eligibility and applicable regulations. Hedging is executed through authorised counterparties. [Regulatory status and risk disclosures: to be supplied by compliance before launch.]<br>\u00a9 2026 FxPro. All rights reserved. <a href="/privacy/">Privacy policy</a> \u00b7 <a href="/terms/">Terms</a> \u00b7 <a href="/disclaimer/">Disclaimer</a></div></div>'
                }
                function summary(d) {
                    var e = ENQ.filter(function(x) {
                        return x[0] === d.type
                    })[0];
                    return 'FxPro enquiry\nType: ' + (e ? e[1] : d.type) + '\nName: ' + d.name + '\nCompany: ' + d.company + '\nEmail: ' + d.email + (d.phone ? '\nPhone: ' + d.phone : '') + (d.msg ? '\nRequirement: ' + d.msg : '')
                }
                function prefill(q) {
                    var o = [];
                    if (q.m != null && ENG[+q.m])
                        o.push('Engagement model: ' + ENG[+q.m][0]);
                    if (q.s) {
                        var s = SERV.filter(function(x) {
                            return x.id === q.s
                        })[0];
                        if (s)
                            o.push('Service: ' + s.t)
                    }
                    if (q.sol) {
                        var l = SOL.filter(function(x) {
                            return x.id === q.sol
                        })[0];
                        if (l)
                            o.push('Solution: ' + l.t)
                    }
                    if (q.sec)
                        o.push('Sector: ' + q.sec);
                    return o.length ? o.join('\n') + '\n\n' : ''
                }
                function send(d, btn, done) {
                    if (!FORM_ENDPOINT) {
                        setTimeout(done, RM ? 0 : 900);
                        return
                    }
                    var fail = function() {
                        btn.classList.remove('ld');
                        btn.innerHTML = 'Send enquiry ' + ARW;
                        var ce = $('#cerr');
                        if (ce)
                            ce.textContent = 'Sorry, we could not send your enquiry. Please try again in a moment.'
                    };
                    try {
                        fetch(FORM_ENDPOINT, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            },
                            body: JSON.stringify(d)
                        }).then(function(r) {
                            if (r.ok)
                                done();
                            else
                                fail()
                        }, fail)
                    } catch (x) {
                        fail()
                    }
                }
                function initForm() {
                    var f = $('#cf');
                    if (!f)
                        return;
                    function chk(n) {
                        var i = f.elements[n]
                          , v = i.value.trim()
                          , m = '';
                        if (n === 'name' && !v)
                            m = 'Please enter your name.';
                        if (n === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
                            m = 'Please enter a valid email.';
                        if (n === 'company' && !v)
                            m = 'Please enter your company.';
                        var s = i.parentNode.querySelector('.err');
                        i.classList.toggle('bad', !!m);
                        if (s)
                            s.textContent = m;
                        return !m
                    }
                    ['name', 'email', 'company'].forEach(function(n) {
                        f.elements[n].addEventListener('blur', function() {
                            chk(n)
                        });
                        f.elements[n].addEventListener('input', function() {
                            if (f.elements[n].classList.contains('bad'))
                                chk(n)
                        })
                    });
                    f.addEventListener('submit', function(e) {
                        e.preventDefault();
                        var ok = ['name', 'email', 'company'].map(chk).every(Boolean);
                        var ce = $('#cerr');
                        ce.textContent = '';
                        if (!f.elements.ok.checked) {
                            ce.textContent = 'Please tick the consent box to continue.';
                            ok = false
                        }
                        if (!ok) {
                            var first = f.querySelector('.bad') || f.elements.ok;
                            first.focus();
                            return
                        }
                        var d = {};
                        ['type', 'name', 'email', 'company', 'phone', 'msg'].forEach(function(k) {
                            d[k] = f.elements[k].value.trim()
                        });
                        var btn = f.querySelector('button[type=submit]');
                        btn.classList.add('ld');
                        btn.innerHTML = '<span class="spin"></span> Sending';
                        var finish = function() {
                            var txt = summary(d);
                            $('#fc').innerHTML = '<div class="cb" style="padding:28px"><div class="ok" role="status"><svg class="ck" width="48" height="48" viewBox="0 0 44 44"><circle cx="22" cy="22" r="20" fill="none" stroke="#6DB8AB" stroke-width="3"/><path d="M13 23l6 6 12-13" fill="none" stroke="#2C6A60" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg><h3 class="h3" style="font-size:26px;margin-bottom:6px">Thank you, ' + esc(d.name) + '.</h3><p style="margin:0;color:var(--mut)">' + (FORM_ENDPOINT ? 'Your enquiry has been sent to the FxPro team. A copy of the summary is below for your records.' : 'Your enquiry is captured below. In the live site it goes to the FxPro team; in this prototype nothing is sent yet.') + '</p></div><div class="pre" id="sm"></div><div class="row"><a class="btn b1" id="mail" href="#">Open in email app</a><button class="btn b2" id="cp" type="button">Copy summary</button><a class="btn b2" href="/">Back to home</a></div></div>';
                            $('#sm').textContent = txt;
                            $('#mail').href = 'mailto:?subject=' + encodeURIComponent('FxPro enquiry') + '&body=' + encodeURIComponent(txt);
                            $('#cp').addEventListener('click', function() {
                                try {
                                    navigator.clipboard.writeText(txt).then(function() {
                                        toast('Summary copied')
                                    }, function() {
                                        toast('Select the text to copy')
                                    })
                                } catch (x) {
                                    toast('Select the text to copy')
                                }
                            })
                        };
                        send(d, btn, finish)
                    })
                }
                function splitWords(el) {
                    el.setAttribute('aria-label', el.textContent);
                    var w = 0;
                    (function walk(n) {
                        Array.prototype.slice.call(n.childNodes).forEach(function(c) {
                            if (c.nodeType === 3) {
                                var fr = D.createDocumentFragment();
                                c.textContent.split(/(\s+)/).forEach(function(s) {
                                    if (!s)
                                        return;
                                    if (/^\s+$/.test(s)) {
                                        fr.appendChild(D.createTextNode(' '))
                                    } else {
                                        var o = D.createElement('span');
                                        o.className = 'wd';
                                        o.setAttribute('aria-hidden', 'true');
                                        var i = D.createElement('span');
                                        i.style.setProperty('--w', w++);
                                        i.textContent = s;
                                        o.appendChild(i);
                                        fr.appendChild(o)
                                    }
                                });
                                n.replaceChild(fr, c)
                            } else if (c.nodeType === 1)
                                walk(c)
                        })
                    }
                    )(el)
                }
                var IO = null
                  , SPY = null;
                function enhance(key) {
                    var A = app;
                    if (IO) {
                        IO.disconnect();
                        IO = null
                    }
                    if (SPY) {
                        SPY.disconnect();
                        SPY = null
                    }
                    var hero = $('.hero', A);
                    if (hero && !RM) {
                        var i = 0;
                        Array.prototype.forEach.call(hero.children[0].children, function(c) {
                            c.classList.add('a');
                            c.style.setProperty('--d', i++)
                        });
                        if (hero.children[1]) {
                            hero.children[1].classList.add('a');
                            hero.children[1].style.setProperty('--d', 3)
                        }
                    }
                    if (key === 'services') {
                        var chs = $('.chips', A)
                          , ph = $('.ph', A);
                        if (chs && ph && ph.nextElementSibling) {
                            ph.nextElementSibling.insertBefore(chs, ph.nextElementSibling.firstChild)
                        }
                    }
                    var h1 = $('.h1', A);
                    if (h1 && !RM)
                        splitWords(h1);
                    var ct = $('.cta', A);
                    if (ct && !ct.querySelector('.hbg')) {
                        var bg = D.createElement('div');
                        bg.className = 'hbg cb2';
                        bg.innerHTML = mark();
                        ct.appendChild(bg)
                    }
                    var els = A.querySelectorAll('.head,.strip a,.sv,.sr,.pil,.step,.edge>div,.svb,.cta .w>*,.fn,.tw,.two>div,.crumb,.mq,.row,.ph>*,.card,.lg-sec>*,.pr,.ni,.ts,.ar,.ch2,.pl,.rl>div,.tc>div,.stab,.bi,.sti,.bli,.eg>div,.pg4>div,.sx,.pq,.mr');
                    var list = [];
                    Array.prototype.forEach.call(els, function(el) {
                        if (el.closest('.herow'))
                            return;
                        var p = el.parentElement;
                        if (p && p.closest('.rv'))
                            return;
                        el.classList.add('rv');
                        var idx = Array.prototype.indexOf.call(p.children, el);
                        el.style.setProperty('--i', Math.min(idx, 6));
                        list.push(el)
                    });
                    if (RM || !('IntersectionObserver' in window)) {
                        list.forEach(function(e) {
                            e.classList.add('vis')
                        })
                    } else {
                        IO = new IntersectionObserver(function(es) {
                            es.forEach(function(e) {
                                if (e.isIntersecting) {
                                    e.target.classList.add('vis');
                                    IO.unobserve(e.target)
                                }
                            })
                        }
                        ,{
                            threshold: .1,
                            rootMargin: '0px 0px -5% 0px'
                        });
                        list.forEach(function(e) {
                            IO.observe(e)
                        })
                    }
                    if (key === 'services' && 'IntersectionObserver' in window) {
                        var chips = A.querySelectorAll('.chip[data-s]');
                        SPY = new IntersectionObserver(function(es) {
                            es.forEach(function(e) {
                                if (e.isIntersecting) {
                                    Array.prototype.forEach.call(chips, function(c) {
                                        c.classList.toggle('on', c.getAttribute('data-s') === e.target.id)
                                    })
                                }
                            })
                        }
                        ,{
                            rootMargin: '-30% 0px -60% 0px'
                        });
                        Array.prototype.forEach.call(A.querySelectorAll('.svb'), function(s) {
                            SPY.observe(s)
                        })
                    }
                }
                function parse() {
                    var F = window.__FX || {key: 'home', seg: []}, qs = {};
                    location.search.replace(/^\?/, '').split('&').forEach(function(p) {
                        var kv = p.split('=');
                        if (kv[0]) qs[kv[0]] = decodeURIComponent((kv[1] || '').replace(/\+/g, ' '))
                    });
                    if (F.q) for (var k in F.q) if (!(k in qs)) qs[k] = F.q[k];
                    return {seg: F.seg, key: F.key === 'book' ? 'contact' : F.key, book: F.key === 'book', qs: qs, anchor: decodeURIComponent(location.hash.replace(/^#/, '')), path: location.pathname + location.search}
                }
                function render(r) {
                    var key = r.key, seg = r.seg, html, title = 'FxPro';
                    if (key === 'solutions' && seg[1]) {
                        html = pages.detail(seg[1]);
                        var s = SOL.filter(function(x) {
                            return x.id === seg[1]
                        })[0];
                        title = (s ? s.t : 'Solutions') + ' | FxPro'
                    } else if (['home', 'about', 'services', 'solutions', 'connect', 'pricing', 'contact', 'book', 'privacy', 'terms', 'disclaimer'].indexOf(key) > -1) {
                        html = pages[key === 'book' ? 'contact' : key](r.qs);
                        title = key === 'home' ? 'FxPro | Your Strategic Partner for Global Trade and Treasury Solutions' : key === 'connect' ? 'FxPro Connect | Referral programme | FxPro' : key.charAt(0).toUpperCase() + key.slice(1) + ' | FxPro'
                    } else {
                        html = pages.notfound();
                        key = 'none';
                        title = 'Page not found | FxPro'
                    }
                    app.innerHTML = html;
                    if (!window.__FX || !window.__FX.title) document.title = title;
                    (function() {
                        var H = app.querySelector('h2.h2');
                        if (H && !app.querySelector('h1')) { var n = D.createElement('h1'); n.className = H.className; n.innerHTML = H.innerHTML; H.parentNode.replaceChild(n, H) }
                        if (key === 'contact') {
                            var B = !!r.book, e = app.querySelector('.ph .eb'), c = app.querySelector('.crumb'), h = app.querySelector('h1'), l = app.querySelector('.ph .lead');
                            if (e) e.textContent = B ? 'Book a consultation' : 'Contact FxPro';
                            if (c) c.lastChild.textContent = ' / ' + (B ? 'Book a consultation' : 'Contact');
                            if (h) h.textContent = B ? 'Book a consultation with FxPro.' : 'Talk to the FxPro team.';
                            if (l) l.textContent = B ? 'Tell us about your cross-border payment, FX, trade and treasury requirements and we will come back to you.' : 'Speak to our team directly or send us an enquiry about your international trade, FX and treasury operations.'
                        }
                    })();
                    $('#foot').innerHTML = foot();
                    Array.prototype.forEach.call(document.querySelectorAll('.links a[data-r]'), function(a) {
                        a.classList.toggle('on', a.getAttribute('data-r') === key)
                    });
                    if (window.__FX_PRERENDER) return;
                    closeMenus();
                    enhance(key);
                    counts();
                    initForm();
                    if (r.anchor && $('#' + r.anchor)) {
                        var ar = $('#' + r.anchor);
                        if (ar.classList.contains('ar')) {
                            ar.classList.add('open');
                            ar.querySelector('.ah').setAttribute('aria-expanded', 'true')
                        }
                        setTimeout(function() {
                            $('#' + r.anchor).scrollIntoView({
                                behavior: RM ? 'auto' : 'smooth'
                            })
                        }, RM ? 0 : 350)
                    } else {
                        window.scrollTo(0, 0)
                    }
                    onScroll()
                }
                var curPath = null;
                function route() {
                    var r = parse();
                    curPath = r.path;
                    var needRender = window.__FX_PRERENDER || !app.firstElementChild || ((r.key === 'contact' || r.key === 'book') && location.search);
                    if (needRender) { render(r); return }
                    /* pre-rendered HTML is already in the DOM: only attach behaviour */
                    Array.prototype.forEach.call(document.querySelectorAll('.links a[data-r]'), function(a) { a.classList.toggle('on', a.getAttribute('data-r') === r.key) });
                    closeMenus();
                    enhance(r.key);
                    counts();
                    initForm();
                    if (r.anchor && $('#' + r.anchor)) {
                        var ar = $('#' + r.anchor);
                        if (ar.classList.contains('ar')) {
                            ar.classList.add('open');
                            var ah = ar.querySelector('.ah'); if (ah) ah.setAttribute('aria-expanded', 'true')
                        }
                        setTimeout(function() { ar.scrollIntoView({behavior: RM ? 'auto' : 'smooth'}) }, RM ? 0 : 350)
                    }
                    onScroll()
                }
                function closeMenus() {
                    D.body.classList.remove('mo');
                    $('#links').classList.remove('open');
                    $('#burger').setAttribute('aria-expanded', 'false');
                    Array.prototype.forEach.call(D.querySelectorAll('.dd.open'), function(d) {
                        d.classList.remove('open')
                    })
                }
                function navHtml() {
                    var dm = function(items, kind, label) {
                        return '<div class="dm"><a href="/' + kind + '/"><b>' + label + '</b><small>Overview</small></a>' + items.map(function(x) {
                            return '<a href="' + (kind === 'services' ? '/services/#' + x.id : '/solutions/' + x.id + '/') + '">' + x.t + '</a>'
                        }).join('') + '</div>'
                    };
                    return '<a href="/" data-r="home">Home</a><a href="/about/" data-r="about">About</a><div class="dd"><a href="/services/" data-r="services" aria-haspopup="true">Services<span class="cv"></span></a>' + dm(SERV, 'services', 'All services') + '</div><div class="dd"><a href="/solutions/" data-r="solutions" aria-haspopup="true">Solutions<span class="cv"></span></a>' + dm(SOL, 'solutions', 'All solutions') + '</div><a href="/partners/" data-r="connect">Connect</a><a href="/pricing/" data-r="pricing">Pricing</a><a class="btn b1" href="/book-consultation/">Book a Consultation ' + ARW + '</a>'
                }
                var tick = false;
                function onScroll() {
                    if (tick)
                        return;
                    tick = true;
                    requestAnimationFrame(function() {
                        var y = window.pageYOffset || 0
                          , h = root.scrollHeight - window.innerHeight;
                        $('#prog').style.transform = 'scaleX(' + (h > 0 ? Math.min(1, y / h) : 0) + ')';
                        $('.hd').classList.toggle('sc', y > 8);
                        $('#top').classList.toggle('on', y > 700);
                        tick = false
                    })
                }
                $('#links').innerHTML = navHtml();
                $('#links').addEventListener('click', function(e) {
                    var a = e.target.closest('.dd>a');
                    if (a && window.innerWidth <= 860) {
                        e.preventDefault();
                        a.parentNode.classList.toggle('open')
                    } else if (e.target.closest('a'))
                        closeMenus()
                });
                $('#burger').addEventListener('click', function() {
                    var o = $('#links').classList.toggle('open');
                    D.body.classList.toggle('mo', o);
                    this.setAttribute('aria-expanded', o ? 'true' : 'false')
                });
                D.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape') {
                        closeMenus();
                        if (D.activeElement && D.activeElement.blur && D.activeElement.closest && D.activeElement.closest('.dd'))
                            D.activeElement.blur()
                    }
                });
                $('#skip').addEventListener('click', function(e) {
                    e.preventDefault();
                    app.focus();
                    app.scrollIntoView()
                });
                $('#top').addEventListener('click', function() {
                    window.scrollTo({
                        top: 0,
                        behavior: RM ? 'auto' : 'smooth'
                    })
                });
                window.addEventListener('scroll', onScroll, {
                    passive: true
                });
                window.addEventListener('resize', onScroll);
                app.addEventListener('mousemove', function(e) {
                    var c = e.target.closest && e.target.closest('.sv,.pil');
                    if (c) {
                        var r = c.getBoundingClientRect();
                        c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
                        c.style.setProperty('--my', (e.clientY - r.top) + 'px')
                    }
                });
                D.addEventListener('mousemove', function(e) {
                    var h = $('.herow');
                    if (!h || RM)
                        return;
                    h.style.setProperty('--px', (e.clientX / window.innerWidth - .5).toFixed(3));
                    h.style.setProperty('--py', (e.clientY / window.innerHeight - .5).toFixed(3))
                });
                (function() {
                    var el = $('#intro')
                      , seen = false;
                    try {
                        seen = sessionStorage.getItem('fx_intro')
                    } catch (e) {}
                    if (RM || seen) {
                        el.parentNode.removeChild(el)
                    } else {
                        root.classList.add('intro-on');
                        try {
                            sessionStorage.setItem('fx_intro', '1')
                        } catch (e) {}
                        setTimeout(function() {
                            if (el.parentNode)
                                el.parentNode.removeChild(el);
                            root.classList.remove('intro-on')
                        }, 1500)
                    }
                }
                )();
                function counts() {
                    var els = app.querySelectorAll('[data-c]');
                    if (!els.length)
                        return;
                    var go = function(el) {
                        var to = +el.getAttribute('data-c');
                        if (RM)
                            return;
                        var t0 = performance.now();
                        (function st(n) {
                            var p = Math.min(1, (n - t0) / 1400);
                            el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
                            if (p < 1)
                                requestAnimationFrame(st)
                        }
                        )(t0)
                    };
                    if (!('IntersectionObserver' in window))
                        return;
                    var io = new IntersectionObserver(function(es) {
                        es.forEach(function(e) {
                            if (e.isIntersecting) {
                                go(e.target);
                                io.unobserve(e.target)
                            }
                        })
                    }
                    );
                    Array.prototype.forEach.call(els, function(e) {
                        io.observe(e)
                    })
                }
                function tab(t) {
                    var w = t.closest('.stab');
                    Array.prototype.forEach.call(w.querySelectorAll('.stb'), function(b) {
                        b.classList.toggle('on', b === t)
                    });
                    Array.prototype.forEach.call(w.querySelectorAll('.spn'), function(p) {
                        p.classList.toggle('on', p.id === 'p-' + t.getAttribute('data-id'))
                    })
                }
                app.addEventListener('click', function(e) {
                    var t = e.target.closest('.stb');
                    if (t) {
                        tab(t);
                        return
                    }
                    var h = e.target.closest('.ah');
                    if (h) {
                        var r = h.parentNode
                          , o = !r.classList.contains('open');
                        r.classList.toggle('open', o);
                        h.setAttribute('aria-expanded', o ? 'true' : 'false');
                        return
                    }
                    var m = e.target.closest('.mb');
                    if (m) {
                        var o2 = m.closest('.pr').classList.toggle('open');
                        m.textContent = o2 ? 'Show less' : 'More features'
                    }
                });
                app.addEventListener('mouseover', function(e) {
                    var t = e.target.closest('.stb');
                    if (t && window.innerWidth > 860 && !t.classList.contains('on'))
                        tab(t)
                });
                route();
            }
            )();
        
;

(function () {
  'use strict';
  var D = document, app = D.getElementById('app');
  if (!app) return;
  var RM = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  var HOVER = !!(window.matchMedia && matchMedia('(hover:hover) and (pointer:fine)').matches);
  var GL = '.ni,.pc,.pil,.sv,.card', TL = '.ni,.pc,.pil,.sv';

  function prng(s) { return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; }

  /* decorative candlestick + trend line (no real data) */
  function chart() {
    var r = prng(11), W = 1440, n = 44, w = W / n, bars = '', pts = [], i, t, base, v, hh, up;
    for (i = 0; i < n; i++) {
      t = i / (n - 1); base = 250 - t * 170; v = base + (r() - .5) * 60; hh = 20 + r() * 56; up = r() > .4;
      bars += '<rect x="' + (i * w + 9).toFixed(1) + '" y="' + (v - hh / 2).toFixed(1) + '" width="' + (w - 18).toFixed(1) + '" height="' + hh.toFixed(1) + '" rx="3" fill="url(#' + (up ? 'fxu' : 'fxd') + ')"/>';
      pts.push((i * w + w / 2).toFixed(0) + ',' + (base + (r() - .5) * 22).toFixed(0));
    }
    return '<svg class="fxc" viewBox="0 0 1440 300" preserveAspectRatio="none" aria-hidden="true"><defs>' +
      '<linearGradient id="fxu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6DB8AB" stop-opacity=".45"/><stop offset="1" stop-color="#6DB8AB" stop-opacity="0"/></linearGradient>' +
      '<linearGradient id="fxd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#DEC796" stop-opacity=".6"/><stop offset="1" stop-color="#DEC796" stop-opacity="0"/></linearGradient>' +
      '<linearGradient id="fxs" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#6DB8AB"/><stop offset="1" stop-color="#B5985A"/></linearGradient>' +
      '</defs>' + bars + '<path class="fxl" pathLength="1" d="M' + pts.join(' L') + '"/></svg>';
  }

  /* visibility-gated canvas twinkle (Sparkles) */
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.target._fxrun) e.target._fxrun(e.isIntersecting); });
  }) : null;

  function sparkles(host, color, n) {
    if (RM || host.querySelector('canvas.fxsk')) return;
    var c = D.createElement('canvas'); c.className = 'fxsk'; c.setAttribute('aria-hidden', 'true');
    host.insertBefore(c, host.firstChild);
    var g = c.getContext('2d'), P = [], w = 0, h = 0, run = false, raf = 0, i, dpr = Math.min(2, window.devicePixelRatio || 1);
    function size() { w = host.clientWidth; h = host.clientHeight; c.width = w * dpr; c.height = h * dpr; g.setTransform(dpr, 0, 0, dpr, 0, 0); }
    size();
    for (i = 0; i < n; i++) P.push({ x: Math.random(), y: Math.random(), r: .6 + Math.random() * 1.5, s: .5 + Math.random() * 1.4, p: Math.random() * 6.28, v: .3 + Math.random() });
    function frame(t) {
      raf = 0;
      if (!run || !c.isConnected) { run = false; return; }
      g.clearRect(0, 0, w, h); g.fillStyle = color;
      for (var k = 0; k < P.length; k++) {
        var q = P[k], a = .5 + .5 * Math.sin(t / 1000 * q.s + q.p);
        var y = (((q.y - t / 1000 * q.v * .012) % 1) + 1) % 1;
        g.globalAlpha = a * .75; g.beginPath(); g.arc(q.x * w, y * h, q.r, 0, 6.2832); g.fill();
      }
      raf = requestAnimationFrame(frame);
    }
    host._fxrun = function (v) { run = v; if (v && !raf) raf = requestAnimationFrame(frame); };
    if ('ResizeObserver' in window) new ResizeObserver(size).observe(host); else window.addEventListener('resize', size);
    if (io) io.observe(host); else host._fxrun(true);
  }

  function hero() {
    var h = app.querySelector('.herow');
    if (!h || h.querySelector('.fxg')) return;
    var g = D.createElement('div'); g.className = 'fxg'; g.setAttribute('aria-hidden', 'true');
    g.innerHTML = '<i class="fxsp a1"></i><i class="fxsp a2"></i>' + chart();
    h.insertBefore(g, h.firstChild);

    var ch = D.createElement('div'); ch.className = 'fxch'; ch.setAttribute('aria-hidden', 'true');
    ch.innerHTML = [['$', 'USD', 'l1'], ['\u00a3', 'GBP', 'l2'], ['\u20ac', 'EUR', 'l3'], ['\u20b9', 'INR', 'r1'], ['\u062f.\u0625', 'AED', 'r2'], ['\u00a5', 'JPY', 'r3']]
      .map(function (c) { return '<span class="' + c[2] + '"><b>' + c[0] + '</b>' + c[1] + '</span>'; }).join('');
    h.appendChild(ch);

    var items = ['USD <em>ACH</em>', 'GBP <em>Faster Payments</em>', 'EUR <em>SEPA</em>', 'CAD <em>EFT</em>', 'AED', 'AUD', 'SGD', 'JPY', 'CNY'];
    var row = items.map(function (x) { return '<span class="fxi">' + x + '</span>'; }).join('');
    var t = D.createElement('div'); t.className = 'fxt';
    t.innerHTML = '<div class="w"><span class="fxtl">Corridors</span><div class="mq"><div>' + row + row + '</div></div></div>';
    h.appendChild(t);

    sparkles(h, '#538c82', 46);
  }

  function aurora() {
    Array.prototype.forEach.call(app.querySelectorAll('.dk2'), auro1);
  }
  function auro1(d) {
    if (!d || d.querySelector('.fx-aur')) return;
    var a = D.createElement('div'); a.className = 'fx-aur'; a.setAttribute('aria-hidden', 'true');
    a.innerHTML = '<i></i><i></i><i></i>';
    d.insertBefore(a, d.firstChild);
    sparkles(d, '#DEC796', 70);
  }

  function lamp() {
    var c = app.querySelector('.cta');
    if (!c || c.querySelector('.fx-lamp')) return;
    var l = D.createElement('div'); l.className = 'fx-lamp'; l.setAttribute('aria-hidden', 'true'); l.innerHTML = '<i></i>';
    c.insertBefore(l, c.firstChild);
    if ('IntersectionObserver' in window && !RM) {
      var o = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { l.classList.add('vis'); o.disconnect(); } }); }, { threshold: .3 });
      o.observe(c);
    } else l.classList.add('vis');
  }

  function decorate() {
    Array.prototype.forEach.call(app.querySelectorAll(GL), function (e) { e.classList.add('fx-glow'); });
    Array.prototype.forEach.call(app.querySelectorAll(TL), function (e) { e.classList.add('fx-t'); });
  }

  function run() { hero(); aurora(); lamp(); decorate(); }

  /* pointer: border glow follows cursor, subtle 3D tilt */
  D.addEventListener('mousemove', function (e) {
    var tg = e.target; if (!tg || !tg.closest) return;
    var g = tg.closest('.fx-glow');
    if (g) {
      var r = g.getBoundingClientRect();
      g.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      g.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }
    if (HOVER && !RM) {
      var t = tg.closest('.fx-t');
      if (t) {
        var b = t.getBoundingClientRect(), px = (e.clientX - b.left) / b.width, py = (e.clientY - b.top) / b.height;
        t.style.transform = 'perspective(900px) rotateX(' + ((.5 - py) * 5).toFixed(2) + 'deg) rotateY(' + ((px - .5) * 5).toFixed(2) + 'deg) translateY(-4px)';
      }
    }
  }, { passive: true });
  D.addEventListener('mouseout', function (e) {
    var t = e.target && e.target.closest && e.target.closest('.fx-t');
    if (t && !t.contains(e.relatedTarget)) t.style.transform = '';
  });

  /* soft cursor glow */
  if (HOVER && !RM) {
    var cur = D.createElement('div'); cur.className = 'fx-cur'; cur.setAttribute('aria-hidden', 'true'); D.body.appendChild(cur);
    var cx = 0, cy = 0, pend = false;
    D.addEventListener('mousemove', function (e) {
      cx = e.clientX; cy = e.clientY;
      if (pend) return; pend = true;
      requestAnimationFrame(function () { cur.style.transform = 'translate3d(' + cx + 'px,' + cy + 'px,0)'; cur.classList.add('on'); pend = false; });
    }, { passive: true });
    D.addEventListener('mouseleave', function () { cur.classList.remove('on'); });
  }

  /* re-decorate after every route render */
  var tm;
  new MutationObserver(function () { clearTimeout(tm); tm = setTimeout(run, 60); }).observe(app, { childList: true });
  run();
})();


;

(function(){
  'use strict';
  var D=document,app=D.getElementById('app');if(!app)return;
  var RM=!!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches);
  var PAIRS=[['USD / INR',87.4],['GBP / INR',116.9],['EUR / INR',101.3],['AED / INR',23.8]];
  function spark(a){var mn=Math.min.apply(0,a),mx=Math.max.apply(0,a),r=(mx-mn)||1,w=100,h=34,p=a.map(function(v,i){return (i*w/(a.length-1)).toFixed(1)+','+(h-3-((v-mn)/r)*(h-8)).toFixed(1)});
    return '<path class="ar" d="M0,'+h+' L'+p.join(' L')+' L'+w+','+h+'Z"/><path d="M'+p.join(' L')+'"/>'}
  function terminal(){
    var hx=app.querySelector('.hero.hx');if(!hx||hx.querySelector('.fxrt'))return;
    var S=PAIRS.map(function(p){var a=[],v=p[1],i;for(i=0;i<24;i++){v+=(Math.random()-.48)*p[1]*.0016;a.push(v)}return{n:p[0],base:p[1],h:a,o:a[0]}});
    var el=D.createElement('div');el.className='fxrt a';el.style.setProperty('--d',4);el.addEventListener('animationend',function(){el.classList.remove('a')},{once:true});el.setAttribute('role','img');el.setAttribute('aria-label','Illustrative currency rates panel');
    el.innerHTML='<div class="fxrt-in"><div class="fxrt-h"><i></i>FX desk<em>Illustrative</em></div><div class="fxrt-g">'+
      S.map(function(s,i){return '<div class="fxrt-c" data-i="'+i+'"><small>'+s.n+'</small><b>0</b><span>0</span><svg viewBox="0 0 100 34" preserveAspectRatio="none"><defs><linearGradient id="fxra'+i+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5FD4BF"/><stop offset="1" stop-color="#5FD4BF" stop-opacity="0"/></linearGradient></defs></svg></div>'}).join('')+
      '</div><div class="fxrt-f">Illustrative indicative rates for design purposes only. Not live market data and not a quote.</div></div>';
    hx.appendChild(el);
    function paint(first){S.forEach(function(s,i){
      var c=el.querySelector('[data-i="'+i+'"]'),b=c.querySelector('b'),sp=c.querySelector('span'),sv=c.querySelector('svg'),last=s.h[s.h.length-1];
      if(!first){var n=last+(Math.random()-.48)*s.base*.0014;s.h.push(n);s.h.shift();b.className=n>=last?'up':'dn';setTimeout(function(){b.className=''},700);last=n}
      var d=last-s.o,pc=d/s.o*100;
      b.textContent=last.toFixed(2);sp.textContent=(d>=0?'▲ +':'▼ ')+d.toFixed(2)+'  ('+(pc>=0?'+':'')+pc.toFixed(2)+'%)';sp.className=d>=0?'':'dn';
      var defs=sv.querySelector('defs');sv.innerHTML='';sv.appendChild(defs);
      var g=D.createElementNS('http://www.w3.org/2000/svg','g');g.innerHTML=spark(s.h).replace('class="ar"','class="ar" style="fill:url(#fxra'+i+')"');sv.appendChild(g);
      var sw=sv.querySelector('path:not(.ar)');if(sw)sw.style.stroke=d>=0?'#5FD4BF':'#FF8A7A';
    })}
    paint(true);
    if(!RM){var t=setInterval(function(){if(!el.isConnected){clearInterval(t);return}paint(false)},1700)}
  }
  function gradEm(){Array.prototype.forEach.call(app.querySelectorAll('.em'),function(e){if(!e.querySelector('.wd'))e.classList.add('nosplit')})}
  function run(){terminal();gradEm()}
  var tm;new MutationObserver(function(){clearTimeout(tm);tm=setTimeout(run,80)}).observe(app,{childList:true});
  run();
})();


;

(function(){
  'use strict';
  var D=document,app=D.getElementById('app');if(!app)return;
  var RM=!!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches);
  var HOVER=!!(window.matchMedia&&matchMedia('(hover:hover) and (pointer:fine)').matches);
  var I={
    wa:'<path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2.2-1-.9.9a4 4 0 0 1-2.2-2.2l.9-.9-1-2.2z"/>',
    phone:'<path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2z"/>',
    mail:'<rect x="3.5" y="5.5" width="17" height="13" rx="2.2"/><path d="M4 7l8 6 8-6"/>'
  };
  function ic(n){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+I[n]+'</svg>'}
  function $(s,r){return (r||D).querySelector(s)}
  function $$(s,r){return Array.prototype.slice.call((r||D).querySelectorAll(s))}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}

  /* ================= hero extras ================= */
  function heroFx(){
    var h=$('.herow',app);if(!h||h.querySelector('.mtr'))return;
    var m=D.createElement('div');m.className='mtr';m.setAttribute('aria-hidden','true');
    var s='';for(var i=0;i<7;i++){s+='<i style="--l:'+(8+i*13+Math.round(Math.random()*6))+'%;--d:'+(5+Math.random()*5).toFixed(1)+'s;--dl:'+(Math.random()*8).toFixed(1)+'s"></i>'}
    m.innerHTML=s;
    var r=D.createElement('div');r.className='rip';r.setAttribute('aria-hidden','true');r.innerHTML='<i style="--k:0"></i><i style="--k:1"></i><i style="--k:2"></i><i style="--k:3"></i>';
    h.insertBefore(m,h.firstChild);h.insertBefore(r,h.firstChild);
  }
  D.addEventListener('mousemove',function(e){
    if(!HOVER||RM)return;
    var h=e.target&&e.target.closest&&e.target.closest('.herow');
    if(h){var b=h.getBoundingClientRect();h.style.setProperty('--px',((e.clientX-b.left)/b.width-.5).toFixed(3));h.style.setProperty('--py',((e.clientY-b.top)/b.height-.5).toFixed(3));
      var t=e.target.closest('.fxrt');
      if(t){var q=t.getBoundingClientRect();t.style.setProperty('--ry',(((e.clientX-q.left)/q.width-.5)*6).toFixed(2)+'deg');t.style.setProperty('--rx',((.5-(e.clientY-q.top)/q.height)*5).toFixed(2)+'deg')}
    }
    var bt=e.target&&e.target.closest&&e.target.closest('.hx .btn');
    if(bt){var k=bt.getBoundingClientRect();bt.style.setProperty('--bx',((e.clientX-k.left-k.width/2)*.18).toFixed(1)+'px');bt.style.setProperty('--by',((e.clientY-k.top-k.height/2)*.28).toFixed(1)+'px')}
  },{passive:true});
  D.addEventListener('mouseout',function(e){
    var t=e.target&&e.target.closest&&e.target.closest('.fxrt');if(t&&!t.contains(e.relatedTarget)){t.style.setProperty('--rx','0deg');t.style.setProperty('--ry','0deg')}
    var b=e.target&&e.target.closest&&e.target.closest('.hx .btn');if(b&&!b.contains(e.relatedTarget)){b.style.setProperty('--bx','0px');b.style.setProperty('--by','0px')}
  });

  /* ================= glow classes on new cards ================= */
  function decorate(){
    $$('.xc,.bx,.pcx,.cside .pil,.mr',app).forEach(function(e){e.classList.add('fx-glow')});
  }
  /* spotlight position for new card backgrounds */
  D.addEventListener('mousemove',function(e){
    var c=e.target&&e.target.closest&&e.target.closest('.xc,.bx,.pcx');
    if(c){var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')}
  },{passive:true});

  /* ================= sub navigation ================= */
  var spy=null;
  function keyOf(){return ((window.__FX&&window.__FX.key)==='book'?'contact':(window.__FX&&window.__FX.key))||'home'}
  function navLinks(kind){
    return $$('.links .dd .dm a[href^="/'+kind+'/"]').filter(function(a){return a.getAttribute('href')!=='/'+kind+'/'}).map(function(a){return {t:a.textContent.trim(),h:a.getAttribute('href')}});
  }
  function subnav(){
    if(spy){spy.disconnect();spy=null}
    if($('.subnav',app))return;
    var ph=$('.ph',app);if(!ph)return;
    var key=keyOf(),items=[],label='',mode='scroll';
    if(key==='services'){items=navLinks('services').map(function(x,i){return {t:x.t,h:x.h,id:x.h.split('#')[2]||x.h.split('#').pop(),n:'0'+(i+1)}});label='Services';mode='hash'}
    else if(key==='solutions'){items=navLinks('solutions').map(function(x,i){return {t:x.t,h:x.h,n:'0'+(i+1)}});label='Solutions';mode='link'}
    else if(['about','connect','pricing'].indexOf(key)>-1){
      label={about:'On this page',connect:'On this page',pricing:'On this page',contact:'Contact'}[key];
      var seen={};
      $$(':scope > .w.sec, :scope > .dk2, :scope > .bnd, :scope > .cta',app).forEach(function(s,i){
        var e=$('.eb',s);if(!e)return;var t=s.classList.contains('cta')?'Get in touch':e.textContent.trim();if(!t||seen[t])return;seen[t]=1;
        if(!s.id)s.id='sn'+i;items.push({t:t,h:'#'+s.id,id:s.id})
      });
      if(items.length<2)return;
    } else return;
    var nav=D.createElement('div');nav.className='subnav';
    nav.innerHTML='<div class="sn" role="navigation" aria-label="'+esc(label)+'"><span class="sl0">'+esc(label)+'</span>'+items.map(function(x){return '<a href="'+x.h+'" data-id="'+(x.id||'')+'">'+(x.n&&mode!=='scroll'?'<b>'+x.n+'</b>':'')+esc(x.t)+'</a>'}).join('')+'</div>';
    ph.parentNode.insertBefore(nav,ph.nextSibling);
    var sn=$('.sn',nav);
    function mark(a){
      $$('a',nav).forEach(function(x){x.classList.toggle('on',x===a)});
      if(a&&sn.scrollWidth>sn.clientWidth){sn.scrollTo({left:a.offsetLeft-sn.clientWidth/2+a.clientWidth/2,behavior:RM?'auto':'smooth'})}
    }
    if(mode==='link'){
      var cur=location.pathname;
      $$('a',nav).forEach(function(a){if(a.getAttribute('href')===cur)mark(a)});
    } else {
      nav.addEventListener('click',function(e){
        var a=e.target.closest('a');if(!a)return;
        if(mode==='scroll'){e.preventDefault();var t=D.getElementById(a.getAttribute('data-id'));if(t){t.scrollIntoView({behavior:RM?'auto':'smooth'});mark(a)}}
      });
      if('IntersectionObserver' in window){
        var targets=items.map(function(x){return x.id&&D.getElementById(x.id)}).filter(Boolean);
        spy=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){var a=$('a[data-id="'+en.target.id+'"]',nav);if(a)mark(a)}})},{rootMargin:'-30% 0px -60% 0px'});
        targets.forEach(function(t){spy.observe(t)});
      }
    }
  }

  /* ================= explorer modal ================= */
  var ov=null,cards=[],cur=0,lastFocus=null;
  function buildOv(){
    ov=D.createElement('div');ov.className='fxm-ov';ov.setAttribute('aria-hidden','true');
    ov.innerHTML='<div class="fxm" role="dialog" aria-modal="true" aria-label="Service details"><button type="button" class="fxm-x" aria-label="Close">&times;</button><div class="mrail"></div><div class="mbody"><div class="mcont"></div><div class="mnav"><button type="button" data-d="-1">&larr; Previous</button><button type="button" data-d="1">Next &rarr;</button></div></div></div>';
    D.body.appendChild(ov);
    ov.addEventListener('click',function(e){
      if(e.target===ov||e.target.closest('.fxm-x')){closeOv();return}
      var rb=e.target.closest('.mrail button');if(rb){show(+rb.getAttribute('data-i'));return}
      var nb=e.target.closest('.mnav button');if(nb){show((cur+ +nb.getAttribute('data-d')+cards.length)%cards.length);return}
      if(e.target.closest('a[href^="/"]'))closeOv();
    });
  }
  function show(i){
    cur=i;var c=cards[i];
    $('.mrail',ov).innerHTML='<small>All services</small>'+cards.map(function(x,k){return '<button type="button" data-i="'+k+'" class="'+(k===i?'on':'')+'"><em>'+x.getAttribute('data-n')+'</em>'+esc(x.getAttribute('data-t'))+'</button>'}).join('');
    var mc=$('.mcont',ov);mc.style.animation='none';void mc.offsetWidth;mc.style.animation='';
    mc.innerHTML=$('.xd',c).innerHTML;
    $('.mbody',ov).scrollTop=0;
    var on=$('.mrail button.on',ov);if(on&&on.scrollIntoView)on.scrollIntoView({block:'nearest',inline:'center'});
  }
  function openOv(card){
    if(!ov)buildOv();
    lastFocus=card;cards=$$('.xc[data-id]',card.parentNode);
    show(cards.indexOf(card));
    ov.classList.add('on');ov.setAttribute('aria-hidden','false');D.body.classList.add('fxlock');
    setTimeout(function(){var x=$('.fxm-x',ov);if(x)x.focus()},60);
  }
  function closeOv(){
    if(!ov)return;ov.classList.remove('on');ov.setAttribute('aria-hidden','true');D.body.classList.remove('fxlock');
    if(lastFocus&&lastFocus.focus)lastFocus.focus({preventScroll:true});
  }
  D.addEventListener('click',function(e){
    var c=e.target.closest&&e.target.closest('.xc[data-id]');
    if(c&&!e.target.closest('a'))openOv(c);
  });
  D.addEventListener('keydown',function(e){
    if(ov&&ov.classList.contains('on')){
      if(e.key==='Escape'){closeOv();return}
      if(e.key==='ArrowRight'&&!dial.on){show((cur+1)%cards.length)}
      if(e.key==='ArrowLeft'&&!dial.on){show((cur-1+cards.length)%cards.length)}
    }
    if(dial.on){
      if(/^[0-9*#+]$/.test(e.key)){e.preventDefault();dial.add(e.key)}
      else if(e.key==='Backspace'){e.preventDefault();dial.back()}
      else if(e.key==='Escape'){dial.close()}
      return;
    }
    var c=e.target.closest&&e.target.closest('.xc[data-id]');
    if(c&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openOv(c)}
  });
  window.addEventListener('pageshow',function(){closeOv();dial.close();var s=$('.sdl');if(s)s.classList.remove('open')});

  /* ================= dial pad ================= */
  var dial={on:false,num:'',name:'',el:null,
    build:function(){
      var L={2:'ABC',3:'DEF',4:'GHI',5:'JKL',6:'MNO',7:'PQRS',8:'TUV',9:'WXYZ'};
      var el=this.el=D.createElement('div');el.className='fxm-ov';el.setAttribute('aria-hidden','true');
      var k='';['1','2','3','4','5','6','7','8','9','*','0','#'].forEach(function(x){k+='<button type="button" data-k="'+x+'">'+x+'<small>'+(L[x]||'')+'</small></button>'});
      el.innerHTML='<div class="fxm dialm" role="dialog" aria-modal="true" aria-label="Dial pad"><button type="button" class="fxm-x" aria-label="Close">&times;</button><div class="dh"><small>Calling</small><b></b></div><div class="dd-disp" aria-live="polite"></div><div class="dd-keys">'+k+'</div><div class="dd-act"><button type="button" class="dbk" aria-label="Delete last digit">&#9003;</button><a class="dcall" href="#">'+ic('phone')+' Call</a></div><a class="dwa" target="_blank" rel="noopener" href="#">'+ic('wa')+' Open in WhatsApp</a></div>';
      D.body.appendChild(el);
      var self=this;
      $('.dd-keys svg',el);
      el.addEventListener('click',function(e){
        if(e.target===el||e.target.closest('.fxm-x')){self.close();return}
        var b=e.target.closest('[data-k]');if(b){self.add(b.getAttribute('data-k'));return}
        if(e.target.closest('.dbk'))self.back();
      });
      $$('.dcall svg,.dwa svg',el).forEach(function(s){s.style.width='20px';s.style.height='20px'});
    },
    open:function(num,name){if(!this.el)this.build();this.num=num;this.name=name;$('.dh b',this.el).textContent=name;this.upd();this.el.classList.add('on');this.el.setAttribute('aria-hidden','false');D.body.classList.add('fxlock');this.on=true},
    close:function(){if(!this.el||!this.on)return;this.on=false;this.el.classList.remove('on');this.el.setAttribute('aria-hidden','true');if(!(ov&&ov.classList.contains('on')))D.body.classList.remove('fxlock')},
    add:function(c){if(this.num.length<18){this.num+=c;this.upd()}},
    back:function(){this.num=this.num.slice(0,-1);this.upd()},
    upd:function(){
      var n=this.num,disp=n.replace(/^(\+91)(\d{5})(\d{0,5})(.*)/,function(m,a,b,c,d){return a+' '+b+(c?' '+c:'')+d})||n;
      $('.dd-disp',this.el).textContent=disp||' ';
      $('.dcall',this.el).setAttribute('href','tel:'+n);
      $('.dwa',this.el).setAttribute('href','https://wa.me/'+n.replace(/[^\d]/g,''));
    }
  };
  D.addEventListener('click',function(e){
    var d=e.target.closest&&e.target.closest('.dial');if(d){dial.open(d.getAttribute('data-num'),d.getAttribute('data-name'))}
  });

  /* ================= contact tabs & scheduler ================= */
  D.addEventListener('click',function(e){
    var t=e.target.closest&&e.target.closest('.ct');if(!t)return;
    var box=t.closest('.cx');$$('.ct',box).forEach(function(x){x.classList.toggle('on',x===t)});
    $$('.cpn',box).forEach(function(p){p.classList.toggle('on',p.id===t.getAttribute('data-t'))});
  });
  function sched(){
    var f=$('#sf',app);if(!f||f._b)return;f._b=1;
    var sd=$('#sd',f);if(sd){var n=new Date();sd.min=n.getFullYear()+'-'+('0'+(n.getMonth()+1)).slice(-2)+'-'+('0'+n.getDate()).slice(-2)}
    function upd(){
      var o=$('#sw',f).selectedOptions[0],first=o.getAttribute('data-first');
      var date=$('#sd',f).value,time=$('#st',f).value,name=$('#sn',f).value.trim(),co=$('#sc',f).value.trim(),tp=$('#sq',f).value;
      var lines=['Hello '+first+',','','I would like to schedule a call with FxPro.','Topic: '+tp];
      if(date)lines.push('Preferred date: '+date);lines.push('Preferred time (IST): '+time);
      if(name)lines.push('Name: '+name);if(co)lines.push('Company: '+co);
      var body=lines.join('\n');
      $('#swa',f).setAttribute('href','https://wa.me/'+o.getAttribute('data-wa')+'?text='+encodeURIComponent(body));
      $('#sml',f).setAttribute('href','mailto:'+o.getAttribute('data-mail')+'?subject='+encodeURIComponent('Call request: '+tp)+'&body='+encodeURIComponent(body));
    }
    f.addEventListener('input',upd);f.addEventListener('change',upd);f.addEventListener('submit',function(e){e.preventDefault()});upd();
  }

  /* ================= speed dial ================= */
  function speedDial(){
    if($('.sdl')||!window.FXPPL)return;
    var d=D.createElement('div');d.className='sdl';
    var rows=window.FXPPL.map(function(p){
      var num=p[2].replace(/[^\d+]/g,''),ini=p[0].split(' ').map(function(w){return w.charAt(0)}).join('').slice(0,2),first=p[0].split(' ')[0];
      return '<div class="sdr"><i>'+ini+'</i><div><b>'+esc(p[0])+'</b><span>'+esc(p[1])+'</span></div><div><a class="w" target="_blank" rel="noopener" aria-label="WhatsApp '+esc(p[0])+'" href="https://wa.me/'+num.replace('+','')+'?text='+encodeURIComponent('Hello '+first+', I would like to speak with FxPro.')+'">'+ic('wa')+'</a><a aria-label="Call '+esc(p[0])+'" href="tel:'+num+'">'+ic('phone')+'</a><a aria-label="Email '+esc(p[0])+'" href="mailto:'+p[3]+'">'+ic('mail')+'</a></div></div>'
    }).join('');
    d.innerHTML='<div class="sdl-p" id="sdl-p" role="region" aria-label="Talk to us"><h4>Talk to us</h4>'+rows+'<a class="btn b1" href="/book-consultation/">Book a consultation <span aria-hidden="true">&#8599;</span></a></div><button type="button" class="sdl-b" aria-expanded="false" aria-controls="sdl-p">'+ic('wa')+'<span>Talk to us</span></button>';
    D.body.appendChild(d);
    var b=$('.sdl-b',d);
    b.addEventListener('click',function(e){e.stopPropagation();var o=d.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false')});
    D.addEventListener('click',function(e){if(!d.contains(e.target)){d.classList.remove('open');b.setAttribute('aria-expanded','false')}});
    d.addEventListener('click',function(e){if(e.target.closest('a[href^="/"]'))d.classList.remove('open')});
  }

  /* ================= rails orbit (JS-driven so labels stay upright) ================= */
  var orbVis=false,orbRAF=0,orbT0=performance.now(),orbIO=null;
  function orbTick(now){
    orbRAF=0;var orb=$('.orb',app);if(!orb||!orbVis)return;
    var t=(now-orbT0)/1000;
    $$('.ring',orb).forEach(function(r){
      var cs=getComputedStyle(r),R=parseFloat(cs.getPropertyValue('--r')),dur=parseFloat(cs.getPropertyValue('--dur'))||40,dir=r.classList.contains('rev')?-1:1;
      $$('i',r).forEach(function(i){
        var a=(parseFloat(i.style.getPropertyValue('--a'))||0)*Math.PI/180+dir*2*Math.PI*t/dur;
        i.style.setProperty('--x',(R*Math.cos(a)).toFixed(1)+'px');i.style.setProperty('--y',(R*Math.sin(a)).toFixed(1)+'px');
      });
    });
    if(!RM)orbRAF=requestAnimationFrame(orbTick);
  }
  function orbit(){
    var orb=$('.orb',app);if(!orb||orb._o)return;orb._o=1;
    if(orbIO)orbIO.disconnect();
    if('IntersectionObserver' in window){
      orbIO=new IntersectionObserver(function(es){es.forEach(function(e){orbVis=e.isIntersecting;if(orbVis&&!orbRAF)orbRAF=requestAnimationFrame(orbTick)})});
      orbIO.observe(orb);
    } else {orbVis=true;orbRAF=requestAnimationFrame(orbTick)}
    orbVis=true;orbRAF=requestAnimationFrame(orbTick);
  }

  function run(){heroFx();decorate();subnav();sched();speedDial();orbit()}
  var tm;new MutationObserver(function(){clearTimeout(tm);tm=setTimeout(run,90)}).observe(app,{childList:true});
  run();
})();

