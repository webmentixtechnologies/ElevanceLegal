/**
 * apply_exact_benchmark_copy.js
 * 
 * Replaces all copy on /third/ with the EXACT benchmark copy provided by the user.
 * Retains 100% of second.html's crisp UI components, frosted glass cards, hairline grids, and typography.
 */

const fs = require('fs');
const path = require('path');

const secondPath = path.join(__dirname, 'second.html');
const secondHtml = fs.readFileSync(secondPath, 'utf8');

// 1. EXACT BENCHMARK MENU
// HOME     ABOUT     SERVICES (9 Services in 3 Columns)     HOW WE WORK     CONTACT
const benchmarkDesktopNav = `
    <!-- Benchmark Navigation Bar -->
    <nav aria-label="Navigation" class="site-nav-desktop">
      <ul class="flex items-center gap-8">
        <li><a class="eyebrow text-fg-2 hover:text-fg transition-colors" href="#top">HOME</a></li>
        <li><a class="eyebrow text-fg-2 hover:text-fg transition-colors" href="#story">ABOUT</a></li>
        
        <!-- SERVICES DROPDOWN: Exactly 9 Services in 3 Equal-Width Columns -->
        <li>
          <details data-dropdown="" class="group/dd">
            <summary class="eyebrow flex cursor-pointer list-none items-center gap-1.5 text-fg-2 transition-colors hover:text-fg group-open/dd:text-fg [&::-webkit-details-marker]:hidden">
              SERVICES<span class="text-[10px] leading-none transition-transform group-open/dd:rotate-180" aria-hidden="true">▾</span>
            </summary>
            <div data-tone="solutions" class="absolute inset-x-0 top-[72px] max-h-[calc(100vh-72px)] overflow-y-auto border-b border-line shadow-2xl z-50" style="background: #000000 !important; background-color: #000000 !important; border-bottom: 1px solid rgba(255, 255, 255, 0.15) !important; box-shadow: 0 30px 60px rgba(0, 0, 0, 0.95) !important;">
              <span aria-hidden="true" class="tone-line block h-px w-full"></span>
              <div class="mx-auto w-full max-w-[1760px] px-4 sm:px-8 lg:px-14 2xl:px-20 py-10 dropdown-grid-3">
                
                <!-- Column 1: Services 01-03 -->
                <div>
                  <p class="dropdown-col-title">Documentation &amp; Housing</p>
                  <ul>
                    <li>
                      <a href="#service-01">
                        <span class="service-num">01</span>
                        <span>Document Preparation &amp; Support</span>
                      </a>
                    </li>
                    <li>
                      <a href="#service-02">
                        <span class="service-num">02</span>
                        <span>Dispute Resolution and Case Support</span>
                      </a>
                    </li>
                    <li>
                      <a href="#service-03">
                        <span class="service-num">03</span>
                        <span>Housing &amp; Landlord-Tenant Matters</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <!-- Column 2: Services 04-06 -->
                <div>
                  <p class="dropdown-col-title">Workplace &amp; Commercial</p>
                  <ul>
                    <li>
                      <a href="#service-04">
                        <span class="service-num">04</span>
                        <span>Employment &amp; Workplace Matters</span>
                      </a>
                    </li>
                    <li>
                      <a href="#service-05">
                        <span class="service-num">05</span>
                        <span>Family &amp; Personal Matters</span>
                      </a>
                    </li>
                    <li>
                      <a href="#service-06">
                        <span class="service-num">06</span>
                        <span>Business &amp; Commercial Legal Services</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <!-- Column 3: Services 07-09 -->
                <div>
                  <p class="dropdown-col-title">Estates &amp; Translation</p>
                  <ul>
                    <li>
                      <a href="#service-07">
                        <span class="service-num">07</span>
                        <span>Translation Services</span>
                      </a>
                    </li>
                    <li>
                      <a href="#service-08">
                        <span class="service-num">08</span>
                        <span>Wills &amp; Wills Drafting</span>
                      </a>
                    </li>
                    <li>
                      <a href="#service-09">
                        <span class="service-num">09</span>
                        <span>Lasting Powers of Attorney</span>
                      </a>
                    </li>
                  </ul>
                </div>

              </div>

              <!-- Dropdown Bottom Bar -->
              <div class="mx-auto w-full max-w-[1760px] px-4 sm:px-8 lg:px-14 2xl:px-20 border-t border-line/60 py-4 flex items-center justify-between">
                <span class="text-xs font-mono uppercase tracking-wider text-fg-3">9 Core Practice Areas &bull; London, United Kingdom</span>
                <a href="#services" class="text-sm font-medium text-white hover:text-white/80 underline underline-offset-4 flex items-center gap-1.5 transition-colors">
                  View all 9 services <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </details>
        </li>

        <li><a class="eyebrow text-fg-2 hover:text-fg transition-colors" href="#how">HOW WE WORK</a></li>
        <li><a class="eyebrow text-fg-2 hover:text-fg transition-colors" href="#contact">CONTACT</a></li>
      </ul>
    </nav>`;

const benchmarkMobileNav = `
          <ul class="space-y-4 font-display text-2xl">
            <li><a href="#top" class="text-fg-2 hover:text-fg">Home</a></li>
            <li><a href="#story" class="text-fg-2 hover:text-fg">About</a></li>
            <li><a href="#services" class="text-fg-2 hover:text-fg">Services</a></li>
            <li><a href="#how" class="text-fg-2 hover:text-fg">How We Work</a></li>
            <li><a href="#contact" class="text-fg-2 hover:text-fg">Contact</a></li>
          </ul>`;

// 2. HERO SECTION (With Exact Benchmark Copy & Buttons)
const benchmarkHero = `
<section class="relative flex flex-col justify-center overflow-hidden" aria-labelledby="hero-title" id="top">
  
  <!-- Hero Video Loop from second.html -->
  <div class="pointer-events-none absolute inset-0" aria-hidden="true">
    <video data-hero-video="" autoplay="" muted="" loop="" playsinline="" preload="auto" aria-hidden="true" tabindex="-1" class="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000" src="video/hero.mp4" style="opacity: 0.9 !important; display: block !important;"></video>
  </div>
  <div class="pointer-events-none absolute inset-0 bg-gradient-to-r from-canvas via-canvas/80 to-canvas/30 lg:via-canvas/60" aria-hidden="true"></div>
  <div class="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-canvas/80 to-transparent" aria-hidden="true"></div>

  <!-- Hero Content -->
  <div class="relative mx-auto w-full max-w-[1760px] px-4 sm:px-8 lg:px-14 2xl:px-20 my-auto flex flex-col justify-center">
    <p class="eyebrow uppercase tracking-widest text-xs font-semibold text-fg-3 mb-4">CLARITY, CONFIDENCE AND A BETTER WAY FORWARD</p>
    <h1 id="hero-title" class="font-display text-balance">
      Legal support that brings <br class="hidden sm:inline"><span style="color: rgba(255, 255, 255, 0.65);">clarity to complexity.</span>
    </h1>

    <p class="mt-6 md:mt-8 text-base md:text-xl font-light text-fg-2" style="max-width: 46rem; line-height: 1.55;">
      Practical document preparation, and administrative case coordination for individuals, families and businesses. <br class="hidden md:inline">Thoughtful assistance, careful preparation and clear communication &mdash; centred on your needs.
    </p>

    <!-- Exact Benchmark Buttons: [ MAKE AN ENQUIRY ] [ EXPLORE OUR SERVICES ] -->
    <div class="mt-8 md:mt-10 flex flex-wrap gap-4 items-center">
      <button type="button" data-intake-open="" data-prefill="Make an enquiry" class="btn-pill-primary">
        MAKE AN ENQUIRY
      </button>
      <a href="#services" class="btn-pill-secondary">
        EXPLORE OUR SERVICES &rarr;
      </a>
    </div>

  </div>
</section>
`;

// 3. SECTION: WELCOME (Exact Benchmark Copy)
const secWelcome = `
<!-- SECTION: WELCOME (Exact Benchmark Copy) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" aria-labelledby="welcome-title" id="welcome">
  <span aria-hidden="true" data-ambient-lines="" data-seed="welcome-pitch" data-colors="#ff9a4d,#ffd25b" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)] pointer-events-none opacity-55"></span>

  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">01</span><span class="mx-3 text-fg-3" aria-hidden="true">—</span>WELCOME</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 id="welcome-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">
        Legal support, <br><span style="color: rgba(255, 255, 255, 0.65);">centred on your needs.</span>
      </h2>
    </div>
    <div class="self-end text-lg leading-relaxed text-fg-2 lg:col-span-5 lg:col-start-8 space-y-4">
      <p>
        Legal matters can be complex and sometimes overwhelming. Whether you are dealing with a housing issue, an employment matter, a family concern or a business dispute, obtaining clear and practical assistance can make a real difference.
      </p>
      <p class="text-base text-fg-3">
        At Elevance, we provide accessible document preparation and practical assistance to individuals, families and businesses. Our approach is straightforward: we listen to your concerns, explain how we can help and work towards practical solutions tailored to your circumstances.
      </p>
      <p class="text-base text-fg-3">
        We believe legal assistance should be clear, approachable and proportionate to your needs. We explain the scope of our services and agree our fees with you before commencing work.
      </p>
    </div>
  </div>
</section>
`;

// 4. SECTION: OUR STORY (Exact Benchmark Copy)
const secOurStory = `
<!-- SECTION: OUR STORY (Exact Benchmark Copy) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" aria-labelledby="story-title" id="story">
  <span aria-hidden="true" data-ambient-lines="" data-seed="story-pitch" data-colors="#5b8cff,#9b6bff" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)] pointer-events-none opacity-55"></span>

  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">02</span><span class="mx-3 text-fg-3" aria-hidden="true">—</span>ABOUT ELEVANCE</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 id="story-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">
        Practical legal support, <br><span style="color: rgba(255, 255, 255, 0.65);">delivered with care.</span>
      </h2>
    </div>
    <div class="self-end text-lg leading-relaxed text-fg-2 lg:col-span-5 lg:col-start-8 space-y-4">
      <p>
        Elevance Legal Services Ltd is an independent legal services company based in London, providing document preparation, administrative assistance and related support services to individuals, families and businesses.
      </p>
      <p class="text-base text-fg-3">
        We understand that accessing legal support can often feel daunting, costly and difficult to navigate. Our goal is to provide a practical alternative: accessible, cost-effective assistance with the documents, processes and everyday legal matters that affect people's lives and businesses.
      </p>
      <p class="text-base text-fg-3">
        We believe in clear communication, careful preparation and a personal approach, ensuring that every client understands the assistance available and the steps involved.
      </p>
    </div>
  </div>
</section>
`;

