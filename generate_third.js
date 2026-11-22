/**
 * build_third_from_master.js
 * 
 * Rebuilds /third/ based strictly on the MASTER site: https://www.elevancelegal.co.uk/second/
 * - Exact master UI styling, containers (container-studio), frosted glass cards, sine waves, typography
 * - Menu items aligned with all modules in /third/
 * - Footer restored from master second (unbroken, pristine 12-column layout)
 * - Section 7 (How We Work) kept EXACTLY AS IS as in second
 * - All other sections follow close UI of second
 * - 100% exact customer copy preserved from Elevance_Website_Content_v2.docx
 */

const fs = require('fs');
const path = require('path');

const secondPath = path.join(__dirname, 'second.html');
const secondHtml = fs.readFileSync(secondPath, 'utf8');

// 1. EXTRACT HEADER & UPDATE MENU TO ALIGN WITH THIRD'S MODULES
const desktopNavReplacement = `
    <!-- Desktop Navigation Bar (Aligned with Third's Modules) -->
    <nav aria-label="Navigation" class="site-nav-desktop">
      <ul>
        
        <!-- Dropdown: SERVICES -->
        <li>
          <details data-dropdown="" class="group/dd">
            <summary class="eyebrow flex cursor-pointer list-none items-center gap-1.5 text-fg-2 transition-colors hover:text-fg group-open/dd:text-fg [&::-webkit-details-marker]:hidden">
              SERVICES<span class="text-[10px] leading-none transition-transform group-open/dd:rotate-180" aria-hidden="true">▾</span>
            </summary>
            <div data-tone="solutions" class="absolute inset-x-0 top-[72px] max-h-[calc(100vh-72px)] overflow-y-auto border-b border-line bg-canvas">
              <span aria-hidden="true" class="tone-line block h-px w-full"></span>
              <div class="mx-auto w-full max-w-[1760px] px-4 sm:px-8 lg:px-14 2xl:px-20 py-10 dropdown-grid-4">
                <div>
                  <p class="eyebrow uppercase tracking-wider text-xs font-semibold text-fg-3">Documentation &amp; Dispute</p>
                  <ul>
                    <li><a href="#services">Document Preparation &amp; Support</a></li>
                    <li><a href="#services">Dispute Resolution &amp; Case Support</a></li>
                    <li><a href="#services">Business &amp; Commercial Legal</a></li>
                  </ul>
                </div>
                <div>
                  <p class="eyebrow uppercase tracking-wider text-xs font-semibold text-fg-3">Housing &amp; Workplace</p>
                  <ul>
                    <li><a href="#services">Housing &amp; Landlord-Tenant</a></li>
                    <li><a href="#services">Employment &amp; Workplace Matters</a></li>
                    <li><a href="#services">Family &amp; Personal Matters</a></li>
                  </ul>
                </div>
                <div>
                  <p class="eyebrow uppercase tracking-wider text-xs font-semibold text-fg-3">Wills &amp; Legalisation</p>
                  <ul>
                    <li><a href="#services">Wills &amp; Wills Drafting</a></li>
                    <li><a href="#services">Lasting Powers of Attorney</a></li>
                    <li><a href="#services">Document Legalisation &amp; Notarial</a></li>
                  </ul>
                </div>
                <div>
                  <p class="eyebrow uppercase tracking-wider text-xs font-semibold text-fg-3">Languages &amp; Solicitor</p>
                  <ul>
                    <li><a href="#services">Translation Services (Arabic / Kurdish)</a></li>
                    <li><a href="#solicitor">Solicitor by Appointment</a></li>
                    <li><a href="#services" class="text-sm font-medium text-fg underline underline-offset-4 mt-1 inline-block">View all 10 services &rarr;</a></li>
                  </ul>
                </div>
              </div>
              <div class="mx-auto w-full max-w-[1760px] px-4 sm:px-8 lg:px-14 2xl:px-20 border-t border-line py-5">
                <a href="#services" class="text-sm link text-fg-2 hover:text-fg">View all services &rarr;</a>
              </div>
            </div>
          </details>
        </li>

        <li><a class="eyebrow text-fg-2 hover:text-fg transition-colors" href="#how">HOW WE WORK</a></li>
        <li><a class="eyebrow text-fg-2 hover:text-fg transition-colors" href="#solicitor">AUTHORISED SOLICITORS</a></li>
        <li><a class="eyebrow text-fg-2 hover:text-fg transition-colors" href="#support">WHO WE SUPPORT</a></li>
        <li><a class="eyebrow text-fg-2 hover:text-fg transition-colors" href="#why">WHY ELEVANCE</a></li>
        <li><a class="eyebrow text-fg-2 hover:text-fg transition-colors" href="#faq">QUESTIONS</a></li>
        <li><a class="eyebrow text-fg-2 hover:text-fg transition-colors" href="#contact">CONTACT</a></li>

      </ul>
    </nav>`;

// Mobile Drawer Links Replacement
const mobileDrawerLinksReplacement = `
          <ul class="space-y-4 font-display text-2xl">
            <li><a href="#welcome" class="text-fg-2 hover:text-fg">Welcome</a></li>
            <li><a href="#story" class="text-fg-2 hover:text-fg">Our Story</a></li>
            <li><a href="#services" class="text-fg-2 hover:text-fg">Services</a></li>
            <li><a href="#how" class="text-fg-2 hover:text-fg">How We Work</a></li>
            <li><a href="#solicitor" class="text-fg-2 hover:text-fg">Authorised Solicitors</a></li>
            <li><a href="#support" class="text-fg-2 hover:text-fg">Who We Support</a></li>
            <li><a href="#why" class="text-fg-2 hover:text-fg">Why Elevance</a></li>
            <li><a href="#faq" class="text-fg-2 hover:text-fg">Questions</a></li>
            <li><a href="#contact" class="text-fg-2 hover:text-fg">Contact</a></li>
          </ul>`;

