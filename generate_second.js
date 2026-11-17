const fs = require('fs');
const path = require('path');

const srcFile = 'D:/WebMentix/22 Services/Antigravity/ElevanceLegalServices.com/index.html';
let html = fs.readFileSync(srcFile, 'utf8');

// 1. Remove base href if present, let relative paths resolve cleanly to second/ (which has assets & video)
html = html.replace('<base href="/">\n', '');
html = html.replace('<base href="/">', '');

// 2. Canonical URL for /second
html = html.replace('<link rel="canonical" href="https://www.elevancelegal.co.uk/">', '<link rel="canonical" href="https://www.elevancelegal.co.uk/second/">');

// 3. Hero Section copy refinement (keeping exact HTML structure, video, search bar, buttons, privacy note and 4 pills)
const oldHeroP = `<p class="mt-6 md:mt-8 text-base md:text-xl font-light" style="color: rgba(255, 255, 255, 0.75); max-width: 44rem; line-height: 1.55;">
      Elevance Legal Services Ltd is an independent legal consultancy in London: <br class="hidden md:inline">document preparation, case coordination, wills, powers of attorney and certified <br class="hidden md:inline">translation. Tell us what you want to achieve.
    </p>`;

const newHeroP = `<p class="mt-6 md:mt-8 text-base md:text-xl font-light" style="color: rgba(255, 255, 255, 0.75); max-width: 46rem; line-height: 1.55;">
      Practical document preparation, and administrative case coordination for individuals, families and businesses. <br class="hidden md:inline">Thoughtful assistance, careful preparation and clear communication &mdash; centred on your needs.
    </p>`;

if (html.includes(oldHeroP)) {
  html = html.replace(oldHeroP, newHeroP);
  console.log('Hero paragraph replaced successfully.');
} else {
  console.log('Could not find exact oldHeroP, searching with regex...');
  html = html.replace(/<p class="mt-6 md:mt-8 text-base md:text-xl font-light"[\s\S]*?Tell us what you want to achieve\.\s*<\/p>/, newHeroP);
}

// 4. Section 01 Goals title and lead paragraph
const oldGoalsHeader = `<h2 id="goals-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl">Where are you now?</h2>
    </div>
    <p class="self-end text-lg leading-relaxed text-fg-2 lg:col-span-5 lg:col-start-8">
      Every situation goes through distinct stages. Knowing what to do next is often the hardest part. Pick the stage you are at.
    </p>`;

const newGoalsHeader = `<h2 id="goals-title" class="mt-10 font-display text-5xl leading-[1.02] md:text-7xl">Legal support, centred on your needs.</h2>
    </div>
    <p class="self-end text-lg leading-relaxed text-fg-2 lg:col-span-5 lg:col-start-8">
      Legal matters can be complex and sometimes overwhelming. Whether you are dealing with a housing issue, an employment matter, a family concern or a business dispute, obtaining clear and practical assistance can make a real difference. We listen to your concerns, explain how we can help and work towards practical solutions tailored to your circumstances.
    </p>`;

html = html.replace(oldGoalsHeader, newGoalsHeader);

// 5. Update the 5 animated flow lanes with team copy while preserving all data attributes and animations
// Lane 1: Home
const oldHomeLaneDesc = `<p class="mt-3 text-sm leading-relaxed text-fg-3 transition-colors duration-300 group-data-lit/lane:text-fg-2">
            Housing and landlord&ndash;tenant matters, handled step by step with organised paperwork and clear communication.
          </p>`;
const newHomeLaneDesc = `<p class="mt-3 text-sm leading-relaxed text-fg-3 transition-colors duration-300 group-data-lit/lane:text-fg-2">
            Practical assistance on tenancy agreements, rent arrears, deposit disputes, disrepair, and housing-related correspondence.
          </p>`;
html = html.replace(oldHomeLaneDesc, newHomeLaneDesc);

// Lane 2: Work
const oldWorkLaneDesc = `<p class="mt-3 text-sm leading-relaxed text-fg-3 transition-colors duration-300 group-data-lit/lane:text-fg-2">
            Employment and workplace matters, documented with a precise timeline and professional clarity.
          </p>`;