// 5. SECTION: OUR SERVICES (Strictly 9 Services in 3x3 Hairline Grid)
const secOurServices = `
<!-- SECTION: OUR SERVICES (Strictly 9 Core Practice Areas in 3x3 Hairline Grid) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" id="services">
  <!-- Google-Inspired Blue & Green Ambient Sine Wave -->
  <span aria-hidden="true" data-ambient-lines="" data-seed="services-google" data-colors="#4285F4,#34A853" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)] pointer-events-none opacity-55"></span>

  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">03</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>OUR SERVICES</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">Practical support for everyday needs.</h2>
    </div>
    <div class="self-end text-lg leading-relaxed text-fg-2 lg:col-span-5 lg:col-start-8 space-y-4">
      <p>
        We provide practical document preparation, administrative assistance and related support services for individuals and businesses.
      </p>
      <p class="text-base text-fg-3">
        Whether you need help preparing correspondence, organising tenancy documents, managing business paperwork or arranging document translations, our aim is to make the process straightforward and efficient.
      </p>
      <p class="text-base text-fg-3">
        We explain the scope of our services and agree our fees before commencing work.
      </p>
    </div>
  </div>

  <div class="mt-16 grid hairline-grid sm:grid-cols-2 lg:grid-cols-3">
    
    <!-- 01 Document Preparation & Support -->
    <div id="service-01" class="p-8 transition-colors duration-300 hover:bg-white/[0.02]" style="scroll-margin-top: 100px;">
      <span class="text-xs font-mono text-fg-3">01</span>
      <h3 class="mt-3 text-xl font-normal text-white">Document Preparation &amp; Support</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We assist individuals and businesses with preparing, formatting and organising correspondence, applications, complaints and other documents. Our services include document typing, proofreading, compiling supporting information and preparing documents from instructions or information provided by clients. Where a matter requires legal advice or specialist drafting, we can help identify appropriate professional assistance.</p>
    </div>

    <!-- 02 Dispute Resolution and Case Support -->
    <div id="service-02" class="p-8 transition-colors duration-300 hover:bg-white/[0.02]" style="scroll-margin-top: 100px;">
      <span class="text-xs font-mono text-fg-3">02</span>
      <h3 class="mt-3 text-xl font-normal text-white">Dispute Resolution and Case Support</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We provide practical assistance to individuals and businesses involved in disputes, including reviewing relevant documents, preparing formal correspondence, organising evidence and drafting responses to claims or complaints. We can assist with pre-action correspondence, settlement proposals and negotiations, helping clients explore practical solutions without unnecessary escalation. Where court proceedings or other reserved legal activities are required, we can explain the limitations of our services and discuss appropriate next steps.</p>
    </div>

    <!-- 03 Housing & Landlord-Tenant Matters -->
    <div id="service-03" class="p-8 transition-colors duration-300 hover:bg-white/[0.02]" style="scroll-margin-top: 100px;">
      <span class="text-xs font-mono text-fg-3">03</span>
      <h3 class="mt-3 text-xl font-normal text-white">Housing &amp; Landlord-Tenant Matters</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We provide practical assistance to landlords and tenants on a range of housing and tenancy matters, including tenancy agreements, rent arrears, deposit disputes, disrepair, tenancy disputes and housing-related correspondence. Our services include reviewing documents, explaining relevant rights and obligations, preparing formal correspondence and assisting with negotiations to resolve disputes. Where court proceedings or specialist representation are required, we can explain the limitations of our services and help you identify appropriate next steps.</p>
    </div>

    <!-- 04 Employment & Workplace Matters -->
    <div id="service-04" class="p-8 transition-colors duration-300 hover:bg-white/[0.02]" style="scroll-margin-top: 100px;">
      <span class="text-xs font-mono text-fg-3">04</span>
      <h3 class="mt-3 text-xl font-normal text-white">Employment &amp; Workplace Matters</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We provide practical legal assistance to employees and employers on a range of workplace matters, including employment contracts, grievances, disciplinary procedures, workplace disputes and settlement agreements. Our services include reviewing employment documentation, explaining relevant rights and obligations, preparing formal correspondence and assisting with workplace negotiations and dispute resolution. Where specialist representation or services outside our permitted scope are required, we can help identify appropriate next steps.</p>
    </div>

    <!-- 05 Family & Personal Matters -->
    <div id="service-05" class="p-8 transition-colors duration-300 hover:bg-white/[0.02]" style="scroll-margin-top: 100px;">
      <span class="text-xs font-mono text-fg-3">05</span>
      <h3 class="mt-3 text-xl font-normal text-white">Family &amp; Personal Matters</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We provide sensitive and practical legal assistance with family and personal matters, including separation, divorce-related documentation, financial arrangements and family disputes. Our services include reviewing documents, explaining relevant rights and obligations, preparing correspondence and assisting with negotiations and proposed agreements. We aim to help clients navigate difficult personal circumstances with clarity, discretion and understanding.</p>
    </div>

    <!-- 06 Business & Commercial Legal Services -->
    <div id="service-06" class="p-8 transition-colors duration-300 hover:bg-white/[0.02]" style="scroll-margin-top: 100px;">
      <span class="text-xs font-mono text-fg-3">06</span>
      <h3 class="mt-3 text-xl font-normal text-white">Business &amp; Commercial Legal Services</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We provide practical legal assistance to businesses, entrepreneurs and self-employed professionals on a range of commercial matters, including business contracts, service agreements, non-disclosure agreements, commercial leases and contractual disputes. Our services include reviewing and drafting agreements, explaining contractual rights and obligations, preparing formal correspondence and assisting with commercial negotiations and dispute resolution. We aim to provide clear, commercially focused solutions that help businesses protect their interests and make informed decisions.</p>
    </div>

    <!-- 07 Translation Services -->
    <div id="service-07" class="p-8 transition-colors duration-300 hover:bg-white/[0.02]" style="scroll-margin-top: 100px;">
      <span class="text-xs font-mono text-fg-3">07</span>
      <h3 class="mt-3 text-xl font-normal text-white">Translation Services</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We assist with Arabic and Kurdish to English translations of personal, business and other documents, subject to language availability and the nature of the assignment. Where certified translations are required, we can arrange these through appropriately qualified translators, subject to the requirements of the receiving organisation. Please contact us to discuss your translation requirements.</p>
    </div>

    <!-- 08 Wills & Wills Drafting -->
    <div id="service-08" class="p-8 transition-colors duration-300 hover:bg-white/[0.02]" style="scroll-margin-top: 100px;">
      <span class="text-xs font-mono text-fg-3">08</span>
      <h3 class="mt-3 text-xl font-normal text-white">Wills &amp; Wills Drafting</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We provide assistance with preparing straightforward wills, helping individuals record their wishes and make arrangements for the distribution of their estate. Our services include gathering relevant information, preparing draft wills and explaining the requirements for signing and witnessing. Where more complex circumstances arise, we can explain when specialist legal advice may be appropriate.</p>
    </div>

    <!-- 09 Lasting Powers of Attorney -->
    <div id="service-09" class="p-8 transition-colors duration-300 hover:bg-white/[0.02]" style="scroll-margin-top: 100px;">
      <span class="text-xs font-mono text-fg-3">09</span>
      <h3 class="mt-3 text-xl font-normal text-white">Lasting Powers of Attorney</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We assist individuals with preparing Lasting Powers of Attorney (LPAs) for Property and Financial Affairs and Health and Welfare. Our services include explaining the purpose of LPAs, gathering relevant information, preparing the necessary forms and providing guidance on signing, witnessing and registration with the Office of the Public Guardian. Where complex circumstances or concerns about mental capacity arise, specialist legal advice may be required.</p>
    </div>
  </div>
</section>
`;

// 6. SECTION: SOLICITOR BY APPOINTMENT (Exact Benchmark Copy)
const secSolicitor = `
<!-- SECTION: SOLICITOR BY APPOINTMENT (Exact Benchmark Copy) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" id="solicitor">
  <!-- Google-Inspired Red & Yellow Ambient Sine Wave -->
  <span aria-hidden="true" data-ambient-lines="" data-seed="collab-google" data-colors="#EA4335,#FBBC05" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)] pointer-events-none opacity-55"></span>

  <div class="grid gap-12 lg:grid-cols-12 items-center">
    <div class="lg:col-span-7 relative z-10">
      <div>
        <p class="marker"><span class="tabular-nums">04</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>SOLICITOR BY APPOINTMENT</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 class="mt-10 font-display text-4xl leading-tight md:text-6xl text-white">
        Access to a qualified solicitor <br><span style="color: rgba(255, 255, 255, 0.65);">when you need one.</span>
      </h2>
      <p class="mt-6 text-base leading-relaxed text-fg-2 md:text-lg">
        While Elevance Legal Services provides a range of legal services, we recognise that some matters may require the advice or assistance of a qualified solicitor.
      </p>
      <div class="mt-8 flex flex-wrap gap-4">
        <button type="button" data-intake-open="" data-prefill="I would like to ask about an appointment with a qualified solicitor" class="btn-pill-primary">
          ASK ABOUT AN APPOINTMENT
        </button>
      </div>
    </div>

    <div class="lg:col-span-5 relative z-10">
      <div class="rounded-2xl p-8 border border-line bg-canvas/40 backdrop-blur">
        <p class="text-xs uppercase tracking-widest text-fg-3 font-mono">INDEPENDENT SOLICITORS</p>
        <p class="mt-4 text-sm leading-relaxed text-fg-2">
          Appointments with a qualified solicitor may be available by prior arrangement, depending on the nature of your enquiry and availability.
        </p>
        <p class="mt-3 text-xs leading-relaxed text-fg-3">
          Any solicitor services are provided separately, subject to the solicitor's own terms of engagement and fees.
        </p>
      </div>
    </div>
  </div>
</section>
`;

// 7. SECTION: WHO WE SUPPORT (Exact Benchmark Copy)
const secWhoWeSupport = `
<!-- SECTION: WHO WE SUPPORT (Exact Benchmark Copy) -->
<section class="container-studio py-20 relative isolate border-t border-line" id="support">
  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-5">
      <div>
        <p class="marker"><span class="tabular-nums">05</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>WHO WE SUPPORT</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 class="mt-10 font-display text-4xl leading-[1.05] md:text-6xl text-white">Here for individuals, families and businesses.</h2>
    </div>
    <div class="self-end text-lg leading-relaxed text-fg-2 lg:col-span-6 lg:col-start-7 space-y-4">
      <p>
        We provide accessible legal assistance to individuals, families and businesses across London and beyond.
      </p>
      <p class="text-base text-fg-3">
        Whether you need help with a personal matter, guidance on a dispute, support with property documentation or assistance with business contracts, we are here to provide clear, practical help.
      </p>
    </div>
  </div>

  <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <div class="rounded-2xl p-8 border border-line bg-canvas/40 backdrop-blur">
      <p class="text-xs uppercase tracking-widest text-fg-3 font-mono">CLIENT FOCUS 01</p>
      <h3 class="mt-4 text-2xl font-normal text-white">Individuals &amp; Families</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">Assistance with tenancy issues, family matters, wills, powers of attorney, correspondence and dispute resolution.</p>
    </div>
    <div class="rounded-2xl p-8 border border-line bg-canvas/40 backdrop-blur">
      <p class="text-xs uppercase tracking-widest text-fg-3 font-mono">CLIENT FOCUS 02</p>
      <h3 class="mt-4 text-2xl font-normal text-white">Businesses &amp; Entrepreneurs</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">Assistance with business contracts, terms of service, workplace documentation, commercial correspondence and dispute management.</p>
    </div>
    <div class="rounded-2xl p-8 border border-line bg-canvas/40 backdrop-blur">
      <p class="text-xs uppercase tracking-widest text-fg-3 font-mono">CLIENT FOCUS 03</p>
      <h3 class="mt-4 text-2xl font-normal text-white">Language Communities</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">Translation assistance and practical legal support for Arabic and Kurdish speakers navigating English legal processes.</p>
    </div>
  </div>
</section>
`;

