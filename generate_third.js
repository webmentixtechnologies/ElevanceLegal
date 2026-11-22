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
// HOME     ABOUT     SERVICES     HOW WE WORK     CONTACT
const benchmarkDesktopNav = `
    <!-- Benchmark Navigation Bar -->
    <nav aria-label="Navigation" class="site-nav-desktop">
      <ul class="flex items-center gap-8">
        <li><a class="eyebrow text-fg-2 hover:text-fg transition-colors" href="#top">HOME</a></li>
        <li><a class="eyebrow text-fg-2 hover:text-fg transition-colors" href="#story">ABOUT</a></li>
        
        <!-- SERVICES DROPDOWN -->
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
                    <li><a href="#services">Dispute Resolution and Case Support</a></li>
                    <li><a href="#services">Business &amp; Commercial Legal Services</a></li>
                  </ul>
                </div>
                <div>
                  <p class="eyebrow uppercase tracking-wider text-xs font-semibold text-fg-3">Housing &amp; Workplace</p>
                  <ul>
                    <li><a href="#services">Housing &amp; Landlord-Tenant Matters</a></li>
                    <li><a href="#services">Employment &amp; Workplace Matters</a></li>
                    <li><a href="#services">Family &amp; Personal Matters</a></li>
                  </ul>
                </div>
                <div>
                  <p class="eyebrow uppercase tracking-wider text-xs font-semibold text-fg-3">Estates &amp; Notarial</p>
                  <ul>
                    <li><a href="#services">Wills &amp; Wills Drafting</a></li>
                    <li><a href="#services">Lasting Powers of Attorney</a></li>
                    <li><a href="#services">Document Legalisation &amp; Notarial Coordination</a></li>
                  </ul>
                </div>
                <div>
                  <p class="eyebrow uppercase tracking-wider text-xs font-semibold text-fg-3">Translation &amp; Solicitor</p>
                  <ul>
                    <li><a href="#services">Translation Services</a></li>
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
        <p class="marker"><span class="tabular-nums">02</span><span class="mx-3 text-fg-3" aria-hidden="true">—</span>OUR STORY</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 id="story-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">
        A more approachable way <br><span style="color: rgba(255, 255, 255, 0.65);">to navigate legal matters.</span>
      </h2>
    </div>
    <div class="self-end text-lg leading-relaxed text-fg-2 lg:col-span-5 lg:col-start-8 space-y-4">
      <p>
        Elevance Legal Services was established with a simple objective: to make legal assistance more accessible, practical and straightforward.
      </p>
      <p class="text-base text-fg-3">
        We recognise that individuals, families and businesses often need reliable legal support without the complexity or expense that can sometimes accompany traditional legal services.
      </p>
      <p class="text-base text-fg-3">
        Our approach is built on understanding our clients' needs, providing clear guidance and delivering practical solutions. We offer assistance across a range of legal matters, including document drafting, contractual issues, housing, family matters and business-related concerns.
      </p>
      <p class="text-base text-fg-3">
        We believe in clear communication, careful preparation and a personal approach, ensuring that every client understands the assistance available and the steps involved.
      </p>
    </div>
  </div>
</section>
`;

