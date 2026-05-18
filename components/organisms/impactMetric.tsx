import { StatItem } from '../molecules/statItem';

export const ImpactMetrics = () => (
    <section className="bg-primary-container text-on-primary py-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-primary-fixed/20">
                <StatItem value="$2.5B+" label="Assets Managed" />
                <StatItem value="500+" label="Corporate Clients" />
                <StatItem value="25+" label="Years of Excellence" />
            </div>
        </div>
    </section>
);