// Footer Navigation Links Replacement (Aligning with Third's Modules)
const footerNavReplacement = `
    <!-- Navigation on Right (Aligned with Third Modules) -->
    <div class="md:col-span-2">
      <p class="eyebrow uppercase tracking-wider text-xs font-semibold text-fg-3">Navigation</p>
      <ul class="mt-4 space-y-2 text-sm text-fg-3">
        <li><a class="hover:text-fg hover:underline transition-colors" href="#welcome">Welcome</a></li>
        <li><a class="hover:text-fg hover:underline transition-colors" href="#story">Our Story</a></li>
        <li><a class="hover:text-fg hover:underline transition-colors" href="#services">Services</a></li>
        <li><a class="hover:text-fg hover:underline transition-colors" href="#how">How we work</a></li>
        <li><a class="hover:text-fg hover:underline transition-colors" href="#solicitor">Authorised Solicitors</a></li>
        <li><a class="hover:text-fg hover:underline transition-colors" href="#support">Who we support</a></li>
        <li><a class="hover:text-fg hover:underline transition-colors" href="#why">Why Elevance</a></li>
        <li><a class="hover:text-fg hover:underline transition-colors" href="#faq">Questions</a></li>
        <li><a class="hover:text-fg hover:underline transition-colors" href="#contact" data-intake-open="">Contact</a></li>
      </ul>
    </div>`;

// 2. DEFINE ALL SECTIONS BASED ON MASTER SECOND UI + EXACT CUSTOMER COPY
const section01Welcome = `
<!-- SECTION 01: WELCOME (Master Second UI) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" aria-labelledby="welcome-title" id="welcome">
  <span aria-hidden="true" data-ambient-lines="" data-seed="welcome-pitch" data-colors="#ff9a4d,#ffd25b" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)] pointer-events-none opacity-55"></span>

  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">01</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>Welcome</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 id="welcome-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">
        Legal support, <br><span style="color: rgba(255, 255, 255, 0.65);">centred on your needs.</span>
      </h2>
      <div class="mt-10 flex flex-wrap gap-4 items-center">
        <button type="button" data-intake-open="" data-prefill="I would like to make an enquiry" class="btn-pill-primary">
          Make an enquiry
        </button>
        <a href="#services" class="btn-pill-secondary">
          View our services &rarr;
        </a>
      </div>
    </div>
    <div class="lg:col-span-5 lg:col-start-8 self-end space-y-6">
      <p class="text-lg leading-relaxed text-fg-2">
        Practical document preparation, case coordination, and administrative assistance for individuals, families, and businesses across England and Wales.
      </p>
      <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur space-y-3">
        <p class="eyebrow text-xs uppercase tracking-wider text-fg-3">What we provide</p>
        <ul class="space-y-2 text-sm text-fg-2">
          <li class="flex items-start gap-2.5">
            <span class="text-fg mt-0.5">&bull;</span>
            <span>Clear and accessible guidance without unnecessary legal jargon.</span>
          </li>
          <li class="flex items-start gap-2.5">
            <span class="text-fg mt-0.5">&bull;</span>
            <span>Practical document preparation and case coordination.</span>
          </li>
          <li class="flex items-start gap-2.5">
            <span class="text-fg mt-0.5">&bull;</span>
            <span>Fixed-fee pricing agreed upfront before any work commences.</span>
          </li>
          <li class="flex items-start gap-2.5">
            <span class="text-fg mt-0.5">&bull;</span>
            <span>Direct referral to independent SRA-regulated solicitors when reserved legal care is required.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
`;

const section02Story = `
<!-- SECTION 02: OUR STORY (Master Second UI) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" aria-labelledby="story-title" id="story">
  <span aria-hidden="true" data-ambient-lines="" data-seed="story-pitch" data-colors="#5b8cff,#9b6bff" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)] pointer-events-none opacity-55"></span>

  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">02</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>Our Story</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 id="story-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">
        A more approachable way <br><span style="color: rgba(255, 255, 255, 0.65);">to navigate legal matters.</span>
      </h2>
      <p class="mt-8 text-lg leading-relaxed text-fg-2">
        Elevance Legal Services was established with a clear mission: to provide practical, accessible, and transparent legal assistance to individuals, families, and businesses across England and Wales. We believe that legal support should not feel distant, intimidating, or prohibitively expensive.
      </p>
    </div>
    <div class="lg:col-span-5 lg:col-start-8 self-end space-y-6">
      <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur">
        <p class="eyebrow text-xs uppercase tracking-wider text-fg-3">Our Mission</p>
        <p class="mt-3 text-sm leading-relaxed text-fg-2">
          Our aim is to make legal processes straightforward and manageable, whether you are resolving a dispute, preparing essential documents, or seeking administrative coordination for complex affairs.
        </p>
      </div>

      <div class="grid gap-4 sm:grid-cols-3">
        <div class="border border-line rounded-xl p-4 bg-canvas/30">
          <p class="text-xs font-semibold text-white uppercase tracking-wider">Clarity</p>
          <p class="mt-2 text-xs text-fg-3 leading-relaxed">Clear communication without legal jargon. We explain your options in plain language.</p>
        </div>
        <div class="border border-line rounded-xl p-4 bg-canvas/30">
          <p class="text-xs font-semibold text-white uppercase tracking-wider">Accessibility</p>
          <p class="mt-2 text-xs text-fg-3 leading-relaxed">Practical, responsive support when you need it, delivered with empathy and efficiency.</p>
        </div>
        <div class="border border-line rounded-xl p-4 bg-canvas/30">
          <p class="text-xs font-semibold text-white uppercase tracking-wider">Client-Centred</p>
          <p class="mt-2 text-xs text-fg-3 leading-relaxed">Solutions designed around your specific situation, priorities, and budget.</p>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const section03Services = `