// 5. SECTION: OUR SERVICES (Exact Benchmark 10 Services in Hairline Grid)
const secOurServices = `
<!-- SECTION: OUR SERVICES (Exact Benchmark Copy in Master Second Hairline Grid) -->
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
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">01</span>
      <h3 class="mt-3 text-xl font-normal text-white">Document Preparation &amp; Support</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We assist individuals and businesses with preparing, formatting and organising correspondence, applications, complaints and other documents. Our services include document typing, proofreading, compiling supporting information and preparing documents from instructions or information provided by clients. Where a matter requires legal advice or specialist drafting, we can help identify appropriate professional assistance.</p>
    </div>

    <!-- 02 Dispute Resolution and Case Support -->
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">02</span>
      <h3 class="mt-3 text-xl font-normal text-white">Dispute Resolution and Case Support</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We provide practical assistance to individuals and businesses involved in disputes, including reviewing relevant documents, preparing formal correspondence, organising evidence and drafting responses to claims or complaints. We can assist with pre-action correspondence, settlement proposals and negotiations, helping clients explore practical solutions without unnecessary escalation. Where court proceedings or other reserved legal activities are required, we can explain the limitations of our services and discuss appropriate next steps.</p>
    </div>

    <!-- 03 Housing & Landlord-Tenant Matters -->
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">03</span>
      <h3 class="mt-3 text-xl font-normal text-white">Housing &amp; Landlord-Tenant Matters</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We provide practical assistance to landlords and tenants on a range of housing and tenancy matters, including tenancy agreements, rent arrears, deposit disputes, disrepair, tenancy disputes and housing-related correspondence. Our services include reviewing documents, explaining relevant rights and obligations, preparing formal correspondence and assisting with negotiations to resolve disputes. Where court proceedings or specialist representation are required, we can explain the limitations of our services and help you identify appropriate next steps.</p>
    </div>

    <!-- 04 Employment & Workplace Matters -->
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">04</span>
      <h3 class="mt-3 text-xl font-normal text-white">Employment &amp; Workplace Matters</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We provide practical legal assistance to employees and employers on a range of workplace matters, including employment contracts, grievances, disciplinary procedures, workplace disputes and settlement agreements. Our services include reviewing employment documentation, explaining relevant rights and obligations, preparing formal correspondence and assisting with workplace negotiations and dispute resolution. Where specialist representation or services outside our permitted scope are required, we can help identify appropriate next steps.</p>
    </div>

    <!-- 05 Family & Personal Matters -->
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">05</span>
      <h3 class="mt-3 text-xl font-normal text-white">Family &amp; Personal Matters</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We provide sensitive and practical legal assistance with family and personal matters, including separation, divorce-related documentation, financial arrangements and family disputes. Our services include reviewing documents, explaining relevant rights and obligations, preparing correspondence and assisting with negotiations and proposed agreements. We aim to help clients navigate difficult personal circumstances with clarity, discretion and understanding.</p>
    </div>

    <!-- 06 Business & Commercial Legal Services -->
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">06</span>
      <h3 class="mt-3 text-xl font-normal text-white">Business &amp; Commercial Legal Services</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We provide practical legal assistance to businesses, entrepreneurs and self-employed professionals on a range of commercial matters, including business contracts, service agreements, non-disclosure agreements, commercial leases and contractual disputes. Our services include reviewing and drafting agreements, explaining contractual rights and obligations, preparing formal correspondence and assisting with commercial negotiations and dispute resolution. We aim to provide clear, commercially focused solutions that help businesses protect their interests and make informed decisions.</p>
    </div>

    <!-- 07 Translation Services -->
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">07</span>
      <h3 class="mt-3 text-xl font-normal text-white">Translation Services</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We assist with Arabic and Kurdish to English translations of personal, business and other documents, subject to language availability and the nature of the assignment. Where certified translations are required, we can arrange these through appropriately qualified translators, subject to the requirements of the receiving organisation. Please contact us to discuss your translation requirements.</p>
    </div>

    <!-- 08 Wills & Wills Drafting -->
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">08</span>
      <h3 class="mt-3 text-xl font-normal text-white">Wills &amp; Wills Drafting</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We provide assistance with preparing straightforward wills, helping individuals record their wishes and make arrangements for the distribution of their estate. Our services include gathering relevant information, preparing draft wills and explaining the requirements for signing and witnessing. Where more complex circumstances arise, we can explain when specialist legal advice may be appropriate.</p>
    </div>

    <!-- 09 Lasting Powers of Attorney -->
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02]">
      <span class="text-xs font-mono text-fg-3">09</span>
      <h3 class="mt-3 text-xl font-normal text-white">Lasting Powers of Attorney</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We assist individuals with preparing Lasting Powers of Attorney (LPAs) for Property and Financial Affairs and Health and Welfare. Our services include explaining the purpose of LPAs, gathering relevant information, preparing the necessary forms and providing guidance on signing, witnessing and registration with the Office of the Public Guardian. Where complex circumstances or concerns about mental capacity arise, specialist legal advice may be required.</p>
    </div>

    <!-- 10 Document Legalisation & Notarial Coordination -->
    <div class="p-8 transition-colors duration-300 hover:bg-white/[0.02] sm:col-span-2 lg:col-span-3">
      <span class="text-xs font-mono text-fg-3">10</span>
      <h3 class="mt-3 text-xl font-normal text-white">Document Legalisation &amp; Notarial Coordination</h3>
      <p class="mt-3 text-sm leading-relaxed text-fg-3">We provide administrative assistance with documents intended for use in the UK and overseas. Our services include coordinating appointments with notaries, arranging document translations and assisting with apostille and legalisation procedures. We can also help clients identify the documentation and formalities required by the relevant receiving authority.</p>
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
      <p class="mt-4 text-base leading-relaxed text-fg-3">
        Appointments with a solicitor may be available by prior arrangement, depending on the nature of your enquiry and availability.
      </p>
      <p class="mt-4 text-base leading-relaxed text-fg-3">
        Any solicitor services are provided separately, subject to the solicitor's own terms of engagement and fees.
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
    <div class="lg:col-span-7 grid gap-6 sm:grid-cols-2">
      <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur">
        <h3 class="text-lg font-normal text-white">Individuals</h3>
        <p class="mt-3 text-xs leading-relaxed text-fg-3">Practical legal assistance with personal matters, disputes, agreements and legal documentation, helping you understand your options and take informed decisions.</p>
      </div>
      <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur">
        <h3 class="text-lg font-normal text-white">Families</h3>
        <p class="mt-3 text-xs leading-relaxed text-fg-3">Sensitive and approachable assistance with family-related matters, wills, powers of attorney and personal legal documentation.</p>
      </div>
      <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur">
        <h3 class="text-lg font-normal text-white">Tenants &amp; landlords</h3>
        <p class="mt-3 text-xs leading-relaxed text-fg-3">Legal support with tenancy agreements, rent arrears, deposit disputes, disrepair concerns and landlord-tenant disagreements.</p>
      </div>
      <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur">
        <h3 class="text-lg font-normal text-white">Businesses &amp; entrepreneurs</h3>
        <p class="mt-3 text-xs leading-relaxed text-fg-3">Commercial legal assistance with contracts, business agreements, disputes and legal documentation, tailored to the needs of businesses and self-employed professionals.</p>
      </div>
    </div>
  </div>
</section>
`;