// 8. SECTION: WHY ELEVANCE (Exact Benchmark Copy)
const secWhyElevance = `
<!-- SECTION: WHY ELEVANCE (Exact Benchmark Copy) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" id="why" aria-labelledby="why-title">
  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">06</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>WHY ELEVANCE</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 id="why-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">A different kind of legal support.</h2>
    </div>
    <div class="self-end text-lg leading-relaxed text-fg-2 lg:col-span-5 lg:col-start-8 space-y-4">
      <p>
        We believe that accessing legal help should not be complicated, intimidating or prohibitively expensive.
      </p>
      <p class="text-base text-fg-3">
        Here is what sets our approach apart.
      </p>
    </div>
  </div>

  <div class="mt-16 grid hairline-grid sm:grid-cols-2 lg:grid-cols-3">
    <div class="p-8">
      <span class="text-xs font-mono text-fg-3">01</span>
      <h3 class="mt-3 text-xl font-normal text-white">Clear &amp; Accessible</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We explain things in plain English, avoiding unnecessary jargon and ensuring that you understand your options and the steps involved.</p>
    </div>
    <div class="p-8">
      <span class="text-xs font-mono text-fg-3">02</span>
      <h3 class="mt-3 text-xl font-normal text-white">Transparent Fees</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We believe in fee clarity. We explain our charges before commencing work and, wherever possible, offer agreed fixed fees for clearly defined tasks.</p>
    </div>
    <div class="p-8">
      <span class="text-xs font-mono text-fg-3">03</span>
      <h3 class="mt-3 text-xl font-normal text-white">Practical &amp; Proportionate</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We focus on practical solutions that are proportionate to the matter at hand, helping you avoid unnecessary conflict, expense and delay.</p>
    </div>
    <div class="p-8">
      <span class="text-xs font-mono text-fg-3">04</span>
      <h3 class="mt-3 text-xl font-normal text-white">Careful &amp; Thorough</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">Every document is prepared with care and attention to detail, reflecting your specific instructions and the circumstances of your matter.</p>
    </div>
    <div class="p-8">
      <span class="text-xs font-mono text-fg-3">05</span>
      <h3 class="mt-3 text-xl font-normal text-white">Personal Approach</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We take the time to understand your circumstances and work with you to find the most appropriate way forward.</p>
    </div>
    <div class="p-8">
      <span class="text-xs font-mono text-fg-3">06</span>
      <h3 class="mt-3 text-xl font-normal text-white">Access to Specialists</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">Where a matter requires the involvement of a qualified solicitor, we can assist in arranging an appointment, subject to availability and the nature of the enquiry.</p>
    </div>
  </div>
</section>
`;

// 9. SECTION: HOW WE WORK (Exact Benchmark Copy)
const secHowWeWork = `
<!-- SECTION: HOW WE WORK (Exact Benchmark Copy in Master Second Process Cards) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" id="how">
  <!-- Google-Inspired Green & Yellow Ambient Sine Wave -->
  <span aria-hidden="true" data-ambient-lines="" data-seed="how-google" data-colors="#34A853,#FBBC05" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)] pointer-events-none opacity-55"></span>

  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">07</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>HOW WE WORK</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl">A straightforward journey from enquiry to next steps.</h2>
    </div>
    
  </div>

  <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
    <div class="process-card rounded-2xl p-6">
      <span class="text-3xl font-display text-fg-3">01</span>
      <h3 class="mt-5 text-lg font-normal text-white">Initial conversation</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">Tell us about your legal matter, your concerns and what you would like to achieve. We will discuss your requirements and how we may be able to assist.</p>
    </div>
    <div class="process-card rounded-2xl p-6">
      <span class="text-3xl font-display text-fg-3">02</span>
      <h3 class="mt-5 text-lg font-normal text-white">Enquiry Assessment</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">We assess the nature of your enquiry, explain the scope of our services and identify any matters that fall outside our permitted activities.</p>
    </div>
    <div class="process-card rounded-2xl p-6">
      <span class="text-3xl font-display text-fg-3">03</span>
      <h3 class="mt-5 text-lg font-normal text-white">Agreeing Scope &amp; Fees</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">We explain our fees clearly and agree the scope of work with you before any work begins. Where possible, we offer agreed fixed fees.</p>
    </div>
    <div class="process-card rounded-2xl p-6">
      <span class="text-3xl font-display text-fg-3">04</span>
      <h3 class="mt-5 text-lg font-normal text-white">Preparation &amp; Progress</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">We undertake the agreed work, provide practical guidance and keep you informed of progress throughout.</p>
    </div>
    <div class="process-card rounded-2xl p-6">
      <span class="text-3xl font-display text-fg-3">05</span>
      <h3 class="mt-5 text-lg font-normal text-white">Solicitor by appointment</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">Where appropriate, we can assist in arranging a separate appointment with a qualified solicitor, subject to availability and acceptance of instructions.</p>
    </div>
  </div>
</section>
`;

// 10. SECTION: FREQUENTLY ASKED QUESTIONS (Exact Benchmark 12 Questions & Answers)
const secFaq = `
<!-- SECTION: FREQUENTLY ASKED QUESTIONS (Exact Benchmark 12 FAQs) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" id="faq">

  <div class="max-w-2xl">
    <div>
      <p class="marker"><span class="tabular-nums">08</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>FREQUENTLY ASKED QUESTIONS</p>
      <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
    </div>
    <h2 class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl">Answers before you get started.</h2>
  </div>

  <div class="mt-16 divide-y divide-line border-y border-line">
    
    <details class="group py-6">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>Is Elevance a solicitors' firm?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        No. Elevance Legal Services Ltd is an independent legal services company providing non-reserved legal services. It is not a solicitors' practice and is not authorised or regulated by the Solicitors Regulation Authority (SRA).
      </p>
    </details>

    <details class="group py-6">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>What kind of work does Elevance provide?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        We provide legal consultancy, document drafting and practical assistance across a range of matters, including housing, family matters, business contracts, and wills.
      </p>
    </details>

    <details class="group py-6">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>Can Elevance provide legal advice?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        Elevance primarily provides document preparation and administrative support services. We do not provide specialist legal advice or undertake reserved legal activities. Where legal advice is required, we can explain how to seek assistance from an appropriately qualified professional.
      </p>
    </details>

    <details class="group py-6">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>Can I see a solicitor?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        Yes. Appointments with a qualified solicitor may be available by prior arrangement, subject to availability and acceptance of instructions. Any solicitor services are provided under separate terms and fees.
      </p>
    </details>

    <details class="group py-6">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>Does Elevance represent clients in court?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        No. Elevance does not conduct litigation or exercise reserved rights of audience. We can, however, assist with permitted pre-action correspondence, document preparation and dispute resolution.
      </p>
    </details>

    <details class="group py-6">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>Can you help with housing and employment matters?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        Yes. We assist with tenancy disputes, housing correspondence and related legal documentation. The assistance available will depend on the circumstances of your enquiry.
      </p>
    </details>

    <details class="group py-6">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>Do you provide immigration advice?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        No. Elevance does not provide regulated UK immigration advice or immigration services.
      </p>
    </details>

    <details class="group py-6">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>Can you help with wills?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        Yes. We assist with preparing straightforward wills, including relevant documentation and guidance on signing and registration requirements.
      </p>
    </details>

    <details class="group py-6">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>Do you offer certified translation?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        We provide Arabic and Kurdish to English translation services. Where certified translations are required, we can assist with arranging these through appropriately qualified translators, subject to availability and the receiving organisation's requirements.
      </p>
    </details>

    <details class="group py-6">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>How much will it cost?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        Our fees depend on the nature and complexity of the work. Wherever possible, we offer fixed fees for clearly defined services. We explain our charges and agree the scope of work before proceeding.
      </p>
    </details>

    <details class="group py-6">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>Will my information be handled confidentially?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        Yes. We treat client information with care and confidentiality and handle personal data in accordance with applicable data protection legislation and our Privacy Notice.
      </p>
    </details>

    <details class="group py-6">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>Is the initial consultation free?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        We welcome initial enquiries and will explain any consultation charges before an appointment is confirmed. Fees for substantive legal advice or document review will be agreed in advance.
      </p>
    </details>

  </div>
</section>
`;