<!-- SECTION 03: OUR SERVICES (Master Second Hairline Grid UI) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" id="services" aria-labelledby="services-title">
  <span aria-hidden="true" data-ambient-lines="" data-seed="services-google" data-colors="#4285F4,#34A853" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)] pointer-events-none opacity-55"></span>

  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">03</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>Our Services</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 id="services-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">
        Practical support <br><span style="color: rgba(255, 255, 255, 0.65);">for everyday needs.</span>
      </h2>
    </div>
    <p class="self-end text-lg leading-relaxed text-fg-2 lg:col-span-5 lg:col-start-8">
      We provide practical document preparation, administrative assistance, and related support services for individuals, families, and businesses across England and Wales. Our aim is to make legal and administrative processes straightforward, efficient, and cost-effective. We explain the scope of our services and agree on our fees before commencing work.
    </p>
  </div>

  <div class="mt-16 grid hairline-grid sm:grid-cols-2 lg:grid-cols-3">
    
    <!-- 01 Document Preparation & Support -->
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">01</span>
      <h3 class="mt-3 text-xl font-normal text-white">Document Preparation &amp; Support</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We assist with preparing, formatting, and organising correspondence, applications, complaints, and other documents. This includes document typing, proofreading, and compiling supporting information from your instructions.</p>
      <ul class="mt-4 space-y-1.5 text-xs text-fg-2 border-t border-line/40 pt-4">
        <li>&bull; Formal letters, statements, and written submissions</li>
        <li>&bull; Document formatting, editing, and bundle assembly</li>
        <li>&bull; Application form preparation and completeness checks</li>
      </ul>
    </div>

    <!-- 02 Dispute Resolution and Case Support -->
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">02</span>
      <h3 class="mt-3 text-xl font-normal text-white">Dispute Resolution &amp; Case Support</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">Practical assistance for individuals and businesses involved in disputes: reviewing documents, preparing formal correspondence, organising evidence chronologies, and drafting settlement proposals.</p>
      <ul class="mt-4 space-y-1.5 text-xs text-fg-2 border-t border-line/40 pt-4">
        <li>&bull; Chronologies, evidence summaries, and event timelines</li>
        <li>&bull; Letters of claim and response correspondence</li>
        <li>&bull; Without-prejudice settlement documentation</li>
      </ul>
    </div>

    <!-- 03 Housing & Landlord-Tenant Matters -->
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">03</span>
      <h3 class="mt-3 text-xl font-normal text-white">Housing &amp; Landlord-Tenant Matters</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">Support with tenancy agreements, deposit dispute documentation, disrepair correspondence, notice review, and written communications between landlords and tenants.</p>
      <ul class="mt-4 space-y-1.5 text-xs text-fg-2 border-t border-line/40 pt-4">
        <li>&bull; Tenancy agreement preparation and administrative review</li>
        <li>&bull; Formal disrepair notices and communications</li>
        <li>&bull; Tenancy deposit scheme dispute evidence preparation</li>
      </ul>
    </div>

    <!-- 04 Employment & Workplace Matters -->
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">04</span>
      <h3 class="mt-3 text-xl font-normal text-white">Employment &amp; Workplace Matters</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">Help preparing grievance letters, disciplinary response documentation, review of employment contract terms, and ACAS early conciliation documentation support.</p>
      <ul class="mt-4 space-y-1.5 text-xs text-fg-2 border-t border-line/40 pt-4">
        <li>&bull; Formal grievance letters and disciplinary responses</li>
        <li>&bull; Employment agreement review and organisation</li>
        <li>&bull; ACAS documentation and conciliation support</li>
      </ul>
    </div>

    <!-- 05 Family & Personal Matters -->
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">05</span>
      <h3 class="mt-3 text-xl font-normal text-white">Family &amp; Personal Matters</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">Assistance with paperwork relating to family matters, divorce application documentation, financial statement organisation (Form E), and parenting plan documentation.</p>
      <ul class="mt-4 space-y-1.5 text-xs text-fg-2 border-t border-line/40 pt-4">
        <li>&bull; Divorce and dissolution application documentation</li>
        <li>&bull; Financial disclosure compilation and organisation</li>
        <li>&bull; Parenting plan drafting and correspondence</li>
      </ul>
    </div>

    <!-- 06 Business & Commercial Legal Services -->
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">06</span>
      <h3 class="mt-3 text-xl font-normal text-white">Business &amp; Commercial Legal</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">Drafting commercial agreements, non-disclosure agreements (NDAs), terms and conditions, supplier contracts, service level agreements, and company secretarial administration.</p>
      <ul class="mt-4 space-y-1.5 text-xs text-fg-2 border-t border-line/40 pt-4">
        <li>&bull; Standard business contracts and supplier agreements</li>
        <li>&bull; Non-disclosure agreements and website terms</li>
        <li>&bull; Company filings, board minutes, and resolutions</li>
      </ul>
    </div>

    <!-- 07 Translation Services -->
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">07</span>
      <h3 class="mt-3 text-xl font-normal text-white">Translation Services</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">Certified and standard document translation in Arabic, Kurdish (Sorani &amp; Kurmanji), and English for legal, commercial, and personal documents.</p>
      <ul class="mt-4 space-y-1.5 text-xs text-fg-2 border-t border-line/40 pt-4">
        <li>&bull; Arabic and Kurdish to English certified translations</li>
        <li>&bull; Official certificates, court papers, and identification</li>
        <li>&bull; Commercial and corporate document translations</li>
      </ul>
    </div>

    <!-- 08 Wills & Wills Drafting -->
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">08</span>
      <h3 class="mt-3 text-xl font-normal text-white">Wills &amp; Wills Drafting</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">Preparation of straightforward and bespoke wills, mirror wills, testamentary wishes, and asset distribution instructions, ensuring your wishes are documented with clarity.</p>
      <ul class="mt-4 space-y-1.5 text-xs text-fg-2 border-t border-line/40 pt-4">
        <li>&bull; Individual and mirror wills for couples</li>
        <li>&bull; Clear beneficiary and executor designations</li>
        <li>&bull; Asset schedules and funeral wish documentation</li>
      </ul>
    </div>

    <!-- 09 Lasting Powers of Attorney -->
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">09</span>
      <h3 class="mt-3 text-xl font-normal text-white">Lasting Powers of Attorney</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">Preparation and registration support for Health &amp; Welfare and Property &amp; Financial Affairs LPAs with the Office of the Public Guardian (OPG).</p>
      <ul class="mt-4 space-y-1.5 text-xs text-fg-2 border-t border-line/40 pt-4">
        <li>&bull; Property &amp; Financial Affairs LPA preparation</li>
        <li>&bull; Health &amp; Welfare LPA preparation and certificate provider</li>
        <li>&bull; Office of the Public Guardian registration filing</li>
      </ul>
    </div>

  </div>

  <!-- 10 Document Legalisation & Notarial (Full Width Callout) -->
  <div class="mt-6 border border-line rounded-2xl p-8 bg-canvas/40 backdrop-blur flex flex-col md:flex-row md:items-center justify-between gap-6">
    <div>
      <span class="text-xs font-mono text-fg-3">10</span>
      <h3 class="mt-1 text-xl font-normal text-white">Document Legalisation &amp; Notarial Coordination</h3>
      <p class="mt-2 text-sm leading-relaxed text-fg-3 max-w-3xl">
        Arranging apostille legalisation with the UK Foreign, Commonwealth &amp; Development Office (FCDO), consular legalisation, and coordination with independent Notaries Public for documents intended for use abroad.
      </p>
    </div>
    <button type="button" data-intake-open="" data-prefill="Document Legalisation inquiry" class="shrink-0 btn-pill-secondary">
      Arrange legalisation &rarr;
    </button>
  </div>
