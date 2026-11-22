/**
 * generate_third_master_match.js
 * 
 * Strict 1-to-1 UI Component Parity with Master: https://www.elevancelegal.co.uk/second/
 * Preserving 100% of the customer's text from Elevance_Website_Content_v2.docx
 */

const fs = require('fs');
const path = require('path');

const secondPath = path.join(__dirname, 'second.html');
const secondHtml = fs.readFileSync(secondPath, 'utf8');

// -------------------------------------------------------------
// 1. DESKTOP NAVIGATION BAR (Aligned with Third's Modules)
// -------------------------------------------------------------
const desktopNav = `
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
                  <p class="eyebrow uppercase tracking-wider text-xs font-semibold text-fg-3">Estates &amp; Powers</p>
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

// -------------------------------------------------------------
// 2. MOBILE DRAWER NAVIGATION
// -------------------------------------------------------------
const mobileDrawerNav = `
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

// -------------------------------------------------------------
// 3. SECTION COMPONENTS (EXACT 1-TO-1 MASTER SECOND UI)
// -------------------------------------------------------------

// Section 01: Welcome (Master second sec_1_goals UI component)
const sec01Welcome = `
<!-- SECTION 01: WELCOME (Master Second UI) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" aria-labelledby="welcome-title" id="welcome">
  <span aria-hidden="true" data-ambient-lines="" data-seed="welcome-pitch" data-colors="#ff9a4d,#ffd25b" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)] pointer-events-none opacity-55"></span>

  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">01</span><span class="mx-3 text-fg-3" aria-hidden="true">—</span>Welcome</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 id="welcome-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">
        Legal support, <br><span style="color: rgba(255, 255, 255, 0.65);">centred on your needs.</span>
      </h2>
    </div>
    <div class="self-end text-lg leading-relaxed text-fg-2 lg:col-span-5 lg:col-start-8 space-y-4">
      <p>
        Practical document preparation, case coordination, and administrative assistance for individuals, families, and businesses across England and Wales.
      </p>
      <p class="text-base text-fg-3">
        We listen to your concerns, explain how we can help, and work towards practical solutions tailored to your circumstances with clear fixed-fee pricing.
      </p>
      <div class="pt-4 flex flex-wrap gap-4 items-center">
        <button type="button" data-intake-open="" data-prefill="I would like to make an enquiry" class="btn-pill-primary">
          Make an enquiry
        </button>
        <a href="#services" class="btn-pill-secondary">
          View our services &rarr;
        </a>
      </div>
    </div>
  </div>
</section>
`;

// Section 02: Our Story (Master second UI component)
const sec02Story = `
<!-- SECTION 02: OUR STORY (Master Second UI) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" aria-labelledby="story-title" id="story">
  <span aria-hidden="true" data-ambient-lines="" data-seed="story-pitch" data-colors="#5b8cff,#9b6bff" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)] pointer-events-none opacity-55"></span>

  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">02</span><span class="mx-3 text-fg-3" aria-hidden="true">—</span>Our Story</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 id="story-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">
        A more approachable way <br><span style="color: rgba(255, 255, 255, 0.65);">to navigate legal matters.</span>
      </h2>
    </div>
    <div class="self-end text-lg leading-relaxed text-fg-2 lg:col-span-5 lg:col-start-8 space-y-4">
      <p>
        Elevance Legal Services was established with a clear mission: to provide practical, accessible, and transparent legal assistance to individuals, families, and businesses across England and Wales. We believe that legal support should not feel distant, intimidating, or prohibitively expensive.
      </p>
      <p class="text-base text-fg-3">
        Our aim is to make legal processes straightforward and manageable, whether you are resolving a dispute, preparing essential documents, or seeking administrative coordination for complex affairs.
      </p>
    </div>
  </div>

  <div class="mt-16 grid gap-6 sm:grid-cols-3">
    <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur">
      <span class="text-xs font-mono text-fg-3">01</span>
      <h3 class="mt-3 text-lg font-normal text-white">Clarity</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">Clear communication without legal jargon. We explain your options in plain language.</p>
    </div>
    <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur">
      <span class="text-xs font-mono text-fg-3">02</span>
      <h3 class="mt-3 text-lg font-normal text-white">Accessibility</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">Practical, responsive support when you need it, delivered with empathy and efficiency.</p>
    </div>
    <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur">
      <span class="text-xs font-mono text-fg-3">03</span>
      <h3 class="mt-3 text-lg font-normal text-white">Client-Centred</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">Solutions designed around your specific situation, priorities, and budget.</p>
    </div>
  </div>
</section>
`;

