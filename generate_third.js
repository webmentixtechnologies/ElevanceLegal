// generate_third.js
// Reverse-engineers https://pitch.law/ design system into /third/
// Preserving exact customer document copy and headings:
// - WELCOME
// - OUR STORY
// - OUR SERVICES (10 Services)
// - SOLICITOR BY APPOINTMENT
// - WHO WE SUPPORT (4 Groups)
// - WHY ELEVANCE (5 Pillars)
// - HOW WE WORK (5 Steps)
// - FREQUENTLY ASKED QUESTIONS (12 FAQs)
// - CONTACT US (Form + Details)
// - OUR COMMITMENT
//
// Incorporating 100% of Pitch.law's signature UI elements:
// - Header with max-w-[1760px], 72px height, dropdown grids with tone lines, Ask Elevance ⌘K pill
// - Hero with video loop, search intake bar, 4 interactive pills
// - Section 12-column grid headers with Pitch markers (01 — LABEL, 1px bar, 5xl/7xl font-display)
// - Section 03 Hairline grid matching Pitch Solutions with hover:bg-raised and text-4xl display titles
// - Section 05 Flow lane with interactive flow links canvas (wt engine)
// - Section 06 Commitments grid matching Pitch "What you can count on"
// - Section 07 How We Work 5-step process cards with flow tracer links
// - Section 08 Knowledge base / FAQ accordion with +/× animation
// - Section 09 Contact with Pitch's rotating orbital dot-rings SVG animation (.dot-rings & .ring)
// - Section 10 Commitment manifesto callout card
// - Footer matching Pitch 12-column grid and statutory regulatory notice

const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, 'second.html');
let html = fs.readFileSync(srcFile, 'utf8');

// 1. Update Canonical URL & Title for /third/
html = html.replace(
  '<link rel="canonical" href="https://www.elevancelegal.co.uk/second/">',
  '<link rel="canonical" href="https://www.elevancelegal.co.uk/third/">'
);

html = html.replace(
  '<title>Elevance Legal Services | Legal Consultancy, Documents & Certified Translation London</title>',
  '<title>Elevance Legal Services | Legal support that brings clarity to complexity | London</title>'
);

// 2. Add Pitch Dot-Rings CSS & Keyframes
const pitchExtraCss = `
/* Pitch.law Signature Rotating Orbital Dot-Rings Animation */
.dot-rings {
  pointer-events: none;
  overflow: visible;
}
.ring {
  transform-origin: 0 0;
  animation: ring-spin var(--dur, 180s) linear infinite;
}
.ring.reverse {
  animation-direction: reverse;
}
@keyframes ring-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@media (prefers-reduced-motion: reduce) {
  .ring {
    animation: none !important;
  }
}
`;

if (!html.includes('ring-spin')) {
  html = html.replace('</style>', `${pitchExtraCss}\n</style>`);
}

// 3. Hallmark Stamp
const hallmarkStamp = `/*
 * Hallmark · v2.0.0 — Pitch.law Parity Edition
 * Reverse-Engineered from https://pitch.law/
 * Theme: Obsidian & Gold / London Institutional
 * Containers: container-studio (1320px) & max-w-[1760px]
 * Animations: 1. Ambient Harmonic Sine Waves (mt)
 *             2. Dynamic Flow Tracer Links (wt)
 *             3. Orbital Concentric Dot-Rings SVG (.dot-rings)
 * Copy: 100% Exact Client Document Text
 */`;

if (!html.includes('Hallmark · v2.0.0')) {
  html = html.replace('<style>:root{', `<style>\n${hallmarkStamp}\n:root{`);
}

// 4. Update Header Nav to Match Pitch.law & Section Anchors
html = html.replace(/href="#solutions"/g, 'href="#services"');
html = html.replace(/href="#collaboration"/g, 'href="#solicitor"');
html = html.replace(/href="#goals"/g, 'href="#welcome"');
html = html.replace(/href="#lifecycle-home"/g, 'href="#services"');
html = html.replace(/href="#lifecycle-work"/g, 'href="#services"');
html = html.replace(/href="#lifecycle-family"/g, 'href="#services"');
html = html.replace(/href="#lifecycle-business"/g, 'href="#services"');
html = html.replace(/href="#lifecycle-docs"/g, 'href="#services"');

// Mobile Nav Ul
const oldMobileNavUl = `<ul class="space-y-4 text-lg">
            <li><a href="#welcome" class="block font-medium text-fg hover:text-fg-2">Your goals</a></li>
            <li><a href="#services" class="block font-medium text-fg hover:text-fg-2">Services</a></li>
            <li><a href="#how" class="block font-medium text-fg hover:text-fg-2">How we work</a></li>
            <li><a href="#solicitor" class="block font-medium text-fg hover:text-fg-2">Authorised Solicitors</a></li>
            <li><a href="#faq" class="block font-medium text-fg hover:text-fg-2">Questions</a></li>
          </ul>`;

const newMobileNavUl = `<ul class="space-y-4 text-lg">
            <li><a href="#welcome" class="block font-medium text-fg hover:text-fg-2">Welcome</a></li>
            <li><a href="#story" class="block font-medium text-fg hover:text-fg-2">Our story</a></li>
            <li><a href="#services" class="block font-medium text-fg hover:text-fg-2">Our services</a></li>
            <li><a href="#solicitor" class="block font-medium text-fg hover:text-fg-2">Authorised Solicitors</a></li>
            <li><a href="#support" class="block font-medium text-fg hover:text-fg-2">Who we support</a></li>
            <li><a href="#why" class="block font-medium text-fg hover:text-fg-2">Why Elevance</a></li>
            <li><a href="#how" class="block font-medium text-fg hover:text-fg-2">How we work</a></li>
            <li><a href="#faq" class="block font-medium text-fg hover:text-fg-2">Questions</a></li>
            <li><a href="#contact" class="block font-medium text-fg hover:text-fg-2">Contact us</a></li>
          </ul>`;

html = html.replace(oldMobileNavUl, newMobileNavUl);

// 5. Hero Section Copy Check
const heroEyebrow = `<p class="eyebrow uppercase tracking-widest text-xs font-semibold text-fg-3 mb-4">CLARITY, CONFIDENCE AND A BETTER WAY FORWARD</p>\n    <h1 id="hero-title" class="font-display text-balance">`;
if (!html.includes('CLARITY, CONFIDENCE AND A BETTER WAY FORWARD')) {
  html = html.replace('<h1 id="hero-title" class="font-display text-balance">', heroEyebrow);
}