</section>
`;

const section04Solicitor = `
<!-- SECTION 04: SOLICITOR BY APPOINTMENT (Master Second Section 8 UI) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" id="solicitor" aria-labelledby="solicitor-title">
  <span aria-hidden="true" data-ambient-lines="" data-seed="collab-google" data-colors="#EA4335,#FBBC05" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)] pointer-events-none opacity-55"></span>

  <div class="grid gap-12 lg:grid-cols-12 items-center">
    <div class="lg:col-span-7 relative z-10">
      <div>
        <p class="marker"><span class="tabular-nums">04</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>Independent Solicitor Access</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 id="solicitor-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">
        Access to a qualified solicitor <br><span style="color: rgba(255, 255, 255, 0.65);">when you need one.</span>
      </h2>
      <p class="mt-8 text-lg leading-relaxed text-fg-2">
        Where a matter involves reserved legal activities, litigation, formal representation, or specialist legal advice, we arrange an appointment with an independent, qualified solicitor.
      </p>

      <div class="mt-8 space-y-4 text-sm text-fg-2">
        <div class="flex items-start gap-3">
          <span class="text-white font-mono text-xs mt-1">01</span>
          <div>
            <strong class="text-white block">Clear Separation of Roles</strong>
            <span>Elevance provides non-reserved assistance. Reserved legal services are provided independently by authorised, SRA-regulated solicitors.</span>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-white font-mono text-xs mt-1">02</span>
          <div>
            <strong class="text-white block">Seamless Coordination</strong>
            <span>We help prepare your background documentation, chronologies, and instructions so that any consultation with a solicitor is efficient and cost-effective.</span>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-white font-mono text-xs mt-1">03</span>
          <div>
            <strong class="text-white block">Independent Relationship</strong>
            <span>You engage directly with the solicitor for any regulated legal work under their separate terms of engagement and fee structure.</span>
          </div>
        </div>
      </div>

      <div class="mt-10 flex flex-wrap gap-4 items-center">
        <button type="button" data-intake-open="" data-prefill="I need an appointment with an authorised solicitor" class="btn-pill-primary">
          Request solicitor appointment
        </button>
        <a href="#how" class="btn-pill-secondary">
          How our process works &rarr;
        </a>
      </div>
    </div>

    <div class="lg:col-span-5 relative z-10">
      <div class="regulatory-card rounded-2xl p-8 border border-line bg-canvas/40 backdrop-blur space-y-4">
        <div class="flex items-center gap-3 text-xs uppercase tracking-wider text-fg-3 border-b border-line/40 pb-4">
          <span class="h-2 w-2 rounded-full bg-amber-400"></span>
          <span>Regulatory Notice &amp; SRA Scope</span>
        </div>
        <p class="text-xs leading-relaxed text-fg-2">
          Elevance Legal Services Ltd is an independent consultancy providing non-reserved legal support. It is not a solicitors' firm and is not authorised or regulated by the Solicitors Regulation Authority (SRA).
        </p>
        <p class="text-xs leading-relaxed text-fg-3">
          We do not conduct reserved legal activities, litigation, or exercise rights of audience. Any regulated legal services are provided exclusively and independently by authorised solicitors.
        </p>
        <div class="pt-2">
          <span class="inline-block text-[11px] font-mono text-fg-3 bg-white/[0.04] px-3 py-1.5 rounded-md border border-line/60">
            SRA Compliance &middot; Non-Reserved Services
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const section05Support = `
<!-- SECTION 05: WHO WE SUPPORT (Master Second Section 10 UI) -->
<section class="container-studio py-20 relative isolate border-t border-line" id="support" aria-labelledby="support-title">
  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-5">
      <div>
        <p class="marker"><span class="tabular-nums">05</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>Who We Support</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 id="support-title" class="mt-10 font-display text-4xl leading-[1.05] md:text-6xl text-white">
        Here for individuals, families and businesses.
      </h2>
      <p class="mt-6 text-base leading-relaxed text-fg-2">
        Tailored support structured around the specific practical and administrative demands of your situation.
      </p>
    </div>
    <div class="lg:col-span-7 grid gap-6 sm:grid-cols-3">
      
      <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur flex flex-col justify-between">
        <div>
          <h3 class="text-lg font-normal text-white">Individuals &amp; Tenants</h3>
          <p class="mt-3 text-xs leading-relaxed text-fg-3">Housing and tenancy matters, consumer disputes, employment concerns, document preparation, and personal legal affairs.</p>
        </div>
        <div class="mt-6 pt-4 border-t border-line/40">
          <a href="#services" class="text-xs link text-fg-2 hover:text-fg font-medium">Explore individual support &rarr;</a>
        </div>
      </div>

      <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur flex flex-col justify-between">
        <div>
          <h3 class="text-lg font-normal text-white">Families &amp; Future</h3>
          <p class="mt-3 text-xs leading-relaxed text-fg-3">Wills drafting, Lasting Powers of Attorney, family documentation, and planning for peace of mind.</p>
        </div>
        <div class="mt-6 pt-4 border-t border-line/40">
          <a href="#services" class="text-xs link text-fg-2 hover:text-fg font-medium">Explore family planning &rarr;</a>
        </div>
      </div>

      <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur flex flex-col justify-between">
        <div>
          <h3 class="text-lg font-normal text-white">Businesses &amp; Commercial</h3>
          <p class="mt-3 text-xs leading-relaxed text-fg-3">Contract preparation and review, commercial agreements, dispute resolution support, company documentation, and day-to-day legal coordination.</p>
        </div>
        <div class="mt-6 pt-4 border-t border-line/40">
          <a href="#services" class="text-xs link text-fg-2 hover:text-fg font-medium">Explore commercial support &rarr;</a>
        </div>
      </div>

    </div>
  </div>
</section>
`;