// Section 03: Our Services (EXACT sec_6_solutions.html from master second with hairline-grid)
const sec03Services = `
<!-- SECTION 03: SERVICES (Exact Master Second Hairline Grid UI) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" id="services">
  <!-- Google-Inspired Blue & Green Ambient Sine Wave -->
  <span aria-hidden="true" data-ambient-lines="" data-seed="services-google" data-colors="#4285F4,#34A853" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)] pointer-events-none opacity-55"></span>

  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">03</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>Our Services</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl">Practical support for everyday needs.</h2>
    </div>
    <p class="self-end text-lg leading-relaxed text-fg-2 lg:col-span-5 lg:col-start-8">
      We provide practical document preparation, administrative assistance and related support services for individuals and businesses. Whether you need help preparing correspondence, organising tenancy documents, managing business paperwork or arranging document translations, our aim is to make the process straightforward and efficient. We explain the scope of our services and agree our fees before commencing work.
    </p>
  </div>

  <div class="mt-16 grid hairline-grid sm:grid-cols-2 lg:grid-cols-3">
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">01</span>
      <h3 class="mt-3 text-xl font-normal text-white">Document Preparation &amp; Support</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We assist with preparing, formatting and organising correspondence, applications, complaints and other documents, including document typing, proofreading, and compiling supporting information from your instructions.</p>
    </div>
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">02</span>
      <h3 class="mt-3 text-xl font-normal text-white">Dispute Resolution and Case Support</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">Practical assistance for individuals and businesses involved in disputes: reviewing documents, preparing formal correspondence, organising evidence, and drafting settlement proposals without unnecessary escalation.</p>
    </div>
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">03</span>
      <h3 class="mt-3 text-xl font-normal text-white">Housing &amp; Landlord-Tenant Matters</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">Support on tenancy agreements, rent arrears, deposit disputes, disrepair, and housing correspondence. Reviewing documents, explaining rights and obligations, and assisting with dispute negotiations.</p>
    </div>
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">04</span>
      <h3 class="mt-3 text-xl font-normal text-white">Employment &amp; Workplace Matters</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">Practical assistance for employees and employers: employment contracts, grievances, disciplinary procedures, workplace disputes, and settlement agreement coordination.</p>
    </div>
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">05</span>
      <h3 class="mt-3 text-xl font-normal text-white">Family &amp; Personal Matters</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">Sensitive and practical assistance with separation, divorce-related documentation, financial arrangements, and family disputes with clarity, discretion and understanding.</p>
    </div>
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">06</span>
      <h3 class="mt-3 text-xl font-normal text-white">Business &amp; Commercial Legal Services</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">Commercial assistance for businesses and entrepreneurs: business contracts, service agreements, non-disclosure agreements (NDAs), commercial leases, and contractual disputes.</p>
    </div>
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">07</span>
      <h3 class="mt-3 text-xl font-normal text-white">Translation Services</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">Arabic and Kurdish to English translations of personal, business, and official documents, including certified translations compliant with UK receiving bodies.</p>
    </div>
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">08</span>
      <h3 class="mt-3 text-xl font-normal text-white">Wills &amp; Wills Drafting</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">Assistance with preparing straightforward wills, helping individuals record their wishes, estate distribution arrangements, and explaining signing and witnessing requirements.</p>
    </div>
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">09</span>
      <h3 class="mt-3 text-xl font-normal text-white">Lasting Powers of Attorney</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">Preparing Lasting Powers of Attorney (LPAs) for Property &amp; Financial Affairs and Health &amp; Welfare, including form completion and Office of the Public Guardian registration guidance.</p>
    </div>
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02] sm:col-span-2 lg:col-span-3">
      <span class="text-xs font-mono text-fg-3">10</span>
      <h3 class="mt-3 text-xl font-normal text-white">Document Legalisation &amp; Notarial Coordination</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">Administrative assistance with documents for UK and overseas use: coordinating appointments with qualified notaries, arranging translations, and assisting with FCDO apostille and legalisation procedures.</p>
    </div>
  </div>
</section>
`;

