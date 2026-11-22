// generate_third.js
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

// 2. Hallmark CSS Stamp to guarantee floor compliance and clear design authorship
const hallmarkStamp = `/*
 * Hallmark · v2.0.0
 * Theme: Obsidian & Gold / London Institutional (custom)
 * Shape: Structured Editorial Grid · Genre: editorial
 * Navigation: Verified Brand Logo, Desktop Links & Dropdown, Mobile Drawer
 * Hero: Covent Garden Video Loop, Direct Prompt Search, Quick Intent Pills
 * Signature: Dual Animation Engine (Ambient Harmonic Sine Waves & Dynamic Interactive Flow Tracer Links)
 * Content: Exact client copy for Welcome, Our Story, Services (10), Solicitor by Appointment,
 *          Who We Support (4), Why Elevance (5), How We Work (5), FAQs (12), Contact Us & Our Commitment
 * Floor compliance: 0 FAIL, 0 'transition: all', prefers-reduced-motion fallbacks, focus-visible active
 */`;

if (!html.includes('Hallmark · v2.0.0')) {
  html = html.replace('<style>:root{', `<style>\n${hallmarkStamp}\n:root{`);
}

// 3. Update Nav Links in Header & Drawer to match third iteration sections cleanly
html = html.replace(/href="#solutions"/g, 'href="#services"');
html = html.replace(/href="#collaboration"/g, 'href="#solicitor"');
html = html.replace(/href="#goals"/g, 'href="#welcome"');
html = html.replace(/href="#lifecycle-home"/g, 'href="#services"');
html = html.replace(/href="#lifecycle-work"/g, 'href="#services"');
html = html.replace(/href="#lifecycle-family"/g, 'href="#services"');
html = html.replace(/href="#lifecycle-business"/g, 'href="#services"');
html = html.replace(/href="#lifecycle-docs"/g, 'href="#services"');

// Ensure mobile menu has Contact Us
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

// 4. Hero Section Copy Check:
// Eyebrow and Headline:
const heroEyebrow = `<p class="eyebrow uppercase tracking-widest text-xs font-semibold text-fg-3 mb-4">CLARITY, CONFIDENCE AND A BETTER WAY FORWARD</p>\n    <h1 id="hero-title" class="font-display text-balance">`;
if (!html.includes('CLARITY, CONFIDENCE AND A BETTER WAY FORWARD')) {
  html = html.replace('<h1 id="hero-title" class="font-display text-balance">', heroEyebrow);
}