const newWorkLaneDesc = `<p class="mt-3 text-sm leading-relaxed text-fg-3 transition-colors duration-300 group-data-lit/lane:text-fg-2">
            Practical support on employment contracts, grievances, disciplinary procedures, workplace disputes, and settlement agreements.
          </p>`;
html = html.replace(oldWorkLaneDesc, newWorkLaneDesc);

// Lane 3: Family
const oldFamilyLaneDesc = `<p class="mt-3 text-sm leading-relaxed text-fg-3 transition-colors duration-300 group-data-lit/lane:text-fg-2">
            Sensitive paperwork prepared with dignity: family records, wills, and lasting powers of attorney.
          </p>`;
const newFamilyLaneDesc = `<p class="mt-3 text-sm leading-relaxed text-fg-3 transition-colors duration-300 group-data-lit/lane:text-fg-2">
            Sensitive and practical assistance with separation, divorce-related documentation, financial arrangements, wills, and LPAs.
          </p>`;
html = html.replace(oldFamilyLaneDesc, newFamilyLaneDesc);

// Lane 4: Business
const oldBusinessLaneDesc = `<p class="mt-3 text-sm leading-relaxed text-fg-3 transition-colors duration-300 group-data-lit/lane:text-fg-2">
            Commercial documentation and pre-action legal bundling for founders, contractors and SMEs.
          </p>`;
const newBusinessLaneDesc = `<p class="mt-3 text-sm leading-relaxed text-fg-3 transition-colors duration-300 group-data-lit/lane:text-fg-2">
            Commercial contracts, service agreements, NDAs, commercial leases, and contractual disputes for businesses and entrepreneurs.
          </p>`;
html = html.replace(oldBusinessLaneDesc, newBusinessLaneDesc);

// Lane 5: Docs / Translation
const oldDocsLaneDesc = `<p class="mt-3 text-sm leading-relaxed text-fg-3 transition-colors duration-300 group-data-lit/lane:text-fg-2">
            Official Arabic and Kurdish certified translation, document legalisation and consular bundling.
          </p>`;
const newDocsLaneDesc = `<p class="mt-3 text-sm leading-relaxed text-fg-3 transition-colors duration-300 group-data-lit/lane:text-fg-2">
            Arabic and Kurdish to English certified translations, notarial coordination, apostille, and document legalisation.
          </p>`;
html = html.replace(oldDocsLaneDesc, newDocsLaneDesc);

// 6. Section 02 Services: Replace with 10 services from team document
const oldServicesSectionRegex = /<section class="container-studio py-24 md:py-32 relative isolate" id="solutions">[\s\S]*?<\/section>\s*<!-- Crisp Full-Width White Line Below Section 02 -->\s*<hr class="section-divider">/;

const newServicesSection = `<section class="container-studio py-24 md:py-32 relative isolate" id="solutions">
  <!-- Google-Inspired Blue & Green Ambient Sine Wave -->
  <span aria-hidden="true" data-ambient-lines="" data-seed="services-google" data-colors="#4285F4,#34A853" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)] pointer-events-none opacity-55"></span>

  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">02</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>Services</p>
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

<!-- Crisp Full-Width White Line Below Section 02 -->
<hr class="section-divider">`;

html = html.replace(oldServicesSectionRegex, newServicesSection);

// 7. Section 03 How We Work: 5 steps from team doc
const oldHowSectionRegex = /<section class="container-studio py-24 md:py-32 relative isolate" id="how">[\s\S]*?<\/section>\s*<!-- Crisp Full-Width White Line Below Section 03 -->\s*<hr class="section-divider">/;

const newHowSection = `<section class="container-studio py-24 md:py-32 relative isolate" id="how">
  <!-- Google-Inspired Green & Yellow Ambient Sine Wave -->
  <span aria-hidden="true" data-ambient-lines="" data-seed="how-google" data-colors="#34A853,#FBBC05" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)] pointer-events-none opacity-55"></span>

  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">03</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>How we work</p>
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

<!-- Crisp Full-Width White Line Below Section 03 -->
<hr class="section-divider">`;

html = html.replace(oldHowSectionRegex, newHowSection);