// Section 04: Solicitor by Appointment (EXACT sec_8_collaboration.html with id="solicitor")
const sec04Solicitor = `
<!-- SECTION 04: SOLICITOR BY APPOINTMENT (Exact Master Second Section 8 UI) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" id="solicitor">
  <!-- Google-Inspired Red & Yellow Ambient Sine Wave -->
  <span aria-hidden="true" data-ambient-lines="" data-seed="collab-google" data-colors="#EA4335,#FBBC05" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)] pointer-events-none opacity-55"></span>

  <div class="grid gap-12 lg:grid-cols-12 items-center">
    <div class="lg:col-span-7 relative z-10">
      <div>
        <p class="marker"><span class="tabular-nums">04</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>Solicitor by appointment</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 class="mt-10 font-display text-4xl leading-tight md:text-6xl text-white">
        Access to a qualified solicitor <br><span style="color: rgba(255, 255, 255, 0.65);">when you need one.</span>
      </h2>
      <p class="mt-6 text-base leading-relaxed text-fg-2 md:text-lg">
        While Elevance Legal Services provides a range of legal services, we recognise that some matters may require the advice or assistance of a qualified solicitor.
      </p>
      <p class="mt-4 text-base leading-relaxed text-fg-3">
        Appointments with a solicitor may be available by prior arrangement, depending on the nature of your enquiry and availability. Any solicitor services are provided separately, subject to the solicitor's own terms of engagement and fees.
      </p>
      <div class="mt-8 flex flex-wrap gap-4">
        <button type="button" data-intake-open="" data-prefill="I would like to ask about an appointment with an authorised solicitor" class="btn-pill-primary">
          Ask about a solicitor appointment
        </button>
      </div>
    </div>

    <div class="lg:col-span-5 relative z-10">
      <div class="regulatory-card rounded-2xl p-8 border border-line bg-canvas/40 backdrop-blur">
        <h3 class="text-xs uppercase tracking-wider text-fg-3 font-mono">Regulatory Information</h3>
        <p class="mt-4 text-sm leading-relaxed text-white">
          Elevance Legal Services Ltd is an independent provider of legal services and is not a solicitors' firm. We are not authorised or regulated by the Solicitors Regulation Authority (SRA).
        </p>
        <p class="mt-3 text-xs leading-relaxed text-fg-3">
          We do not conduct litigation, exercise rights of audience, or undertake reserved legal activities under the Legal Services Act 2007. Where solicitor services are required, these are provided independently by authorised solicitors.
        </p>
        <div class="mt-6 pt-4 border-t border-line">
          <span class="text-xs text-fg-3">Company No. 16186851 &middot; London, United Kingdom</span>
        </div>
      </div>
    </div>
  </div>
</section>
`;