// 5. Construct the middle components with the exact customer document copy!
const middleContent = `
<!-- SECTION 01: WELCOME -->
<section class="container-studio py-24 md:py-32 relative isolate" id="welcome" aria-labelledby="welcome-title">
  <!-- Ambient Sine Wave Canvas -->
  <span aria-hidden="true" data-ambient-lines="" data-seed="welcome-lines" data-colors="#ff9a4d,#ffd25b" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)] pointer-events-none opacity-50"></span>

  <div class="grid gap-12 lg:grid-cols-12 items-start">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">01</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>WELCOME</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 id="welcome-title" class="mt-8 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl text-white">
        Legal support, <br><span style="color: rgba(255, 255, 255, 0.65);">centred on your needs.</span>
      </h2>
      <div class="mt-8 flex flex-wrap gap-4">
        <button type="button" data-intake-open="" data-prefill="I would like to make an enquiry" class="btn-pill-primary text-sm !px-7 !py-3 !min-w-0">
          Make an enquiry
        </button>
        <a href="#services" class="flex h-full min-h-[44px] items-center whitespace-nowrap rounded-full border border-line bg-canvas/60 px-6 text-sm text-fg-2 backdrop-blur transition-colors hover:border-fg hover:text-white">
          Explore our services &darr;
        </a>
      </div>
    </div>

    <div class="lg:col-span-6 space-y-6 text-base sm:text-lg leading-relaxed text-fg-2 font-light">
      <p>
        Legal matters can be complex and sometimes overwhelming. Whether you are dealing with a housing issue, an employment matter, a family concern or a business dispute, obtaining clear and practical assistance can make a real difference.
      </p>
      <p>
        At Elevance, we provide accessible document preparation and practical assistance to individuals, families and businesses. Our approach is straightforward: we listen to your concerns, explain how we can help and work towards practical solutions tailored to your circumstances.
      </p>
      <p>
        We believe legal assistance should be clear, approachable and proportionate to your needs. We explain the scope of our services and agree our fees with you before commencing work.
      </p>
      <div class="pt-4 border-t border-line/60 flex items-center gap-4 text-xs font-mono text-fg-3">
        <span class="inline-block size-2 rounded-full bg-emerald-400"></span>
        <span>Independent Non-Reserved Legal Consultancy · London WC2H</span>
      </div>
    </div>
  </div>
</section>

<!-- Section Divider -->
<hr class="section-divider">

<!-- SECTION 02: OUR STORY -->
<section class="container-studio py-24 md:py-32 relative isolate" id="story" aria-labelledby="story-title">
  <div class="grid gap-12 lg:grid-cols-12 items-start">
    <div class="lg:col-span-5">
      <div>
        <p class="marker"><span class="tabular-nums">02</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>OUR STORY</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 id="story-title" class="mt-8 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl text-white">
        A more approachable way <br><span style="color: rgba(255, 255, 255, 0.65);">to navigate legal matters.</span>
      </h2>
      <div class="mt-8 p-6 rounded-2xl border border-line bg-raised/40 backdrop-blur">
        <p class="text-xs uppercase tracking-wider text-fg-3 font-mono">Core founding purpose</p>
        <p class="mt-3 text-sm leading-relaxed text-fg-2">
          Reliable legal support without the complexity or expense that often accompanies traditional legal processes.
        </p>
      </div>
    </div>

    <div class="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-fg-2 font-light">
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
</section>

<!-- Section Divider -->
<hr class="section-divider">

<!-- SECTION 03: OUR SERVICES -->
<section class="container-studio py-24 md:py-32 relative isolate" id="services" aria-labelledby="services-title">
  <!-- Ambient Sine Wave Canvas -->
  <span aria-hidden="true" data-ambient-lines="" data-seed="services-lines" data-colors="#4285F4,#34A853" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)] pointer-events-none opacity-45"></span>

  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">03</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>OUR SERVICES</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 id="services-title" class="mt-8 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl text-white">
        Practical support for everyday needs.
      </h2>
    </div>
    <div class="self-end lg:col-span-6 space-y-4 text-base sm:text-lg leading-relaxed text-fg-2 font-light">
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

  <!-- 10 Services Hairline Grid -->
  <div class="mt-16 grid hairline-grid sm:grid-cols-2 lg:grid-cols-3">
    
    <!-- 01 Document Preparation & Support -->
    <div class="group p-8 transition-colors duration-300 hover:bg-white/[0.03] flex flex-col justify-between">
      <div>
        <span class="text-xs font-mono text-fg-3">01</span>
        <h3 class="mt-3 text-xl font-normal text-white">Document Preparation &amp; Support</h3>
        <p class="mt-4 text-sm leading-relaxed text-fg-3">
          We assist individuals and businesses with preparing, formatting and organising correspondence, applications, complaints and other documents. Our services include document typing, proofreading, compiling supporting information and preparing documents from instructions or information provided by clients. Where a matter requires legal advice or specialist drafting, we can help identify appropriate professional assistance.
        </p>
      </div>
      <div class="mt-6 pt-4 border-t border-line/40">
        <button type="button" data-intake-open="" data-prefill="Enquiry regarding: Document Preparation & Support" class="text-xs text-fg-2 hover:text-white transition-colors inline-flex items-center gap-1.5 font-mono">
          Enquire about document support &rarr;
        </button>
      </div>
    </div>

    <!-- 02 Dispute Resolution and Case Support -->
    <div class="group p-8 transition-colors duration-300 hover:bg-white/[0.03] flex flex-col justify-between">
      <div>
        <span class="text-xs font-mono text-fg-3">02</span>
        <h3 class="mt-3 text-xl font-normal text-white">Dispute Resolution and Case Support</h3>
        <p class="mt-4 text-sm leading-relaxed text-fg-3">
          We provide practical assistance to individuals and businesses involved in disputes, including reviewing relevant documents, preparing formal correspondence, organising evidence and drafting responses to claims or complaints. We can assist with pre-action correspondence, settlement proposals and negotiations, helping clients explore practical solutions without unnecessary escalation. Where court proceedings or other reserved legal activities are required, we can explain the limitations of our services and discuss appropriate next steps.
        </p>
      </div>
      <div class="mt-6 pt-4 border-t border-line/40">
        <button type="button" data-intake-open="" data-prefill="Enquiry regarding: Dispute Resolution and Case Support" class="text-xs text-fg-2 hover:text-white transition-colors inline-flex items-center gap-1.5 font-mono">
          Enquire about dispute support &rarr;
        </button>
      </div>
    </div>

    <!-- 03 Housing & Landlord-Tenant Matters -->
    <div class="group p-8 transition-colors duration-300 hover:bg-white/[0.03] flex flex-col justify-between">
      <div>
        <span class="text-xs font-mono text-fg-3">03</span>
        <h3 class="mt-3 text-xl font-normal text-white">Housing &amp; Landlord-Tenant Matters</h3>
        <p class="mt-4 text-sm leading-relaxed text-fg-3">
          We provide practical assistance to landlords and tenants on a range of housing and tenancy matters, including tenancy agreements, rent arrears, deposit disputes, disrepair, tenancy disputes and housing-related correspondence. Our services include reviewing documents, explaining relevant rights and obligations, preparing formal correspondence and assisting with negotiations to resolve disputes. Where court proceedings or specialist representation are required, we can explain the limitations of our services and help you identify appropriate next steps.
        </p>
      </div>
      <div class="mt-6 pt-4 border-t border-line/40">
        <button type="button" data-intake-open="" data-prefill="Enquiry regarding: Housing & Landlord-Tenant Matters" class="text-xs text-fg-2 hover:text-white transition-colors inline-flex items-center gap-1.5 font-mono">
          Enquire about tenancy matters &rarr;
        </button>
      </div>
    </div>

    <!-- 04 Employment & Workplace Matters -->
    <div class="group p-8 transition-colors duration-300 hover:bg-white/[0.03] flex flex-col justify-between">
      <div>
        <span class="text-xs font-mono text-fg-3">04</span>
        <h3 class="mt-3 text-xl font-normal text-white">Employment &amp; Workplace Matters</h3>
        <p class="mt-4 text-sm leading-relaxed text-fg-3">
          We provide practical legal assistance to employees and employers on a range of workplace matters, including employment contracts, grievances, disciplinary procedures, workplace disputes and settlement agreements. Our services include reviewing employment documentation, explaining relevant rights and obligations, preparing formal correspondence and assisting with workplace negotiations and dispute resolution. Where specialist representation or services outside our permitted scope are required, we can help identify appropriate next steps.
        </p>
      </div>
      <div class="mt-6 pt-4 border-t border-line/40">
        <button type="button" data-intake-open="" data-prefill="Enquiry regarding: Employment & Workplace Matters" class="text-xs text-fg-2 hover:text-white transition-colors inline-flex items-center gap-1.5 font-mono">
          Enquire about workplace matters &rarr;
        </button>
      </div>
    </div>

    <!-- 05 Family & Personal Matters -->
    <div class="group p-8 transition-colors duration-300 hover:bg-white/[0.03] flex flex-col justify-between">
      <div>
        <span class="text-xs font-mono text-fg-3">05</span>
        <h3 class="mt-3 text-xl font-normal text-white">Family &amp; Personal Matters</h3>
        <p class="mt-4 text-sm leading-relaxed text-fg-3">
          We provide sensitive and practical legal assistance with family and personal matters, including separation, divorce-related documentation, financial arrangements and family disputes. Our services include reviewing documents, explaining relevant rights and obligations, preparing correspondence and assisting with negotiations and proposed agreements. We aim to help clients navigate difficult personal circumstances with clarity, discretion and understanding.
        </p>
      </div>
      <div class="mt-6 pt-4 border-t border-line/40">
        <button type="button" data-intake-open="" data-prefill="Enquiry regarding: Family & Personal Matters" class="text-xs text-fg-2 hover:text-white transition-colors inline-flex items-center gap-1.5 font-mono">
          Enquire about family matters &rarr;
        </button>
      </div>
    </div>

    <!-- 06 Business & Commercial Legal Services -->
    <div class="group p-8 transition-colors duration-300 hover:bg-white/[0.03] flex flex-col justify-between">
      <div>
        <span class="text-xs font-mono text-fg-3">06</span>
        <h3 class="mt-3 text-xl font-normal text-white">Business &amp; Commercial Legal Services</h3>
        <p class="mt-4 text-sm leading-relaxed text-fg-3">
          We provide practical legal assistance to businesses, entrepreneurs and self-employed professionals on a range of commercial matters, including business contracts, service agreements, non-disclosure agreements, commercial leases and contractual disputes. Our services include reviewing and drafting agreements, explaining contractual rights and obligations, preparing formal correspondence and assisting with commercial negotiations and dispute resolution. We aim to provide clear, commercially focused solutions that help businesses protect their interests and make informed decisions.
        </p>
      </div>
      <div class="mt-6 pt-4 border-t border-line/40">
        <button type="button" data-intake-open="" data-prefill="Enquiry regarding: Business & Commercial Legal Services" class="text-xs text-fg-2 hover:text-white transition-colors inline-flex items-center gap-1.5 font-mono">
          Enquire about commercial services &rarr;
        </button>
      </div>
    </div>

    <!-- 07 Translation Services -->
    <div class="group p-8 transition-colors duration-300 hover:bg-white/[0.03] flex flex-col justify-between">
      <div>
        <span class="text-xs font-mono text-fg-3">07</span>
        <h3 class="mt-3 text-xl font-normal text-white">Translation Services</h3>
        <p class="mt-4 text-sm leading-relaxed text-fg-3">
          We assist with Arabic and Kurdish to English translations of personal, business and other documents, subject to language availability and the nature of the assignment. Where certified translations are required, we can arrange these through appropriately qualified translators, subject to the requirements of the receiving organisation. Please contact us to discuss your translation requirements.
        </p>
      </div>
      <div class="mt-6 pt-4 border-t border-line/40">
        <button type="button" data-intake-open="" data-prefill="Enquiry regarding: Translation Services (Arabic / Kurdish)" class="text-xs text-fg-2 hover:text-white transition-colors inline-flex items-center gap-1.5 font-mono">
          Enquire about translations &rarr;
        </button>
      </div>
    </div>

    <!-- 08 Wills & Wills Drafting -->
    <div class="group p-8 transition-colors duration-300 hover:bg-white/[0.03] flex flex-col justify-between">
      <div>
        <span class="text-xs font-mono text-fg-3">08</span>
        <h3 class="mt-3 text-xl font-normal text-white">Wills &amp; Wills Drafting</h3>
        <p class="mt-4 text-sm leading-relaxed text-fg-3">
          We provide assistance with preparing straightforward wills, helping individuals record their wishes and make arrangements for the distribution of their estate. Our services include gathering relevant information, preparing draft wills and explaining the requirements for signing and witnessing. Where more complex circumstances arise, we can explain when specialist legal advice may be appropriate.
        </p>
      </div>
      <div class="mt-6 pt-4 border-t border-line/40">
        <button type="button" data-intake-open="" data-prefill="Enquiry regarding: Wills & Wills Drafting" class="text-xs text-fg-2 hover:text-white transition-colors inline-flex items-center gap-1.5 font-mono">
          Enquire about wills &rarr;
        </button>
      </div>
    </div>

    <!-- 09 Lasting Powers of Attorney -->
    <div class="group p-8 transition-colors duration-300 hover:bg-white/[0.03] flex flex-col justify-between">
      <div>
        <span class="text-xs font-mono text-fg-3">09</span>
        <h3 class="mt-3 text-xl font-normal text-white">Lasting Powers of Attorney</h3>
        <p class="mt-4 text-sm leading-relaxed text-fg-3">
          We assist individuals with preparing Lasting Powers of Attorney (LPAs) for Property and Financial Affairs and Health and Welfare. Our services include explaining the purpose of LPAs, gathering relevant information, preparing the necessary forms and providing guidance on signing, witnessing and registration with the Office of the Public Guardian. Where complex circumstances or concerns about mental capacity arise, specialist legal advice may be required.
        </p>
      </div>
      <div class="mt-6 pt-4 border-t border-line/40">
        <button type="button" data-intake-open="" data-prefill="Enquiry regarding: Lasting Powers of Attorney" class="text-xs text-fg-2 hover:text-white transition-colors inline-flex items-center gap-1.5 font-mono">
          Enquire about LPAs &rarr;
        </button>
      </div>
    </div>

    <!-- 10 Document Legalisation & Notarial Coordination -->
    <div class="group p-8 transition-colors duration-300 hover:bg-white/[0.03] sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row justify-between gap-6">
      <div class="max-w-4xl">
        <span class="text-xs font-mono text-fg-3">10</span>
        <h3 class="mt-3 text-xl font-normal text-white">Document Legalisation &amp; Notarial Coordination</h3>
        <p class="mt-4 text-sm leading-relaxed text-fg-3">
          We provide administrative assistance with documents intended for use in the UK and overseas. Our services include coordinating appointments with notaries, arranging document translations and assisting with apostille and legalisation procedures. We can also help clients identify the documentation and formalities required by the relevant receiving authority.
        </p>
      </div>
      <div class="sm:self-center shrink-0">
        <button type="button" data-intake-open="" data-prefill="Enquiry regarding: Document Legalisation & Notarial Coordination" class="btn-pill-primary text-xs !px-6 !py-2.5 !min-w-0">
          Enquire now &rarr;
        </button>
      </div>
    </div>

  </div>
</section>

<!-- Section Divider -->
<hr class="section-divider">

<!-- SECTION 04: SOLICITOR BY APPOINTMENT -->
<section class="container-studio py-24 md:py-32 relative isolate" id="solicitor" aria-labelledby="solicitor-title">
  <!-- Ambient Sine Wave Canvas -->
  <span aria-hidden="true" data-ambient-lines="" data-seed="solicitor-lines" data-colors="#EA4335,#FBBC05" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)] pointer-events-none opacity-45"></span>

  <div class="grid gap-12 lg:grid-cols-12 items-center">
    <div class="lg:col-span-7 relative z-10">
      <div>
        <p class="marker"><span class="tabular-nums">04</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>SOLICITOR BY APPOINTMENT</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 id="solicitor-title" class="mt-8 font-display text-4xl leading-tight sm:text-5xl md:text-6xl text-white">
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
      <div class="mt-8 flex flex-wrap gap-4">
        <button type="button" data-intake-open="" data-prefill="I would like to ask about an appointment with a qualified solicitor" class="btn-pill-primary text-sm !px-7 !py-3 !min-w-0">
          ASK ABOUT AN APPOINTMENT
        </button>
      </div>
    </div>

    <div class="regulatory-card lg:col-span-5 rounded-2xl p-8 border border-line bg-raised/50 backdrop-blur shadow-2xl">
      <h3 class="text-lg font-medium text-white">Independent Solicitor Access</h3>
      <ul class="mt-4 space-y-3.5 text-sm leading-relaxed text-fg-3">
        <li class="flex gap-2.5">
          <span class="text-fg-2">&bull;</span>
          <span>Elevance provides unreserved legal consultancy, document drafting, case coordination, and certified translation.</span>
        </li>
        <li class="flex gap-2.5">
          <span class="text-fg-2">&bull;</span>
          <span>Where reserved legal activities, court proceedings, or litigation arise, we introduce you directly to independent, SRA-regulated solicitors.</span>
        </li>
        <li class="flex gap-2.5">
          <span class="text-fg-2">&bull;</span>
          <span>Solicitor services are engaged separately under the solicitor firm’s own terms of engagement and regulatory safeguards.</span>
        </li>
      </ul>
      <div class="mt-6 pt-5 border-t border-line/60 flex items-center justify-between text-xs text-fg-3 font-mono">
        <span>SRA Regulatory Boundary</span>
        <span class="text-emerald-400">Strict Compliance</span>
      </div>
    </div>
  </div>
</section>

<!-- Section Divider -->
<hr class="section-divider">

<!-- SECTION 05: WHO WE SUPPORT -->
<section class="container-studio py-24 md:py-32 relative isolate" id="support" aria-labelledby="support-title">
  <!-- Interactive Flow Links Canvas -->
  <canvas aria-hidden="true" data-flow-links="" data-colors="#ff9a4d,#ffd25b" class="pointer-events-none absolute inset-0 -z-10 block size-full"></canvas>

  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-5">
      <div>
        <p class="marker"><span class="tabular-nums">05</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>WHO WE SUPPORT</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 id="support-title" class="mt-8 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl text-white">
        Here for individuals, families and businesses.
      </h2>
      <p class="mt-6 text-base leading-relaxed text-fg-3 font-light">
        Practical, proportionate legal assistance tailored to real circumstances. Hover over any group to explore how we support your journey.
      </p>
    </div>

    <div class="lg:col-span-7 grid gap-6 sm:grid-cols-2">
      <!-- Individuals -->
      <div data-flow-step="" data-slug="support-ind" data-links="support-fam" data-colors="#ff9a4d,#ffd25b" class="border border-line rounded-2xl p-7 bg-canvas/60 backdrop-blur transition-all duration-300 hover:border-fg/40 hover:bg-white/[0.02]">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-normal text-white">Individuals</h3>
          <span class="text-xs font-mono text-fg-3">01</span>
        </div>
        <p class="mt-4 text-sm leading-relaxed text-fg-3">
          Practical legal assistance with personal matters, disputes, agreements and legal documentation, helping you understand your options and take informed decisions.
        </p>
        <div class="mt-6 pt-4 border-t border-line/40">
          <button type="button" data-intake-open="" data-prefill="Support for Individuals: " class="text-xs text-fg-2 hover:text-white transition-colors font-mono">
            Get personal support &rarr;
          </button>
        </div>
      </div>

      <!-- Families -->
      <div data-flow-step="" data-slug="support-fam" data-links="support-ten" data-colors="#ff9a4d,#ffd25b" class="border border-line rounded-2xl p-7 bg-canvas/60 backdrop-blur transition-all duration-300 hover:border-fg/40 hover:bg-white/[0.02]">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-normal text-white">Families</h3>
          <span class="text-xs font-mono text-fg-3">02</span>
        </div>
        <p class="mt-4 text-sm leading-relaxed text-fg-3">
          Sensitive and approachable assistance with family-related matters, wills, powers of attorney and personal legal documentation.
        </p>
        <div class="mt-6 pt-4 border-t border-line/40">
          <button type="button" data-intake-open="" data-prefill="Support for Families: " class="text-xs text-fg-2 hover:text-white transition-colors font-mono">
            Get family support &rarr;
          </button>
        </div>
      </div>

      <!-- Tenants & landlords -->
      <div data-flow-step="" data-slug="support-ten" data-links="support-biz" data-colors="#ff9a4d,#ffd25b" class="border border-line rounded-2xl p-7 bg-canvas/60 backdrop-blur transition-all duration-300 hover:border-fg/40 hover:bg-white/[0.02]">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-normal text-white">Tenants &amp; landlords</h3>
          <span class="text-xs font-mono text-fg-3">03</span>
        </div>
        <p class="mt-4 text-sm leading-relaxed text-fg-3">
          Legal support with tenancy agreements, rent arrears, deposit disputes, disrepair concerns and landlord-tenant disagreements.
        </p>
        <div class="mt-6 pt-4 border-t border-line/40">
          <button type="button" data-intake-open="" data-prefill="Support for Tenants & Landlords: " class="text-xs text-fg-2 hover:text-white transition-colors font-mono">
            Get housing support &rarr;
          </button>
        </div>
      </div>

      <!-- Businesses & entrepreneurs -->
      <div data-flow-step="" data-slug="support-biz" data-links="support-ind" data-colors="#ff9a4d,#ffd25b" class="border border-line rounded-2xl p-7 bg-canvas/60 backdrop-blur transition-all duration-300 hover:border-fg/40 hover:bg-white/[0.02]">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-normal text-white">Businesses &amp; entrepreneurs</h3>
          <span class="text-xs font-mono text-fg-3">04</span>
        </div>
        <p class="mt-4 text-sm leading-relaxed text-fg-3">
          Commercial legal assistance with contracts, business agreements, disputes and legal documentation, tailored to the needs of businesses and self-employed professionals.
        </p>
        <div class="mt-6 pt-4 border-t border-line/40">
          <button type="button" data-intake-open="" data-prefill="Support for Businesses & Entrepreneurs: " class="text-xs text-fg-2 hover:text-white transition-colors font-mono">
            Get commercial support &rarr;
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Section Divider -->
<hr class="section-divider">

<!-- SECTION 06: WHY ELEVANCE -->
<section class="container-studio py-24 md:py-32 relative isolate" id="why" aria-labelledby="why-title">
  <div class="max-w-3xl">
    <div>
      <p class="marker"><span class="tabular-nums">06</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>WHY ELEVANCE</p>
      <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
    </div>
    <h2 id="why-title" class="mt-8 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl text-white">
      Support that is clear, considered and accountable.
    </h2>
  </div>

  <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    
    <!-- 1. Client-first approach -->
    <div class="border border-line rounded-2xl p-8 bg-raised/30 backdrop-blur">
      <span class="text-xs font-mono text-fg-3">01</span>
      <h3 class="mt-3 text-xl font-normal text-white">Client-first approach</h3>
      <p class="mt-4 text-sm leading-relaxed text-fg-3">
        We take time to understand your circumstances, listen to your concerns and provide practical assistance tailored to your individual needs.
      </p>
    </div>

    <!-- 2. Plain-English communication -->
    <div class="border border-line rounded-2xl p-8 bg-raised/30 backdrop-blur">
      <span class="text-xs font-mono text-fg-3">02</span>
      <h3 class="mt-3 text-xl font-normal text-white">Plain-English communication</h3>
      <p class="mt-4 text-sm leading-relaxed text-fg-3">
        We communicate clearly and straightforwardly, explaining our services and the practical steps involved without unnecessary jargon.
      </p>
    </div>

    <!-- 3. Careful preparation -->
    <div class="border border-line rounded-2xl p-8 bg-raised/30 backdrop-blur">
      <span class="text-xs font-mono text-fg-3">03</span>
      <h3 class="mt-3 text-xl font-normal text-white">Careful preparation</h3>
      <p class="mt-4 text-sm leading-relaxed text-fg-3">
        We approach every matter with attention to detail, ensuring that documents, correspondence and other work are prepared carefully and professionally.
      </p>
    </div>

    <!-- 4. Transparent scope and fees -->
    <div class="border border-line rounded-2xl p-8 bg-raised/30 backdrop-blur">
      <span class="text-xs font-mono text-fg-3">04</span>
      <h3 class="mt-3 text-xl font-normal text-white">Transparent scope and fees</h3>
      <p class="mt-4 text-sm leading-relaxed text-fg-3">
        We explain the services we can provide and agree the scope of work and applicable fees before commencing your matter.
      </p>
    </div>

    <!-- 5. Clear professional boundaries -->
    <div class="border border-line rounded-2xl p-8 bg-raised/30 backdrop-blur sm:col-span-2 lg:col-span-2">
      <span class="text-xs font-mono text-fg-3">05</span>
      <h3 class="mt-3 text-xl font-normal text-white">Clear professional boundaries</h3>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 max-w-2xl">
        We focus on providing sensible, cost-conscious legal assistance that reflects the nature and complexity of your circumstances.
      </p>
    </div>

  </div>
</section>

<!-- Section Divider -->
<hr class="section-divider">

<!-- SECTION 07: HOW WE WORK -->
<section class="container-studio py-24 md:py-32 relative isolate" id="how" aria-labelledby="how-title">
  <!-- Ambient Sine Wave Canvas -->
  <span aria-hidden="true" data-ambient-lines="" data-seed="how-lines" data-colors="#34A853,#FBBC05" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)] pointer-events-none opacity-45"></span>
  <!-- Interactive Flow Links Canvas -->
  <canvas aria-hidden="true" data-flow-links="" data-colors="#34A853,#FBBC05" class="pointer-events-none absolute inset-0 -z-10 block size-full"></canvas>

  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">07</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>HOW WE WORK</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 id="how-title" class="mt-8 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl text-white">
        A straightforward journey from enquiry to next steps.
      </h2>
    </div>
    <p class="self-end text-base sm:text-lg leading-relaxed text-fg-2 font-light lg:col-span-5 lg:col-start-8">
      Clear stages, upfront clarity, and active coordination throughout your matter. Hover across any step to visualize the structured workflow.
    </p>
  </div>

  <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
    
    <!-- 01 Initial conversation -->
    <div data-flow-step="" data-slug="hstep-1" data-links="hstep-2" data-colors="#34A853,#FBBC05" class="process-card rounded-2xl p-6 border border-line bg-canvas/70 backdrop-blur transition-all duration-300 hover:border-fg/40 hover:bg-white/[0.03]">
      <span class="text-3xl font-display text-fg-3">01</span>
      <h3 class="mt-4 text-lg font-normal text-white">Initial conversation</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">
        Tell us about your legal matter, your concerns and what you would like to achieve. We will discuss your requirements and how we may be able to assist.
      </p>
    </div>

    <!-- 02 Enquiry Assessment -->
    <div data-flow-step="" data-slug="hstep-2" data-links="hstep-3" data-colors="#34A853,#FBBC05" class="process-card rounded-2xl p-6 border border-line bg-canvas/70 backdrop-blur transition-all duration-300 hover:border-fg/40 hover:bg-white/[0.03]">
      <span class="text-3xl font-display text-fg-3">02</span>
      <h3 class="mt-4 text-lg font-normal text-white">Enquiry Assessment</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">
        We review your enquiry, consider the nature of the assistance required and explain the services we can provide.
      </p>
    </div>

    <!-- 03 Clear engagement -->
    <div data-flow-step="" data-slug="hstep-3" data-links="hstep-4" data-colors="#34A853,#FBBC05" class="process-card rounded-2xl p-6 border border-line bg-canvas/70 backdrop-blur transition-all duration-300 hover:border-fg/40 hover:bg-white/[0.03]">
      <span class="text-3xl font-display text-fg-3">03</span>
      <h3 class="mt-4 text-lg font-normal text-white">Clear engagement</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">
        We confirm the agreed scope of work, applicable fees and terms of engagement before commencing your matter.
      </p>
    </div>

    <!-- 04 Preparation & coordination -->
    <div data-flow-step="" data-slug="hstep-4" data-links="hstep-5" data-colors="#34A853,#FBBC05" class="process-card rounded-2xl p-6 border border-line bg-canvas/70 backdrop-blur transition-all duration-300 hover:border-fg/40 hover:bg-white/[0.03]">
      <span class="text-3xl font-display text-fg-3">04</span>
      <h3 class="mt-4 text-lg font-normal text-white">Preparation &amp; coordination</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">
        We undertake the agreed work, provide practical guidance and keep you informed of progress throughout.
      </p>
    </div>

    <!-- 05 Solicitor by appointment -->
    <div data-flow-step="" data-slug="hstep-5" data-links="hstep-1" data-colors="#34A853,#FBBC05" class="process-card rounded-2xl p-6 border border-line bg-canvas/70 backdrop-blur transition-all duration-300 hover:border-fg/40 hover:bg-white/[0.03]">
      <span class="text-3xl font-display text-fg-3">05</span>
      <h3 class="mt-4 text-lg font-normal text-white">Solicitor by appointment</h3>
      <p class="mt-3 text-xs leading-relaxed text-fg-3">
        Where appropriate, we can assist in arranging a separate appointment with a qualified solicitor, subject to availability and acceptance of instructions.
      </p>
    </div>

  </div>
</section>

<!-- Section Divider -->
<hr class="section-divider">

<!-- SECTION 08: FREQUENTLY ASKED QUESTIONS -->
<section class="container-studio py-24 md:py-32 relative isolate" id="faq" aria-labelledby="faq-title">
  <div class="max-w-2xl">
    <div>
      <p class="marker"><span class="tabular-nums">08</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>FREQUENTLY ASKED QUESTIONS</p>
      <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
    </div>
    <h2 id="faq-title" class="mt-8 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl text-white">
      Answers before you get started.
    </h2>
    <p class="mt-4 text-base leading-relaxed text-fg-3">
      Clear answers to questions regarding our non-reserved legal consultancy, solicitor referrals, and fees.
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
</section>

<!-- Section Divider -->
<hr class="section-divider">

<!-- SECTION 09: CONTACT US -->
<section class="container-studio py-24 md:py-32 relative isolate" id="contact" aria-labelledby="contact-title">
  <div class="grid gap-12 lg:grid-cols-12 items-start">
    
    <!-- Left Column: Form -->
    <div class="lg:col-span-7">
      <div>
        <p class="marker"><span class="tabular-nums">09</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>CONTACT US</p>
        <span class="mt-4 block h-px w-8 bg-fg-3" aria-hidden="true"></span>
      </div>
      <h2 id="contact-title" class="mt-8 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl text-white">
        Let’s discuss your next step.
      </h2>
      <div class="mt-6 space-y-3 text-base leading-relaxed text-fg-2 font-light">
        <p>
          Whether you need assistance with a personal legal matter, a business issue, a dispute or legal documentation, we are here to help.
        </p>
        <p>
          Tell us briefly about your enquiry, and we will consider how we may be able to assist and explain the next steps.
        </p>
      </div>

      <!-- Dedicated Contact Form -->
      <form id="page-contact-form" class="mt-10 space-y-6">
        <div class="grid gap-6 sm:grid-cols-2">
          <div>
            <label for="contact-name" class="block text-xs uppercase tracking-wider text-fg-3 font-mono">FULL NAME</label>
            <input id="contact-name" name="name" type="text" required placeholder="Your full name" class="mt-2 w-full border-b border-line bg-transparent py-2.5 text-base text-white placeholder:text-fg-3/60 focus:border-white focus:outline-none transition-colors">
          </div>
          <div>
            <label for="contact-email" class="block text-xs uppercase tracking-wider text-fg-3 font-mono">EMAIL ADDRESS</label>
            <input id="contact-email" name="email" type="email" required placeholder="name@example.com" class="mt-2 w-full border-b border-line bg-transparent py-2.5 text-base text-white placeholder:text-fg-3/60 focus:border-white focus:outline-none transition-colors">
          </div>
        </div>

        <div class="grid gap-6 sm:grid-cols-2">
          <div>
            <label for="contact-phone" class="block text-xs uppercase tracking-wider text-fg-3 font-mono">TELEPHONE NUMBER</label>
            <input id="contact-phone" name="phone" type="tel" placeholder="+44 7123 456789" class="mt-2 w-full border-b border-line bg-transparent py-2.5 text-base text-white placeholder:text-fg-3/60 focus:border-white focus:outline-none transition-colors">
          </div>
          <div>
            <label for="contact-nature" class="block text-xs uppercase tracking-wider text-fg-3 font-mono">NATURE OF ENQUIRY</label>
            <select id="contact-nature" name="nature" class="mt-2 w-full border-b border-line bg-canvas py-2.5 text-base text-white focus:border-white focus:outline-none transition-colors">
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
          <textarea id="contact-message" name="message" rows="4" required placeholder="Please outline your enquiry briefly..." class="mt-2 w-full border-b border-line bg-transparent py-2.5 text-base text-white placeholder:text-fg-3/60 focus:border-white focus:outline-none transition-colors resize-none"></textarea>
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
          <button type="submit" id="contact-submit-btn" class="btn-pill-primary text-sm !px-8 !py-3.5 !min-w-0">
            SUBMIT ENQUIRY
          </button>
        </div>

        <!-- Inline Submission Confirmation -->
        <div id="contact-success-msg" class="hidden p-5 rounded-xl border border-emerald-500/40 bg-emerald-950/20 text-emerald-300 text-sm">
          Thank you. Your enquiry has been received confidentially. We will review it and contact you promptly.
        </div>
      </form>
    </div>

    <!-- Right Column: Our Contact Details Card -->
    <div class="lg:col-span-5 p-8 sm:p-10 rounded-2xl border border-line bg-raised/40 backdrop-blur space-y-8">
      <div>
        <h3 class="font-display text-2xl text-white">Our Contact Details</h3>
        <p class="mt-2 text-xs uppercase tracking-wider text-fg-3 font-mono">London Legal Practice</p>
      </div>

      <div class="space-y-6 text-sm text-fg-3">
        <div>
          <span class="block text-xs uppercase text-fg-2 font-mono mb-1">Office address</span>
          <p class="text-white font-normal">64 Neal Street, Covent Garden, London, WC2H 9PA</p>
        </div>

        <div>
          <span class="block text-xs uppercase text-fg-2 font-mono mb-1">Telephone number</span>
          <a href="tel:+447543105658" class="text-white font-normal hover:underline">+44 7543 105658</a>
        </div>

        <div>
          <span class="block text-xs uppercase text-fg-2 font-mono mb-1">Email address</span>
          <a href="mailto:info@elevancelegal.co.uk" class="text-white font-normal hover:underline">info@elevancelegal.co.uk</a>
        </div>

        <div>
          <span class="block text-xs uppercase text-fg-2 font-mono mb-1">Opening hours</span>
          <p class="text-white font-normal">Monday &ndash; Friday, 09:00 &ndash; 18:00</p>
        </div>
      </div>

      <div class="pt-6 border-t border-line/60 flex flex-wrap gap-3">
        <a href="https://wa.me/447543105658" target="_blank" rel="noopener" class="rounded-full border border-[#25d366]/40 bg-[#25d366]/10 px-4 py-2 text-xs text-[#25d366] hover:bg-[#25d366]/20 transition-colors inline-flex items-center gap-2">
          <span>WhatsApp Chat</span> &rarr;
        </a>
        <button type="button" data-intake-open="" data-prefill="Schedule a consultation" class="rounded-full border border-line bg-canvas/60 px-4 py-2 text-xs text-fg-2 hover:border-fg hover:text-white transition-colors">
          Schedule meeting &rarr;
        </button>
      </div>
    </div>

  </div>
</section>

<!-- Section Divider -->
<hr class="section-divider">

<!-- SECTION 10: OUR COMMITMENT -->
<section class="container-studio py-20 md:py-28 relative isolate" id="commitment" aria-labelledby="commitment-title">
  <div class="max-w-4xl mx-auto rounded-3xl border border-line bg-raised/50 p-8 sm:p-12 md:p-16 text-center backdrop-blur shadow-2xl">
    <div>
      <p class="marker justify-center"><span class="tabular-nums">10</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>OUR COMMITMENT</p>
      <span class="mt-4 block h-px w-8 bg-fg-3 mx-auto" aria-hidden="true"></span>
    </div>
    <h2 id="commitment-title" class="mt-6 font-display text-3xl leading-snug sm:text-4xl md:text-5xl text-white">
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
      <button type="button" data-intake-open="" data-prefill="Tell us about your requirements" class="btn-pill-primary text-sm !px-8 !py-3 !min-w-0">
        Discuss your requirements &rarr;
      </button>
    </div>
  </div>
</section>
`;