// ============================================================================
// REUSABLE ENQUIRY WIZARD COMPONENT (4 Steps based on Client Feedback Document)
// Step 1: Select 1 of 7 Services (+ Other / I'm not sure)
// Step 2: Tailored Service Questions + Urgency & Deadline Check
// Step 3: Contact Details & Optional Document Upload
// Step 4: Review & Submit with Section 9 Confirmation Message
// ============================================================================
function renderEnquiryWizardHtml(pfx, isModal) {
  return `
    <div id="${pfx}-wizard-container" class="enquiry-wizard-wrap ${isModal ? 'p-6 sm:p-8' : 'border border-line rounded-2xl p-6 sm:p-8 bg-canvas/40 backdrop-blur'}">
      
      <!-- Progress Bar & Step Tracker -->
      <div class="mb-6 border-b border-line/60 pb-4">
        <div class="flex items-center justify-between text-xs mb-2">
          <span class="font-mono text-fg-3 uppercase tracking-wider ${pfx}-step-indicator">Step 1 of 4 &bull; Select Service</span>
          <span class="font-medium text-fg-2 ${pfx}-step-badge">Initial Enquiry</span>
        </div>
        <div class="w-full bg-white/10 h-1 rounded-full overflow-hidden">
          <div class="${pfx}-progress-bar bg-white h-full transition-all duration-300" style="width: 25%;"></div>
        </div>
      </div>

      <!-- STEP 1: SELECT A SERVICE -->
      <div id="${pfx}-step-1" class="wizard-step space-y-4">
        <div>
          <h3 class="font-display text-2xl sm:text-3xl text-white">What do you want to achieve?</h3>
          <p class="mt-1.5 text-xs text-neutral-400">Select one of the seven service categories below to view tailored questions:</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
          <button type="button" class="wizard-service-btn ${pfx}-srv-btn text-left p-3.5 rounded-xl border border-line bg-canvas/60 hover:border-white hover:bg-white/[0.05] transition-all flex items-center justify-between group cursor-pointer" data-service="Document Preparation & Support">
            <div>
              <span class="text-[11px] font-mono text-fg-3 block mb-0.5">01</span>
              <span class="text-sm font-medium text-white group-hover:text-white">Document Preparation &amp; Support</span>
            </div>
            <span class="text-xs text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all">&rarr;</span>
          </button>

          <button type="button" class="wizard-service-btn ${pfx}-srv-btn text-left p-3.5 rounded-xl border border-line bg-canvas/60 hover:border-white hover:bg-white/[0.05] transition-all flex items-center justify-between group cursor-pointer" data-service="Housing & Landlord-Tenant Matters">
            <div>
              <span class="text-[11px] font-mono text-fg-3 block mb-0.5">02</span>
              <span class="text-sm font-medium text-white group-hover:text-white">Housing &amp; Landlord-Tenant Matters</span>
            </div>
            <span class="text-xs text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all">&rarr;</span>
          </button>

          <button type="button" class="wizard-service-btn ${pfx}-srv-btn text-left p-3.5 rounded-xl border border-line bg-canvas/60 hover:border-white hover:bg-white/[0.05] transition-all flex items-center justify-between group cursor-pointer" data-service="Family & Personal Matters">
            <div>
              <span class="text-[11px] font-mono text-fg-3 block mb-0.5">03</span>
              <span class="text-sm font-medium text-white group-hover:text-white">Family &amp; Personal Matters</span>
            </div>
            <span class="text-xs text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all">&rarr;</span>
          </button>

          <button type="button" class="wizard-service-btn ${pfx}-srv-btn text-left p-3.5 rounded-xl border border-line bg-canvas/60 hover:border-white hover:bg-white/[0.05] transition-all flex items-center justify-between group cursor-pointer" data-service="Business & Commercial Legal Services">
            <div>
              <span class="text-[11px] font-mono text-fg-3 block mb-0.5">04</span>
              <span class="text-sm font-medium text-white group-hover:text-white">Business &amp; Commercial Legal Services</span>
            </div>
            <span class="text-xs text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all">&rarr;</span>
          </button>

          <button type="button" class="wizard-service-btn ${pfx}-srv-btn text-left p-3.5 rounded-xl border border-line bg-canvas/60 hover:border-white hover:bg-white/[0.05] transition-all flex items-center justify-between group cursor-pointer" data-service="Translation Services">
            <div>
              <span class="text-[11px] font-mono text-fg-3 block mb-0.5">05</span>
              <span class="text-sm font-medium text-white group-hover:text-white">Translation Services</span>
            </div>
            <span class="text-xs text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all">&rarr;</span>
          </button>

          <button type="button" class="wizard-service-btn ${pfx}-srv-btn text-left p-3.5 rounded-xl border border-line bg-canvas/60 hover:border-white hover:bg-white/[0.05] transition-all flex items-center justify-between group cursor-pointer" data-service="Wills & Wills Drafting">
            <div>
              <span class="text-[11px] font-mono text-fg-3 block mb-0.5">06</span>
              <span class="text-sm font-medium text-white group-hover:text-white">Wills &amp; Wills Drafting</span>
            </div>
            <span class="text-xs text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all">&rarr;</span>
          </button>

          <button type="button" class="wizard-service-btn ${pfx}-srv-btn text-left p-3.5 rounded-xl border border-line bg-canvas/60 hover:border-white hover:bg-white/[0.05] transition-all flex items-center justify-between group cursor-pointer" data-service="Document Legalisation & Notarial Coordination">
            <div>
              <span class="text-[11px] font-mono text-fg-3 block mb-0.5">07</span>
              <span class="text-sm font-medium text-white group-hover:text-white">Document Legalisation &amp; Notarial Coordination</span>
            </div>
            <span class="text-xs text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all">&rarr;</span>
          </button>

          <button type="button" class="wizard-service-btn ${pfx}-srv-btn text-left p-3.5 rounded-xl border border-line bg-canvas/60 hover:border-white hover:bg-white/[0.05] transition-all flex items-center justify-between group cursor-pointer" data-service="Other / I’m not sure">
            <div>
              <span class="text-[11px] font-mono text-neutral-400 block mb-0.5">&bull;</span>
              <span class="text-sm font-medium text-neutral-300 group-hover:text-white">Other / I’m not sure</span>
            </div>
            <span class="text-xs text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all">&rarr;</span>
          </button>
        </div>
      </div>

      <!-- STEP 2: SERVICE-SPECIFIC QUESTIONS -->
      <div id="${pfx}-step-2" class="wizard-step hidden space-y-5">
        <div class="flex items-center justify-between">
          <button type="button" class="${pfx}-back-to-1 text-xs text-neutral-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer">
            &larr; Change Service
          </button>
          <span class="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white font-medium ${pfx}-selected-service-pill">Selected Service</span>
        </div>

        <!-- 4.1 Document Preparation & Support Questions -->
        <div class="${pfx}-q-panel hidden space-y-4" data-for="Document Preparation & Support">
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">1. What type of document do you need help preparing or organising?</label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <label class="wizard-pill"><input type="radio" name="${pfx}-doc-type" value="Letter" class="sr-only"><span>Letter</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-doc-type" value="Application" class="sr-only"><span>Application</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-doc-type" value="Complaint" class="sr-only"><span>Complaint</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-doc-type" value="Agreement" class="sr-only"><span>Agreement</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-doc-type" value="Notice" class="sr-only"><span>Notice</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-doc-type" value="Formal response" class="sr-only"><span>Formal response</span></label>
              <label class="wizard-pill col-span-2"><input type="radio" name="${pfx}-doc-type" value="Other document" class="sr-only"><span>Other document</span></label>
            </div>
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">2. What is the purpose of the document, and what would you like it to achieve?</label>
            <input type="text" class="${pfx}-doc-purpose w-full rounded-lg border border-line bg-canvas/60 px-3 py-2 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="Brief outline...">
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">3. New document or existing draft?</label>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <label class="wizard-pill"><input type="radio" name="${pfx}-doc-status" value="New document" class="sr-only"><span>New document</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-doc-status" value="Existing draft needs review / proofreading" class="sr-only"><span>Existing draft needs review</span></label>
            </div>
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">4. Who are the individuals, businesses or organisations involved?</label>
            <input type="text" class="${pfx}-doc-parties w-full rounded-lg border border-line bg-canvas/60 px-3 py-2 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="Names or organisation types...">
          </div>
        </div>

        <!-- 4.2 Housing & Landlord-Tenant Matters Questions -->
        <div class="${pfx}-q-panel hidden space-y-4" data-for="Housing & Landlord-Tenant Matters">
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">1. Are you a landlord, tenant, leaseholder or another occupier?</label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <label class="wizard-pill"><input type="radio" name="${pfx}-housing-role" value="Tenant" class="sr-only"><span>Tenant</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-housing-role" value="Landlord" class="sr-only"><span>Landlord</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-housing-role" value="Leaseholder" class="sr-only"><span>Leaseholder</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-housing-role" value="Other occupier" class="sr-only"><span>Other occupier</span></label>
            </div>
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">2. What is the nature of the issue?</label>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <label class="wizard-pill"><input type="radio" name="${pfx}-housing-issue" value="Tenancy agreement" class="sr-only"><span>Tenancy agreement</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-housing-issue" value="Rent arrears" class="sr-only"><span>Rent arrears</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-housing-issue" value="Deposit dispute" class="sr-only"><span>Deposit dispute</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-housing-issue" value="Disrepair" class="sr-only"><span>Disrepair</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-housing-issue" value="Eviction or possession notice" class="sr-only"><span>Eviction notice</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-housing-issue" value="Correspondence / Other" class="sr-only"><span>Correspondence / Other</span></label>
            </div>
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">3. What type of property is involved, and where is it located?</label>
            <input type="text" class="${pfx}-housing-prop w-full rounded-lg border border-line bg-canvas/60 px-3 py-2 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="e.g. Residential flat in London...">
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">4. Have you received any formal notice or correspondence?</label>
            <div class="flex gap-2">
              <label class="wizard-pill"><input type="radio" name="${pfx}-housing-notice" value="Yes" class="sr-only"><span>Yes</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-housing-notice" value="No" class="sr-only"><span>No</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-housing-notice" value="Not sure" class="sr-only"><span>Not sure</span></label>
            </div>
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">5. Has the matter progressed to court, or dealt through correspondence?</label>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <label class="wizard-pill"><input type="radio" name="${pfx}-housing-stage" value="Correspondence only" class="sr-only"><span>Correspondence only</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-housing-stage" value="Court proceedings started" class="sr-only"><span>Court proceedings</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-housing-stage" value="Threat of court action" class="sr-only"><span>Threat of action</span></label>
            </div>
          </div>
        </div>

        <!-- 4.3 Family & Personal Matters Questions -->
        <div class="${pfx}-q-panel hidden space-y-4" data-for="Family & Personal Matters">
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">1. What type of family or personal matter do you need assistance with?</label>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <label class="wizard-pill"><input type="radio" name="${pfx}-family-type" value="Separation" class="sr-only"><span>Separation</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-family-type" value="Divorce-related documentation" class="sr-only"><span>Divorce documents</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-family-type" value="Financial arrangements" class="sr-only"><span>Financial arrangements</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-family-type" value="Family dispute" class="sr-only"><span>Family dispute</span></label>
              <label class="wizard-pill col-span-2"><input type="radio" name="${pfx}-family-type" value="Other personal matter" class="sr-only"><span>Other personal matter</span></label>
            </div>
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">2. Who are the individuals involved, and what is your relationship to them?</label>
            <input type="text" class="${pfx}-family-parties w-full rounded-lg border border-line bg-canvas/60 px-3 py-2 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="e.g. Spouse / Former partner...">
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">3. What would you like to achieve or resolve?</label>
            <input type="text" class="${pfx}-family-goal w-full rounded-lg border border-line bg-canvas/60 px-3 py-2 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="Desired outcome...">
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">4. Has the matter been discussed, or has any formal process started?</label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <label class="wizard-pill"><input type="radio" name="${pfx}-family-process" value="Discussed informally" class="sr-only"><span>Discussed</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-family-process" value="No discussion yet" class="sr-only"><span>Not discussed</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-family-process" value="Formal process started" class="sr-only"><span>Formal process</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-family-process" value="Mediation" class="sr-only"><span>Mediation</span></label>
            </div>
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">5. Children, property or financial arrangements? (Brief outline only)</label>
            <input type="text" class="${pfx}-family-outline w-full rounded-lg border border-line bg-canvas/60 px-3 py-2 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="Brief indication...">
          </div>
        </div>

        <!-- 4.4 Business & Commercial Legal Services Questions -->
        <div class="${pfx}-q-panel hidden space-y-4" data-for="Business & Commercial Legal Services">
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">1. What is the name and nature of your business?</label>
            <input type="text" class="${pfx}-biz-info w-full rounded-lg border border-line bg-canvas/60 px-3 py-2 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="e.g. IT Consultancy, Retail, Founder...">
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">2. What type of commercial assistance do you need?</label>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <label class="wizard-pill"><input type="radio" name="${pfx}-biz-type" value="Business contract" class="sr-only"><span>Business contract</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-biz-type" value="Service agreement" class="sr-only"><span>Service agreement</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-biz-type" value="Consultancy agreement" class="sr-only"><span>Consultancy</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-biz-type" value="Non-disclosure agreement" class="sr-only"><span>NDA</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-biz-type" value="Commercial lease" class="sr-only"><span>Commercial lease</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-biz-type" value="Contractual dispute" class="sr-only"><span>Contract dispute</span></label>
            </div>
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">3. Who are the other parties involved?</label>
            <input type="text" class="${pfx}-biz-parties w-full rounded-lg border border-line bg-canvas/60 px-3 py-2 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="Other company or individual names...">
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">4. Stage of agreement / commercial terms?</label>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <label class="wizard-pill"><input type="radio" name="${pfx}-biz-stage" value="New agreement" class="sr-only"><span>New agreement</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-biz-stage" value="Review or amendment" class="sr-only"><span>Review / Amend</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-biz-stage" value="Terms agreed" class="sr-only"><span>Terms agreed</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-biz-stage" value="Still negotiating" class="sr-only"><span>Negotiating</span></label>
              <label class="wizard-pill col-span-2"><input type="radio" name="${pfx}-biz-stage" value="Dispute arisen" class="sr-only"><span>Dispute arisen</span></label>
            </div>
          </div>
        </div>

        <!-- 4.5 Translation Services Questions -->
        <div class="${pfx}-q-panel hidden space-y-4" data-for="Translation Services">
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">1. What language is the original document in & direction required?</label>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <label class="wizard-pill"><input type="radio" name="${pfx}-trans-lang" value="Arabic to English" class="sr-only"><span>Arabic &rarr; English</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-trans-lang" value="Kurdish to English" class="sr-only"><span>Kurdish &rarr; English</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-trans-lang" value="English to Arabic" class="sr-only"><span>English &rarr; Arabic</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-trans-lang" value="English to Kurdish" class="sr-only"><span>English &rarr; Kurdish</span></label>
              <label class="wizard-pill col-span-2"><input type="radio" name="${pfx}-trans-lang" value="Other language pair" class="sr-only"><span>Other language</span></label>
            </div>
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">2. What type of document needs translating?</label>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <label class="wizard-pill"><input type="radio" name="${pfx}-trans-type" value="Personal document" class="sr-only"><span>Personal document</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-trans-type" value="Official certificate" class="sr-only"><span>Official certificate</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-trans-type" value="Court document" class="sr-only"><span>Court document</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-trans-type" value="Business document" class="sr-only"><span>Business document</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-trans-type" value="Agreement / Contract" class="sr-only"><span>Agreement</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-trans-type" value="Other" class="sr-only"><span>Other</span></label>
            </div>
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">3. Approximately how many pages does the document contain?</label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <label class="wizard-pill"><input type="radio" name="${pfx}-trans-pages" value="1–2 pages" class="sr-only"><span>1–2 pages</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-trans-pages" value="3–5 pages" class="sr-only"><span>3–5 pages</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-trans-pages" value="6–10 pages" class="sr-only"><span>6–10 pages</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-trans-pages" value="10+ pages" class="sr-only"><span>10+ pages</span></label>
            </div>
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">4. Where will the translated document be submitted or used?</label>
            <input type="text" class="${pfx}-trans-target w-full rounded-lg border border-line bg-canvas/60 px-3 py-2 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="e.g. Home Office, Court, University, Solicitor, Embassy...">
          </div>
        </div>

        <!-- 4.6 Wills & Wills Drafting Questions -->
        <div class="${pfx}-q-panel hidden space-y-4" data-for="Wills & Wills Drafting">
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">1. Are you looking to prepare a new will or amend an existing will?</label>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <label class="wizard-pill"><input type="radio" name="${pfx}-will-action" value="Prepare a new will" class="sr-only"><span>Prepare new will</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-will-action" value="Amend an existing will" class="sr-only"><span>Amend existing will</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-will-action" value="Assistance with existing will" class="sr-only"><span>Assistance</span></label>
            </div>
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">2. Marital status & Dependants?</label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <label class="wizard-pill"><input type="radio" name="${pfx}-will-marital" value="Single" class="sr-only"><span>Single</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-will-marital" value="Married / Civil Partner" class="sr-only"><span>Married</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-will-marital" value="Divorced / Widowed" class="sr-only"><span>Divorced</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-will-marital" value="Have Children / Dependants" class="sr-only"><span>Children</span></label>
            </div>
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">3. Beneficiaries & Estate assets general indication?</label>
            <input type="text" class="${pfx}-will-estate w-full rounded-lg border border-line bg-canvas/60 px-3 py-2 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="e.g. Spouse & children, UK property, investments...">
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">4. Have you considered who you would like to appoint as executor?</label>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <label class="wizard-pill"><input type="radio" name="${pfx}-will-exec" value="Yes, family or friend" class="sr-only"><span>Family or friend</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-will-exec" value="Solicitor or professional" class="sr-only"><span>Professional</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-will-exec" value="Not decided yet" class="sr-only"><span>Not decided yet</span></label>
            </div>
          </div>
        </div>

        <!-- 4.7 Document Legalisation & Notarial Coordination Questions -->
        <div class="${pfx}-q-panel hidden space-y-4" data-for="Document Legalisation & Notarial Coordination">
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">1. What document or documents do you need help with?</label>
            <input type="text" class="${pfx}-legal-doc w-full rounded-lg border border-line bg-canvas/60 px-3 py-2 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="e.g. Power of Attorney, Certificate, Commercial Contract...">
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">2. Will the document be used in the UK or overseas?</label>
            <div class="flex gap-2">
              <label class="wizard-pill"><input type="radio" name="${pfx}-legal-dest" value="In the UK" class="sr-only"><span>In the UK</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-legal-dest" value="Overseas" class="sr-only"><span>Overseas (Specify country below)</span></label>
            </div>
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">3. What do you understand is required?</label>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <label class="wizard-pill"><input type="radio" name="${pfx}-legal-req" value="Notarisation" class="sr-only"><span>Notarisation</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-legal-req" value="Hague Apostille" class="sr-only"><span>Hague Apostille</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-legal-req" value="Consular legalisation" class="sr-only"><span>Legalisation</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-legal-req" value="Certified translation" class="sr-only"><span>Translation</span></label>
              <label class="wizard-pill col-span-2"><input type="radio" name="${pfx}-legal-req" value="Combination / Not sure" class="sr-only"><span>Combination / Need advice</span></label>
            </div>
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">4. Do you need assistance arranging a notary appointment?</label>
            <div class="flex gap-2">
              <label class="wizard-pill"><input type="radio" name="${pfx}-legal-notary" value="Yes" class="sr-only"><span>Yes</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-legal-notary" value="No" class="sr-only"><span>No</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-legal-notary" value="Not sure" class="sr-only"><span>Not sure</span></label>
            </div>
          </div>
        </div>

        <!-- 5. Other / I’m not sure Questions -->
        <div class="${pfx}-q-panel hidden space-y-4" data-for="Other / I’m not sure">
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">1. Briefly describe the matter and the assistance you are looking for</label>
            <textarea class="${pfx}-other-desc w-full rounded-lg border border-line bg-canvas/60 px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" rows="3" placeholder="Tell us what you need help with in your own words..."></textarea>
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">2. Is there a particular document or issue you need help with?</label>
            <input type="text" class="${pfx}-other-doc w-full rounded-lg border border-line bg-canvas/60 px-3 py-2 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="e.g. Specific document, agreement, court paperwork...">
          </div>
          <div class="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-neutral-400 leading-relaxed">
            <strong>Note:</strong> This option allows Elevance to consider your enquiry and does not confirm that the requested service is offered. Enquiries outside our seven core services will be reviewed before advice is given.
          </div>
        </div>

        <!-- COMMON SECTION 7: URGENCY & DEADLINE QUESTION -->
        <div class="border-t border-line/60 pt-4 space-y-3">
          <label class="block text-xs uppercase tracking-wider text-fg-3 font-medium">
            Is there a deadline, hearing, appointment or other urgent date connected with your enquiry?
          </label>
          <div class="flex gap-2">
            <label class="wizard-pill"><input type="radio" name="${pfx}-urgency" value="No" checked class="sr-only"><span>No</span></label>
            <label class="wizard-pill"><input type="radio" name="${pfx}-urgency" value="Yes" class="sr-only"><span>Yes (Specify date)</span></label>
            <label class="wizard-pill"><input type="radio" name="${pfx}-urgency" value="Not sure" class="sr-only"><span>Not sure</span></label>
          </div>
          <div class="${pfx}-urgency-detail hidden grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div>
              <label class="block text-[11px] text-fg-3 mb-1 font-medium">Deadline / Hearing Date</label>
              <input type="date" class="${pfx}-urgent-date w-full rounded-lg border border-line bg-canvas/60 px-3 py-2 text-xs text-fg focus:border-fg focus:outline-none" style="color-scheme: dark;">
            </div>
            <div>
              <label class="block text-[11px] text-fg-3 mb-1 font-medium">What does this date relate to?</label>
              <input type="text" class="${pfx}-urgent-context w-full rounded-lg border border-line bg-canvas/60 px-3 py-2 text-xs text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="e.g. Notice expiry, court filing...">
            </div>
          </div>
        </div>

        <div class="pt-2">
          <button type="button" class="${pfx}-btn-goto-3 btn-pill-primary w-full justify-center py-2.5 cursor-pointer">
            CONTINUE TO CONTACT DETAILS &rarr;
          </button>
        </div>
      </div>

      <!-- STEP 3: CONTACT DETAILS & OPTIONAL UPLOAD -->
      <div id="${pfx}-step-3" class="wizard-step hidden space-y-4">
        <div class="flex items-center justify-between">
          <button type="button" class="${pfx}-back-to-2 text-xs text-neutral-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer">
            &larr; Back to Questions
          </button>
          <span class="text-xs text-fg-3 font-mono">Step 3 of 4</span>
        </div>

        <div class="grid gap-3 sm:grid-cols-2">
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1 font-medium">Full Name <span class="text-red-400">*</span></label>
            <input type="text" id="${pfx}-name" required class="w-full rounded-lg border border-line bg-canvas/60 px-3 py-2 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="Your full name">
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1 font-medium">Email Address <span class="text-red-400">*</span></label>
            <input type="email" id="${pfx}-email" required class="w-full rounded-lg border border-line bg-canvas/60 px-3 py-2 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="name@example.com">
          </div>
        </div>

        <div class="grid gap-3 sm:grid-cols-2">
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1 font-medium">Telephone Number <span class="text-fg-3 font-normal">(Optional)</span></label>
            <input type="tel" id="${pfx}-phone" class="w-full rounded-lg border border-line bg-canvas/60 px-3 py-2 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="+44...">
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1 font-medium">Preferred Contact Method</label>
            <div class="flex gap-2">
              <label class="wizard-pill"><input type="radio" name="${pfx}-contact-pref" value="Email" checked class="sr-only"><span>Email</span></label>
              <label class="wizard-pill"><input type="radio" name="${pfx}-contact-pref" value="Telephone" class="sr-only"><span>Telephone</span></label>
            </div>
          </div>
        </div>

        <div>
          <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1 font-medium">Preferred Time to be Contacted <span class="text-fg-3 font-normal">(Optional)</span></label>
          <div class="flex flex-wrap gap-2">
            <label class="wizard-pill"><input type="radio" name="${pfx}-contact-time" value="Morning (9am – 12pm)" class="sr-only"><span>Morning (9am – 12pm)</span></label>
            <label class="wizard-pill"><input type="radio" name="${pfx}-contact-time" value="Afternoon (12pm – 5pm)" class="sr-only"><span>Afternoon (12pm – 5pm)</span></label>
            <label class="wizard-pill"><input type="radio" name="${pfx}-contact-time" value="Anytime" checked class="sr-only"><span>Anytime</span></label>
          </div>
        </div>

        <div>
          <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1 font-medium">Upload Supporting Documents <span class="text-fg-3 font-normal">(Optional)</span></label>
          <input type="file" id="${pfx}-files" multiple accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png" class="w-full text-xs text-fg-3 file:mr-3 file:py-1.5 file:px-3 file:rounded-full file:border file:border-line file:bg-white/10 file:text-white file:text-xs hover:file:bg-white/20 cursor-pointer">
          <p class="text-[11px] text-neutral-500 mt-1">Optional. Accepted formats: PDF, Word, images. Max 10MB.</p>
        </div>

        <div>
          <label class="block text-xs uppercase tracking-wider text-fg-3 mb-1 font-medium">Is there anything else you would like us to know? <span class="text-fg-3 font-normal">(Optional)</span></label>
          <textarea id="${pfx}-extra-notes" rows="2" class="w-full rounded-lg border border-line bg-canvas/60 px-3 py-2 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="Brief outline only. Please do not submit unnecessary sensitive details."></textarea>
        </div>

        <div class="pt-2">
          <button type="button" class="${pfx}-btn-goto-4 btn-pill-primary w-full justify-center py-2.5 cursor-pointer">
            REVIEW ENQUIRY &rarr;
          </button>
        </div>
      </div>

      <!-- STEP 4: REVIEW & SUBMIT -->
      <div id="${pfx}-step-4" class="wizard-step hidden space-y-4">
        <div class="flex items-center justify-between">
          <button type="button" class="${pfx}-back-to-3 text-xs text-neutral-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer">
            &larr; Edit Details
          </button>
          <span class="text-xs text-fg-3 font-mono">Step 4 of 4 &bull; Final Review</span>
        </div>

        <!-- Summary Card -->
        <div class="wizard-summary-card">
          <div class="wizard-summary-row">
            <span class="wizard-summary-label">Service Category</span>
            <span class="wizard-summary-val ${pfx}-rev-service">Document Preparation</span>
          </div>
          <div class="wizard-summary-row">
            <span class="wizard-summary-label">Contact Details</span>
            <span class="wizard-summary-val ${pfx}-rev-client">John Doe &bull; john@example.com</span>
          </div>
          <div class="wizard-summary-row">
            <span class="wizard-summary-label">Urgency / Deadline</span>
            <span class="wizard-summary-val ${pfx}-rev-urgency">None stated</span>
          </div>
          <div class="wizard-summary-row">
            <span class="wizard-summary-label">Supporting Documents</span>
            <span class="wizard-summary-val text-neutral-400 ${pfx}-rev-files">None attached</span>
          </div>
        </div>

        <!-- Mandatory Privacy Consent -->
        <div class="wizard-privacy-wrap">
          <input type="checkbox" id="${pfx}-privacy-check" required>
          <label for="${pfx}-privacy-check" class="wizard-privacy-label">
            I have read the Privacy Notice and understand how my personal information will be used.
          </label>
        </div>

        <!-- Section 9 Pre-submission Disclaimer -->
        <p class="wizard-disclaimer-text">
          Submitting this enquiry does not mean that Elevance has accepted your matter or that a client relationship has been created. If your matter is urgent or involves an imminent deadline, hearing or appointment, please contact us directly.
        </p>

        <div class="pt-2">
          <button type="button" class="${pfx}-submit-btn btn-pill-primary w-full justify-center py-3 cursor-pointer">
            SUBMIT ENQUIRY
          </button>
        </div>
      </div>

      <!-- CONFIRMATION / THANK YOU STATE (Section 9) -->
      <div id="${pfx}-confirmation" class="wizard-step hidden py-8 text-center space-y-4">
        <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mb-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
        </div>
        <h3 class="font-display text-2xl sm:text-3xl text-white">Thank you for contacting Elevance.</h3>
        <p class="text-sm text-neutral-300 leading-relaxed max-w-md mx-auto">
          Your enquiry has been submitted successfully. We will review the information provided and contact you about the next steps.
        </p>
        <div class="p-4 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-neutral-400 leading-relaxed text-left max-w-md mx-auto">
          <strong>Please note:</strong> Submitting this form does not mean that Elevance has accepted your matter or that a client relationship has been created. If your matter is urgent or involves an imminent deadline, hearing or appointment, please do not rely on this form alone. Contact us directly or seek appropriate urgent legal assistance.
        </div>
        ${isModal ? `
          <div class="pt-4">
            <button type="button" data-intake-close="" class="text-sm underline underline-offset-4 text-neutral-400 hover:text-white cursor-pointer">
              Close Window
            </button>
          </div>
        ` : ''}
      </div>

    </div>
  `;
}

