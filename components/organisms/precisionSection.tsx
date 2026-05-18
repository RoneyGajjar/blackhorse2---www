import { FeatureItem } from '../molecules/featureItems';

export const PrecisionSection = () => (
    <section className="bg-surface-container-low py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="flex-1 space-y-6">
                <h2 className="font-headline-lg text-3xl font-semibold text-primary">Authority Through Precision</h2>
                <div className="space-y-4 text-secondary font-body-md leading-relaxed">
                    <p>At Black Horse Associates, we believe that financial clarity is the cornerstone of business success. Our team of elite professionals is dedicated to providing bespoke accounting and taxation solutions tailored to the complex needs of modern enterprises.</p>
                    <p>We don't just manage numbers; we provide structural integrity to your financial operations, ensuring compliance while optimizing for strategic growth.</p>
                </div>
                <ul className="space-y-4 pt-4">
                    <FeatureItem icon="check_circle" text="Fully Compliant Operations" />
                    <FeatureItem icon="verified_user" text="Secure Data Handling" />
                    <FeatureItem icon="trending_up" text="Strategic Tax Planning" />
                </ul>
            </div>
            <div className="flex-1 relative">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-outline-variant">
                    <img
                        className="w-full h-[500px] object-cover"
                        alt="Modern architecture"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQG_y1dJoLlV-EJd5rpaS32by2iDvhZSZ2GFyKEHO5GjmJMB_5J4LbA9UH1k2ZT__7h9YRDll5bJSUlNJPw6__EcKMH9fCZ6BYSqUrXqhBMUjb5lvaxPfn9ZfyvFR04ZgTWCILjX8SYALtLmZ-JpJjukocIlOT4KnxTt1MI7BhCKqbmZdbmPb5M9YEHHamSF5SVJXKLSd12NxpiWOSYN8m8XYO_jrqPKdkg6jWfREXgf_WZKwEF_UyQHAlq4hw8jaxnaF6v5MU3Mk1"
                    />
                </div>
            </div>
        </div>
    </section>
);