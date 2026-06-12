import { motion } from 'motion/react';
import { Crown, Target, Eye, Users } from 'lucide-react';

const values = [
  { icon: Crown, title: 'Excellence', desc: 'We set the highest standards in everything we do — from building quality to resident services.' },
  { icon: Users, title: 'Community', desc: 'We foster a safe, inclusive community where neighbors become friends.' },
  { icon: Target, title: 'Reliability', desc: 'Our residents trust us to deliver on our promises, every single day.' },
  { icon: Eye, title: 'Transparency', desc: 'Honest pricing, clear leasing terms, no hidden charges. What you see is what you get.' },
];

const team = [
  { name: 'Emmanuel Okafor', role: 'Estate Manager', img: 'https://images.unsplash.com/photo-1645395375722-e0a2a672ba6f?w=300&h=300&fit=crop&auto=format' },
  { name: 'Adaeze Nwosu', role: 'Property Sales Lead', img: 'https://images.unsplash.com/photo-1770777352681-2fb5f5677d0f?w=300&h=300&fit=crop&auto=format' },
  { name: 'Chukwuemeka Eze', role: 'Facilities Manager', img: 'https://images.unsplash.com/photo-1665006852027-5243f26e78b6?w=300&h=300&fit=crop&crop=faces&auto=format' },
];

export function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#0F172A] pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold mb-3">Our Story</p>
          <h1 className="text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 700 }}>
            About KINGS PALACE Estate
          </h1>
          <p className="text-white/60 max-w-xl leading-relaxed">
            Built on a foundation of trust, quality, and community — KINGS PALACE Estate is redefining residential living.
          </p>
        </div>
      </div>

      {/* Who We Are */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold mb-4">Who We Are</p>
            <h2 className="text-[#0F172A] mb-5" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, lineHeight: 1.3 }}>
              A Premier Estate Built for Modern Living
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              KINGS PALACE Estate is a premium residential development offering a range of beautifully designed apartments for individuals, families, and professionals seeking quality living in a secure, well-managed environment.
            </p>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              Established with the vision of creating homes — not just houses — we have invested in every detail: from architectural design and interior finishing to estate management and resident welfare.
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              Our estate features modern infrastructure, 24/7 security, reliable utilities, and a close-knit community atmosphere that makes KINGS PALACE Estate the address of choice for discerning residents.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1745725427804-4d94df0c5eb7?w=600&h=700&fit=crop&auto=format"
              alt="KINGS PALACE Estate"
              className="rounded-xl object-cover w-full h-72 lg:h-80"
            />
            <div className="flex flex-col gap-4">
              <img
                src="https://images.unsplash.com/photo-1543414347-1c348021f279?w=600&h=400&fit=crop&auto=format"
                alt="Estate building"
                className="rounded-xl object-cover w-full h-36"
              />
              <img
                src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=600&h=400&fit=crop&auto=format"
                alt="Apartment interior"
                className="rounded-xl object-cover w-full h-36"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F8F6EE] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-[#0F172A] p-10 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Target className="w-8 h-8 text-[#D4AF37] mb-5" />
              <h3 className="text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem', fontWeight: 600 }}>
                Our Mission
              </h3>
              <p className="text-white/70 leading-relaxed">
                To provide premium, affordable residential apartments that offer unmatched comfort, security, and community to our residents. We are committed to maintaining the highest standards of estate management and delivering a living experience that exceeds expectations.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#D4AF37] p-10 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Eye className="w-8 h-8 text-[#0F172A] mb-5" />
              <h3 className="text-[#0F172A] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem', fontWeight: 600 }}>
                Our Vision
              </h3>
              <p className="text-[#0F172A]/80 leading-relaxed">
                To become the most trusted and respected residential estate in Nigeria — a place where people are proud to call home, where quality of life is prioritized, and where the standard of modern living continuously rises for every resident.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold mb-3">What Drives Us</p>
            <h2 className="text-[#0F172A]" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700 }}>
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="border border-[rgba(15,23,42,0.08)] p-6 rounded-xl hover:border-[#D4AF37] transition-colors duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-11 h-11 bg-[#F8F6EE] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#D4AF37] transition-colors duration-300">
                  <v.icon className="w-5 h-5 text-[#0F172A]" />
                </div>
                <h4 className="text-[#0F172A] font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {v.title}
                </h4>
                <p className="text-[#6B7280] text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#0F172A] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold mb-3">Our People</p>
            <h2 className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700 }}>
              Meet the Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-[#D4AF37]">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover object-center" />
                </div>
                <p className="text-white font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>{member.name}</p>
                <p className="text-[#D4AF37] text-sm mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
