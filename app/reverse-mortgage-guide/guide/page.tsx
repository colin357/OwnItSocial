import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PrintButton from './PrintButton';

export const metadata: Metadata = {
  title: 'Complete Reverse Mortgage Guide | Dave Davis, NMLS #391214 | Fairway',
  description:
    'A comprehensive, no-fluff guide to reverse mortgages (HECMs) — covering eligibility, how much you can access, payout options, costs, protections, and common myths. From Dave Davis at Fairway Independent Mortgage Corporation.',
  robots: { index: true, follow: true },
};

const DAVE_CTA = (
  <div className="mt-8 p-5 bg-green-50 border border-fairway-green rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 print:hidden">
    <p className="text-sm font-medium text-gray-700">Have questions about this section?</p>
    <div className="flex flex-wrap gap-4 text-sm">
      <a href="tel:+19045098762" className="font-semibold text-fairway-green hover:underline">
        📞 Call/Text Dave: (904) 509-8762
      </a>
      <a href="mailto:dave.davis@fairwaymc.com" className="font-semibold text-fairway-green hover:underline">
        ✉️ dave.davis@fairwaymc.com
      </a>
    </div>
  </div>
);

const PRINT_CTA = (
  <div className="hidden print:block mt-6 pt-4 border-t border-gray-300 text-sm text-gray-600">
    <p>Questions? Contact Dave Davis: <strong>(904) 509-8762</strong> · <strong>dave.davis@fairwaymc.com</strong></p>
  </div>
);

const COMPLIANCE = (
  <div className="hidden print:block mt-8 pt-4 border-t border-gray-400 text-xs text-gray-500 leading-relaxed compliance-footer">
    Dave Davis | NMLS #391214 | Fairway Independent Mortgage Corporation | NMLS #2289 | Equal Housing Lender | (904) 509-8762 | dave.davis@fairwaymc.com
    <br />
    This is not a commitment to lend. Loan terms and conditions are subject to change without notice. These materials are not from HUD or FHA and were not approved by HUD or a government agency. These advertisements and materials are not provided nor approved by the US Department of Housing and Urban Development (HUD) or the Federal Housing Administration (FHA). A reverse mortgage increases the principal mortgage loan amount and decreases home equity (it is a negative-amortization loan). Borrowers are still responsible for property taxes and homeowner&apos;s insurance. Borrower must occupy home as primary residence and remain current on property taxes, homeowner&apos;s insurance, and any HOA fees.
  </div>
);