const section06Why = `
<!-- SECTION 06: WHY ELEVANCE (Master Second UI Grid) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" id="why" aria-labelledby="why-title">
  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">06</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>Why Elevance</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 id="why-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">
        Support that is clear, <br><span style="color: rgba(255, 255, 255, 0.65);">considered and accountable.</span>
      </h2>
    </div>
    <p class="self-end text-lg leading-relaxed text-fg-2 lg:col-span-5 lg:col-start-8">
      We believe legal services should be accessible, transparent, and centred on your needs. Here is what you can count on when you work with us.
    </p>
  </div>

  <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    
    <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur">
      <span class="text-xs font-mono text-fg-3">01</span>
      <h3 class="mt-3 text-lg font-normal text-white">Practical &amp; Approachable</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">We demystify legal processes and focus on solutions that work for you, avoiding convoluted jargon.</p>
    </div>

    <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur">
      <span class="text-xs font-mono text-fg-3">02</span>
      <h3 class="mt-3 text-lg font-normal text-white">Transparent Fixed Fees</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">We agree on scope and costs upfront before commencing any work. No hourly surprises or runaway billing.</p>
    </div>

    <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur">
      <span class="text-xs font-mono text-fg-3">03</span>
      <h3 class="mt-3 text-lg font-normal text-white">Responsive Communication</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">We keep you informed at every stage of your matter with prompt, clear updates and realistic timelines.</p>
    </div>

    <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur">
      <span class="text-xs font-mono text-fg-3">04</span>
      <h3 class="mt-3 text-lg font-normal text-white">Attention to Detail</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">Thorough preparation, careful document drafting, and meticulous case coordination from start to finish.</p>
    </div>

    <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur">
      <span class="text-xs font-mono text-fg-3">05</span>
      <h3 class="mt-3 text-lg font-normal text-white">Solicitor Access</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">A clear, reliable pathway to an independent qualified solicitor whenever reserved legal activities are required.</p>
    </div>

    <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur">
      <span class="text-xs font-mono text-fg-3">06</span>
      <h3 class="mt-3 text-lg font-normal text-white">Multilingual Support</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">Certified translation and language assistance in Arabic, Kurdish, and other languages for complete peace of mind.</p>
    </div>

  </div>
</section>
`;

// SECTION 07: HOW WE WORK (EXACT AS IS AS SECOND!)
const s7Match = secondHtml.match(/<section[^>]*id="how"[^>]*>([\s\S]*?)<\/section>/i);
const section07How = s7Match ? s7Match[0] : '';

