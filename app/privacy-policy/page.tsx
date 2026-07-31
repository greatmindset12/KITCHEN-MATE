import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Kitchen Glory collects, uses and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
        Legal
      </p>
      <h1 className="mt-3 font-display text-5xl text-forest-700">Privacy Policy</h1>
      <p className="mt-4 font-body text-sm text-muted">Last updated: July 2026</p>

      <div className="mt-10 space-y-8 font-body text-sm leading-relaxed text-ink">
        <section>
          <h2 className="font-display text-2xl text-forest-700">1. Introduction</h2>
          <p className="mt-3">
            Kitchen Glory (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy
            and is committed to protecting any personal information you share
            with us. This policy explains what we collect, how we use it, and
            the choices you have.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-forest-700">2. Information we collect</h2>
          <ul className="mt-3 list-inside list-disc space-y-2">
            <li>Contact details you submit through our contact form, such as your name and email address.</li>
            <li>Your email address if you subscribe to our newsletter.</li>
            <li>Basic usage data such as pages visited, device type and browser, collected automatically through analytics tools.</li>
            <li>Cookies used to remember preferences and understand site traffic.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-forest-700">3. How we use your information</h2>
          <ul className="mt-3 list-inside list-disc space-y-2">
            <li>To respond to messages sent through the contact form.</li>
            <li>To send newsletter emails to subscribers who opt in, and nothing more.</li>
            <li>To understand how the site is used so we can improve content and performance.</li>
            <li>To maintain the security and proper functioning of the site.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-forest-700">4. Cookies</h2>
          <p className="mt-3">
            We use a limited number of cookies for essential site functions
            and basic analytics. You can disable cookies through your browser
            settings, though some features may not work as intended.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-forest-700">5. Third-party services</h2>
          <p className="mt-3">
            We may use third-party services (such as email delivery providers
            or analytics platforms) that process data on our behalf. These
            providers are only permitted to use your information to perform
            services for us.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-forest-700">6. Data retention</h2>
          <p className="mt-3">
            We retain contact form submissions and newsletter subscriptions
            only for as long as necessary to fulfil the purpose they were
            collected for, or until you ask us to delete them.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-forest-700">7. Your rights</h2>
          <p className="mt-3">
            You may request access to, correction of, or deletion of any
            personal information we hold about you at any time by contacting
            us through the details below. You can also unsubscribe from the
            newsletter using the link in any email.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-forest-700">8. Children&apos;s privacy</h2>
          <p className="mt-3">
            Kitchen Glory is not directed at children, and we do not
            knowingly collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-forest-700">9. Changes to this policy</h2>
          <p className="mt-3">
            We may update this policy from time to time. Changes will be
            posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-forest-700">10. Contact us</h2>
          <p className="mt-3">
            If you have any questions about this privacy policy, please reach
            out via the <a href="/contact" className="text-leaf underline">contact page</a> or email
            hello@kitchenglory.com.
          </p>
        </section>
      </div>
    </div>
  );
}