// Section 05: Why Elevance (Master second card UI matching user's image 3)
const sec05Why = `
<!-- SECTION 05: WHY ELEVANCE (Master Second Card UI matching screenshot) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" id="why" aria-labelledby="why-title">
  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">05</span><span class="mx-3 text-fg-3" aria-hidden="true">—</span>Why Elevance</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 id="why-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">
        Support that is <br>clear, <br><span style="color: rgba(255, 255, 255, 0.65);">considered and accountable.</span>
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

// Section 06: How We Work (EXACT 100% AS IS FROM second.html sec_7_how.html)
const sec06How = `
<!-- SECTION 06: HOW WE WORK (Exact 100% As Is Master Second UI) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" id="how">
  <!-- Google-Inspired Green & Yellow Ambient Sine Wave -->
  <span aria-hidden="true" data-ambient-lines="" data-seed="how-google" data-colors="#34A853,#FBBC05" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)] pointer-events-none opacity-55"></span>

  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">06</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>How we work</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl">A straightforward journey from enquiry to next steps.</h2>
    </div>
    <p class="self-end text-lg leading-relaxed text-fg-2 lg:col-span-5 lg:col-start-8">
      No open-ended clocks. We listen, assess the documents, quote upfront, and coordinate every step transparently.
    </p>
  </div>

  <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
    <div class="process-card rounded-2xl p-6">
      <span class="text-3xl font-display text-fg-3">1</span>
      <h3 class="mt-5 text-lg font-normal text-white">Initial Conversation</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">You contact us and share what you wish to achieve. We discuss the background of your enquiry, explain how we can help, and confirm if we are the right fit.</p>
    </div>
    <div class="process-card rounded-2xl p-6">
      <span class="text-3xl font-display text-fg-3">2</span>
      <h3 class="mt-5 text-lg font-normal text-white">Enquiry Assessment</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">We review relevant documents and information to determine the scope of assistance, and identify if any aspects require specialist advice or solicitor referral.</p>
    </div>
    <div class="process-card rounded-2xl p-6">
      <span class="text-3xl font-display text-fg-3">3</span>
      <h3 class="mt-5 text-lg font-normal text-white">Clear Engagement</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">We provide a written scope of work, timeline, and agreed fixed fee before commencing. No unexpected charges or runaway hourly rates.</p>
    </div>
    <div class="process-card rounded-2xl p-6">
      <span class="text-3xl font-display text-fg-3">4</span>
      <h3 class="mt-5 text-lg font-normal text-white">Preparation &amp; Coordination</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">We prepare your documents, compile evidence chronologies, or coordinate translations, keeping you updated throughout the process.</p>
    </div>
    <div class="process-card rounded-2xl p-6">
      <span class="text-3xl font-display text-fg-3">5</span>
      <h3 class="mt-5 text-lg font-normal text-white">Solicitor by Appointment</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">Where reserved legal activities, formal court litigation, or specialist advice are needed, we arrange an appointment with an independent SRA-regulated solicitor.</p>
    </div>
  </div>
</section>
`;

// Section 07: Questions / FAQs (EXACT sec_9_faq.html from master second)
const sec07Faq = `
<!-- SECTION 07: QUESTIONS (Exact Master Second FAQ UI) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" id="faq">

  <div class="max-w-2xl">
    <div>
      <p class="marker"><span class="tabular-nums">07</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>Questions</p>
      <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
    </div>
    <h2 class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl">Frequently asked.</h2>
    <p class="mt-4 text-base leading-relaxed text-fg-2 md:text-lg">
      Answers to common questions about our services, pricing, and how we work with you.
    </p>
  </div>

  <div class="mt-16 divide-y divide-line border-y border-line">
    <details class="group py-6" data-lane-hot="" data-flow-step="">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>What kind of services does Elevance Legal Services provide?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        We provide practical document preparation, administrative case coordination, and support services across several areas, including contracts, housing, employment, family matters, wills, powers of attorney, translation and document legalisation.
      </p>
    </details>

    <details class="group py-6" data-lane-hot="" data-flow-step="">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>Are you a law firm?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        No. Elevance Legal Services Ltd is an independent legal consultancy. We are not a law firm of solicitors and are not regulated by the Solicitors Regulation Authority (SRA). We provide services that do not constitute reserved legal activities under the Legal Services Act 2007. Any reserved legal work is undertaken independently by qualified solicitors to whom we refer clients.
      </p>
    </details>

    <details class="group py-6" data-lane-hot="" data-flow-step="">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>How does your fee structure work?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        We believe legal support should be transparent and predictable. For most matters, we agree a clear fixed fee before starting work, based on the scope and complexity of the task. There are no hidden fees or unexpected charges.
      </p>
    </details>

    <details class="group py-6" data-lane-hot="" data-flow-step="">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>When would I need a qualified solicitor?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        You may need a qualified solicitor if your matter involves reserved legal activities (such as conducting formal court litigation, appearing as an advocate before certain courts, or reserved probate and conveyancing activities) or if you require specialist formal legal advice or court representation. In such cases, we facilitate a direct, warm referral to an independent SRA-regulated solicitor.
      </p>
    </details>

    <details class="group py-6" data-lane-hot="" data-flow-step="">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>Can you help with court proceedings?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        We can help you organise your paperwork, compile evidence chronologies, format witness statements, and assemble court bundles if you are acting as a litigant in person. However, we cannot formally represent you on court records or conduct litigation on your behalf. Where formal legal representation is appropriate, we introduce you to an independent authorised solicitor.
      </p>
    </details>

    <details class="group py-6" data-lane-hot="" data-flow-step="">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>How quickly can you get started?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        We reply to all initial enquiries within one business day. Once we have discussed your requirements and agreed on the scope and fixed fee, work typically commences within 24 to 48 hours. Urgent matters can often be accommodated on an accelerated schedule.
      </p>
    </details>

    <details class="group py-6" data-lane-hot="" data-flow-step="">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>Do you provide translation services?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        Yes. We offer certified translations for official, commercial, and personal documents, specialising in Arabic, Kurdish (Sorani and Kurmanji), and English. We can also assist with arranging FCDO apostille legalisation and consular certification where documents are intended for use overseas.
      </p>
    </details>

    <details class="group py-6" data-lane-hot="" data-flow-step="">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>How do I make an enquiry?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        You can reach us through our online enquiry form, via email at info@elevancelegal.co.uk, or on WhatsApp at +44 (0) 7543 105658. We will discuss your situation, explain how we can help, and provide a clear, upfront fixed-fee quote. The initial consultation is completely free of charge.
      </p>
    </details>
  </div>