// 11. SECTION: CONTACT US (Clean Top Alignment & Interactive Form)
const secContactUs = `
<!-- SECTION: CONTACT US (Exact Benchmark Copy) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" id="contact">
  <div>
    <p class="marker"><span class="tabular-nums">09</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>CONTACT US</p>
    <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
  </div>

  <div class="mt-10 grid gap-12 lg:grid-cols-12 items-start">
    <div class="lg:col-span-6">
      <h2 class="font-display text-5xl leading-[1.02] md:text-7xl text-white">Let’s discuss your next step.</h2>
      
      <p class="mt-8 text-lg leading-relaxed text-fg-2">
        Whether you need assistance with a personal legal matter, a business issue, a dispute or legal documentation, we are here to help.
      </p>
      <p class="mt-4 text-base leading-relaxed text-fg-3">
        Tell us briefly about your enquiry, and we will consider how we may be able to assist and explain the next steps.
      </p>

      <!-- Our Contact Details (from Benchmark) -->
      <div class="mt-10 border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur space-y-4">
        <h3 class="text-sm font-semibold uppercase tracking-wider text-white">Our Contact Details</h3>
        <ul class="space-y-3 text-sm text-fg-2">
          <li class="flex items-start gap-3">
            <span class="text-fg-3 w-32 shrink-0">Office address</span>
            <span class="text-white">157, Pitshanger Lane, London W5 1RH</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-fg-3 w-32 shrink-0">Telephone number</span>
            <a href="tel:+447543105658" class="text-white hover:underline">+44 7543 105658</a>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-fg-3 w-32 shrink-0">Email address</span>
            <a href="mailto:info@elevancelegal.co.uk" class="text-white hover:underline">info@elevancelegal.co.uk</a>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-fg-3 w-32 shrink-0">Opening hours</span>
            <span class="text-white">Monday &ndash; Friday, 9:00 AM &ndash; 6:00 PM</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Interactive Multi-Step Enquiry Form (Aligned with Make an Enquiry) -->
    <div class="lg:col-span-6">
      ${renderEnquiryWizardHtml('page', false)}
    </div>
  </div>
</section>
`;

