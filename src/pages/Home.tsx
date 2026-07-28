export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed px-4 py-2 rounded-full mb-6 animate-bounce">
              <span className="material-symbols-outlined text-sm">stars</span>
              <span className="font-label-bold text-label-bold uppercase">Empowering Strategy</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl mb-6 text-primary leading-tight">
              Empowering young minds through the strategy <span className="text-secondary-container">of chess.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto lg:mx-0">
              We provide high-quality coaching, professional equipment, and lifelong mentorship to students from all
              backgrounds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="lift-button coral-lift bg-secondary text-on-secondary px-8 py-4 rounded-xl font-label-bold text-label-bold tracking-widest uppercase">
                Join the Program
              </button>
              <button className="lift-button navy-lift bg-primary text-on-primary px-8 py-4 rounded-xl font-label-bold text-label-bold tracking-widest uppercase">
                Donate Now
              </button>
            </div>
          </div>
          <div className="relative lg:h-[500px]">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-fixed rounded-full blur-3xl opacity-30" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-fixed rounded-full blur-3xl opacity-30" />
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl h-full transform hover:rotate-1 transition-transform duration-500">
              <img
                className="w-full h-full object-cover"
                alt="A group of diverse grade school students laughing and intensely focusing on a large wooden chess board in a bright, modern light-filled community center."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALFMFbWtMdMyL0kOMs08jwEobvlhoeTd92vAPj8dzCt1z7Qiu6_pvbhqNavwxtVqyQpyLaYii8qat96UjG0L5KvArGH_XnXEJu_BKAg42GK_LIppqVYKy4Bvfk0sfWOOmk6zKZumM_FgEFJMx7mSC6_sgduFyr9xIbEqbTJ7hP3wT8pT0Cf9Da7SZyFyEcBgZzo4oWl-q3koIk-UWVxAkfvaul2MeBBPdkeHk_4E2l7sV0N4y3HoNpkRDmgcc1LuWAdVEzqJbYciXa"
              />
              <div className="absolute bottom-6 right-6 glass-card p-6 rounded-2xl border border-white/50 max-w-xs shadow-lg">
                <p className="font-headline-md text-headline-md text-secondary mb-1">[5,000+]</p>
                <p className="font-label-bold text-label-bold text-primary">Matches played this year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Trust Bar */}
      <section className="bg-surface-container py-12 px-margin-mobile">
        <div className="max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="font-headline-md text-headline-md text-primary">[120]</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              Partner Schools
            </div>
          </div>
          <div className="text-center">
            <div className="font-headline-md text-headline-md text-primary">[$50k+]</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              Scholarships Awarded
            </div>
          </div>
          <div className="text-center">
            <div className="font-headline-md text-headline-md text-primary">[15]</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              Grandmaster Tutors
            </div>
          </div>
          <div className="text-center">
            <div className="font-headline-md text-headline-md text-primary">[100%]</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              Student Passion
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-background">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">What We Do</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Beyond the pieces on the board, we build character, discipline, and critical thinking skills for the
              next generation of leaders.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[32px] border border-outline-variant shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-primary-fixed flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">school</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4">Pro Coaching</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Access to certified instructors who translate complex strategy into fun, bite-sized lessons for
                grades 3-8.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[32px] border border-outline-variant shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-secondary-fixed flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-secondary text-3xl">inventory_2</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4">Equipment</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We provide tournament-grade boards, clocks, and study materials to students who need them most.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[32px] border border-outline-variant shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-tertiary-fixed flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-on-tertiary-fixed-variant text-3xl">groups</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4">Mentorship</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Pairing students with local mentors to foster emotional intelligence and social-emotional learning
                through play.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Previews */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Level Up Your Game</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Choose the path that fits your journey. Whether you're a beginner or a budding Grandmaster, we have a
                place for you.
              </p>
            </div>
            <a className="text-secondary font-label-bold text-label-bold flex items-center gap-2 group" href="#">
              VIEW ALL PROGRAMS
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-sm border border-outline-variant hover:shadow-lg transition-all">
              <div className="w-full md:w-2/5 h-64 md:h-auto">
                <img
                  className="w-full h-full object-cover"
                  alt="A focused young girl thinking deeply about her next move during a chess tournament."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrPZdXw3XMJCSh2ODM8lqUEaelmfX9L4gc36eXbGvHUL2REuLdZ-qldT8Eyf-N45SvuBvGwa4Kwk2cHqHrEY3c_qjIPrVLR2Zf7lHe3xxEOGySDYBFkrTohfzL4_VpDdJlMdUMdxhaS1HQwYJXET4SHQo0HsT-WT0dQrmAY6mrqq0QoRJ_hIIkRbHdntArU9AOu5M7yA5stACxzbvHLtFYGVhRgsjiq4ByIq1viCIMUCZR0EP-ax5gxymEzUhMjt79DOkvZw80vejT"
                />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <div className="text-secondary font-label-bold text-label-sm uppercase tracking-widest mb-2">
                  Annual Program
                </div>
                <h3 className="font-headline-md text-headline-md mb-3">Rule the Board Scholarship</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  A full-year merit-based sponsorship covering coaching, travel, and tournament entries.
                </p>
                <button className="text-primary font-label-bold text-label-bold flex items-center gap-2 group">
                  Learn More
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-sm border border-outline-variant hover:shadow-lg transition-all">
              <div className="w-full md:w-2/5 h-64 md:h-auto">
                <img
                  className="w-full h-full object-cover"
                  alt="An outdoor summer camp scene where children are playing chess on large lawn-sized chess boards."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8_1qySo9NAw-XjnyYZdUY0x7lOTbv0Sh_bCwfqYjd5NZLmgZoupCxDZuVhrc2o3w7zXJaThKNZkCnxpN58UZ4UDUngBrGodFaJHCjJOlgN6QbTvIiBFEDu0hC7tb1UM4fHMH_iZUyxhDcUmHFe-cK4YY9Soh6uqNt6WFabDNqo92VXeEK9UxZg0Qq8pV8qbN1VovBHfNEEN_Zo5AjatKgFezAdqv3u46laU-xlx30VgLQuQss4sJKy5csvV9Xmq4U9Y2ZMgXL1vL1"
                />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <div className="text-secondary font-label-bold text-label-sm uppercase tracking-widest mb-2">
                  Seasonal Workshop
                </div>
                <h3 className="font-headline-md text-headline-md mb-3">Checkmate Your Summer</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Intensive 4-week summer masterclasses designed to leapfrog your rating in a fun camp environment.
                </p>
                <button className="text-primary font-label-bold text-label-bold flex items-center gap-2 group">
                  Explore Classes
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-margin-mobile">
        <div className="max-w-container-max mx-auto bg-primary-container rounded-[40px] p-8 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-headline-xl text-headline-xl text-white mb-6">Your next move changes everything.</h2>
            <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto mb-12">
              Help us bring the royal game to every classroom. Whether you want to volunteer or donate, you're
              building a smarter future.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="lift-button coral-lift bg-secondary text-on-secondary px-10 py-5 rounded-2xl font-label-bold text-label-bold tracking-widest uppercase">
                Become a Sponsor
              </button>
              <button className="lift-button bg-white text-primary px-10 py-5 rounded-2xl font-label-bold text-label-bold tracking-widest uppercase">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