// 6. Middle Components with Pitch.law Design System & Exact Customer Copy
const middleContent = `
<!-- SECTION 01: WELCOME (Pitch 12-Column Section Header Pattern) -->
<section class="border-t border-line relative isolate" id="welcome" aria-labelledby="welcome-title">
  <!-- Pitch Ambient Sine Wave Canvas -->
  <span aria-hidden="true" data-ambient-lines="" data-seed="welcome-pitch" data-colors="#ff9a4d,#ffd25b" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_14%,#000_86%,transparent)] pointer-events-none opacity-45"></span>

  <div class="container-studio py-24 md:py-32">
    <div class="grid gap-10 lg:grid-cols-12 items-start">
      <div class="lg:col-span-6">
        <div>
          <p class="marker"><span class="tabular-nums">01</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>WELCOME</p>
          <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
        </div>
        <h2 id="welcome-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">
          Legal support, <br><span style="color: rgba(255, 255, 255, 0.65);">centred on your needs.</span>
        </h2>
        <div class="mt-10 flex flex-wrap gap-4 items-center">
          <button type="button" data-intake-open="" data-prefill="I would like to make an enquiry" class="shrink-0 rounded-full bg-fg px-7 py-3 text-sm font-normal text-canvas transition-opacity hover:opacity-85">
            MAKE AN ENQUIRY
          </button>
          <a href="#services" class="group flex items-center gap-3 whitespace-nowrap rounded-full border border-line px-5 py-2.5 text-sm text-fg-2 transition-colors hover:border-fg hover:text-fg">
            <span>Explore our services</span>
            <span class="transition-transform group-hover:translate-y-0.5">&darr;</span>
          </a>
        </div>
      </div>

      <div class="lg:col-span-5 lg:col-start-8 self-end space-y-6 text-base sm:text-lg leading-relaxed text-fg-2 font-light">
        <p>
          Legal matters can be complex and sometimes overwhelming. Whether you are dealing with a housing issue, an employment matter, a family concern or a business dispute, obtaining clear and practical assistance can make a real difference.
        </p>
        <p>
          At Elevance, we provide accessible document preparation and practical assistance to individuals, families and businesses. Our approach is straightforward: we listen to your concerns, explain how we can help and work towards practical solutions tailored to your circumstances.
        </p>
        <p>
          We believe legal assistance should be clear, approachable and proportionate to your needs. We explain the scope of our services and agree our fees with you before commencing work.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 02: OUR STORY (Pitch Editorial Narrative Split) -->
<section class="border-t border-line relative isolate" id="story" aria-labelledby="story-title">
  <div class="container-studio py-24 md:py-32">
    <div class="grid gap-10 lg:grid-cols-12 items-start">
      <div class="lg:col-span-6">
        <div>
          <p class="marker"><span class="tabular-nums">02</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>OUR STORY</p>
          <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
        </div>
        <h2 id="story-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">
          A more approachable way <br><span style="color: rgba(255, 255, 255, 0.65);">to navigate legal matters.</span>
        </h2>
        <div class="mt-12 max-w-md rounded-2xl border border-line bg-raised/50 p-6 backdrop-blur">
          <p class="text-xs uppercase tracking-wider text-fg-3 font-mono">Founding Mission</p>
          <p class="mt-3 text-sm leading-relaxed text-fg-2">
            Making reliable legal assistance more accessible, practical and straightforward without prohibitive overhead or needless complexity.
          </p>
        </div>
      </div>

      <div class="lg:col-span-5 lg:col-start-8 space-y-6 text-base sm:text-lg leading-relaxed text-fg-2 font-light">
        <p>
          Elevance Legal Services was established with a simple objective: to make legal assistance more accessible, practical and straightforward.
        </p>
        <p>
          We recognise that individuals, families and businesses often need reliable legal support without the complexity or expense that can sometimes accompany traditional legal services.
        </p>
        <p>
          Our approach is built on understanding our clients' needs, providing clear guidance and delivering practical solutions. We offer assistance across a range of legal matters, including document drafting, contractual issues, housing, family matters and business-related concerns.
        </p>
        <p>
          We believe in clear communication, careful preparation and a personal approach, ensuring that every client understands the assistance available and the steps involved.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 03: OUR SERVICES (Exact Pitch Solutions Hairline Grid Pattern) -->
<section class="border-t border-line relative isolate" id="services" aria-labelledby="services-title">
  <!-- Pitch Ambient Sine Wave Canvas -->
  <span aria-hidden="true" data-ambient-lines="" data-seed="services-pitch" data-colors="#4285F4,#34A853" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_14%,#000_86%,transparent)] pointer-events-none opacity-45"></span>

  <div class="container-studio py-24 md:py-32">
    <div class="grid gap-10 lg:grid-cols-12">
      <div class="lg:col-span-6">
        <div>
          <p class="marker"><span class="tabular-nums">03</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>OUR SERVICES</p>
          <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
        </div>
        <h2 id="services-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">
          Practical support <br><span style="color: rgba(255, 255, 255, 0.65);">for everyday needs.</span>
        </h2>
      </div>
      <div class="self-end lg:col-span-5 lg:col-start-8 space-y-4 text-base sm:text-lg leading-relaxed text-fg-2 font-light">
        <p>
          We provide practical document preparation, administrative assistance and related support services for individuals and businesses.
        </p>
        <p>
          Whether you need help preparing correspondence, organising tenancy documents, managing business paperwork or arranging document translations, our aim is to make the process straightforward and efficient.
        </p>
        <p class="text-sm text-fg-3 font-normal">
          We explain the scope of our services and agree our fees before commencing work.
        </p>
      </div>
    </div>

    <!-- Pitch Signature Hairline Grid with 10 Services -->
    <ol class="mt-20 grid border-t border-line md:grid-cols-2 lg:grid-cols-3">
      
      <!-- 01 Document Preparation & Support -->
      <li class="min-w-0 border-b border-line md:border-r">
        <div class="group flex h-full flex-col gap-6 p-8 transition-colors duration-300 hover:bg-raised md:p-10">
          <div class="flex items-baseline justify-between gap-4">
            <span class="font-display text-2xl text-fg-3 tabular-nums">01</span>
            <span class="eyebrow text-right">Document Support</span>
          </div>
          <h3 class="font-display text-3xl leading-[1.05] text-white">Document Preparation &amp; Support</h3>
          <p class="leading-relaxed text-fg-2 text-sm">
            We assist individuals and businesses with preparing, formatting and organising correspondence, applications, complaints and other documents. Our services include document typing, proofreading, compiling supporting information and preparing documents from instructions or information provided by clients. Where a matter requires legal advice or specialist drafting, we can help identify appropriate professional assistance.
          </p>
          <button type="button" data-intake-open="" data-prefill="Enquiry regarding: Document Preparation & Support" class="mt-auto text-sm text-fg underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-fg text-left">
            Enquire about document support &rarr;
          </button>
        </div>
      </li>

      <!-- 02 Dispute Resolution and Case Support -->
      <li class="min-w-0 border-b border-line lg:border-r">
        <div class="group flex h-full flex-col gap-6 p-8 transition-colors duration-300 hover:bg-raised md:p-10">
          <div class="flex items-baseline justify-between gap-4">
            <span class="font-display text-2xl text-fg-3 tabular-nums">02</span>
            <span class="eyebrow text-right">Case Assistance</span>
          </div>
          <h3 class="font-display text-3xl leading-[1.05] text-white">Dispute Resolution and Case Support</h3>
          <p class="leading-relaxed text-fg-2 text-sm">
            We provide practical assistance to individuals and businesses involved in disputes, including reviewing relevant documents, preparing formal correspondence, organising evidence and drafting responses to claims or complaints. We can assist with pre-action correspondence, settlement proposals and negotiations, helping clients explore practical solutions without unnecessary escalation. Where court proceedings or other reserved legal activities are required, we can explain the limitations of our services and discuss appropriate next steps.
          </p>
          <button type="button" data-intake-open="" data-prefill="Enquiry regarding: Dispute Resolution and Case Support" class="mt-auto text-sm text-fg underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-fg text-left">
            Enquire about dispute support &rarr;
          </button>
        </div>
      </li>

      <!-- 03 Housing & Landlord-Tenant Matters -->
      <li class="min-w-0 border-b border-line md:border-r lg:border-r-0">
        <div class="group flex h-full flex-col gap-6 p-8 transition-colors duration-300 hover:bg-raised md:p-10">
          <div class="flex items-baseline justify-between gap-4">
            <span class="font-display text-2xl text-fg-3 tabular-nums">03</span>
            <span class="eyebrow text-right">Tenancy &amp; Property</span>
          </div>
          <h3 class="font-display text-3xl leading-[1.05] text-white">Housing &amp; Landlord-Tenant Matters</h3>
          <p class="leading-relaxed text-fg-2 text-sm">
            We provide practical assistance to landlords and tenants on a range of housing and tenancy matters, including tenancy agreements, rent arrears, deposit disputes, disrepair, tenancy disputes and housing-related correspondence. Our services include reviewing documents, explaining relevant rights and obligations, preparing formal correspondence and assisting with negotiations to resolve disputes. Where court proceedings or specialist representation are required, we can explain the limitations of our services and help you identify appropriate next steps.
          </p>
          <button type="button" data-intake-open="" data-prefill="Enquiry regarding: Housing & Landlord-Tenant Matters" class="mt-auto text-sm text-fg underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-fg text-left">
            Enquire about housing matters &rarr;
          </button>
        </div>
      </li>

      <!-- 04 Employment & Workplace Matters -->
      <li class="min-w-0 border-b border-line lg:border-r">
        <div class="group flex h-full flex-col gap-6 p-8 transition-colors duration-300 hover:bg-raised md:p-10">
          <div class="flex items-baseline justify-between gap-4">
            <span class="font-display text-2xl text-fg-3 tabular-nums">04</span>
            <span class="eyebrow text-right">Workplace</span>
          </div>
          <h3 class="font-display text-3xl leading-[1.05] text-white">Employment &amp; Workplace Matters</h3>
          <p class="leading-relaxed text-fg-2 text-sm">
            We provide practical legal assistance to employees and employers on a range of workplace matters, including employment contracts, grievances, disciplinary procedures, workplace disputes and settlement agreements. Our services include reviewing employment documentation, explaining relevant rights and obligations, preparing formal correspondence and assisting with workplace negotiations and dispute resolution. Where specialist representation or services outside our permitted scope are required, we can help identify appropriate next steps.
          </p>
          <button type="button" data-intake-open="" data-prefill="Enquiry regarding: Employment & Workplace Matters" class="mt-auto text-sm text-fg underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-fg text-left">
            Enquire about workplace matters &rarr;
          </button>
        </div>
      </li>

      <!-- 05 Family & Personal Matters -->
      <li class="min-w-0 border-b border-line md:border-r">
        <div class="group flex h-full flex-col gap-6 p-8 transition-colors duration-300 hover:bg-raised md:p-10">
          <div class="flex items-baseline justify-between gap-4">
            <span class="font-display text-2xl text-fg-3 tabular-nums">05</span>
            <span class="eyebrow text-right">Personal Care</span>
          </div>
          <h3 class="font-display text-3xl leading-[1.05] text-white">Family &amp; Personal Matters</h3>
          <p class="leading-relaxed text-fg-2 text-sm">
            We provide sensitive and practical legal assistance with family and personal matters, including separation, divorce-related documentation, financial arrangements and family disputes. Our services include reviewing documents, explaining relevant rights and obligations, preparing correspondence and assisting with negotiations and proposed agreements. We aim to help clients navigate difficult personal circumstances with clarity, discretion and understanding.
          </p>
          <button type="button" data-intake-open="" data-prefill="Enquiry regarding: Family & Personal Matters" class="mt-auto text-sm text-fg underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-fg text-left">
            Enquire about family matters &rarr;
          </button>
        </div>
      </li>

      <!-- 06 Business & Commercial Legal Services -->
      <li class="min-w-0 border-b border-line lg:border-r-0">
        <div class="group flex h-full flex-col gap-6 p-8 transition-colors duration-300 hover:bg-raised md:p-10">
          <div class="flex items-baseline justify-between gap-4">
            <span class="font-display text-2xl text-fg-3 tabular-nums">06</span>
            <span class="eyebrow text-right">Commercial</span>
          </div>
          <h3 class="font-display text-3xl leading-[1.05] text-white">Business &amp; Commercial Legal Services</h3>
          <p class="leading-relaxed text-fg-2 text-sm">
            We provide practical legal assistance to businesses, entrepreneurs and self-employed professionals on a range of commercial matters, including business contracts, service agreements, non-disclosure agreements, commercial leases and contractual disputes. Our services include reviewing and drafting agreements, explaining contractual rights and obligations, preparing formal correspondence and assisting with commercial negotiations and dispute resolution. We aim to provide clear, commercially focused solutions that help businesses protect their interests and make informed decisions.
          </p>
          <button type="button" data-intake-open="" data-prefill="Enquiry regarding: Business & Commercial Legal Services" class="mt-auto text-sm text-fg underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-fg text-left">
            Enquire about commercial services &rarr;
          </button>
        </div>
      </li>

      <!-- 07 Translation Services -->
      <li class="min-w-0 border-b border-line md:border-r">
        <div class="group flex h-full flex-col gap-6 p-8 transition-colors duration-300 hover:bg-raised md:p-10">
          <div class="flex items-baseline justify-between gap-4">
            <span class="font-display text-2xl text-fg-3 tabular-nums">07</span>
            <span class="eyebrow text-right">Certified Languages</span>
          </div>
          <h3 class="font-display text-3xl leading-[1.05] text-white">Translation Services</h3>
          <p class="leading-relaxed text-fg-2 text-sm">
            We assist with Arabic and Kurdish to English translations of personal, business and other documents, subject to language availability and the nature of the assignment. Where certified translations are required, we can arrange these through appropriately qualified translators, subject to the requirements of the receiving organisation. Please contact us to discuss your translation requirements.
          </p>
          <button type="button" data-intake-open="" data-prefill="Enquiry regarding: Translation Services (Arabic / Kurdish)" class="mt-auto text-sm text-fg underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-fg text-left">
            Enquire about translations &rarr;
          </button>
        </div>
      </li>

      <!-- 08 Wills & Wills Drafting -->
      <li class="min-w-0 border-b border-line lg:border-r">
        <div class="group flex h-full flex-col gap-6 p-8 transition-colors duration-300 hover:bg-raised md:p-10">
          <div class="flex items-baseline justify-between gap-4">
            <span class="font-display text-2xl text-fg-3 tabular-nums">08</span>
            <span class="eyebrow text-right">Estates &amp; Wishes</span>
          </div>
          <h3 class="font-display text-3xl leading-[1.05] text-white">Wills &amp; Wills Drafting</h3>
          <p class="leading-relaxed text-fg-2 text-sm">
            We provide assistance with preparing straightforward wills, helping individuals record their wishes and make arrangements for the distribution of their estate. Our services include gathering relevant information, preparing draft wills and explaining the requirements for signing and witnessing. Where more complex circumstances arise, we can explain when specialist legal advice may be appropriate.
          </p>
          <button type="button" data-intake-open="" data-prefill="Enquiry regarding: Wills & Wills Drafting" class="mt-auto text-sm text-fg underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-fg text-left">
            Enquire about wills &rarr;
          </button>
        </div>
      </li>

      <!-- 09 Lasting Powers of Attorney -->
      <li class="min-w-0 border-b border-line md:border-r lg:border-r-0">
        <div class="group flex h-full flex-col gap-6 p-8 transition-colors duration-300 hover:bg-raised md:p-10">
          <div class="flex items-baseline justify-between gap-4">
            <span class="font-display text-2xl text-fg-3 tabular-nums">09</span>
            <span class="eyebrow text-right">Future Planning</span>
          </div>
          <h3 class="font-display text-3xl leading-[1.05] text-white">Lasting Powers of Attorney</h3>
          <p class="leading-relaxed text-fg-2 text-sm">
            We assist individuals with preparing Lasting Powers of Attorney (LPAs) for Property and Financial Affairs and Health and Welfare. Our services include explaining the purpose of LPAs, gathering relevant information, preparing the necessary forms and providing guidance on signing, witnessing and registration with the Office of the Public Guardian. Where complex circumstances or concerns about mental capacity arise, specialist legal advice may be required.
          </p>
          <button type="button" data-intake-open="" data-prefill="Enquiry regarding: Lasting Powers of Attorney" class="mt-auto text-sm text-fg underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-fg text-left">
            Enquire about LPAs &rarr;
          </button>
        </div>
      </li>

      <!-- 10 Document Legalisation & Notarial Coordination -->
      <li class="min-w-0 border-b border-line sm:col-span-2 lg:col-span-3">
        <div class="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 p-8 transition-colors duration-300 hover:bg-raised md:p-10">
          <div class="max-w-4xl space-y-3">
            <div class="flex items-baseline gap-4">
              <span class="font-display text-2xl text-fg-3 tabular-nums">10</span>
              <span class="eyebrow">International Formalities</span>
            </div>
            <h3 class="font-display text-3xl leading-[1.05] text-white">Document Legalisation &amp; Notarial Coordination</h3>
            <p class="leading-relaxed text-fg-2 text-sm">
              We provide administrative assistance with documents intended for use in the UK and overseas. Our services include coordinating appointments with notaries, arranging document translations and assisting with apostille and legalisation procedures. We can also help clients identify the documentation and formalities required by the relevant receiving authority.
            </p>
          </div>
          <button type="button" data-intake-open="" data-prefill="Enquiry regarding: Document Legalisation & Notarial Coordination" class="shrink-0 rounded-full bg-fg px-7 py-3 text-sm font-normal text-canvas transition-opacity hover:opacity-85 whitespace-nowrap">
            Enquire about legalisation &rarr;
          </button>
        </div>
      </li>

    </ol>
  </div>
</section>

<!-- SECTION 04: SOLICITOR BY APPOINTMENT (Pitch Regulatory Spotlight Card) -->
<section class="border-t border-line relative isolate" id="solicitor" aria-labelledby="solicitor-title">
  <!-- Pitch Ambient Sine Wave Canvas -->
  <span aria-hidden="true" data-ambient-lines="" data-seed="solicitor-pitch" data-colors="#EA4335,#FBBC05" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_14%,#000_86%,transparent)] pointer-events-none opacity-45"></span>

  <div class="container-studio py-24 md:py-32">
    <div class="grid gap-12 lg:grid-cols-12 items-center">
      <div class="lg:col-span-7 relative z-10">
        <div>
          <p class="marker"><span class="tabular-nums">04</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>SOLICITOR BY APPOINTMENT</p>
          <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
        </div>
        <h2 id="solicitor-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">
          Access to a qualified solicitor <br><span style="color: rgba(255, 255, 255, 0.65);">when you need one.</span>
        </h2>
        <div class="mt-8 space-y-4 text-base sm:text-lg leading-relaxed text-fg-2 font-light">
          <p>
            While Elevance Legal Services provides a range of legal services, we recognise that some matters may require the advice or assistance of a qualified solicitor.
          </p>
          <p>
            Appointments with a solicitor may be available by prior arrangement, depending on the nature of your enquiry and availability.
          </p>
          <p class="text-sm text-fg-3 font-normal">
            Any solicitor services are provided separately, subject to the solicitor's own terms of engagement and fees.
          </p>
        </div>
        <div class="mt-10 flex flex-wrap gap-4">
          <button type="button" data-intake-open="" data-prefill="I would like to ask about an appointment with a qualified solicitor" class="shrink-0 rounded-full bg-fg px-7 py-3 text-sm font-normal text-canvas transition-opacity hover:opacity-85">
            ASK ABOUT AN APPOINTMENT
          </button>
        </div>
      </div>

      <div class="lg:col-span-5 rounded-2xl border border-line bg-raised/60 p-8 sm:p-10 backdrop-blur shadow-2xl space-y-6">
        <h3 class="text-xl font-normal text-white">Independent Solicitor Access</h3>
        <ul class="space-y-4 text-sm leading-relaxed text-fg-3">
          <li class="flex gap-3">
            <span class="text-fg-2 font-mono">&bull;</span>
            <span>Elevance provides unreserved legal consultancy, document drafting, case coordination, and certified translation.</span>
          </li>
          <li class="flex gap-3">
            <span class="text-fg-2 font-mono">&bull;</span>
            <span>Where reserved legal activities, court proceedings, or litigation arise, we introduce you directly to independent, SRA-regulated solicitors.</span>
          </li>
          <li class="flex gap-3">
            <span class="text-fg-2 font-mono">&bull;</span>
            <span>Solicitor services are engaged separately under the solicitor firm’s own terms of engagement and regulatory safeguards.</span>
          </li>
        </ul>
        <div class="pt-6 border-t border-line/60 flex items-center justify-between text-xs font-mono text-fg-3">
          <span>SRA Regulatory Boundary</span>
          <span class="text-emerald-400">Verified Compliance</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 05: WHO WE SUPPORT (Pitch Flow Lane with Interactive Flow Links Canvas) -->
<section class="border-t border-line relative isolate" id="support" aria-labelledby="support-title">
  <!-- Pitch Interactive Flow Links Canvas -->
  <canvas aria-hidden="true" data-flow-links="" data-colors="#ff9a4d,#ffd25b" class="pointer-events-none absolute inset-0 -z-10 block size-full"></canvas>

  <div class="container-studio py-24 md:py-32">
    <div class="grid gap-10 lg:grid-cols-12">
      <div class="lg:col-span-5">
        <div>
          <p class="marker"><span class="tabular-nums">05</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>WHO WE SUPPORT</p>
          <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
        </div>
        <h2 id="support-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">
          Here for individuals, families and businesses.
        </h2>
        <p class="mt-6 text-base leading-relaxed text-fg-3 font-light">
          Practical legal assistance tailored to your circumstances. Hover across any group to see our integrated support workflows.
        </p>
      </div>

      <div class="lg:col-span-7 grid gap-6 sm:grid-cols-2">
        <!-- Individuals -->
        <div data-flow-step="" data-slug="sup-ind" data-links="sup-fam" data-colors="#ff9a4d,#ffd25b" class="group border border-line rounded-2xl p-8 bg-canvas/70 backdrop-blur transition-all duration-300 hover:border-fg hover:bg-raised flex flex-col justify-between">
          <div>
            <div class="flex items-baseline justify-between">
              <h3 class="font-display text-2xl text-white">Individuals</h3>
              <span class="text-xs font-mono text-fg-3">01</span>
            </div>
            <p class="mt-4 text-sm leading-relaxed text-fg-3">
              Practical legal assistance with personal matters, disputes, agreements and legal documentation, helping you understand your options and take informed decisions.
            </p>
          </div>
          <button type="button" data-intake-open="" data-prefill="Support for Individuals: " class="mt-6 text-xs text-fg underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-fg text-left font-mono">
            Get personal support &rarr;
          </button>
        </div>

        <!-- Families -->
        <div data-flow-step="" data-slug="sup-fam" data-links="sup-ten" data-colors="#ff9a4d,#ffd25b" class="group border border-line rounded-2xl p-8 bg-canvas/70 backdrop-blur transition-all duration-300 hover:border-fg hover:bg-raised flex flex-col justify-between">
          <div>
            <div class="flex items-baseline justify-between">
              <h3 class="font-display text-2xl text-white">Families</h3>
              <span class="text-xs font-mono text-fg-3">02</span>
            </div>
            <p class="mt-4 text-sm leading-relaxed text-fg-3">
              Sensitive and approachable assistance with family-related matters, wills, powers of attorney and personal legal documentation.
            </p>
          </div>
          <button type="button" data-intake-open="" data-prefill="Support for Families: " class="mt-6 text-xs text-fg underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-fg text-left font-mono">
            Get family support &rarr;
          </button>
        </div>

        <!-- Tenants & landlords -->
        <div data-flow-step="" data-slug="sup-ten" data-links="sup-biz" data-colors="#ff9a4d,#ffd25b" class="group border border-line rounded-2xl p-8 bg-canvas/70 backdrop-blur transition-all duration-300 hover:border-fg hover:bg-raised flex flex-col justify-between">
          <div>
            <div class="flex items-baseline justify-between">
              <h3 class="font-display text-2xl text-white">Tenants &amp; landlords</h3>
              <span class="text-xs font-mono text-fg-3">03</span>
            </div>
            <p class="mt-4 text-sm leading-relaxed text-fg-3">
              Legal support with tenancy agreements, rent arrears, deposit disputes, disrepair concerns and landlord-tenant disagreements.
            </p>
          </div>
          <button type="button" data-intake-open="" data-prefill="Support for Tenants & Landlords: " class="mt-6 text-xs text-fg underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-fg text-left font-mono">
            Get tenancy support &rarr;
          </button>
        </div>

        <!-- Businesses & entrepreneurs -->
        <div data-flow-step="" data-slug="sup-biz" data-links="sup-ind" data-colors="#ff9a4d,#ffd25b" class="group border border-line rounded-2xl p-8 bg-canvas/70 backdrop-blur transition-all duration-300 hover:border-fg hover:bg-raised flex flex-col justify-between">
          <div>
            <div class="flex items-baseline justify-between">
              <h3 class="font-display text-2xl text-white">Businesses &amp; entrepreneurs</h3>
              <span class="text-xs font-mono text-fg-3">04</span>
            </div>
            <p class="mt-4 text-sm leading-relaxed text-fg-3">
              Commercial legal assistance with contracts, business agreements, disputes and legal documentation, tailored to the needs of businesses and self-employed professionals.
            </p>
          </div>
          <button type="button" data-intake-open="" data-prefill="Support for Businesses & Entrepreneurs: " class="mt-6 text-xs text-fg underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-fg text-left font-mono">
            Get commercial support &rarr;
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 06: WHY ELEVANCE (Pitch Commitments "What you can count on" Grid Pattern) -->
<section class="border-t border-line relative isolate" id="why" aria-labelledby="why-title">
  <div class="container-studio py-24 md:py-32">
    <div>
      <p class="marker"><span class="tabular-nums">06</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>WHY ELEVANCE</p>
      <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
    </div>
    <h2 id="why-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl max-w-4xl text-white">
      Support that is clear, considered and accountable.
    </h2>

    <div class="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
      
      <!-- 1. Client-first approach -->
      <article class="border-t border-line pt-8">
        <div class="flex items-baseline justify-between">
          <h3 class="font-display text-3xl text-white">Client-first approach</h3>
          <span class="font-mono text-xs text-fg-3">01</span>
        </div>
        <p class="mt-4 leading-relaxed text-fg-2 text-base font-light">
          We take time to understand your circumstances, listen to your concerns and provide practical assistance tailored to your individual needs.
        </p>
      </article>

      <!-- 2. Plain-English communication -->
      <article class="border-t border-line pt-8">
        <div class="flex items-baseline justify-between">
          <h3 class="font-display text-3xl text-white">Plain-English communication</h3>
          <span class="font-mono text-xs text-fg-3">02</span>
        </div>
        <p class="mt-4 leading-relaxed text-fg-2 text-base font-light">
          We communicate clearly and straightforwardly, explaining our services and the practical steps involved without unnecessary jargon.
        </p>
      </article>

      <!-- 3. Careful preparation -->
      <article class="border-t border-line pt-8">
        <div class="flex items-baseline justify-between">
          <h3 class="font-display text-3xl text-white">Careful preparation</h3>
          <span class="font-mono text-xs text-fg-3">03</span>
        </div>
        <p class="mt-4 leading-relaxed text-fg-2 text-base font-light">
          We approach every matter with attention to detail, ensuring that documents, correspondence and other work are prepared carefully and professionally.
        </p>
      </article>

      <!-- 4. Transparent scope and fees -->
      <article class="border-t border-line pt-8">
        <div class="flex items-baseline justify-between">
          <h3 class="font-display text-3xl text-white">Transparent scope and fees</h3>
          <span class="font-mono text-xs text-fg-3">04</span>
        </div>
        <p class="mt-4 leading-relaxed text-fg-2 text-base font-light">
          We explain the services we can provide and agree the scope of work and applicable fees before commencing your matter.
        </p>
      </article>

      <!-- 5. Clear professional boundaries -->
      <article class="border-t border-line pt-8 md:col-span-2 lg:col-span-2">
        <div class="flex items-baseline justify-between">
          <h3 class="font-display text-3xl text-white">Clear professional boundaries</h3>
          <span class="font-mono text-xs text-fg-3">05</span>
        </div>
        <p class="mt-4 leading-relaxed text-fg-2 text-base font-light max-w-2xl">
          We focus on providing sensible, cost-conscious legal assistance that reflects the nature and complexity of your circumstances.
        </p>
      </article>

    </div>
  </div>
</section>

<!-- SECTION 07: HOW WE WORK (Pitch 5-Step Process with Interactive Flow Links Canvas) -->
<section class="border-t border-line relative isolate" id="how" aria-labelledby="how-title">
  <!-- Pitch Ambient Sine Wave Canvas -->
  <span aria-hidden="true" data-ambient-lines="" data-seed="how-pitch" data-colors="#34A853,#FBBC05" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_14%,#000_86%,transparent)] pointer-events-none opacity-45"></span>
  <!-- Pitch Interactive Flow Links Canvas -->
  <canvas aria-hidden="true" data-flow-links="" data-colors="#34A853,#FBBC05" class="pointer-events-none absolute inset-0 -z-10 block size-full"></canvas>

  <div class="container-studio py-24 md:py-32">
    <div class="grid gap-10 lg:grid-cols-12">
      <div class="lg:col-span-6">
        <div>
          <p class="marker"><span class="tabular-nums">07</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>HOW WE WORK</p>
          <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
        </div>
        <h2 id="how-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">
          A straightforward journey from enquiry to next steps.
        </h2>
      </div>
      <p class="self-end text-lg leading-relaxed text-fg-2 font-light lg:col-span-5 lg:col-start-8">
        No open-ended clocks. We listen, assess the documents, quote upfront, and coordinate every step transparently.
      </p>
    </div>

    <!-- 5 Process Cards with Active Flow Tracer Links -->
    <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      
      <!-- 01 Initial conversation -->
      <div data-flow-step="" data-slug="hstep-1" data-links="hstep-2" data-colors="#34A853,#FBBC05" class="process-card rounded-2xl border border-line bg-canvas/80 p-6 backdrop-blur transition-all duration-300 hover:border-fg hover:bg-raised flex flex-col justify-between">
        <div>
          <span class="font-display text-3xl text-fg-3">01</span>
          <h3 class="mt-5 text-lg font-normal text-white">Initial conversation</h3>
          <p class="mt-3 text-xs leading-relaxed text-fg-3">
            Tell us about your legal matter, your concerns and what you would like to achieve. We will discuss your requirements and how we may be able to assist.
          </p>
        </div>
      </div>

      <!-- 02 Enquiry Assessment -->
      <div data-flow-step="" data-slug="hstep-2" data-links="hstep-3" data-colors="#34A853,#FBBC05" class="process-card rounded-2xl border border-line bg-canvas/80 p-6 backdrop-blur transition-all duration-300 hover:border-fg hover:bg-raised flex flex-col justify-between">
        <div>
          <span class="font-display text-3xl text-fg-3">02</span>
          <h3 class="mt-5 text-lg font-normal text-white">Enquiry Assessment</h3>
          <p class="mt-3 text-xs leading-relaxed text-fg-3">
            We review your enquiry, consider the nature of the assistance required and explain the services we can provide.
          </p>
        </div>
      </div>

      <!-- 03 Clear engagement -->
      <div data-flow-step="" data-slug="hstep-3" data-links="hstep-4" data-colors="#34A853,#FBBC05" class="process-card rounded-2xl border border-line bg-canvas/80 p-6 backdrop-blur transition-all duration-300 hover:border-fg hover:bg-raised flex flex-col justify-between">
        <div>
          <span class="font-display text-3xl text-fg-3">03</span>
          <h3 class="mt-5 text-lg font-normal text-white">Clear engagement</h3>
          <p class="mt-3 text-xs leading-relaxed text-fg-3">
            We confirm the agreed scope of work, applicable fees and terms of engagement before commencing your matter.
          </p>
        </div>
      </div>

      <!-- 04 Preparation & coordination -->
      <div data-flow-step="" data-slug="hstep-4" data-links="hstep-5" data-colors="#34A853,#FBBC05" class="process-card rounded-2xl border border-line bg-canvas/80 p-6 backdrop-blur transition-all duration-300 hover:border-fg hover:bg-raised flex flex-col justify-between">
        <div>
          <span class="font-display text-3xl text-fg-3">04</span>
          <h3 class="mt-5 text-lg font-normal text-white">Preparation &amp; coordination</h3>
          <p class="mt-3 text-xs leading-relaxed text-fg-3">
            We undertake the agreed work, provide practical guidance and keep you informed of progress throughout.
          </p>
        </div>
      </div>

      <!-- 05 Solicitor by appointment -->
      <div data-flow-step="" data-slug="hstep-5" data-links="hstep-1" data-colors="#34A853,#FBBC05" class="process-card rounded-2xl border border-line bg-canvas/80 p-6 backdrop-blur transition-all duration-300 hover:border-fg hover:bg-raised flex flex-col justify-between">
        <div>
          <span class="font-display text-3xl text-fg-3">05</span>
          <h3 class="mt-5 text-lg font-normal text-white">Solicitor by appointment</h3>
          <p class="mt-3 text-xs leading-relaxed text-fg-3">
            Where appropriate, we can assist in arranging a separate appointment with a qualified solicitor, subject to availability and acceptance of instructions.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- SECTION 08: FREQUENTLY ASKED QUESTIONS (Pitch Knowledge Base Accordion Pattern) -->
<section class="border-t border-line relative isolate" id="faq" aria-labelledby="faq-title">
  <div class="container-studio py-24 md:py-32">
    <div class="max-w-3xl">
      <div>
        <p class="marker"><span class="tabular-nums">08</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>FREQUENTLY ASKED QUESTIONS</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 id="faq-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">
        Answers before you get started.
      </h2>
      <p class="mt-6 text-base sm:text-lg leading-relaxed text-fg-2 font-light">
        Clear answers to questions regarding our unreserved legal consultancy, fees, and collaboration with qualified solicitors.
      </p>
    </div>

    <div class="mt-16 divide-y divide-line border-y border-line">
      
      <!-- FAQ 1 -->
      <details class="group py-6">
        <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
          <span>Is Elevance a solicitors' firm?</span>
          <span class="text-xl text-fg-3 transition-transform duration-200 group-open:rotate-45">+</span>
        </summary>
        <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
          No. Elevance Legal Services Ltd is an independent legal services company providing non-reserved legal services. It is not a solicitors' practice and is not authorised or regulated by the Solicitors Regulation Authority (SRA).
        </p>
      </details>

      <!-- FAQ 2 -->
      <details class="group py-6">
        <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
          <span>What kind of work does Elevance provide?</span>
          <span class="text-xl text-fg-3 transition-transform duration-200 group-open:rotate-45">+</span>
        </summary>
        <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
          We provide legal consultancy, document drafting and practical assistance across a range of matters, including housing, family matters, business contracts, and wills.
        </p>
      </details>

      <!-- FAQ 3 -->
      <details class="group py-6">
        <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
          <span>Can Elevance provide legal advice?</span>
          <span class="text-xl text-fg-3 transition-transform duration-200 group-open:rotate-45">+</span>
        </summary>
        <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
          Elevance primarily provides document preparation and administrative support services. We do not provide specialist legal advice or undertake reserved legal activities. Where legal advice is required, we can explain how to seek assistance from an appropriately qualified professional.
        </p>
      </details>

      <!-- FAQ 4 -->
      <details class="group py-6">
        <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
          <span>Can I see a solicitor?</span>
          <span class="text-xl text-fg-3 transition-transform duration-200 group-open:rotate-45">+</span>
        </summary>
        <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
          Yes. Appointments with a qualified solicitor may be available by prior arrangement, subject to availability and acceptance of instructions. Any solicitor services are provided under separate terms and fees.
        </p>
      </details>

      <!-- FAQ 5 -->
      <details class="group py-6">
        <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
          <span>Does Elevance represent clients in court?</span>
          <span class="text-xl text-fg-3 transition-transform duration-200 group-open:rotate-45">+</span>
        </summary>
        <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
          No. Elevance does not conduct litigation or exercise reserved rights of audience. We can, however, assist with permitted pre-action correspondence, document preparation and dispute resolution.
        </p>
      </details>

      <!-- FAQ 6 -->
      <details class="group py-6">
        <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
          <span>Can you help with housing and employment matters?</span>
          <span class="text-xl text-fg-3 transition-transform duration-200 group-open:rotate-45">+</span>
        </summary>
        <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
          Yes. We assist with tenancy disputes, housing correspondence and related legal documentation. The assistance available will depend on the circumstances of your enquiry.
        </p>
      </details>

      <!-- FAQ 7 -->
      <details class="group py-6">
        <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
          <span>Do you provide immigration advice?</span>
          <span class="text-xl text-fg-3 transition-transform duration-200 group-open:rotate-45">+</span>
        </summary>
        <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
          No. Elevance does not provide regulated UK immigration advice or immigration services.
        </p>
      </details>

      <!-- FAQ 8 -->
      <details class="group py-6">
        <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
          <span>Can you help with wills?</span>
          <span class="text-xl text-fg-3 transition-transform duration-200 group-open:rotate-45">+</span>
        </summary>
        <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
          Yes. We assist with preparing straightforward wills, including relevant documentation and guidance on signing and registration requirements.
        </p>
      </details>

      <!-- FAQ 9 -->
      <details class="group py-6">
        <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
          <span>Do you offer certified translation?</span>
          <span class="text-xl text-fg-3 transition-transform duration-200 group-open:rotate-45">+</span>
        </summary>
        <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
          We provide Arabic and Kurdish to English translation services. Where certified translations are required, we can assist with arranging these through appropriately qualified translators, subject to availability and the receiving organisation's requirements.
        </p>
      </details>

      <!-- FAQ 10 -->
      <details class="group py-6">
        <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
          <span>How much will it cost?</span>
          <span class="text-xl text-fg-3 transition-transform duration-200 group-open:rotate-45">+</span>
        </summary>
        <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
          Our fees depend on the nature and complexity of the work. Wherever possible, we offer fixed fees for clearly defined services. We explain our charges and agree the scope of work before proceeding.
        </p>
      </details>

      <!-- FAQ 11 -->
      <details class="group py-6">
        <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
          <span>Will my information be handled confidentially?</span>
          <span class="text-xl text-fg-3 transition-transform duration-200 group-open:rotate-45">+</span>
        </summary>
        <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
          Yes. We treat client information with care and confidentiality and handle personal data in accordance with applicable data protection legislation and our Privacy Notice.
        </p>
      </details>

      <!-- FAQ 12 -->
      <details class="group py-6">
        <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
          <span>Is the initial consultation free?</span>
          <span class="text-xl text-fg-3 transition-transform duration-200 group-open:rotate-45">+</span>
        </summary>
        <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
          We welcome initial enquiries and will explain any consultation charges before an appointment is confirmed. Fees for substantive legal advice or document review will be agreed in advance.
        </p>
      </details>

    </div>
  </div>
</section>

<!-- SECTION 09: CONTACT US (Exact Pitch Section 10 Pattern with Signature Orbital Dot-Rings SVG) -->
<section class="relative overflow-hidden border-t border-line" id="contact" aria-labelledby="contact-title">
  
  <!-- Pitch Signature Animated Orbital Dot-Rings SVG -->
  <svg class="dot-rings pointer-events-none absolute -bottom-1/2 -left-1/4 h-[110%] w-auto opacity-40" viewBox="-520 -520 1040 1040" aria-hidden="true" focusable="false">
    <defs>
      <radialGradient id="dot-glow">
        <stop offset="0" stop-color="#fff" stop-opacity="0.9"></stop>
        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
      </radialGradient>
    </defs>
    <g class="ring" style="--dur:180s">
      <circle r="70" fill="none" stroke="#fff" stroke-opacity="0.18" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="0.01 6.02"></circle>
    </g>
    <g class="ring reverse" style="--dur:202s">
      <circle r="97" fill="none" stroke="#fff" stroke-opacity="0.38" stroke-width="1.7" stroke-linecap="round" stroke-dasharray="0.01 6.93"></circle>
    </g>
    <g class="ring" style="--dur:224s">
      <circle r="124" fill="none" stroke="#fff" stroke-opacity="0.55" stroke-width="1.85" stroke-linecap="round" stroke-dasharray="0.01 7.79"></circle>
    </g>
    <g class="ring reverse" style="--dur:246s">
      <circle r="151" fill="none" stroke="#fff" stroke-opacity="0.7" stroke-width="1.98" stroke-linecap="round" stroke-dasharray="0.01 8.70"></circle>
    </g>
    <g class="ring" style="--dur:268s">
      <circle r="178" fill="none" stroke="#fff" stroke-opacity="0.82" stroke-width="2.11" stroke-linecap="round" stroke-dasharray="0.01 9.56"></circle>
    </g>
    <g class="ring reverse" style="--dur:290s">
      <circle r="205" fill="none" stroke="#fff" stroke-opacity="0.88" stroke-width="2.24" stroke-linecap="round" stroke-dasharray="0.01 10.47"></circle>
    </g>
    <g class="ring" style="--dur:312s">
      <circle r="232" fill="none" stroke="#fff" stroke-opacity="0.92" stroke-width="2.37" stroke-linecap="round" stroke-dasharray="0.01 11.38"></circle>
    </g>
  </svg>

  <div class="container-studio py-24 md:py-32 relative z-10">
    <div class="grid gap-12 lg:grid-cols-12 items-start">
      
      <!-- Left Column: Form -->
      <div class="lg:col-span-7">
        <div>
          <p class="marker"><span class="tabular-nums">09</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>CONTACT US</p>
          <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
        </div>
        <h2 id="contact-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl text-white">
          Let’s discuss your next step.
        </h2>
        <div class="mt-6 space-y-3 text-base sm:text-lg leading-relaxed text-fg-2 font-light">
          <p>
            Whether you need assistance with a personal legal matter, a business issue, a dispute or legal documentation, we are here to help.
          </p>
          <p>
            Tell us briefly about your enquiry, and we will consider how we may be able to assist and explain the next steps.
          </p>
        </div>

        <!-- Dedicated Contact Form with Pitch Underline Inputs -->
        <form id="page-contact-form" class="mt-10 space-y-8">
          <div class="grid gap-6 sm:grid-cols-2">
            <div>
              <label for="contact-name" class="block text-xs uppercase tracking-wider text-fg-3 font-mono">FULL NAME</label>
              <input id="contact-name" name="name" type="text" required placeholder="Your full name" class="mt-2 w-full border-0 border-b border-line bg-transparent py-2.5 text-base text-white placeholder:text-fg-3/60 focus:border-white focus:outline-none transition-colors">
            </div>
            <div>
              <label for="contact-email" class="block text-xs uppercase tracking-wider text-fg-3 font-mono">EMAIL ADDRESS</label>
              <input id="contact-email" name="email" type="email" required placeholder="name@example.com" class="mt-2 w-full border-0 border-b border-line bg-transparent py-2.5 text-base text-white placeholder:text-fg-3/60 focus:border-white focus:outline-none transition-colors">
            </div>
          </div>

          <div class="grid gap-6 sm:grid-cols-2">
            <div>
              <label for="contact-phone" class="block text-xs uppercase tracking-wider text-fg-3 font-mono">TELEPHONE NUMBER</label>
              <input id="contact-phone" name="phone" type="tel" placeholder="+44 7123 456789" class="mt-2 w-full border-0 border-b border-line bg-transparent py-2.5 text-base text-white placeholder:text-fg-3/60 focus:border-white focus:outline-none transition-colors">
            </div>
            <div>
              <label for="contact-nature" class="block text-xs uppercase tracking-wider text-fg-3 font-mono">NATURE OF ENQUIRY</label>
              <select id="contact-nature" name="nature" class="mt-2 w-full border-0 border-b border-line bg-canvas py-2.5 text-base text-white focus:border-white focus:outline-none transition-colors">
                <option value="General Legal Support" class="bg-black text-white">General Legal Support</option>
                <option value="Document Preparation & Support" class="bg-black text-white">Document Preparation &amp; Support</option>
                <option value="Dispute Resolution and Case Support" class="bg-black text-white">Dispute Resolution and Case Support</option>
                <option value="Housing & Landlord-Tenant Matters" class="bg-black text-white">Housing &amp; Landlord-Tenant Matters</option>
                <option value="Employment & Workplace Matters" class="bg-black text-white">Employment &amp; Workplace Matters</option>
                <option value="Family & Personal Matters" class="bg-black text-white">Family &amp; Personal Matters</option>
                <option value="Business & Commercial Legal Services" class="bg-black text-white">Business &amp; Commercial Legal Services</option>
                <option value="Translation Services" class="bg-black text-white">Translation Services (Arabic / Kurdish)</option>
                <option value="Wills & Wills Drafting" class="bg-black text-white">Wills &amp; Wills Drafting</option>
                <option value="Lasting Powers of Attorney" class="bg-black text-white">Lasting Powers of Attorney</option>
                <option value="Document Legalisation & Notarial" class="bg-black text-white">Document Legalisation &amp; Notarial Coordination</option>
                <option value="Solicitor by Appointment" class="bg-black text-white">Solicitor by Appointment</option>
              </select>
            </div>
          </div>

          <div>
            <label for="contact-message" class="block text-xs uppercase tracking-wider text-fg-3 font-mono">HOW CAN WE HELP?</label>
            <textarea id="contact-message" name="message" rows="4" required placeholder="Please outline your enquiry briefly..." class="mt-2 w-full border-0 border-b border-line bg-transparent py-2.5 text-base text-white placeholder:text-fg-3/60 focus:border-white focus:outline-none transition-colors resize-none"></textarea>
          </div>

          <!-- Privacy Checkbox & Safeguards -->
          <div class="space-y-3 pt-2">
            <label class="flex items-start gap-3 cursor-pointer text-xs text-fg-3">
              <input type="checkbox" required class="mt-0.5 rounded border-line bg-raised/50 text-white focus:ring-0">
              <span>I have read the Privacy Notice and understand how my personal information will be used.</span>
            </label>
            <p class="text-xs text-fg-3 leading-relaxed">
              Please provide only a brief description of your enquiry. Do not submit confidential documents or sensitive personal information through this form.
            </p>
            <p class="text-xs text-fg-3 leading-relaxed">
              Submitting an enquiry does not establish a client relationship. We will contact you to discuss the next steps.
            </p>
          </div>

          <div class="pt-2">
            <button type="submit" id="contact-submit-btn" class="shrink-0 rounded-full bg-fg px-8 py-3 text-sm font-normal text-canvas transition-opacity hover:opacity-85">
              SUBMIT ENQUIRY
            </button>
          </div>

          <div id="contact-success-msg" class="hidden p-5 rounded-xl border border-emerald-500/40 bg-emerald-950/20 text-emerald-300 text-sm">
            Thank you. Your enquiry has been received confidentially. We will review it and contact you promptly.
          </div>
        </form>
      </div>

      <!-- Right Column: Our Contact Details Card (Pitch Style) -->
      <div class="lg:col-span-5 p-8 sm:p-10 rounded-2xl border border-line bg-raised/60 backdrop-blur space-y-8 shadow-2xl">
        <div>
          <h3 class="font-display text-3xl text-white">Our Contact Details</h3>
          <p class="mt-2 text-xs uppercase tracking-wider text-fg-3 font-mono">London Legal Practice</p>
        </div>

        <div class="space-y-6 text-sm text-fg-3">
          <div>
            <span class="block text-xs uppercase text-fg-2 font-mono mb-1">Office address</span>
            <p class="text-white font-normal text-base">64 Neal Street, Covent Garden, London, WC2H 9PA</p>
          </div>

          <div>
            <span class="block text-xs uppercase text-fg-2 font-mono mb-1">Telephone number</span>
            <a href="tel:+447543105658" class="text-white font-normal text-base hover:underline">+44 7543 105658</a>
          </div>

          <div>
            <span class="block text-xs uppercase text-fg-2 font-mono mb-1">Email address</span>
            <a href="mailto:info@elevancelegal.co.uk" class="text-white font-normal text-base hover:underline">info@elevancelegal.co.uk</a>
          </div>

          <div>
            <span class="block text-xs uppercase text-fg-2 font-mono mb-1">Opening hours</span>
            <p class="text-white font-normal text-base">Monday &ndash; Friday, 09:00 &ndash; 18:00</p>
          </div>
        </div>

        <div class="pt-6 border-t border-line/60 flex flex-wrap gap-3">
          <a href="https://wa.me/447543105658" target="_blank" rel="noopener" class="rounded-full border border-[#25d366]/40 bg-[#25d366]/10 px-5 py-2.5 text-xs text-[#25d366] hover:bg-[#25d366]/20 transition-colors inline-flex items-center gap-2">
            <span>WhatsApp Direct</span> &rarr;
          </a>
          <button type="button" data-intake-open="" data-prefill="Schedule a consultation" class="rounded-full border border-line bg-canvas/60 px-5 py-2.5 text-xs text-fg-2 hover:border-fg hover:text-white transition-colors">
            Schedule a call &rarr;
          </button>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- SECTION 10: OUR COMMITMENT (Pitch Centered Manifesto Callout) -->
<section class="border-t border-line relative isolate" id="commitment" aria-labelledby="commitment-title">
  <div class="container-studio py-24 md:py-32">
    <div class="max-w-4xl mx-auto rounded-3xl border border-line bg-raised/50 p-8 sm:p-12 md:p-16 text-center backdrop-blur shadow-2xl">
      <div>
        <p class="marker justify-center"><span class="tabular-nums">10</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>OUR COMMITMENT</p>
        <span class="mt-4 block h-px w-8 bg-fg-3 mx-auto" aria-hidden="true"></span>
      </div>
      <h2 id="commitment-title" class="mt-8 font-display text-4xl sm:text-5xl md:text-6xl text-white">
        Our commitment to you.
      </h2>
      <div class="mt-8 space-y-4 text-base sm:text-lg leading-relaxed text-fg-2 font-light max-w-2xl mx-auto">
        <p>
          We are committed to providing clear communication, careful preparation and practical legal assistance tailored to your needs.
        </p>
        <p>
          We approach every enquiry with professionalism, discretion and attention to detail, keeping you informed and ensuring that you understand the services we provide and the fees involved.
        </p>
      </div>
      <div class="mt-10 flex justify-center">
        <button type="button" data-intake-open="" data-prefill="Tell us about your requirements" class="shrink-0 rounded-full bg-fg px-8 py-3 text-sm font-normal text-canvas transition-opacity hover:opacity-85">
          Discuss your requirements &rarr;
        </button>
      </div>
    </div>
  </div>
</section>
`;