// 12. SECTION: OUR COMMITMENT (Exact Benchmark Copy)
const secOurCommitment = `
<!-- SECTION: OUR COMMITMENT (Exact Benchmark Copy) -->
<section class="container-studio py-20 relative isolate border-t border-line" id="commitment">
  <div class="rounded-2xl border border-line bg-canvas/60 p-8 md:p-12 text-center max-w-4xl mx-auto backdrop-blur">
    <p class="text-xs uppercase tracking-widest text-fg-3 font-mono">OUR COMMITMENT</p>
    <h2 class="mt-4 font-display text-3xl md:text-5xl text-white">Our commitment to you.</h2>
    <p class="mt-6 text-base md:text-lg text-fg-2 leading-relaxed max-w-2xl mx-auto">
      We are committed to providing clear communication, careful preparation and practical legal assistance tailored to your needs.
    </p>
    <p class="mt-4 text-base md:text-lg text-fg-3 leading-relaxed max-w-2xl mx-auto">
      We approach every enquiry with professionalism, discretion and attention to detail, keeping you informed and ensuring that you understand the services we provide and the fees involved.
    </p>
  </div>
</section>
`;

// 13. EXACT BENCHMARK FOOTER
const benchmarkFooter = `
<!-- SITE FOOTER (Exact Benchmark Copy from Customer Spec) -->
<footer class="border-t border-line">
  <div class="container-studio py-16 space-y-12">
    
    <!-- Top Branding & Motto -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-line pb-8">
      <div>
        <a href="#top" class="logo-container inline-flex transition-transform hover:opacity-90" aria-label="Elevance Legal Services, Home">
          <div class="logo-box">E</div>
          <div class="logo-text">
            <span class="logo-title">Elevance</span>
            <span class="logo-sub">LEGAL SERVICES LTD</span>
          </div>
        </a>
      </div>
      <p class="text-sm font-light text-fg-2 tracking-wide">
        Clarity, confidence and a better way forward.
      </p>
    </div>

    <!-- Regulatory Notice & Company Information Grid -->
    <div class="grid gap-10 md:grid-cols-12 text-xs leading-relaxed text-fg-3">
      
      <!-- Important Regulatory Information -->
      <div class="md:col-span-8 space-y-3">
        <p class="font-medium text-fg-2 text-sm">Important regulatory information</p>
        <p>
          Elevance Legal Services Ltd is an independent provider of non-reserved legal services. It is not a solicitors' practice and is not authorised or regulated by the Solicitors Regulation Authority (SRA).
        </p>
        <p>
          We provide legal consultancy, document drafting and related legal assistance within the scope of activities we are legally permitted and competent to undertake.
        </p>
        <p>
          Elevance does not conduct litigation, exercise reserved rights of audience, undertake reserved instrument activities or reserved probate activities, or provide regulated UK immigration advice or services.
        </p>
        <p>
          As Elevance is not an SRA-regulated firm, clients do not automatically benefit from the regulatory protections applicable to authorised solicitors' practices, including compulsory SRA professional indemnity insurance and access to the SRA Compensation Fund.
        </p>
        <p>
          Where an appointment with a qualified solicitor is arranged, any solicitor services are provided separately and subject to the solicitor's own professional obligations, terms of engagement and fees.
        </p>
        <p>
          Information on this website is provided for general information only. Submitting an enquiry does not establish a professional engagement or solicitor-client relationship.
        </p>
      </div>

      <!-- Company Information -->
      <div class="md:col-span-4 space-y-3 border-t border-line/40 pt-6 md:border-t-0 md:pt-0">
        <p class="font-medium text-fg-2 text-sm">Company information</p>
        <p class="text-white font-medium">Elevance Legal Services Ltd</p>
        <p>Registered in England and Wales</p>
        <p>Company Registration Number: 16186851</p>
        <p>Registered Office: 157, Pitshanger Lane, London W5 1RH</p>
        <p>Email: <a href="mailto:info@elevancelegal.co.uk" class="text-fg-2 hover:underline">info@elevancelegal.co.uk</a></p>
        <p>Telephone: <a href="tel:+447543105658" class="text-fg-2 hover:underline">+44 7543 105658</a></p>
      </div>

    </div>

    <!-- Bottom Hyperlinks & Copyright -->
    <div class="border-t border-line pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-fg-3">
      <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-fg-3">
        <span>Privacy Notice</span>
        <span class="text-fg-3/30" aria-hidden="true">&bull;</span>
        <span>Terms of Business</span>
        <span class="text-fg-3/30" aria-hidden="true">&bull;</span>
        <span>Complaints Procedure</span>
        <span class="text-fg-3/30" aria-hidden="true">&bull;</span>
        <span>Regulatory Information</span>
      </div>
      <div>
        <span>&copy; 2026 Elevance Legal Services Ltd. All rights reserved.</span>
      </div>
    </div>

  </div>
</footer>
`;

// ASSEMBLE ALL SECTIONS IN EXACT SEQUENCE
const allSections = [
  secWelcome,
  secOurStory,
  secOurServices,
  secSolicitor,
  secWhoWeSupport,
  secWhyElevance,
  secHowWeWork,
  secFaq,
  secOurCommitment,
  secContactUs,
  benchmarkFooter
].join('\n\n');

