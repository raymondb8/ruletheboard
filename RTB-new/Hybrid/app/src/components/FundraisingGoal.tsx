import Placeholder from './Placeholder';

/*
 * NOT CURRENTLY USED. The board took the fundraising goal box off the Get
 * Involved page. It's kept here for future specific campaigns (a set amount
 * for a named purpose, like next season's tournament entries), when a progress
 * bar actually means something. To bring it back, render <FundraisingGoal />
 * under the Donate section in src/pages/GetInvolved.tsx and replace the two
 * placeholders with the campaign's real figures.
 */
export default function FundraisingGoal() {
  return (
    <section className="mt-base bg-white rounded-xl border border-outline-variant card-shadow overflow-hidden">
      <div className="grid md:grid-cols-5 gap-8 p-8 md:p-10 items-center">
        <div className="md:col-span-2">
          <h3 className="font-headline-md text-headline-md text-primary mb-3">Current Fundraising Goal</h3>
          <p className="text-on-surface-variant font-body-md">
            What we raise goes toward the next class of scholars.
          </p>
        </div>
        <div className="md:col-span-3 bg-surface-muted border border-outline-variant rounded-xl p-6">
          <span className="font-label-bold text-label-bold text-primary block mb-3">Raised so far</span>
          <div className="w-full h-8 bg-white border border-outline-variant rounded-full overflow-hidden mb-3 relative">
            <div className="h-full bg-secondary rounded-full" style={{ width: '0%' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-label-bold text-on-surface-variant">
                <Placeholder>Progress: confirm with team</Placeholder>
              </span>
            </div>
          </div>
          <p className="text-label-sm text-on-surface-variant">
            <Placeholder>Goal amount: confirm with team</Placeholder>
          </p>
        </div>
      </div>
    </section>
  );
}