// 7. Replace the middle sections between hero divider and footer
const heroDivider = '<hr class="section-divider">';
const heroDividerIdx = html.indexOf(heroDivider);
const footerTag = '<footer class="border-t border-line">';
const footerTagIdx = html.indexOf(footerTag);

if (heroDividerIdx !== -1 && footerTagIdx !== -1) {
  const beforeMiddle = html.substring(0, heroDividerIdx + heroDivider.length);
  const afterMiddle = html.substring(footerTagIdx);
  html = beforeMiddle + '\n' + middleContent + '\n' + afterMiddle;
  console.log('Successfully applied Pitch.law reverse-engineered sections!');
} else {
  console.error('Could not find middle section boundaries');
  process.exit(1);
}

// 8. Update Footer Navigation Links to point to new sections
const oldFooterNav = `<ul class="mt-4 space-y-2 text-sm text-fg-3">
        <li><a class="hover:text-fg hover:underline transition-colors" href="#goals">Your goals</a></li>
        <li><a class="hover:text-fg hover:underline transition-colors" href="#solutions">Services</a></li>
        <li><a class="hover:text-fg hover:underline transition-colors" href="#how">How we work</a></li>
        <li><a class="hover:text-fg hover:underline transition-colors" href="#collaboration">Authorised Solicitors</a></li>
        <li><a class="hover:text-fg hover:underline transition-colors" href="#faq">Questions</a></li>
        <li><a class="hover:text-fg hover:underline transition-colors" href="#contact" data-intake-open="">Contact</a></li>
        <li><a class="hover:text-fg hover:underline transition-colors" href="#contact" data-intake-open="">Search</a></li>
      </ul>`;