</section>
`;

// Section 08: Who We Support & Our Commitment Callout (EXACT sec_10_support.html with Our Commitment above Contact!)
const sec08Support = `
<!-- SECTION 08: WHO WE SUPPORT & OUR COMMITMENT (Exact Master Second Section 10 UI) -->
<section class="container-studio py-20 relative isolate border-t border-line" id="support">
  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-5">
      <div>
        <p class="marker"><span class="tabular-nums">08</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>Who we support</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 class="mt-10 font-display text-4xl leading-[1.05] md:text-6xl text-white">Here for individuals, families and businesses.</h2>
    </div>
    <div class="lg:col-span-7 grid gap-6 sm:grid-cols-2">
      <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur">
        <h3 class="text-lg font-normal text-white">Individuals</h3>
        <p class="mt-3 text-xs leading-relaxed text-fg-3">Practical legal assistance with personal matters, disputes, agreements and legal documentation, helping you understand your options and make informed decisions.</p>
      </div>
      <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur">
        <h3 class="text-lg font-normal text-white">Families</h3>
        <p class="mt-3 text-xs leading-relaxed text-fg-3">Sensitive and approachable assistance with family-related matters, wills, powers of attorney and personal legal documentation.</p>
      </div>
      <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur">
        <h3 class="text-lg font-normal text-white">Tenants &amp; Landlords</h3>
        <p class="mt-3 text-xs leading-relaxed text-fg-3">Legal support with tenancy agreements, rent arrears, deposit disputes, disrepair concerns and landlord-tenant disagreements.</p>
      </div>
      <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur">
        <h3 class="text-lg font-normal text-white">Businesses &amp; Entrepreneurs</h3>
        <p class="mt-3 text-xs leading-relaxed text-fg-3">Commercial contract support, dispute resolution, workplace documentation and practical legal assistance to help your business operate with confidence.</p>
      </div>
    </div>
  </div>

  <!-- Our Commitment Callout (Exact Master Second Component - Above Get in Touch!) -->
  <div class="mt-16 rounded-2xl border border-line bg-canvas/60 p-8 md:p-10 text-center max-w-4xl mx-auto backdrop-blur" id="commitment">
    <p class="text-xs uppercase tracking-widest text-fg-3 font-mono">Our commitment</p>
    <p class="mt-4 text-xl md:text-2xl font-light text-white leading-relaxed">
      Accessible, approachable and practical legal support. We believe legal assistance should be straightforward, transparent and centred on the people we support.
    </p>
  </div>
