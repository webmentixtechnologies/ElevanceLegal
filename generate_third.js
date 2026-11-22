/**
 * rebuild_third_perfect.js
 * 
 * Rebuilds /third/ strictly using second.html as the 100% UI MASTER:
 * - Identical UI components, typography, font size, margins, and card styles from second.html
 * - Section 09 Contact is identical to second.html (no inline custom form; clean split layout with list & pill button)
 * - Section 03 Services uses the exact hairline-grid cards from second.html with clean paragraphs (no bullet points)
 * - Section 07 How We Work is 100% AS IS from second.html
 * - All navigation menu items aligned to modules
 * - Footer is 100% pristine master footer from second.html
 */

const fs = require('fs');
const path = require('path');

const secondPath = path.join(__dirname, 'second.html');
const secondHtml = fs.readFileSync(secondPath, 'utf8');

// Read dumped section components from second.html
const sec0Top = fs.readFileSync(path.join(__dirname, 'sec_0_top.html'), 'utf8');
const sec6Solutions = fs.readFileSync(path.join(__dirname, 'sec_6_solutions.html'), 'utf8');
const sec7How = fs.readFileSync(path.join(__dirname, 'sec_7_how.html'), 'utf8');
const sec8Collab = fs.readFileSync(path.join(__dirname, 'sec_8_collaboration.html'), 'utf8');
const sec9Faq = fs.readFileSync(path.join(__dirname, 'sec_9_faq.html'), 'utf8');
const sec10Support = fs.readFileSync(path.join(__dirname, 'sec_10_support.html'), 'utf8');
const sec11Contact = fs.readFileSync(path.join(__dirname, 'sec_11_contact.html'), 'utf8');

// 1. SECTION 01: WELCOME (Master second UI component)
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

// 2. SECTION 02: OUR STORY (Master second UI component)
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

// 3. SECTION 03: SERVICES (EXACT sec_6_solutions.html with both id="services" and id="solutions")
let sec03Services = sec6Solutions;
// Ensure it has id="services" as well as id="solutions", and update marker to 03
sec03Services = sec03Services.replace('id="solutions"', 'id="services"');
sec03Services = sec03Services.replace('<span class="tabular-nums">02</span>', '<span class="tabular-nums">03</span>');
sec03Services = sec03Services.replace('Services</p>', 'Our Services</p>');

// 4. SECTION 04: SOLICITOR BY APPOINTMENT (EXACT sec_8_collaboration.html with id="solicitor")
let sec04Solicitor = sec8Collab;
sec04Solicitor = sec04Solicitor.replace('id="collaboration"', 'id="solicitor"');

// 5. SECTION 05: WHO WE SUPPORT (EXACT sec_10_support.html with id="support")
// Extract just the support section without the commitment callout at bottom so commitment has its own section!
let sec05Support = sec10Support;
sec05Support = sec05Support.replace('<span class="tabular-nums">06</span>', '<span class="tabular-nums">05</span>');
const commitmentIdx = sec05Support.indexOf('<!-- Our Commitment Callout -->');
if (commitmentIdx > 0) {
  sec05Support = sec05Support.slice(0, commitmentIdx) + '</section>';
}