const newFooterNav = `<ul class="mt-4 space-y-2 text-sm text-fg-3">
        <li><a class="hover:text-fg hover:underline transition-colors" href="#welcome">Welcome</a></li>
        <li><a class="hover:text-fg hover:underline transition-colors" href="#story">Our story</a></li>
        <li><a class="hover:text-fg hover:underline transition-colors" href="#services">Our services</a></li>
        <li><a class="hover:text-fg hover:underline transition-colors" href="#solicitor">Solicitor by appointment</a></li>
        <li><a class="hover:text-fg hover:underline transition-colors" href="#support">Who we support</a></li>
        <li><a class="hover:text-fg hover:underline transition-colors" href="#why">Why Elevance</a></li>
        <li><a class="hover:text-fg hover:underline transition-colors" href="#how">How we work</a></li>
        <li><a class="hover:text-fg hover:underline transition-colors" href="#faq">Questions</a></li>
        <li><a class="hover:text-fg hover:underline transition-colors" href="#contact">Contact us</a></li>
      </ul>`;

html = html.replace(oldFooterNav, newFooterNav);

// 9. Update Statutory Regulatory Text in Footer from Customer Document
const oldRegulatoryFooter = `<p>
        <span class="text-fg-2 font-medium">Regulatory Notice</span> · Elevance Legal Services Ltd is an independent consultancy and not a law firm. Reserved legal activities are conducted independently by authorised solicitors regulated by the Solicitors Regulation Authority (SRA).
      </p>`;