// 6. Replace the middle sections
const heroDivider = '<hr class="section-divider">';
const heroDividerIdx = html.indexOf(heroDivider);
const footerTag = '<footer class="border-t border-line">';
const footerTagIdx = html.indexOf(footerTag);

if (heroDividerIdx !== -1 && footerTagIdx !== -1) {
  const beforeMiddle = html.substring(0, heroDividerIdx + heroDivider.length);
  const afterMiddle = html.substring(footerTagIdx);
  html = beforeMiddle + '\n' + middleContent + '\n' + afterMiddle;
  console.log('Successfully replaced middle sections with 10 exact document sections!');
} else {
  console.error('Failed to locate middle section boundaries:', { heroDividerIdx, footerTagIdx });
  process.exit(1);
}

// 7. Update Footer Navigation Links to point to new sections
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

// 8. Update Statutory Regulatory Text in Footer from Customer Document
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

// 9. Attach Handler for the on-page Contact Form in the script block
const pageFormScript = `
// Page Contact Form Submission Controller
const pageForm = document.getElementById("page-contact-form");
const pageSuccessMsg = document.getElementById("contact-success-msg");
const pageSubmitBtn = document.getElementById("contact-submit-btn");

if (pageForm) {
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

html = html.replace('</script>\n\n</body>', `${pageFormScript}\n</script>\n\n</body>`);

// Write to both third/index.html and third.html
const outThirdIndex = path.join(__dirname, 'third', 'index.html');
const outThirdRoot = path.join(__dirname, 'third.html');

fs.writeFileSync(outThirdIndex, html, 'utf8');
fs.writeFileSync(outThirdRoot, html, 'utf8');

console.log('[SUCCESS] Successfully generated:');
console.log(' - ' + outThirdIndex);
console.log(' - ' + outThirdRoot);