// 8. SECTION: WHY ELEVANCE (Exact Benchmark 5 Items)
const secWhyElevance = `
<!-- SECTION: WHY ELEVANCE (Exact Benchmark 5 Items) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" id="why" aria-labelledby="why-title">
  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">06</span><span class="mx-3 text-fg-3" aria-hidden="true">—</span>WHY ELEVANCE</p>
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
      <h3 class="text-lg font-normal text-white">Client-first approach</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">We take time to understand your circumstances, listen to your concerns and provide practical assistance tailored to your individual needs.</p>
    </div>

    <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur">
      <h3 class="text-lg font-normal text-white">Plain-English communication</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">We communicate clearly and straightforwardly, explaining our services and the practical steps involved without unnecessary jargon.</p>
    </div>

    <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur">
      <h3 class="text-lg font-normal text-white">Careful preparation</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">We approach every matter with attention to detail, ensuring that documents, correspondence and other work are prepared carefully and professionally.</p>
    </div>

    <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur">
      <h3 class="text-lg font-normal text-white">Transparent scope and fees</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">We explain the services we can provide and agree the scope of work and applicable fees before commencing your matter.</p>
    </div>

    <div class="border border-line rounded-2xl p-6 bg-canvas/40 backdrop-blur sm:col-span-2 lg:col-span-2">
      <h3 class="text-lg font-normal text-white">Clear professional boundaries</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">We focus on providing sensible, cost-conscious legal assistance that reflects the nature and complexity of your circumstances.</p>
    </div>

  </div>
</section>
`;