const newRegulatoryFooter = `<div class="space-y-2 text-[11px] leading-relaxed text-fg-3 pt-4 border-t border-line/40">
        <p class="font-medium text-fg-2">Important regulatory information</p>
        <p>Elevance Legal Services Ltd is an independent provider of non-reserved legal services. It is not a solicitors' practice and is not authorised or regulated by the Solicitors Regulation Authority (SRA).</p>
        <p>We provide legal consultancy, document drafting and related legal assistance within the scope of activities we are legally permitted and competent to undertake.</p>
        <p>Elevance does not conduct litigation, exercise reserved rights of audience, undertake reserved instrument activities or reserved probate activities, or provide regulated UK immigration advice or services.</p>
        <p>As Elevance is not an SRA-regulated firm, clients do not automatically benefit from the regulatory protections applicable to authorised solicitors' practices, including compulsory SRA professional indemnity insurance and access to the SRA Compensation Fund.</p>
        <p>Where an appointment with a qualified solicitor is arranged, any solicitor services are provided separately and subject to the solicitor's own professional obligations, terms of engagement and fees.</p>
        <p>Information on this website is provided for general information only. Submitting an enquiry does not establish a professional engagement or solicitor-client relationship.</p>
      </div>`;

html = html.replace(oldRegulatoryFooter, newRegulatoryFooter);