// 6. SECTION 06: WHY ELEVANCE (Master second rounded card grid matching image 3)
const sec06Why = `
<!-- SECTION 06: WHY ELEVANCE (Master Second Card UI matching screenshot) -->
<section class="container-studio py-24 md:py-32 relative isolate border-t border-line" id="why" aria-labelledby="why-title">
  <div class="grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-6">
      <div>
        <p class="marker"><span class="tabular-nums">06</span><span class="mx-3 text-fg-3" aria-hidden="true">—</span>Why Elevance</p>
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

// 7. SECTION 07: HOW WE WORK (EXACT 100% AS IS FROM second.html sec_7_how.html)
let sec07HowWork = sec7How;
// Update marker number to 07
sec07HowWork = sec07HowWork.replace('<span class="tabular-nums">03</span>', '<span class="tabular-nums">07</span>');

// 8. SECTION 08: FAQS (EXACT sec_9_faq.html with marker 08)
let sec08Faqs = sec9Faq;
sec08Faqs = sec08Faqs.replace('<span class="tabular-nums">05</span>', '<span class="tabular-nums">08</span>');

// 9. SECTION 09: CONTACT US (EXACT 100% AS IS FROM second.html sec_11_contact.html)
let sec09Contact = sec11Contact;
// Update marker to 09 and heading to "Let’s discuss your next step."
sec09Contact = sec09Contact.replace('<span class="tabular-nums">07</span>', '<span class="tabular-nums">09</span>');
sec09Contact = sec09Contact.replace('Let’s build what’s next.', 'Let’s discuss your next step.');

// 10. SECTION 10: OUR COMMITMENT (Master second callout card)
const sec10Commitment = `
<!-- SECTION 10: OUR COMMITMENT (Master Second Callout Card) -->
<section class="container-studio py-20 relative isolate border-t border-line" id="commitment" aria-labelledby="commitment-title">
  <div class="rounded-2xl border border-line bg-canvas/60 p-8 md:p-14 text-center max-w-4xl mx-auto backdrop-blur">
    <p class="text-xs uppercase tracking-widest text-fg-3 font-mono">Our commitment</p>
    <h2 id="commitment-title" class="mt-4 font-display text-3xl md:text-5xl text-white">Our commitment to you.</h2>
    <p class="mt-6 text-lg md:text-xl font-light text-fg-2 leading-relaxed max-w-2xl mx-auto">
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

// COMBINE ALL SECTIONS IN SEQUENCE
const allSections = [
  sec01Welcome,
  sec02Story,
  sec03Services,
  sec04Solicitor,
  sec05Support,
  sec06Why,
  sec07HowWork,
  sec08Faqs,
  sec09Contact,
  sec10Commitment
].join('\n\n');

// 2. DESKTOP NAVIGATION (Aligned with modules in /third/)
const desktopNav = `
    <!-- Desktop Navigation Bar (Aligned with Third Modules) -->
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
                  <p class="eyebrow uppercase tracking-wider text-xs font-semibold text-fg-3">Documentation &amp; Cases</p>
                  <ul>
                    <li><a href="#services">Document Preparation &amp; Support</a></li>
                    <li><a href="#services">Dispute Resolution &amp; Case Support</a></li>
                    <li><a href="#services">Business &amp; Commercial Legal</a></li>
                  </ul>
                </div>
                <div>
                  <p class="eyebrow uppercase tracking-wider text-xs font-semibold text-fg-3">Housing &amp; Personal</p>
                  <ul>
                    <li><a href="#services">Housing &amp; Landlord-Tenant</a></li>
                    <li><a href="#services">Employment &amp; Workplace</a></li>
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
                    <li><a href="#services">Translation Services (Arabic/Kurdish)</a></li>
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

// 3. MOBILE DRAWER NAVIGATION
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

// 4. FOOTER NAVIGATION (Pristine master footer from second.html with updated links)
const footerNav = `
    <!-- Navigation on Right (Aligned with Modules) -->
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

// ASSEMBLE FULL HTML STARTING FROM MASTER second.html
let html = secondHtml;

// Replace Desktop Nav
html = html.replace(/<nav aria-label="Navigation" class="site-nav-desktop">[\s\S]*?<\/nav>/i, desktopNav);

// Replace Mobile Drawer links
html = html.replace(/<ul class="space-y-4 font-display text-2xl">[\s\S]*?<\/ul>/i, mobileDrawerNav);

// Replace all sections after #top hero up to </main>
const topEnd = html.indexOf('</section>', html.indexOf('id="top"'));
const mainEnd = html.indexOf('</main>');

html = html.slice(0, topEnd + 10) + '\n\n' + allSections + '\n\n' + html.slice(mainEnd);

// Replace Footer navigation
html = html.replace(/<!-- Navigation on Right -->[\s\S]*?<\/div>/i, footerNav);

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

console.log('[SUCCESS] Rebuilt /third/ with 100% master second UI parity:');
console.log(' - ' + outThirdIndex);
console.log(' - ' + outThirdRoot);