// 8. Section 04 Solicitor by Appointment (team copy)
const oldCollabSectionRegex = /<section class="container-studio py-24 md:py-32 relative isolate" id="collaboration">[\s\S]*?<\/section>\s*<!-- Crisp Full-Width White Line Below Section 04 -->\s*<hr class="section-divider">/;

const newCollabSection = `<section class="container-studio py-24 md:py-32 relative isolate" id="collaboration">
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
        <button type="button" data-intake-open="" data-prefill="I would like to ask about an appointment with a qualified solicitor" class="btn-pill-primary text-sm !px-7 !py-3 !min-w-0">
          Ask about an appointment
        </button>
      </div>
    </div>

    <div class="regulatory-card lg:col-span-5 rounded-2xl p-8 shadow-2xl">
      <h3 class="text-lg font-medium text-white">Independent Solicitor Access</h3>
      <ul class="mt-4 space-y-3 text-sm leading-relaxed text-fg-3">
        <li class="flex gap-2">
          <span class="text-fg-2">&bull;</span>
          <span>Elevance provides unreserved legal consultancy, document drafting, case coordination, and certified translation.</span>
        </li>
        <li class="flex gap-2">
          <span class="text-fg-2">&bull;</span>
          <span>Where reserved legal activities, court proceedings, or litigation arise, we introduce you directly to independent, SRA-regulated solicitors.</span>
        </li>
        <li class="flex gap-2">
          <span class="text-fg-2">&bull;</span>
          <span>Solicitor services are engaged separately under the solicitor firm’s own terms of engagement and regulatory safeguards.</span>
        </li>
      </ul>
    </div>
  </div>
</section>

<!-- Crisp Full-Width White Line Below Section 04 -->
<hr class="section-divider">`;

html = html.replace(oldCollabSectionRegex, newCollabSection);

// 9. Section 05 Questions / FAQ: All 12 FAQs from team doc
const oldFaqSectionRegex = /<section class="container-studio py-24 md:py-32 relative isolate" id="faq">[\s\S]*?<\/section>\s*<!-- Crisp Full-Width White Line Below Section 05 -->\s*<hr class="section-divider">/;