// 10. Contact form submission handler
const pageFormScript = `
// Page Contact Form Submission Controller
const pageForm = document.getElementById("page-contact-form");
const pageSuccessMsg = document.getElementById("contact-success-msg");
const pageSubmitBtn = document.getElementById("contact-submit-btn");

if (pageForm && !window.__pageFormBound) {
  window.__pageFormBound = true;
  pageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (pageSubmitBtn) {
      pageSubmitBtn.disabled = true;
      pageSubmitBtn.innerText = "Submitting...";
    }
    const name = document.getElementById("contact-name")?.value || "";
    const email = document.getElementById("contact-email")?.value || "";
    const phone = document.getElementById("contact-phone")?.value || "";
    const nature = document.getElementById("contact-nature")?.value || "";
    const message = document.getElementById("contact-message")?.value || "";

    const payload = {
      name,
      email,
      phone,
      nature,
      question: "[" + nature + "] " + message + (phone ? " (Phone: " + phone + ")" : "")
    };

    fetch("contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload)
    }).catch(() => {}).finally(() => {
      pageForm.reset();
      if (pageSubmitBtn) {
        pageSubmitBtn.disabled = false;
        pageSubmitBtn.innerText = "SUBMIT ENQUIRY";
      }
      if (pageSuccessMsg) {
        pageSuccessMsg.classList.remove("hidden");
        setTimeout(() => pageSuccessMsg.classList.add("hidden"), 8000);
      }
    });
  });
}
`;