const section08Faq = `
<!-- SECTION 08: FREQUENTLY ASKED QUESTIONS (Master Second FAQ Accordion UI) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" id="faq" aria-labelledby="faq-title">
  <div class="max-w-2xl">
    <div>
      <p class="marker"><span class="tabular-nums">08</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>Questions</p>
      <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
    </div>
    <h2 id="faq-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">Answers before you get started.</h2>
    <p class="mt-4 text-base leading-relaxed text-fg-2 md:text-lg">
      Answers to common questions about our services, pricing, and how we work with you.
    </p>
  </div>

  <div class="mt-16 divide-y divide-line border-y border-line">
    
    <details class="group py-6">
      <summary class="flex cursor-pointer items-center justify-between text-left text-lg font-normal text-white [&::-webkit-details-marker]:hidden">
        <span>What kinds of legal services do you provide?</span>
        <span class="ml-4 shrink-0 text-xl font-light text-fg-3 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
      </summary>
      <div class="mt-4 text-sm leading-relaxed text-fg-2 max-w-3xl">
        We provide non-reserved legal support, including document preparation, case coordination, tenancy dispute paperwork, employment grievance drafting, commercial agreements, wills drafting, Lasting Powers of Attorney, and certified translation. Where your matter requires formal legal representation or reserved activities, we arrange an appointment with an independent SRA-regulated solicitor.
      </div>
    </details>

    <details class="group py-6">
      <summary class="flex cursor-pointer items-center justify-between text-left text-lg font-normal text-white [&::-webkit-details-marker]:hidden">
        <span>Are you a law firm?</span>
        <span class="ml-4 shrink-0 text-xl font-light text-fg-3 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
      </summary>
      <div class="mt-4 text-sm leading-relaxed text-fg-2 max-w-3xl">
        No. Elevance Legal Services Ltd is an independent legal consultancy. We are not a solicitors' practice and are not regulated by the Solicitors Regulation Authority (SRA). We provide services that do not constitute reserved legal activities under the Legal Services Act 2007. Any reserved legal work is undertaken independently by qualified solicitors to whom we refer clients.
      </div>
    </details>

    <details class="group py-6">
      <summary class="flex cursor-pointer items-center justify-between text-left text-lg font-normal text-white [&::-webkit-details-marker]:hidden">
        <span>How does your fee structure work?</span>
        <span class="ml-4 shrink-0 text-xl font-light text-fg-3 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
      </summary>
      <div class="mt-4 text-sm leading-relaxed text-fg-2 max-w-3xl">
        We operate on an agreed fixed-fee basis for all document preparation, case coordination, and translation matters. Following our initial discussion and review of your materials, we provide a written quote specifying the exact scope of work and total fee. You know what you will pay before any work begins — no unexpected fees, hidden extras, or open-ended hourly billing.
      </div>
    </details>

    <details class="group py-6">
      <summary class="flex cursor-pointer items-center justify-between text-left text-lg font-normal text-white [&::-webkit-details-marker]:hidden">
        <span>When would I need a qualified solicitor?</span>
        <span class="ml-4 shrink-0 text-xl font-light text-fg-3 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
      </summary>
      <div class="mt-4 text-sm leading-relaxed text-fg-2 max-w-3xl">
        You may need a qualified solicitor if your matter involves reserved legal activities (such as conducting formal court litigation, appearing as an advocate before certain courts, or reserved probate and conveyancing activities) or if you require specialist formal legal advice or court representation. In such cases, we facilitate a direct, warm referral to an independent SRA-regulated solicitor.
      </div>
    </details>

    <details class="group py-6">
      <summary class="flex cursor-pointer items-center justify-between text-left text-lg font-normal text-white [&::-webkit-details-marker]:hidden">
        <span>Can you help with court proceedings?</span>
        <span class="ml-4 shrink-0 text-xl font-light text-fg-3 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
      </summary>
      <div class="mt-4 text-sm leading-relaxed text-fg-2 max-w-3xl">
        We can help you organise your paperwork, compile evidence chronologies, format witness statements, and assemble court bundles if you are acting as a litigant in person. However, we cannot formally represent you on court records or conduct litigation on your behalf. Where formal legal representation is appropriate, we introduce you to an independent authorised solicitor.
      </div>
    </details>

    <details class="group py-6">
      <summary class="flex cursor-pointer items-center justify-between text-left text-lg font-normal text-white [&::-webkit-details-marker]:hidden">
        <span>How quickly can you get started?</span>
        <span class="ml-4 shrink-0 text-xl font-light text-fg-3 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
      </summary>
      <div class="mt-4 text-sm leading-relaxed text-fg-2 max-w-3xl">
        We reply to all initial enquiries within one business day. Once we have discussed your requirements and agreed on the scope and fixed fee, work typically commences within 24 to 48 hours. Urgent matters can often be accommodated on an accelerated schedule.
      </div>
    </details>

    <details class="group py-6">
      <summary class="flex cursor-pointer items-center justify-between text-left text-lg font-normal text-white [&::-webkit-details-marker]:hidden">
        <span>Do you provide translation services?</span>
        <span class="ml-4 shrink-0 text-xl font-light text-fg-3 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
      </summary>
      <div class="mt-4 text-sm leading-relaxed text-fg-2 max-w-3xl">
        Yes. We offer certified translations for official, commercial, and personal documents, specialising in Arabic, Kurdish (Sorani and Kurmanji), and English. We can also assist with arranging FCDO apostille legalisation and consular certification where documents are intended for use overseas.
      </div>
    </details>

    <details class="group py-6">
      <summary class="flex cursor-pointer items-center justify-between text-left text-lg font-normal text-white [&::-webkit-details-marker]:hidden">
        <span>How do I make an enquiry?</span>
        <span class="ml-4 shrink-0 text-xl font-light text-fg-3 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
      </summary>
      <div class="mt-4 text-sm leading-relaxed text-fg-2 max-w-3xl">
        You can reach us through our online enquiry form, via email at info@elevancelegal.co.uk, or on WhatsApp at +44 (0) 7543 105658. We will discuss your situation, explain how we can help, and provide a clear, upfront fixed-fee quote. The initial consultation is completely free of charge.
      </div>
    </details>

  </div>
</section>
`;