</section>
`;

// Section 09: Contact Us / Get in Touch (EXACT sec_11_contact.html from master second!)
const sec09Contact = `
<!-- SECTION 09: GET IN TOUCH (Exact Master Second Section 11 UI) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" id="contact">
  <div class="grid gap-12 lg:grid-cols-12">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">09</span><span class="mx-3 text-fg-3" aria-hidden="true">—</span>Get in touch</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">Let’s build what’s next.</h2>
      <button type="button" data-intake-open="" class="btn-pill-primary mt-12">
        Describe your matter
      </button>
    </div>

    <div class="lg:col-span-5 lg:col-start-8">
      <ul class="divide-y divide-line border-y border-line">
        <li>
          <a href="mailto:info@elevancelegal.co.uk" class="flex items-center justify-between gap-4 py-5 hover:text-fg-2 transition-colors">
            <span class="text-sm font-medium text-white">Mail us</span>
            <span class="text-sm text-fg-3">info@elevancelegal.co.uk</span>
          </a>
        </li>
        <li>
          <a href="https://wa.me/447543105658" target="_blank" rel="noopener" class="flex items-center justify-between gap-4 py-5 hover:text-fg-2 transition-colors">
            <span class="text-sm font-medium text-white">WhatsApp</span>
            <span class="text-sm text-fg-3 font-mono">+44 7543 105658 &rarr;</span>
          </a>
        </li>
        <li>
          <a href="tel:+447543105658" class="flex items-center justify-between gap-4 py-5 hover:text-fg-2 transition-colors">
            <span class="text-sm font-medium text-white">Telephone</span>
            <span class="text-sm text-fg-3 font-mono">+44 7543 105658</span>
          </a>
        </li>
      </ul>
      <p class="mt-8 text-base leading-relaxed text-fg-2">
        Send a WhatsApp or an email, or just call. We reply within one business day. The first conversation (20 to 30 minutes) is free, with no obligation.
      </p>
      <a href="#how" class="mt-4 inline-block text-sm link text-fg-2 hover:text-fg transition-colors">
        We listen first: how it works &rarr;
      </a>
    </div>
  </div>