// 1. Fix ESM export statement in inline script to avoid SyntaxError in non-module context
html = html.replace('export{wt as a,mt as f};', 'window.wt = wt; window.mt = mt;');

// 2. Add Pitch Orbital Dot-Rings Keyframes and Animation styling
const dotRingsCss = `
<style id="pitch-rings-anim">
@keyframes ring-spin {
  to { transform: rotate(360deg); }
}
.dot-rings .ring {
  transform-origin: 0 0;
  animation: ring-spin var(--dur, 200s) linear infinite;
}
.dot-rings .ring.reverse {
  animation-direction: reverse;
}
</style>
`;
if (!html.includes('id="pitch-rings-anim"')) {
  html = html.replace('</head>', `${dotRingsCss}\n</head>`);
}

// 3. Update canonical and page titles for iteration 3
html = html.replace(/<link rel="canonical"[^>]*>/i, '<link rel="canonical" href="https://www.elevancelegal.co.uk/third/">');
html = html.replace(/<title>[\s\S]*?<\/title>/i, '<title>Elevance Legal Services — Practical Legal Support &amp; Document Preparation</title>');

if (!html.includes('__pageFormBound')) {
  html = html.replace('</script>\n\n</body>', `${pageFormScript}\n</script>\n\n</body>`);
}

// Write to both third/index.html and third.html
const outThirdIndex = path.join(__dirname, 'third', 'index.html');
const outThirdRoot = path.join(__dirname, 'third.html');

fs.writeFileSync(outThirdIndex, html, 'utf8');
fs.writeFileSync(outThirdRoot, html, 'utf8');

console.log('[SUCCESS] Successfully generated Pitch-perfect third iteration:');
console.log(' - ' + outThirdIndex);
console.log(' - ' + outThirdRoot);