export default function ReverseMortgageGuidePage() {
  return (
    <>
      {/* Print CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          .guide-section { page-break-after: always; break-after: page; }
          .guide-section:last-of-type { page-break-after: avoid; break-after: avoid; }
          h2, h3 { page-break-after: avoid; break-after: avoid; }
          ul, ol, table { page-break-inside: avoid; break-inside: avoid; }
          .compliance-footer { display: block !important; }
          body { font-size: 11pt; color: #000; }
          a { color: #000; text-decoration: none; }
          @page { margin: 0.75in 0.75in 1in 0.75in; size: letter; }
        }
      `}} />

      <div className="min-h-screen bg-white">
        {/* Screen Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10 print:hidden">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/reverse-mortgage-guide" className="text-sm text-gray-500 hover:text-gray-900">← Back</Link>
              <Image
                src="/images/Fairway.webp"
                alt="Fairway Independent Mortgage Corporation"
                width={120}
                height={34}
                className="h-8 w-auto"
              />
            </div>
            <PrintButton />
          </div>
        </header>

        {/* Print Header */}
        <div className="hidden print:block text-center pb-6 mb-8 border-b-2 border-gray-300">
          <p className="font-bold text-xl">The Complete Homeowner&apos;s Guide to Reverse Mortgages</p>
          <p className="text-sm text-gray-600 mt-1">Dave Davis, NMLS #391214 | Fairway Independent Mortgage Corporation, NMLS #2289</p>
          <p className="text-sm text-gray-600">(904) 509-8762 | dave.davis@fairwaymc.com</p>
        </div>

        <main className="max-w-4xl mx-auto px-4 pb-20">

          {/* Cover / Intro */}
          <section className="guide-section py-12 border-b border-gray-100">
            <div className="text-center mb-10">
              <span className="inline-block bg-fairway-green text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 print:hidden">
                Your Free Guide
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                The Complete Homeowner&apos;s Guide to Reverse Mortgages
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
                What Every Homeowner 62+ Should Know Before Making a Decision
              </p>
              <p className="text-sm text-gray-500 mb-8">
                Prepared by <strong>Dave Davis, NMLS #391214</strong> · Fairway Independent Mortgage Corporation NMLS #2289
              </p>
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-left max-w-xl mx-auto">
                <p className="text-sm italic text-gray-600">
                  &ldquo;This guide was written to give you real answers — not a sales pitch. Whether a reverse mortgage turns out to be right for you or not, you deserve to understand exactly how it works before making any decision.&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-3">— Dave Davis</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h2 className="font-bold text-gray-900 mb-4">Table of Contents</h2>
              <ol className="space-y-2 text-gray-700">
                {[
                  'What Is a Reverse Mortgage (HECM)?',
                  'Who Qualifies?',
                  'How Much Can You Access?',
                  'Payout Options',
                  'Costs & Fees',
                  'Non-Recourse Protection',
                  'Your Remaining Responsibilities',
                  'Required HUD Counseling',
                  'Reverse Mortgage vs. Alternatives',
                  'Common Myths Debunked',
                  'The Process: Step by Step',
                ].map((item, i) => (
                  <li key={item} className="flex gap-3">
                    <span className="font-bold text-fairway-green w-6 flex-shrink-0">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
            {DAVE_CTA}
            {PRINT_CTA}
            {COMPLIANCE}
          </section>

          {/* Section 1 */}
          <section className="guide-section py-12 border-b border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-fairway-green text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</span>
              <h2 className="text-3xl font-bold text-gray-900">What Is a Reverse Mortgage (HECM)?</h2>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              A <strong>Home Equity Conversion Mortgage (HECM)</strong> — pronounced &ldquo;heck-um&rdquo; — is a federally-insured loan program administered by the U.S. Department of Housing and Urban Development (HUD) that allows homeowners 62 and older to convert a portion of their home equity into loan proceeds. You do not need to sell your home, and you are not required to make monthly mortgage payments.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The name &ldquo;reverse&rdquo; comes from the flow of payments: instead of making payments <em>to</em> a lender over time (as with a traditional mortgage), the loan balance grows over time as interest accrues. The loan is repaid when the last borrower permanently leaves the home — whether by selling, moving into long-term care, or passing away.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              HECMs are the only reverse mortgages insured by the Federal Housing Administration (FHA). There are also <strong>proprietary &ldquo;jumbo&rdquo; reverse mortgages</strong> offered by private lenders for higher-value homes, but they do not carry FHA insurance or the same consumer protections.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <p className="text-sm font-semibold text-amber-800 mb-1">Important Distinction</p>
              <p className="text-sm text-amber-700">A reverse mortgage is a <strong>loan secured by your home equity</strong> — not a government grant, benefit program, or free money. The balance must be repaid. The non-recourse guarantee (more in Section 6) simply limits how much is owed.</p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The HECM program was created by Congress in 1988 and has been continuously refined. Major consumer protections were added in 2013–2015, including mandatory financial assessments, non-borrowing spouse protections, and stricter counseling requirements — making today&apos;s reverse mortgage significantly safer than earlier versions of the product.
            </p>
            {DAVE_CTA}
            {PRINT_CTA}
            {COMPLIANCE}
          </section>

          {/* Section 2 */}
          <section className="guide-section py-12 border-b border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-fairway-green text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</span>
              <h2 className="text-3xl font-bold text-gray-900">Who Qualifies?</h2>
            </div>

            <div className="space-y-5">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Age Requirement</h3>
                <p className="text-gray-700 leading-relaxed">All borrowers on the title must be <strong>62 years of age or older</strong>. If your spouse is under 62, they can be a <em>non-borrowing spouse</em> — they receive important deferral protections added in 2014 that allow them to remain in the home if the borrowing spouse passes away, but they are not on the loan.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Primary Residence</h3>
                <p className="text-gray-700 leading-relaxed">The home must be your <strong>primary residence</strong> — where you live for the majority of the year. Vacation homes and investment properties are not eligible.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Eligible Property Types</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Single-family homes</li>
                  <li>2–4 unit properties (if the borrower lives in one unit)</li>
                  <li>FHA-approved condominiums</li>
                  <li>Manufactured homes built on or after June 15, 1976, that meet FHA requirements</li>
                  <li>Cooperatives are generally <em>not</em> eligible</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Equity Requirement</h3>
                <p className="text-gray-700 leading-relaxed">There is no hard minimum equity percentage, but the reverse mortgage proceeds must be sufficient to pay off any existing mortgage balance at closing. In practice, most borrowers need substantial equity — typically at least 50% — though the specific amount depends on age, interest rates, and home value.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Financial Assessment (Required since 2015)</h3>
                <p className="text-gray-700 leading-relaxed">Lenders are required to assess your ability and willingness to meet ongoing obligations: property taxes, homeowners insurance, and HOA fees. This looks at income, assets, and payment history. Unlike a traditional mortgage, there are no minimum credit score or debt-to-income requirements — but a poor track record of tax and insurance payments may result in a <strong>Life Expectancy Set-Aside (LESA)</strong>, which reserves a portion of your proceeds to cover these future expenses.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">HUD-Approved Counseling (Mandatory)</h3>
                <p className="text-gray-700 leading-relaxed">Before you can even <em>apply</em> for a reverse mortgage, you must complete a session with a HUD-approved, independent housing counselor. This is covered in detail in Section 8.</p>
              </div>
            </div>
            {DAVE_CTA}
            {PRINT_CTA}
            {COMPLIANCE}
          </section>

          {/* Section 3 */}
          <section className="guide-section py-12 border-b border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-fairway-green text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</span>
              <h2 className="text-3xl font-bold text-gray-900">How Much Can You Access?</h2>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">Three variables determine how much equity you can access:</p>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Your Age', desc: 'Older borrowers access a higher percentage of their equity' },
                { label: 'Interest Rates', desc: 'Lower rates = more available proceeds' },
                { label: 'Home Value', desc: 'Appraised value or FHA limit, whichever is lower' },
              ].map((item) => (
                <div key={item.label} className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
                  <p className="font-bold text-fairway-green mb-2">{item.label}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">FHA Lending Limit (2025)</h3>
                <p className="text-gray-700 leading-relaxed">The FHA caps the home value used to calculate proceeds at <strong>$1,209,750</strong> (the &ldquo;Maximum Claim Amount&rdquo;). If your home is worth more, the calculation is still capped at this figure — though proprietary reverse mortgages can access higher values.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Principal Limit Factor (PLF)</h3>
                <p className="text-gray-700 leading-relaxed">HUD publishes tables of PLFs that reflect what percentage of the home&apos;s value a borrower can access based on age and the &ldquo;expected rate.&rdquo; As a general illustration:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                  <li>Age 62: roughly 35–42% of home value</li>
                  <li>Age 70: roughly 42–52% of home value</li>
                  <li>Age 75: roughly 48–57% of home value</li>
                  <li>Age 80: roughly 54–62% of home value</li>
                </ul>
                <p className="text-xs text-gray-500 mt-2">*These ranges vary based on prevailing interest rates at the time of application.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Worked Example</h3>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-sm text-gray-700 mb-2"><strong>Scenario:</strong> 72-year-old borrower, $450,000 home, PLF of ~50%</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between"><span className="text-gray-600">Gross available proceeds (50% PLF):</span><span className="font-semibold">$225,000</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Less: Existing mortgage payoff:</span><span className="font-semibold text-red-600">− $100,000</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Less: Estimated closing costs:</span><span className="font-semibold text-red-600">− $15,000</span></div>
                    <div className="border-t border-gray-300 pt-1 flex justify-between"><span className="font-bold text-gray-900">Estimated net proceeds available:</span><span className="font-bold text-fairway-green">~$110,000</span></div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Lump Sum Limitation</h3>
                <p className="text-gray-700 leading-relaxed">If you choose a lump sum (fixed rate), FHA limits first-year draws to the <strong>greater of 60% of available proceeds or your mandatory obligations plus 10%</strong>. Remaining funds are accessible after the first year. This rule reduces the risk of rapid equity depletion.</p>
              </div>
            </div>
            {DAVE_CTA}
            {PRINT_CTA}
            {COMPLIANCE}
          </section>

          {/* Section 4 */}
          <section className="guide-section py-12 border-b border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-fairway-green text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</span>
              <h2 className="text-3xl font-bold text-gray-900">Payout Options</h2>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">One of the most flexible features of a HECM is how you receive the funds. You have five options — or a combination:</p>

            <div className="space-y-5">
              {[
                {
                  name: 'Lump Sum (Fixed Rate)',
                  desc: 'Receive all available proceeds at closing. This is the only option with a fixed interest rate — your rate never changes. Best suited for borrowers who need to pay off a large existing mortgage or fund a one-time expense. First-year draw is capped by FHA rules.',
                },
                {
                  name: 'Line of Credit (Adjustable Rate)',
                  desc: 'Draw funds as needed, up to your available limit. The most popular option for good reason: the unused portion of your credit line grows over time at the same rate the loan charges. This growth is not dependent on home value — your credit line can grow even if your home\'s value declines. The lender cannot freeze, reduce, or cancel your line as long as you comply with loan terms.',
                },
                {
                  name: 'Term Payments (Adjustable Rate)',
                  desc: 'Receive equal monthly payments for a fixed period (e.g., 5, 10, or 15 years). Payments stop after the term ends, but the loan does not become due as long as you continue living in the home as your primary residence.',
                },
                {
                  name: 'Tenure Payments (Adjustable Rate)',
                  desc: 'Receive equal monthly payments for as long as you live in the home as your primary residence — regardless of how long that is. Provides a predictable, guaranteed income stream and eliminates the worry of outliving your payments.',
                },
                {
                  name: 'Modified / Combination',
                  desc: 'Combine a line of credit with either term or tenure monthly payments. This is often the most strategically powerful option — you get a monthly income stream plus a reserve for unexpected expenses.',
                },
              ].map((option, i) => (
                <div key={option.name} className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <span className="bg-fairway-green text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{option.name}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{option.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-6">
              <p className="text-sm font-semibold text-blue-800 mb-1">Tax Treatment Note</p>
              <p className="text-sm text-blue-700">Loan proceeds from a reverse mortgage are generally <strong>not considered taxable income</strong> by the IRS. Proceeds also do not typically affect Social Security or Medicare eligibility. They may, however, affect need-based programs like Medicaid — consult a financial advisor for your specific situation. This is not tax or financial advice.</p>
            </div>
            {DAVE_CTA}
            {PRINT_CTA}
            {COMPLIANCE}
          </section>

          {/* Section 5 */}
          <section className="guide-section py-12 border-b border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-fairway-green text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">5</span>
              <h2 className="text-3xl font-bold text-gray-900">Costs &amp; Fees</h2>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">Reverse mortgages have real costs — and understanding them fully is essential to making an informed decision. The good news is that most costs can be financed into the loan (paid from proceeds rather than out of pocket).</p>

            <div className="space-y-5">
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">Origination Fee</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">Charged by the lender. FHA caps it at the <strong>greater of $2,500 or 2% of the first $200,000 of home value, plus 1% of the value above $200,000</strong>. Maximum: $6,000.</p>
                <p className="text-xs text-gray-500">Example: $450,000 home → $4,000 + $2,500 = $4,500 (capped at $6,000)</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">Upfront Mortgage Insurance Premium (MIP)</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-2"><strong>2% of the Maximum Claim Amount</strong> (lesser of appraised value or FHA limit), paid to FHA at closing. This funds the FHA insurance that protects both the borrower and the lender.</p>
                <p className="text-xs text-gray-500">Example: $400,000 home → $8,000 upfront MIP</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">Annual MIP</h3>
                <p className="text-gray-700 text-sm leading-relaxed"><strong>0.5% of the outstanding loan balance per year</strong>, accrued monthly and added to the loan balance (not paid out of pocket). This ongoing premium is what funds the non-recourse guarantee and FHA&apos;s insurance fund.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">Third-Party Closing Costs</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Appraisal ($400–$600), title search and title insurance, recording fees, attorney fees where required. Similar to a traditional refinance. Typical range: $1,500–$5,000 depending on location and property.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">Interest</h3>
                <p className="text-gray-700 text-sm leading-relaxed">For adjustable-rate loans, interest is indexed to <strong>SOFR (Secured Overnight Financing Rate)</strong> plus a lender margin, typically with annual and lifetime rate caps. For the lump-sum fixed-rate option, the rate is fixed at closing. Interest accrues on the outstanding balance and is added to the loan — you do not pay it monthly.</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5 mt-6">
              <p className="text-sm font-semibold text-fairway-green mb-1">Cost Summary: Worked Example</p>
              <p className="text-sm text-gray-700 mb-3">$400,000 home with $150,000 existing mortgage:</p>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between"><span className="text-gray-600">Origination fee:</span><span>~$4,000</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Upfront MIP (2%):</span><span>$8,000</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Closing costs:</span><span>~$3,000</span></div>
                <div className="flex justify-between border-t border-green-300 pt-1 mt-1 font-semibold"><span>Total estimated fees (financed):</span><span>~$15,000</span></div>
              </div>
            </div>
            {DAVE_CTA}
            {PRINT_CTA}
            {COMPLIANCE}
          </section>

          {/* Section 6 */}
          <section className="guide-section py-12 border-b border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-fairway-green text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">6</span>
              <h2 className="text-3xl font-bold text-gray-900">Non-Recourse Protection</h2>
            </div>

            <div className="bg-green-50 border-2 border-fairway-green rounded-2xl p-6 mb-6">
              <p className="text-lg font-bold text-fairway-green mb-2">The Most Important Guarantee</p>
              <p className="text-gray-800 leading-relaxed">
                <strong>You can never owe more than your home is worth at the time of repayment.</strong> If the loan balance exceeds the home&apos;s sale price, FHA&apos;s insurance fund covers the difference. The lender cannot pursue your estate, your heirs, or any other assets.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">What Triggers Repayment</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>The last surviving borrower permanently leaves the home</li>
                  <li>The home is sold</li>
                  <li>The borrower moves to a care facility for 12+ consecutive months</li>
                  <li>The borrower passes away</li>
                  <li>Failure to pay property taxes, homeowners insurance, or HOA fees</li>
                  <li>Failure to maintain the property</li>
                  <li>The home is no longer the primary residence</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Heirs&apos; Options When the Loan Comes Due</h3>
                <p className="text-gray-700 leading-relaxed mb-3">Heirs are notified and typically have 30 days to elect their option, with up to 12 months total (with HUD-approved extensions) to complete it:</p>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li><strong>Sell the home</strong> — repay the loan balance from proceeds and keep any equity above the balance</li>
                  <li><strong>Pay off the loan</strong> — pay the lesser of the loan balance or 95% of appraised value and keep the home</li>
                  <li><strong>Sign the home over</strong> — a deed-in-lieu of foreclosure; heirs walk away with no financial obligation, even if the loan balance exceeds the value</li>
                </ol>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">The &ldquo;Crossover Point&rdquo;</h3>
                <p className="text-gray-700 leading-relaxed">If a borrower lives in the home for many years, the loan balance can eventually exceed the home&apos;s value — a point called the &ldquo;crossover.&rdquo; This is where FHA insurance is critical: the lender is made whole by the FHA fund, and the borrower/estate owes nothing additional. This is why the upfront and ongoing MIP premiums exist.</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
              <p className="text-sm font-semibold text-amber-800 mb-1">Required Disclosure</p>
              <p className="text-sm text-amber-700">A reverse mortgage increases the principal mortgage loan amount and decreases home equity (it is a negative-amortization loan).</p>
            </div>
            {DAVE_CTA}
            {PRINT_CTA}
            {COMPLIANCE}
          </section>

          {/* Section 7 */}
          <section className="guide-section py-12 border-b border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-fairway-green text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">7</span>
              <h2 className="text-3xl font-bold text-gray-900">Your Remaining Responsibilities</h2>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              &ldquo;No monthly mortgage payment&rdquo; does not mean &ldquo;no financial obligations.&rdquo; This is one of the most important sections in this guide. Failing to meet these responsibilities is the leading cause of reverse mortgage defaults.
            </p>

            <div className="space-y-5">
              {[
                {
                  title: 'Property Taxes',
                  desc: 'You must continue paying property taxes on time. Tax default is the #1 cause of reverse mortgage foreclosure. If you have difficulty paying taxes, some states offer exemptions or deferral programs for seniors — ask your tax authority.',
                  urgent: true,
                },
                {
                  title: 'Homeowners Insurance',
                  desc: 'You must maintain adequate homeowners insurance at all times. If your coverage lapses, the loan servicer may force-place insurance (expensive coverage purchased on your behalf and charged to your loan balance).',
                  urgent: true,
                },
                {
                  title: 'HOA Fees',
                  desc: 'If your property is part of a homeowners association, dues must be kept current.',
                  urgent: false,
                },
                {
                  title: 'Property Maintenance',
                  desc: 'The FHA requires you to maintain the property in good condition. Significant deferred maintenance can trigger a required repair condition.',
                  urgent: false,
                },
                {
                  title: 'Primary Residence',
                  desc: 'You must live in the home as your primary residence. You can travel or be temporarily away, but if you are absent for 12 or more consecutive months — including a nursing home or assisted living stay — the loan becomes due.',
                  urgent: true,
                },
                {
                  title: 'Flood Insurance',
                  desc: 'If your property is in a FEMA-designated flood zone, flood insurance is required.',
                  urgent: false,
                },
              ].map((item) => (
                <div key={item.title} className={`rounded-xl p-5 border ${item.urgent ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'}`}>
                  <h3 className={`font-bold mb-2 ${item.urgent ? 'text-red-800' : 'text-gray-900'}`}>
                    {item.urgent ? '⚠️ ' : ''}{item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${item.urgent ? 'text-red-700' : 'text-gray-700'}`}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
              <p className="text-sm font-semibold text-amber-800 mb-1">Required Disclosure</p>
              <p className="text-sm text-amber-700">Borrowers are still responsible for property taxes and homeowner&apos;s insurance. Borrower must occupy home as primary residence and remain current on property taxes, homeowner&apos;s insurance, and any HOA fees.</p>
            </div>
            {DAVE_CTA}
            {PRINT_CTA}
            {COMPLIANCE}
          </section>

          {/* Section 8 */}
          <section className="guide-section py-12 border-b border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-fairway-green text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">8</span>
              <h2 className="text-3xl font-bold text-gray-900">Required HUD Counseling</h2>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Before you can apply for a HECM, federal law requires you to complete a session with a <strong>HUD-approved, independent housing counselor</strong> — not affiliated with your lender in any way. This is non-negotiable and cannot be waived.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-6">
              {[
                { label: 'Duration', value: '60–90 minutes, typically by phone or in person' },
                { label: 'Cost', value: '$125–$200 (reduced fees available for low-income borrowers)' },
                { label: 'Certificate validity', value: '180 days — must be submitted with your application' },
                { label: 'HUD Hotline', value: '1-800-569-4287 (find approved counselors)' },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="font-semibold text-gray-900">{item.value}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3">What the Counselor Will Cover</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>How reverse mortgages work — benefits and risks</li>
                <li>Your specific financial situation and whether a HECM makes sense</li>
                <li>Alternatives to a reverse mortgage (HELOC, downsizing, other options)</li>
                <li>Impact on your estate and your heirs</li>
                <li>Non-borrowing spouse protections and rights</li>
                <li>All loan costs and long-term implications</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5 mt-6">
              <p className="text-sm text-gray-700">
                <strong>Tip:</strong> Go into counseling with a list of questions. The counselor is entirely on your side — their job is to make sure you fully understand the product before you sign anything. Many borrowers find the session genuinely helpful even if they ultimately decide not to proceed.
              </p>
            </div>
            {DAVE_CTA}
            {PRINT_CTA}
            {COMPLIANCE}
          </section>

          {/* Section 9 */}
          <section className="guide-section py-12 border-b border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-fairway-green text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">9</span>
              <h2 className="text-3xl font-bold text-gray-900">Reverse Mortgage vs. Alternatives</h2>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">A reverse mortgage is one of several ways to access home equity or fund retirement. Here&apos;s an honest comparison:</p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-fairway-green text-white">
                    <th className="text-left p-3 rounded-tl-lg">Option</th>
                    <th className="text-left p-3">Monthly Payment?</th>
                    <th className="text-left p-3">Income Needed?</th>
                    <th className="text-left p-3 rounded-tr-lg">Key Risk</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { opt: 'HECM Reverse Mortgage', pay: 'No (optional)', income: 'No', risk: 'Loan balance grows; reduces estate equity' },
                    { opt: 'HELOC', pay: 'Yes', income: 'Yes', risk: 'Can be frozen; requires regular payments' },
                    { opt: 'Cash-Out Refinance', pay: 'Yes (new mortgage)', income: 'Yes', risk: 'New monthly obligation on fixed income' },
                    { opt: 'Downsizing / Selling', pay: 'No', income: 'No', risk: 'Moving costs; loss of community; replacement cost' },
                    { opt: 'Liquidate Investments', pay: 'No', income: 'No', risk: 'Taxes on gains; depletes growth assets' },
                  ].map((row, i) => (
                    <tr key={row.opt} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-3 font-medium text-gray-900 border border-gray-200">{row.opt}</td>
                      <td className="p-3 text-gray-700 border border-gray-200">{row.pay}</td>
                      <td className="p-3 text-gray-700 border border-gray-200">{row.income}</td>
                      <td className="p-3 text-gray-600 border border-gray-200">{row.risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">HELOC</h3>
                <p className="text-gray-700 text-sm leading-relaxed">A home equity line of credit is a strong option if you have reliable income and good credit. Payments are required, the line can be frozen by the lender during market downturns, and qualification depends on debt-to-income ratios. It&apos;s not well-suited for borrowers on fixed incomes.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Cash-Out Refinance</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Makes sense if rates are favorable and you have strong income, but it creates or increases a monthly mortgage payment — adding financial stress for retirees living on Social Security and investment income.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Downsizing</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Can be a great decision if your home is too large to maintain, but it&apos;s often more disruptive and costly than people expect. Moving expenses, capital gains taxes (above the $250k/$500k exclusion), and replacement housing costs can consume a significant portion of proceeds. It also involves leaving the community, friends, and routines you&apos;ve built over decades.</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-6">
              <p className="text-sm text-blue-700">
                <strong>Bottom line:</strong> No option is universally best. The right choice depends on your income, health, goals, how long you plan to stay in the home, and your estate intentions. Dave can help you think through all of these factors — without pressure.
              </p>
            </div>
            {DAVE_CTA}
            {PRINT_CTA}
            {COMPLIANCE}
          </section>

          {/* Section 10 */}
          <section className="guide-section py-12 border-b border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-fairway-green text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">10</span>
              <h2 className="text-3xl font-bold text-gray-900">Common Myths Debunked</h2>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">Reverse mortgages carry more misinformation than almost any other financial product. Let&apos;s clear up the most common myths:</p>

            <div className="space-y-5">
              {[
                {
                  myth: 'The bank will own my home.',
                  reality: 'You retain the title to your home throughout the life of the loan — exactly as with any traditional mortgage. The lender has a lien on the property, nothing more. You can sell, refinance, or leave it to your heirs at any time.',
                },
                {
                  myth: 'I could end up owing more than my home is worth.',
                  reality: 'The HECM is a non-recourse loan. You and your heirs can never owe more than the home\'s fair market value at the time of repayment. FHA insurance covers any shortfall between the loan balance and the sale price.',
                },
                {
                  myth: 'My heirs will lose the home.',
                  reality: 'Your heirs have options: sell the home and keep any remaining equity, pay off the loan balance to keep the home, or simply walk away with no financial obligation if the balance exceeds the value. They have up to 12 months (with extensions) to decide.',
                },
                {
                  myth: 'You have to own your home free and clear.',
                  reality: 'You can have an existing mortgage. In fact, many borrowers use a reverse mortgage primarily to eliminate their current mortgage payment — the reverse mortgage proceeds pay off the existing loan, and no new monthly payment is required.',
                },
                {
                  myth: 'Reverse mortgages are only for people in financial trouble.',
                  reality: 'Financial planners and retirement income researchers — including prominent academics like Wade Pfau, Ph.D. — increasingly recommend HECMs as proactive retirement planning tools. The growing line of credit strategy, in particular, is used by financially comfortable retirees to build a tax-efficient buffer fund.',
                },
                {
                  myth: 'It\'s just a last resort.',
                  reality: 'Opening a HECM line of credit earlier (at 62–65) while equity is high and rates are lower can allow the unused line to grow substantially over time — creating a much larger safety net for later years when it may be needed most.',
                },
                {
                  myth: 'My children will be stuck with the debt.',
                  reality: 'The estate is never liable for more than the home\'s value. If the loan balance exceeds the sale price, FHA insurance covers the difference. Heirs can walk away with zero financial obligation.',
                },
                {
                  myth: 'The government is giving me money.',
                  reality: 'A HECM is a loan — not a grant, benefit, or government program that gives you free money. The FHA insures the loan (for a fee), but the proceeds are borrowed against your equity and the balance accrues interest over time.',
                },
              ].map((item) => (
                <div key={item.myth} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-red-50 p-4">
                    <p className="font-bold text-red-800">✗ Myth: &ldquo;{item.myth}&rdquo;</p>
                  </div>
                  <div className="bg-green-50 p-4">
                    <p className="text-sm text-green-800"><strong>✓ Reality:</strong> {item.reality}</p>
                  </div>
                </div>
              ))}
            </div>
            {DAVE_CTA}
            {PRINT_CTA}
            {COMPLIANCE}
          </section>

          {/* Section 11 */}
          <section className="guide-section py-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-fairway-green text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">11</span>
              <h2 className="text-3xl font-bold text-gray-900">The Process: Step by Step</h2>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">From first question to funded loan, here&apos;s what to expect. The full process typically takes <strong>30–60 days</strong> — similar to a traditional refinance.</p>

            <div className="space-y-4">
              {[
                { step: 1, title: 'Education & Research', desc: 'Read guides like this one, attend seminars, talk to family members, and speak with a trusted loan officer. The more informed you are, the better your decision will be.' },
                { step: 2, title: 'HUD-Approved Counseling (Required)', desc: 'Call HUD\'s HECM counseling hotline at 1-800-569-4287 or visit hud.gov to find an approved counselor near you. Complete the session (60–90 minutes, can be done by phone) and receive your counseling certificate — valid for 180 days.' },
                { step: 3, title: 'Application', desc: 'Submit your completed application to your lender along with the counseling certificate, government-issued ID, and property information. Your loan officer will guide you through the required documentation.' },
                { step: 4, title: 'Financial Assessment', desc: 'The lender reviews your credit history and your track record of paying property taxes and homeowners insurance. A Life Expectancy Set-Aside (LESA) may be required if the assessment identifies risk.' },
                { step: 5, title: 'Home Appraisal', desc: 'An FHA-approved appraiser visits your property to determine its market value and verify it meets FHA minimum property standards. Any required repairs may need to be completed before or shortly after closing.' },
                { step: 6, title: 'Underwriting', desc: 'The lender reviews all documentation, the appraisal, and FHA guidelines to approve the loan. An FHA case number is assigned. This typically takes 1–2 weeks.' },
                { step: 7, title: 'Closing', desc: 'You sign the loan documents at a closing appointment. For a refinance of your primary residence, you have a mandatory 3-business-day right of rescission — you can cancel the loan without penalty during this window.' },
                { step: 8, title: 'Disbursement', desc: 'Funds are released after the rescission period ends. Your existing mortgage (if any) is paid off from the proceeds. Your chosen payout method — lump sum, line of credit, or monthly payments — begins.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-5 items-start">
                  <div className="w-10 h-10 bg-fairway-green text-white font-bold rounded-full flex items-center justify-center flex-shrink-0 text-sm">{item.step}</div>
                  <div className="flex-1 pb-4 border-b border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div className="mt-10 bg-fairway-green rounded-3xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-3">Ready to Take the Next Step?</h3>
              <p className="text-green-100 mb-6 max-w-xl mx-auto">Dave Davis offers free, no-pressure consultations to help you understand all your options. There&apos;s no obligation — just honest information.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+19045098762"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-fairway-green font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-200"
                >
                  📞 Call/Text: (904) 509-8762
                </a>
                <a
                  href="mailto:dave.davis@fairwaymc.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-fairway-green transition-all duration-200"
                >
                  ✉️ dave.davis@fairwaymc.com
                </a>
              </div>
              <p className="text-green-200 text-sm mt-4">Dave Davis · NMLS #391214 · Fairway Independent Mortgage Corporation NMLS #2289</p>
            </div>

            {PRINT_CTA}
            {COMPLIANCE}
          </section>

        </main>

        {/* Screen compliance footer */}
        <footer className="bg-gray-100 border-t border-gray-200 py-8 print:hidden">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-xs text-gray-500 leading-relaxed">
              Dave Davis | NMLS #391214 | Fairway Independent Mortgage Corporation | NMLS #2289 | Equal Housing Lender | (904) 509-8762 | dave.davis@fairwaymc.com
              <br /><br />
              This is not a commitment to lend. Loan terms and conditions are subject to change without notice. These materials are not from HUD or FHA and were not approved by HUD or a government agency. These advertisements and materials are not provided nor approved by the US Department of Housing and Urban Development (HUD) or the Federal Housing Administration (FHA). A reverse mortgage increases the principal mortgage loan amount and decreases home equity (it is a negative-amortization loan). Borrowers are still responsible for property taxes and homeowner&apos;s insurance. Borrower must occupy home as primary residence and remain current on property taxes, homeowner&apos;s insurance, and any HOA fees. © 2025 Fairway Independent Mortgage Corporation. NMLS #2289. Equal Housing Lender.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