// -------------------------------------------------------------
// 14. BUILD COMPLETE HTML DOCUMENT
// -------------------------------------------------------------
let html = secondHtml;

// Replace Desktop Nav
html = html.replace(/<nav aria-label="Navigation" class="site-nav-desktop">[\s\S]*?<\/nav>/i, benchmarkDesktopNav);

// Replace Mobile Drawer links
html = html.replace(/<ul class="space-y-4 font-display text-2xl">[\s\S]*?<\/ul>/i, benchmarkMobileNav);

// Replace Hero section
const heroStart = html.indexOf('<section class="relative flex flex-col justify-center overflow-hidden"');
const heroEnd = html.indexOf('</section>', heroStart) + 10;
html = html.slice(0, heroStart) + benchmarkHero + html.slice(heroEnd);

// Replace everything between Hero and </main> with allSections
const topEnd = html.indexOf('</section>', html.indexOf('id="top"'));
const mainEnd = html.indexOf('</main>');

html = html.slice(0, topEnd + 10) + '\n\n' + allSections + '\n\n' + html.slice(mainEnd);


// Replace old intake dialog with the new Unified Multi-Step Enquiry Modal Dialog
const newModalHtml = `
<dialog data-intake-modal="" aria-labelledby="modal-intake-title" class="p-0 border-0 bg-transparent backdrop:bg-black/85 backdrop:backdrop-blur-md">
  <div class="intake-dialog-card mx-auto w-full max-w-2xl bg-black border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
    <header class="flex items-center justify-between border-b border-line px-6 py-4 bg-black/90">
      <p id="modal-intake-title" class="eyebrow tracking-widest text-xs uppercase font-semibold text-white">ELEVANCE &bull; MAKE AN ENQUIRY</p>
      <button type="button" data-intake-close="" aria-label="Close" class="text-sm text-neutral-400 hover:text-white transition-colors cursor-pointer px-2 py-1">
        Esc ✕
      </button>
    </header>
    ${renderEnquiryWizardHtml('modal', true)}
  </div>
</dialog>
`;

html = html.replace(/<dialog data-intake-modal=""[\s\S]*?<\/dialog>/i, newModalHtml);

// Update title and canonical
html = html.replace(/<link rel="canonical"[^>]*>/i, '<link rel="canonical" href="https://www.elevancelegal.co.uk/third/">');
html = html.replace(/<title>[\s\S]*?<\/title>/i, '<title>Elevance Legal Services — Practical Legal Support &amp; Document Preparation</title>');

// Fix ESM export
html = html.replace('export{wt as a,mt as f};', 'window.wt = wt; window.mt = mt;');

// Custom CSS for 3-column dropdown layout & crystal clear text contrast
const customStyles = `
  /* Solid Opaque Background for Dropdown Menus */
  details[data-dropdown] div[data-tone] {
    background: #000000 !important;
    background-color: #000000 !important;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.95) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15) !important;
  }

  /* Fix Select Dropdown Option Visibility on All OS & Browsers */
  select,
  select#nature-of-enquiry {
    color-scheme: dark !important;
    background-color: #121212 !important;
    color: #ffffff !important;
  }
  select option,
  select#nature-of-enquiry option {
    background-color: #1a1a1a !important;
    color: #ffffff !important;
    padding: 8px 12px !important;
  }
  select option:checked,
  select option:hover {
    background-color: #262626 !important;
    color: #ffffff !important;
  }

  /* Dropdown Menus: 3 equal-width columns for 9 services */
  .dropdown-grid-3 {
    display: grid !important;
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
    gap: 3.5rem !important;
  }
  .dropdown-grid-3 ul {
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 0.85rem !important;
    margin-top: 1.25rem !important;
    padding: 0 !important;
    list-style: none !important;
    width: 100% !important;
  }
  .dropdown-grid-3 li {
    display: flex !important;
    flex-direction: row !important;
    align-items: flex-start !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  .dropdown-grid-3 li a {
    display: inline-flex !important;
    align-items: center !important;
    gap: 0.85rem !important;
    font-size: 0.95rem !important;
    line-height: 1.4 !important;
    color: #e5e5e5 !important;
    font-weight: 400 !important;
    transition: all 0.2s ease !important;
    white-space: normal !important;
    text-decoration: none !important;
  }
  .dropdown-grid-3 li a:hover {
    color: #ffffff !important;
    transform: translateX(4px) !important;
  }
  .dropdown-grid-3 .service-num {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;
    font-size: 0.75rem !important;
    color: rgba(255, 255, 255, 0.5) !important;
    letter-spacing: 0.05em !important;
    flex-shrink: 0 !important;
  }
  .dropdown-grid-3 li a:hover .service-num {
    color: #ffffff !important;
  }
  .dropdown-col-title {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    letter-spacing: 0.15em !important;
    text-transform: uppercase !important;
    color: #ffffff !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12) !important;
    padding-bottom: 0.75rem !important;
    margin: 0 !important;
  }

  /* Wizard Radio & Checkbox Pills */
  .wizard-pill {
    cursor: pointer !important;
    font-size: 0.75rem !important;
    padding: 0.5rem 0.75rem !important;
    border-radius: 0.5rem !important;
    border: 1px solid rgba(255, 255, 255, 0.15) !important;
    background-color: rgba(255, 255, 255, 0.03) !important;
    color: #cccccc !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
    gap: 0.5rem !important;
    transition: all 0.2s ease !important;
    user-select: none !important;
  }
  .wizard-pill:hover {
    border-color: rgba(255, 255, 255, 0.45) !important;
    background-color: rgba(255, 255, 255, 0.07) !important;
    color: #ffffff !important;
  }
  .wizard-pill:has(:checked) {
    border-color: #ffffff !important;
    background-color: rgba(255, 255, 255, 0.14) !important;
    color: #ffffff !important;
    font-weight: 500 !important;
  }

  
  /* Consistent Minimal Margin between Questions and Options/Inputs */
  .wizard-step label.block {
    display: block !important;
    margin-bottom: 6px !important;
  }
  .wizard-step label.block + .grid,
  .wizard-step label.block + .flex,
  .wizard-step label.block + .wizard-input,
  .wizard-step label.block + .wizard-textarea,
  .wizard-step label.block + input,
  .wizard-step label.block + textarea {
    margin-top: 0 !important;
  }
  .modal-urgency-detail,
  .page-urgency-detail {
    margin-top: 10px !important;
  }

    /* Proportional 80% Scale for H1 & H2 Across the Site */
  #hero-title {
    font-size: clamp(1.9rem, 4.15vw, 4.15rem) !important;
    line-height: 1.06 !important;
    letter-spacing: -0.03em !important;
    max-width: 28ch !important;
  }
  h2.text-5xl.md\:text-7xl,
  h2.md\:text-7xl {
    font-size: clamp(2.2rem, 3.6vw, 3.6rem) !important;
    line-height: 1.08 !important;
    letter-spacing: -0.025em !important;
  }
  h2.text-4xl.md\:text-6xl,
  h2.md\:text-6xl {
    font-size: clamp(1.8rem, 3vw, 3rem) !important;
    line-height: 1.12 !important;
    letter-spacing: -0.025em !important;
  }
  h2.text-3xl.md\:text-5xl,
  h2.md\:text-5xl {
    font-size: clamp(1.5rem, 2.4vw, 2.4rem) !important;
    line-height: 1.15 !important;
  }

  /* Wizard Step 4: Polish Review Summary Card (Pixel-Perfect, Zero Line Collision) */
  .wizard-summary-card {
    border: 1px solid rgba(255, 255, 255, 0.14) !important;
    background: rgba(255, 255, 255, 0.02) !important;
    border-radius: 14px !important;
    padding: 4px 18px !important;
    margin-top: 14px !important;
    margin-bottom: 16px !important;
    box-sizing: border-box !important;
  }
  .wizard-summary-row {
    display: flex !important;
    align-items: flex-start !important;
    justify-content: space-between !important;
    gap: 16px !important;
    padding: 12px 0 !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
    font-size: 12.5px !important;
    line-height: 1.5 !important;
    box-sizing: border-box !important;
  }
  .wizard-summary-row:last-child {
    border-bottom: none !important;
  }
  .wizard-summary-label {
    color: rgba(255, 255, 255, 0.45) !important;
    font-size: 11px !important;
    font-weight: 500 !important;
    letter-spacing: 0.06em !important;
    text-transform: uppercase !important;
    flex-shrink: 0 !important;
    padding-top: 2px !important;
    user-select: none !important;
  }
  .wizard-summary-val,
  .wizard-summary-row > span:last-child {
    color: #ffffff !important;
    font-weight: 450 !important;
    text-align: right !important;
    word-break: break-word !important;
    max-width: 68% !important;
    line-height: 1.45 !important;
  }
  .wizard-summary-val.text-amber-400,
  .wizard-summary-row > span.text-amber-400 {
    color: #fbbf24 !important;
  }
  .wizard-summary-val.text-neutral-400,
  .wizard-summary-row > span.text-neutral-400 {
    color: rgba(255, 255, 255, 0.5) !important;
  }

  @media (max-width: 540px) {
    .wizard-summary-row {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 4px !important;
      padding: 10px 0 !important;
    }
    .wizard-summary-val,
    .wizard-summary-row > span:last-child {
      text-align: left !important;
      max-width: 100% !important;
    }
  }

  /* Wizard Step 4 Spacing & Consent Guard */
  .wizard-step.space-y-4 > * + * {
    margin-top: 14px !important;
  }
  .wizard-privacy-wrap {
    display: flex !important;
    align-items: flex-start !important;
    gap: 10px !important;
    padding-top: 4px !important;
    margin-bottom: 12px !important;
  }
  .wizard-privacy-wrap input[type="checkbox"] {
    margin-top: 2px !important;
    width: 16px !important;
    height: 16px !important;
    flex-shrink: 0 !important;
    accent-color: #ffffff !important;
    cursor: pointer !important;
  }
  .wizard-privacy-label {
    font-size: 12px !important;
    color: rgba(255, 255, 255, 0.65) !important;
    line-height: 1.45 !important;
    cursor: pointer !important;
    user-select: none !important;
  }
  .wizard-disclaimer-text {
    font-size: 11px !important;
    color: rgba(255, 255, 255, 0.4) !important;
    line-height: 1.55 !important;
    margin-bottom: 16px !important;
  }

  @media (max-width: 1023px) {
    .dropdown-grid-3 {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }
  }
`;

// Inject custom styles before </head>
html = html.replace('</head>', `  <style>\n${customStyles}\n  </style>\n</head>`);