const newFaqSection = `<section class="container-studio py-24 md:py-32 relative isolate" id="faq">

  <div class="max-w-2xl">
    <div>
      <p class="marker"><span class="tabular-nums">05</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>Questions</p>
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
        No. Elevance Legal Services Ltd is an independent legal consultancy. We are not a law firm of solicitors and are not regulated by the Solicitors Regulation Authority (SRA). We provide unreserved legal consultancy and practical document assistance. Where reserved legal activities are required, we work alongside independent, authorised solicitors.
      </p>
    </details>

    <details class="group py-6" data-lane-hot="" data-flow-step="">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>Can you represent me in court?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        No. Rights of audience (speaking on your behalf in court) and the conduct of litigation are reserved legal activities under the Legal Services Act 2007. We do not provide court representation. If your matter requires court proceedings, we can explain the options available and help you identify an authorised solicitor who can represent you.
      </p>
    </details>

    <details class="group py-6" data-lane-hot="" data-flow-step="">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>When might I need a solicitor?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        You may need a solicitor where your matter involves reserved legal activities &mdash; such as formal court litigation, property conveyancing, or contentious probate &mdash; or where the complexity or financial significance of the matter warrants specialist legal advice. We are always transparent about the boundaries of our services.
      </p>
    </details>

    <details class="group py-6" data-lane-hot="" data-flow-step="">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>Can you help me arrange an appointment with a solicitor?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        Yes. Appointments with a qualified solicitor may be available by prior arrangement, depending on the nature of your enquiry and availability. Any solicitor services are provided separately, under the solicitor's own terms of engagement and fee structure.
      </p>
    </details>

    <details class="group py-6" data-lane-hot="" data-flow-step="">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>How do your fees work?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        We believe in clear, transparent pricing. We discuss the scope of work and agree our fees with you before commencing. Depending on the service, we generally offer fixed-fee arrangements for straightforward matters or agreed rates for ongoing support. There are no hidden costs.
      </p>
    </details>

    <details class="group py-6" data-lane-hot="" data-flow-step="">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>What languages do you support for translation?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        We primarily assist with Arabic and Kurdish to English translations. For certified translations, we arrange these through qualified translators, subject to language availability and the specific requirements of the receiving organisation.
      </p>
    </details>

    <details class="group py-6" data-lane-hot="" data-flow-step="">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>Are your translations certified for official use?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        Where required, we can arrange certified translations that include a statement of truth and translator credentials suitable for official UK bodies, courts, academic institutions, and employers. Please let us know the intended use of the translation so we can ensure the appropriate certification is provided.
      </p>
    </details>

    <details class="group py-6" data-lane-hot="" data-flow-step="">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>Can you help with urgent or time-sensitive matters?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        We will always do our best to accommodate urgent requests, depending on capacity and the nature of the matter. If you have an urgent deadline, please let us know as early as possible so we can assess whether we can assist within the required timeframe.
      </p>
    </details>

    <details class="group py-6" data-lane-hot="" data-flow-step="">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>How do I get started?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        Simply contact us by email, telephone or through our enquiry form. Describe your situation and what kind of assistance you are looking for. We will review your enquiry and arrange an initial conversation to discuss how we can help.
      </p>
    </details>

    <details class="group py-6" data-lane-hot="" data-flow-step="">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>Can you help if I live outside London or overseas?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        Yes. Most of our services &mdash; including document preparation, translation, and general support &mdash; can be handled remotely by email, telephone and video conference, regardless of where you are located.
      </p>
    </details>

    <details class="group py-6" data-lane-hot="" data-flow-step="">
      <summary class="flex cursor-pointer items-center justify-between text-lg font-normal text-white hover:text-fg-2 [&::-webkit-details-marker]:hidden">
        <span>How do you protect my privacy and confidential information?</span>
        <span class="text-xl text-fg-3 transition-transform group-open:rotate-45">+</span>
      </summary>
      <p class="mt-4 text-sm leading-relaxed text-fg-3 pr-8">
        We treat all client information with strict confidentiality. We maintain appropriate data protection practices in accordance with applicable UK data privacy laws and do not share your information with third parties without your consent, except as necessary to deliver our agreed services.
      </p>
    </details>
  </div>
</section>

<!-- SECTION: WHO WE SUPPORT & OUR COMMITMENT -->
<section class="container-studio py-20 relative isolate border-t border-line" id="support">
  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-5">
      <div>
        <p class="marker"><span class="tabular-nums">06</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>Who we support</p>
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

  <!-- Our Commitment Callout -->
  <div class="mt-16 rounded-2xl border border-line bg-canvas/60 p-8 md:p-10 text-center max-w-4xl mx-auto backdrop-blur">
    <p class="text-xs uppercase tracking-widest text-fg-3 font-mono">Our commitment</p>
    <p class="mt-4 text-xl md:text-2xl font-light text-white leading-relaxed">
      Accessible, approachable and practical legal support. We believe legal assistance should be straightforward, transparent and centred on the people we support.
    </p>
  </div>
</section>

<!-- Crisp Full-Width White Line Below Section 05 -->
<hr class="section-divider">`;

html = html.replace(oldFaqSectionRegex, newFaqSection);

// 10. Update Section 06 Contact Marker to 07
html = html.replace('<p class="marker"><span class="tabular-nums">06</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>Get in touch</p>', '<p class="marker"><span class="tabular-nums">07</span><span class="mx-3 text-fg-3" aria-hidden="true">&mdash;</span>Get in touch</p>');
html = html.replace('<p class="marker"><span class="tabular-nums">06</span><span class="mx-3 text-fg-3" aria-hidden="true">—</span>Get in touch</p>', '<p class="marker"><span class="tabular-nums">07</span><span class="mx-3 text-fg-3" aria-hidden="true">—</span>Get in touch</p>');

// 11. Write out both second/index.html and second.html
const outDir = 'D:/WebMentix/22 Services/Antigravity/ElevanceLegalServices.com/second';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
fs.writeFileSync('D:/WebMentix/22 Services/Antigravity/ElevanceLegalServices.com/second.html', html, 'utf8');

console.log('Successfully written second/index.html and second.html. Total length:', html.length);