const section09Contact = `
<!-- SECTION 09: CONTACT US / GET IN TOUCH (Master Second Section 11 UI) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" id="contact" aria-labelledby="contact-title">
  <div class="grid gap-12 lg:grid-cols-12">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">09</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>Get in Touch</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 id="contact-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">
        Let’s discuss <br><span style="color: rgba(255, 255, 255, 0.65);">your next step.</span>
      </h2>
      <p class="mt-8 text-lg leading-relaxed text-fg-2">
        Tell us about your situation, and we’ll guide you through the next steps. We reply within one business day, and the first chat is always free.
      </p>

      <div class="mt-10">
        <button type="button" data-intake-open="" class="btn-pill-primary">
          Describe your matter
        </button>
      </div>

      <div class="mt-12 space-y-4 text-sm text-fg-3">
        <p><span class="text-white font-medium">Location:</span> London, United Kingdom &middot; Serving England &amp; Wales</p>
        <p><span class="text-white font-medium">Response time:</span> Within 1 business day &middot; First conversation is free</p>
      </div>
    </div>

    <div class="lg:col-span-5 lg:col-start-8">
      <ul class="divide-y divide-line border-y border-line">
        <li>
          <a href="#contact" data-intake-open="" data-prefill="Schedule a consultation" class="group flex items-center justify-between py-6 text-fg-2 hover:text-fg transition-colors">
            <div>
              <p class="text-xs uppercase tracking-wider text-fg-3">Schedule a meeting</p>
              <p class="mt-1 font-display text-xl text-white group-hover:underline">Arrange an initial consultation</p>
            </div>
            <span class="text-xl transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
        </li>
        <li>
          <a href="https://wa.me/447543105658" target="_blank" rel="noopener" class="group flex items-center justify-between py-6 text-fg-2 hover:text-fg transition-colors">
            <div>
              <p class="text-xs uppercase tracking-wider text-fg-3">WhatsApp</p>
              <p class="mt-1 font-display text-xl text-white group-hover:underline">+44 (0) 7543 105658</p>
            </div>
            <span class="text-xl transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
        </li>
        <li>
          <a href="mailto:info@elevancelegal.co.uk" class="group flex items-center justify-between py-6 text-fg-2 hover:text-fg transition-colors">
            <div>
              <p class="text-xs uppercase tracking-wider text-fg-3">Email</p>
              <p class="mt-1 font-display text-xl text-white group-hover:underline">info@elevancelegal.co.uk</p>
            </div>
            <span class="text-xl transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
        </li>
      </ul>

      <!-- Section Contact Form -->
      <form id="page-contact-form" class="mt-8 border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur space-y-4">
        <p class="text-sm font-medium text-white">Send us a direct message</p>
        <div>
          <label for="contact-name" class="block text-xs text-fg-3 mb-1">Your Name</label>
          <input type="text" id="contact-name" name="name" required class="w-full rounded-lg border border-line bg-canvas/60 px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="e.g. Sarah Jenkins">
        </div>
        <div class="grid gap-3 sm:grid-cols-2">
          <div>
            <label for="contact-email" class="block text-xs text-fg-3 mb-1">Email Address</label>
            <input type="email" id="contact-email" name="email" required class="w-full rounded-lg border border-line bg-canvas/60 px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="sarah@example.com">
          </div>
          <div>
            <label for="contact-phone" class="block text-xs text-fg-3 mb-1">Phone (Optional)</label>
            <input type="tel" id="contact-phone" name="phone" class="w-full rounded-lg border border-line bg-canvas/60 px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="+44 7...">
          </div>
        </div>
        <div>
          <label for="contact-nature" class="block text-xs text-fg-3 mb-1">Nature of Enquiry</label>
          <select id="contact-nature" name="nature" class="w-full rounded-lg border border-line bg-canvas/80 px-3.5 py-2.5 text-sm text-fg focus:border-fg focus:outline-none">
            <option value="Document Preparation">Document Preparation &amp; Support</option>
            <option value="Dispute Resolution">Dispute Resolution and Case Support</option>
            <option value="Housing / Tenancy">Housing &amp; Landlord-Tenant Matters</option>
            <option value="Employment">Employment &amp; Workplace Matters</option>
            <option value="Family / Personal">Family &amp; Personal Matters</option>
            <option value="Commercial / Business">Business &amp; Commercial Legal</option>
            <option value="Translation">Translation Services (Arabic / Kurdish)</option>
            <option value="Wills / LPA">Wills &amp; Lasting Powers of Attorney</option>
            <option value="Legalisation">Document Legalisation &amp; Notarial</option>
            <option value="Solicitor Appointment">Solicitor by Appointment</option>
            <option value="Other">Other Legal Inquiry</option>
          </select>
        </div>
        <div>
          <label for="contact-message" class="block text-xs text-fg-3 mb-1">How can we help?</label>
          <textarea id="contact-message" name="message" rows="3" required class="w-full rounded-lg border border-line bg-canvas/60 px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="Briefly describe what you would like to achieve..."></textarea>
        </div>
        <button type="submit" id="contact-submit-btn" class="w-full btn-pill-primary py-3">
          SUBMIT ENQUIRY
        </button>
        <div id="contact-success-msg" class="hidden text-center text-xs text-emerald-400 font-medium py-2">
          &check; Thank you! Your enquiry has been received. We will reply within one business day.
        </div>
      </form>
    </div>
  </div>
</section>
`;