// 9. SECTION: HOW WE WORK (Exact Benchmark 5 Steps in Master Process Cards)
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
      <p class="mt-3 text-xs leading-relaxed text-fg-3">We review your enquiry, consider the nature of the assistance required and explain the services we can provide.</p>
    </div>
    <div class="process-card rounded-2xl p-6">
      <span class="text-3xl font-display text-fg-3">03</span>
      <h3 class="mt-5 text-lg font-normal text-white">Clear engagement</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">We confirm the agreed scope of work, applicable fees and terms of engagement before commencing your matter.</p>
    </div>
    <div class="process-card rounded-2xl p-6">
      <span class="text-3xl font-display text-fg-3">04</span>
      <h3 class="mt-5 text-lg font-normal text-white">Preparation &amp; coordination</h3>
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

// 11. SECTION: CONTACT US (Exact Benchmark Copy & Interactive Form with Details)
const secContactUs = `
<!-- SECTION: CONTACT US (Exact Benchmark Copy) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" id="contact">
  <div class="grid gap-12 lg:grid-cols-12">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">09</span><span class="mx-3 text-fg-3" aria-hidden="true">—</span>CONTACT US</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">Let’s discuss your next step.</h2>
      
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
            <span class="text-white">London, United Kingdom</span>
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

    <!-- Contact Form (Exact Fields from Benchmark) -->
    <div class="lg:col-span-6">
      <form id="benchmark-contact-form" class="border border-line rounded-2xl p-6 sm:p-8 bg-canvas/40 backdrop-blur space-y-5">
        <div class="grid gap-4 sm:grid-cols-2">
          <div>
            <label for="full-name" class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">FULL NAME</label>
            <input type="text" id="full-name" name="name" required class="w-full rounded-lg border border-line bg-canvas/60 px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="Your full name">
          </div>
          <div>
            <label for="email-address" class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">EMAIL ADDRESS</label>
            <input type="email" id="email-address" name="email" required class="w-full rounded-lg border border-line bg-canvas/60 px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="name@example.com">
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div>
            <label for="telephone-number" class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">TELEPHONE NUMBER</label>
            <input type="tel" id="telephone-number" name="phone" class="w-full rounded-lg border border-line bg-canvas/60 px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="+44...">
          </div>
          <div>
            <label for="nature-of-enquiry" class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">NATURE OF ENQUIRY</label>
            <select id="nature-of-enquiry" name="nature" class="w-full rounded-lg border border-line bg-canvas/80 px-3.5 py-2.5 text-sm text-fg focus:border-fg focus:outline-none">
              <option value="Document Preparation & Support">Document Preparation &amp; Support</option>
              <option value="Dispute Resolution and Case Support">Dispute Resolution and Case Support</option>
              <option value="Housing & Landlord-Tenant Matters">Housing &amp; Landlord-Tenant Matters</option>
              <option value="Employment & Workplace Matters">Employment &amp; Workplace Matters</option>
              <option value="Family & Personal Matters">Family &amp; Personal Matters</option>
              <option value="Business & Commercial Legal Services">Business &amp; Commercial Legal Services</option>
              <option value="Translation Services">Translation Services</option>
              <option value="Wills & Wills Drafting">Wills &amp; Wills Drafting</option>
              <option value="Lasting Powers of Attorney">Lasting Powers of Attorney</option>
              <option value="Document Legalisation & Notarial Coordination">Document Legalisation &amp; Notarial Coordination</option>
              <option value="Other">Other Enquiry</option>
            </select>
          </div>
        </div>

        <div>
          <label for="how-can-we-help" class="block text-xs uppercase tracking-wider text-fg-3 mb-1.5 font-medium">HOW CAN WE HELP?</label>
          <textarea id="how-can-we-help" name="message" rows="4" required class="w-full rounded-lg border border-line bg-canvas/60 px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-3 focus:border-fg focus:outline-none" placeholder="Briefly describe what you would like to achieve..."></textarea>
        </div>

        <div class="flex items-start gap-3 pt-1">
          <input type="checkbox" id="privacy-consent" name="privacy" required class="mt-1 h-4 w-4 rounded border-line bg-canvas/60 text-fg focus:ring-offset-canvas">
          <label for="privacy-consent" class="text-xs text-fg-3 leading-relaxed">
            I have read the Privacy Notice and understand how my personal information will be used.
          </label>
        </div>

        <p class="text-xs text-fg-3 leading-relaxed">
          Please provide only a brief description of your enquiry. Do not submit confidential documents or sensitive personal information through this form.
        </p>

        <p class="text-xs text-fg-3 leading-relaxed">
          Submitting an enquiry does not establish a client relationship. We will contact you to discuss the next steps.
        </p>

        <button type="submit" id="benchmark-submit-btn" class="w-full btn-pill-primary py-3">
          SUBMIT ENQUIRY
        </button>
        <div id="benchmark-success-msg" class="hidden text-center text-xs text-emerald-400 font-medium py-2">
          &check; Thank you! Your enquiry has been received. We will contact you shortly.
        </div>
      </form>
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
        <p>Registered Office: London, United Kingdom</p>
        <p>Email: <a href="mailto:info@elevancelegal.co.uk" class="text-fg-2 hover:underline">info@elevancelegal.co.uk</a></p>
        <p>Telephone: <a href="tel:+447543105658" class="text-fg-2 hover:underline">+44 7543 105658</a></p>
      </div>

    </div>

    <!-- Bottom Hyperlinks & Copyright -->
    <div class="border-t border-line pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-fg-3">
      <div class="flex flex-wrap gap-x-6 gap-y-2">
        <a href="#contact" data-intake-open="" data-prefill="Privacy Notice enquiry" class="hover:text-fg hover:underline">Privacy Notice</a>
        <a href="#contact" data-intake-open="" data-prefill="Terms of Business enquiry" class="hover:text-fg hover:underline">Terms of Business</a>
        <a href="#contact" data-intake-open="" data-prefill="Complaints Procedure enquiry" class="hover:text-fg hover:underline">Complaints Procedure</a>
        <a href="#solicitor" class="hover:text-fg hover:underline">Regulatory Information</a>
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

// Update title and canonical
html = html.replace(/<link rel="canonical"[^>]*>/i, '<link rel="canonical" href="https://www.elevancelegal.co.uk/third/">');
html = html.replace(/<title>[\s\S]*?<\/title>/i, '<title>Elevance Legal Services — Practical Legal Support &amp; Document Preparation</title>');

// Fix ESM export
html = html.replace('export{wt as a,mt as f};', 'window.wt = wt; window.mt = mt;');

// Add Contact Form submission handler
const formScript = `
<script>
(function() {
  const form = document.getElementById("benchmark-contact-form");
  if (!form || form.__bound) return;
  form.__bound = true;
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const btn = document.getElementById("benchmark-submit-btn");
    const successMsg = document.getElementById("benchmark-success-msg");
    if (btn) {
      btn.disabled = true;
      btn.innerText = "Submitting...";
    }
    const payload = {
      name: document.getElementById("full-name")?.value || "",
      email: document.getElementById("email-address")?.value || "",
      phone: document.getElementById("telephone-number")?.value || "",
      nature: document.getElementById("nature-of-enquiry")?.value || "",
      question: "[" + (document.getElementById("nature-of-enquiry")?.value || "") + "] " + 
                (document.getElementById("how-can-we-help")?.value || "") + 
                (document.getElementById("telephone-number")?.value ? " (Phone: " + document.getElementById("telephone-number").value + ")" : "")
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

if (!html.includes('benchmark-contact-form')) {
  html = html.replace('</body>', `${formScript}\n</body>`);
}

// Write outputs to third/index.html and third.html
const outThirdIndex = path.join(__dirname, 'third', 'index.html');
const outThirdRoot = path.join(__dirname, 'third.html');

fs.writeFileSync(outThirdIndex, html, 'utf8');
fs.writeFileSync(outThirdRoot, html, 'utf8');

console.log('[SUCCESS] Rebuilt /third/ with EXACT benchmark copy:');
console.log(' - ' + outThirdIndex);
console.log(' - ' + outThirdRoot);