</section>
`;

// Site Footer (EXACT master footer from second.html with third's navigation links!)
const siteFooter = `
<!-- SITE FOOTER (Exact Master Second Footer with Third Navigation Links) -->
<footer class="border-t border-line">
  <div class="container-studio grid gap-12 py-16 md:grid-cols-12">
    <!-- About Company on Left -->
    <div class="md:col-span-7">
      <a href="#top" class="logo-container inline-flex transition-transform hover:opacity-90" aria-label="Elevance Legal Services, Home">
        <div class="logo-box">E</div>
        <div class="logo-text">
          <span class="logo-title">Elevance</span>
          <span class="logo-sub">LEGAL SERVICES</span>
        </div>
      </a>
      <p class="mt-8 max-w-2xl text-base leading-relaxed text-fg-2 font-light">
        Elevance Legal Services Ltd is an independent legal consultancy in London, founded to bring clarity to complexity. We help individuals, families and entrepreneurs with document preparation, case coordination, wills, powers of attorney and certified translation, working alongside authorised, SRA-regulated solicitors where reserved legal activities are needed.
      </p>
    </div>

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
    </div>

    <!-- Contact & Follow Icons on Right -->
    <div class="space-y-8 md:col-span-3">
      <div>
        <p class="eyebrow uppercase tracking-wider text-xs font-semibold text-fg-3">Contact</p>
        <ul class="mt-4 space-y-2 text-sm text-fg-3">
          <li><a class="hover:text-fg hover:underline transition-colors" href="#contact" data-intake-open="" data-prefill="Schedule a consultation">Schedule a call</a></li>
          <li><a class="hover:text-[#25d366] hover:underline transition-colors" href="https://wa.me/447543105658" target="_blank" rel="noopener">WhatsApp</a></li>
          <li><a class="hover:text-fg hover:underline transition-colors" href="mailto:info@elevancelegal.co.uk">info@elevancelegal.co.uk</a></li>
        </ul>
      </div>
      <div>
        <p class="eyebrow uppercase tracking-wider text-xs font-semibold text-fg-3">Follow</p>
        <ul class="mt-4 space-y-2.5 text-sm text-fg-3">
          <li>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener" class="flex items-center gap-2.5 hover:text-fg transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener" class="flex items-center gap-2.5 hover:text-fg transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
              </svg>
              <span>YouTube</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener" class="flex items-center gap-2.5 hover:text-fg transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://x.com/" target="_blank" rel="noopener" class="flex items-center gap-2.5 hover:text-fg transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>X (Twitter)</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="container-studio grid gap-6 border-t border-line py-8 text-xs leading-relaxed text-fg-3 md:grid-cols-2">
    <div class="space-y-2">
      <p>
        <span class="text-fg-2 font-medium">Elevance Legal Services Ltd</span> · London, United Kingdom · Company No. 16186851 · Registered in England and Wales
      </p>
      <p>
        <span class="text-fg-2 font-medium">Regulatory Notice</span> · Elevance Legal Services Ltd is an independent consultancy and not a law firm. Reserved legal activities are conducted independently by authorised solicitors regulated by the Solicitors Regulation Authority (SRA).
      </p>
    </div>
    <div class="flex flex-wrap gap-x-6 gap-y-2 md:justify-end items-center">
      <span>© 2026 Elevance Legal Services Ltd. All rights reserved.</span>
      <a class="hover:underline hover:text-fg" href="#contact" data-intake-open="" data-prefill="Privacy Policy inquiry">Privacy policy</a>
      <a class="hover:underline hover:text-fg" href="#contact" data-intake-open="" data-prefill="Terms of Service inquiry">Website terms</a>
      <a class="hover:underline hover:text-fg cursor-pointer" href="#top" data-scroll-to-top="">Back to top &uarr;</a>
    </div>
  </div>
</footer>
`;

// COMBINE ALL SECTIONS IN EXACT MASTER SECOND ORDER
const allSections = [
  sec01Welcome,
  sec02Story,
  sec03Services,
  sec04Solicitor,
  sec05Why,
  sec06How,
  sec07Faq,
  sec08Support,
  sec09Contact,
  siteFooter
].join('\n\n');

// -------------------------------------------------------------
// 4. ASSEMBLE COMPLETE DOCUMENT
// -------------------------------------------------------------
let html = secondHtml;

// Replace Desktop Nav
html = html.replace(/<nav aria-label="Navigation" class="site-nav-desktop">[\s\S]*?<\/nav>/i, desktopNav);

// Replace Mobile Drawer links
html = html.replace(/<ul class="space-y-4 font-display text-2xl">[\s\S]*?<\/ul>/i, mobileDrawerNav);

// Slice after Hero #top, replace everything up to </main>
const topEnd = html.indexOf('</section>', html.indexOf('id="top"'));
const mainEnd = html.indexOf('</main>');

html = html.slice(0, topEnd + 10) + '\n\n' + allSections + '\n\n' + html.slice(mainEnd);

// Update title and canonical
html = html.replace(/<link rel="canonical"[^>]*>/i, '<link rel="canonical" href="https://www.elevancelegal.co.uk/third/">');
html = html.replace(/<title>[\s\S]*?<\/title>/i, '<title>Elevance Legal Services — Practical Legal Support &amp; Document Preparation</title>');

// Fix any ESM export
html = html.replace('export{wt as a,mt as f};', 'window.wt = wt; window.mt = mt;');

// Write out to third/index.html and third.html
const outThirdIndex = path.join(__dirname, 'third', 'index.html');
const outThirdRoot = path.join(__dirname, 'third.html');

fs.writeFileSync(outThirdIndex, html, 'utf8');
fs.writeFileSync(outThirdRoot, html, 'utf8');

console.log('[SUCCESS] Rebuilt /third/ with 100% master second UI and site footer restored:');
console.log(' - ' + outThirdIndex);
console.log(' - ' + outThirdRoot);