const section10Commitment = `
<!-- SECTION 10: OUR COMMITMENT (Master Second UI Manifesto Card) -->
<section class="container-studio py-20 relative isolate border-t border-line" id="commitment" aria-labelledby="commitment-title">
  <div class="border border-line rounded-3xl p-8 md:p-14 bg-canvas/40 backdrop-blur max-w-4xl mx-auto text-center relative overflow-hidden">
    <span aria-hidden="true" data-ambient-lines="" data-seed="commitment-pitch" data-colors="#ff9a4d,#ffd25b" class="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)] pointer-events-none opacity-40"></span>
    
    <p class="marker text-center"><span class="tabular-nums">10</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>Our Commitment</p>
    <h2 id="commitment-title" class="mt-6 font-display text-4xl md:text-5xl text-white">
      Our commitment to you.
    </h2>
    <p class="mt-6 text-base md:text-lg leading-relaxed text-fg-2 max-w-2xl mx-auto">
      We treat every enquiry with care, confidentiality, and professional integrity. We take the time to understand your situation in detail, keeping you informed and ensuring that you understand the services we provide and the fees involved.
    </p>
    <div class="mt-8 flex justify-center">
      <button type="button" data-intake-open="" data-prefill="Tell us about your requirements" class="btn-pill-primary">
        Discuss your requirements &rarr;
      </button>
    </div>
  </div>
</section>
`;

// 3. ASSEMBLE ALL SECTIONS FOR THE MAIN CONTAINER
const allThirdSections = [
  section01Welcome,
  section02Story,
  section03Services,
  section04Solicitor,
  section05Support,
  section06Why,
  section07How,
  section08Faq,
  section09Contact,
  section10Commitment
].join('\n\n');

// 4. TRANSFORM SECOND.HTML INTO THIRD.HTML
let html = secondHtml;

// Replace Desktop Nav
html = html.replace(/<nav aria-label="Navigation" class="site-nav-desktop">[\s\S]*?<\/nav>/i, desktopNavReplacement);

// Replace Mobile Drawer links
html = html.replace(/<ul class="space-y-4 font-display text-2xl">[\s\S]*?<\/ul>/i, mobileDrawerLinksReplacement);

// Replace main content after Hero (#top) with allThirdSections
const topEndIdx = html.indexOf('</section>', html.indexOf('id="top"'));
if (topEndIdx === -1) {
  console.error('[ERROR] Could not find id="top" section in second.html');
  process.exit(1);
}

const mainEndIdx = html.indexOf('</main>');
if (mainEndIdx === -1) {
  console.error('[ERROR] Could not find </main> in second.html');
  process.exit(1);
}

// Slice from start to end of #top section, insert allThirdSections, then continue from </main>
html = html.slice(0, topEndIdx + 10) + '\n\n' + allThirdSections + '\n\n' + html.slice(mainEndIdx);

// Replace Footer Navigation links so they align with Third's modules
html = html.replace(/<!-- Navigation on Right -->[\s\S]*?<\/div>/i, footerNavReplacement);

// Ensure canonical and title are updated for third
html = html.replace(/<link rel="canonical"[^>]*>/i, '<link rel="canonical" href="https://www.elevancelegal.co.uk/third/">');
html = html.replace(/<title>[\s\S]*?<\/title>/i, '<title>Elevance Legal Services — Practical Legal Support &amp; Document Preparation</title>');

// Fix any ESM export in inline script to avoid SyntaxError in non-module context
html = html.replace('export{wt as a,mt as f};', 'window.wt = wt; window.mt = mt;');

// Add section contact form script if not already present
const formScript = `
<script>
// Section 09 Contact Form Handler
(function() {
  const form = document.getElementById("page-contact-form");
  if (!form || form.__bound) return;
  form.__bound = true;
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const btn = document.getElementById("contact-submit-btn");
    const successMsg = document.getElementById("contact-success-msg");
    if (btn) {
      btn.disabled = true;
      btn.innerText = "Submitting...";
    }
    const payload = {
      name: document.getElementById("contact-name")?.value || "",
      email: document.getElementById("contact-email")?.value || "",
      phone: document.getElementById("contact-phone")?.value || "",
      nature: document.getElementById("contact-nature")?.value || "",
      question: "[" + (document.getElementById("contact-nature")?.value || "") + "] " + 
                (document.getElementById("contact-message")?.value || "") + 
                (document.getElementById("contact-phone")?.value ? " (Phone: " + document.getElementById("contact-phone").value + ")" : "")
    };
    fetch("contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload)
    }).catch(function() {}).finally(function() {
      form.reset();
      if (btn) {
        btn.disabled = false;
        btn.innerText = "SUBMIT ENQUIRY";
      }
      if (successMsg) {
        successMsg.classList.remove("hidden");
        setTimeout(function() { successMsg.classList.add("hidden"); }, 8000);
      }
    });
  });
})();
</script>
`;

if (!html.includes('page-contact-form') || !html.includes('__bound')) {
  html = html.replace('</body>', `${formScript}\n</body>`);
}

// Write outputs to third/index.html and third.html
const outThirdIndex = path.join(__dirname, 'third', 'index.html');
const outThirdRoot = path.join(__dirname, 'third.html');

fs.writeFileSync(outThirdIndex, html, 'utf8');
fs.writeFileSync(outThirdRoot, html, 'utf8');

console.log('[SUCCESS] Successfully rebuilt /third/ based on master second:');
console.log(' - ' + outThirdIndex);
console.log(' - ' + outThirdRoot);