const scriptsToAppend = `
<script>
(function() {
  // Wizard Controller Engine for both 'page' and 'modal'
  function initEnquiryWizard(pfx) {
    const container = document.getElementById(pfx + "-wizard-container");
    if (!container || container.__inited) return;
    container.__inited = true;

    let currentStep = 1;
    let selectedService = "";

    const step1 = document.getElementById(pfx + "-step-1");
    const step2 = document.getElementById(pfx + "-step-2");
    const step3 = document.getElementById(pfx + "-step-3");
    const step4 = document.getElementById(pfx + "-step-4");
    const stepConfirm = document.getElementById(pfx + "-confirmation");

    const progressBar = container.querySelector("." + pfx + "-progress-bar");
    const stepIndicator = container.querySelector("." + pfx + "-step-indicator");
    const stepBadge = container.querySelector("." + pfx + "-step-badge");

    function setStep(step) {
      currentStep = step;
      [step1, step2, step3, step4, stepConfirm].forEach(function(el) {
        if (el) el.classList.add("hidden");
      });
      if (step === 1) {
        if (step1) step1.classList.remove("hidden");
        if (progressBar) progressBar.style.width = "25%";
        if (stepIndicator) stepIndicator.textContent = "Step 1 of 4 • Select Service";
        if (stepBadge) stepBadge.textContent = "Initial Enquiry";
      } else if (step === 2) {
        if (step2) step2.classList.remove("hidden");
        if (progressBar) progressBar.style.width = "50%";
        if (stepIndicator) stepIndicator.textContent = "Step 2 of 4 • Service Questions";
        if (stepBadge) stepBadge.textContent = selectedService;
      } else if (step === 3) {
        if (step3) step3.classList.remove("hidden");
        if (progressBar) progressBar.style.width = "75%";
        if (stepIndicator) stepIndicator.textContent = "Step 3 of 4 • Contact Details";
        if (stepBadge) stepBadge.textContent = "Client Details";
      } else if (step === 4) {
        if (step4) step4.classList.remove("hidden");
        if (progressBar) progressBar.style.width = "95%";
        if (stepIndicator) stepIndicator.textContent = "Step 4 of 4 • Final Review";
        if (stepBadge) stepBadge.textContent = "Review & Submit";
        updateReviewSummary();
      } else if (step === 5) {
        if (stepConfirm) stepConfirm.classList.remove("hidden");
        if (progressBar) progressBar.style.width = "100%";
        if (stepIndicator) stepIndicator.textContent = "Enquiry Submitted";
        if (stepBadge) stepBadge.textContent = "Confirmed";
      }
    }

    // Service buttons in Step 1
    container.querySelectorAll("." + pfx + "-srv-btn").forEach(function(btn) {
      btn.addEventListener("click", function() {
        selectedService = btn.getAttribute("data-service") || "";
        container.querySelectorAll("." + pfx + "-selected-service-pill").forEach(function(el) {
          el.textContent = selectedService;
        });

        // Show matching questions panel in Step 2
        container.querySelectorAll("." + pfx + "-q-panel").forEach(function(p) {
          if (p.getAttribute("data-for") === selectedService) {
            p.classList.remove("hidden");
          } else {
            p.classList.add("hidden");
          }
        });
        setStep(2);
      });
    });

    // Back navigation buttons
    container.querySelector("." + pfx + "-back-to-1")?.addEventListener("click", function() { setStep(1); });
    container.querySelector("." + pfx + "-back-to-2")?.addEventListener("click", function() { setStep(2); });
    container.querySelector("." + pfx + "-back-to-3")?.addEventListener("click", function() { setStep(3); });

    // Urgency toggle
    const urgencyRadios = container.querySelectorAll("input[name='" + pfx + "-urgency']");
    const urgencyDetail = container.querySelector("." + pfx + "-urgency-detail");
    urgencyRadios.forEach(function(r) {
      r.addEventListener("change", function() {
        if (urgencyDetail) {
          if (r.value === "Yes") {
            urgencyDetail.classList.remove("hidden");
          } else {
            urgencyDetail.classList.add("hidden");
          }
        }
      });
    });

    // Step 2 -> Step 3
    container.querySelector("." + pfx + "-btn-goto-3")?.addEventListener("click", function() {
      setStep(3);
    });

    // Step 3 -> Step 4
    container.querySelector("." + pfx + "-btn-goto-4")?.addEventListener("click", function() {
      const nameInput = document.getElementById(pfx + "-name");
      const emailInput = document.getElementById(pfx + "-email");
      if (!nameInput?.value.trim()) {
        alert("Please provide your name.");
        nameInput?.focus();
        return;
      }
      if (!emailInput?.value.trim() || !emailInput.value.includes("@")) {
        alert("Please provide a valid email address.");
        emailInput?.focus();
        return;
      }
      setStep(4);
    });

    // Review Summary in Step 4
    function updateReviewSummary() {
      const revService = container.querySelector("." + pfx + "-rev-service");
      const revClient = container.querySelector("." + pfx + "-rev-client");
      const revUrgency = container.querySelector("." + pfx + "-rev-urgency");
      const revFiles = container.querySelector("." + pfx + "-rev-files");

      if (revService) revService.textContent = selectedService || "Not selected";

      const name = document.getElementById(pfx + "-name")?.value || "";
      const email = document.getElementById(pfx + "-email")?.value || "";
      const phone = document.getElementById(pfx + "-phone")?.value || "";
      if (revClient) revClient.textContent = name + " • " + email + (phone ? " (" + phone + ")" : "");

      const isUrgent = container.querySelector("input[name='" + pfx + "-urgency']:checked")?.value || "No";
      if (isUrgent === "Yes") {
        const uDate = container.querySelector("." + pfx + "-urgent-date")?.value || "";
        const uCtx = container.querySelector("." + pfx + "-urgent-context")?.value || "";
        if (revUrgency) {
          revUrgency.textContent = "URGENT: " + (uDate || "Date unspecified") + (uCtx ? " (" + uCtx + ")" : "");
          revUrgency.className = "wizard-summary-val font-medium text-amber-400 " + pfx + "-rev-urgency";
        }
      } else {
        if (revUrgency) {
          revUrgency.textContent = isUrgent;
          revUrgency.className = "wizard-summary-val font-medium text-white " + pfx + "-rev-urgency";
        }
      }

      const fileInput = document.getElementById(pfx + "-files");
      if (revFiles) {
        if (fileInput && fileInput.files && fileInput.files.length > 0) {
          revFiles.textContent = fileInput.files.length + " file(s) attached (" + Array.from(fileInput.files).map(f => f.name).join(", ") + ")";
        } else {
          revFiles.textContent = "None attached";
        }
      }
    }

    // Submit handler
    container.querySelector("." + pfx + "-submit-btn")?.addEventListener("click", function() {
      const privacyCheck = document.getElementById(pfx + "-privacy-check");
      if (!privacyCheck?.checked) {
        alert("Please check the box confirming you have read the Privacy Notice.");
        privacyCheck?.focus();
        return;
      }

      const btn = container.querySelector("." + pfx + "-submit-btn");
      if (btn) {
        btn.disabled = true;
        btn.textContent = "Submitting...";
      }

      const name = document.getElementById(pfx + "-name")?.value || "";
      const email = document.getElementById(pfx + "-email")?.value || "";
      const phone = document.getElementById(pfx + "-phone")?.value || "";
      const contactPref = container.querySelector("input[name='" + pfx + "-contact-pref']:checked")?.value || "Email";
      const contactTime = container.querySelector("input[name='" + pfx + "-contact-time']:checked")?.value || "Anytime";
      const extraNotes = document.getElementById(pfx + "-extra-notes")?.value || "";

      const isUrgent = container.querySelector("input[name='" + pfx + "-urgency']:checked")?.value || "No";
      const uDate = container.querySelector("." + pfx + "-urgent-date")?.value || "";
      const uCtx = container.querySelector("." + pfx + "-urgent-context")?.value || "";

      let detailsArr = [];
      const activePanel = container.querySelector("." + pfx + "-q-panel:not(.hidden)");
      if (activePanel) {
        activePanel.querySelectorAll("label.wizard-pill input:checked").forEach(function(inp) {
          detailsArr.push(inp.name.replace(pfx + "-", "") + ": " + inp.value);
        });
        activePanel.querySelectorAll("input[type='text'], textarea").forEach(function(txt) {
          if (txt.value.trim()) {
            detailsArr.push(txt.placeholder.split("...")[0].trim() + ": " + txt.value.trim());
          }
        });
      }

      const fileInput = document.getElementById(pfx + "-files");
      let fileNames = [];
      if (fileInput && fileInput.files) {
        for (let i = 0; i < fileInput.files.length; i++) {
          fileNames.push(fileInput.files[i].name);
        }
      }

      const compiledQuestion = [
        "SERVICE AREA: " + selectedService,
        "URGENCY / DEADLINE: " + (isUrgent === "Yes" ? ("YES (" + uDate + " - " + uCtx + ")") : isUrgent),
        detailsArr.length ? ("SPECIFIC DETAILS: " + detailsArr.join("; ")) : "",
        "PREFERRED CONTACT: " + contactPref + " (" + contactTime + ")",
        extraNotes ? ("ADDITIONAL NOTES: " + extraNotes) : "",
        fileNames.length ? ("ATTACHED FILES: " + fileNames.join(", ")) : ""
      ].filter(Boolean).join(" | ");

      const payload = {
        name: name,
        email: email,
        phone: phone,
        service: selectedService,
        question: compiledQuestion
      };

      fetch("contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      }).catch(function() {}).finally(function() {
        setStep(5);
      });
    });

    window[pfx + "WizardOpenWithService"] = function(srv) {
      if (srv) {
        const btn = container.querySelector("." + pfx + "-srv-btn[data-service*='" + srv + "']");
        if (btn) {
          btn.click();
          return;
        }
      }
      setStep(1);
    };
  }

  // Initialize both wizards
  function initAllWizards() {
    initEnquiryWizard("page");
    initEnquiryWizard("modal");
  }

  // Intake Modal open/close wiring
  const modal = document.querySelector("[data-intake-modal]");
  function openModal(prefill) {
    if (modal) {
      modal.showModal();
      if (window.modalWizardOpenWithService) {
        window.modalWizardOpenWithService(prefill || "");
      }
    }
  }

  function closeModal() {
    if (modal && modal.open) {
      modal.close();
    }
  }

  document.addEventListener("click", function(e) {
    const openTarget = e.target.closest("[data-intake-open]");
    if (openTarget) {
      e.preventDefault();
      openModal(openTarget.dataset.prefill || "");
      return;
    }
    const closeTarget = e.target.closest("[data-intake-close]");
    if (closeTarget) {
      e.preventDefault();
      closeModal();
      return;
    }
    if (modal && e.target === modal) {
      closeModal();
      return;
    }
  });

  // Auto-close dropdown when a link is clicked
  function initDropdownCloser() {
    const dropdowns = document.querySelectorAll("details[data-dropdown]");
    dropdowns.forEach(function(dd) {
      dd.querySelectorAll("a").forEach(function(link) {
        link.addEventListener("click", function() {
          dd.open = false;
        });
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
      initAllWizards();
      initDropdownCloser();
    });
  } else {
    initAllWizards();
    initDropdownCloser();
  }
})();
</script>
`;

html = html.replace('</body>', `${scriptsToAppend}\n</body>`);

// Write outputs to third/index.html and third.html
const outThirdIndex = path.join(__dirname, 'third', 'index.html');
const outThirdRoot = path.join(__dirname, 'third.html');

fs.writeFileSync(outThirdIndex, html, 'utf8');
fs.writeFileSync(outThirdRoot, html, 'utf8');

console.log('[SUCCESS] Rebuilt /third/ with EXACT benchmark copy:');
console.log(' - ' + outThirdIndex);
console.log(' - ' + outThirdRoot);
