require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');
const CompanyInfo = require('./models/CompanyInfo');
const WhyChooseUs = require('./models/WhyChooseUs');
const Innovation = require('./models/Innovation');
const Stat = require('./models/Stat');
const CareerRole = require('./models/CareerRole');
const Industry = require('./models/Industry');

const seedDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);

 
  await Product.deleteMany({});
  await CompanyInfo.deleteMany({});
  await WhyChooseUs.deleteMany({});
  await Innovation.deleteMany({});
  await Stat.deleteMany({});
  await CareerRole.deleteMany({});
  await Industry.deleteMany({});

  
  await Product.insertMany([
    { category: 'MEDIUM VOLTAGE', title: '33KV, 6.6KV, 11KV HT PANELS', icon: '⚡', order: 1 },
    {
      category: 'LOW VOLTAGE',
      title: '415V LT PANELS LIKE PCC, MCC, PMCC, IMCC, PDB, MLDB, WRDB, APFC, POWER CONTROL AND INSTRUMENT JUNCTION BOXES, SIGNALING PANELS, SYNCRONISING PANELS ETC.',
      icon: '📊',
      order: 2
    },
    { category: 'BUSDUCTS', title: 'LT BUSDUCTS AND SANDWICH BUSDUCT', icon: '🔒', order: 3 }
  ]);

 
  await CompanyInfo.create({
    key: 'about',
    content: {
      short: "ISO 9001:2015 accredited company headquartered in Faridabad, Haryana. Specializing in custom built power distribution panels and low tension switchgear.",
      full: "Trijal Electrikals Pvt. Ltd., headquartered in Faridabad, Haryana, and certified with ISO 9001:2015 accreditation. Specializing in custom built power distribution panels and low tension switchgear, we ensure punctual delivery of top-tier products crafted with cutting-edge machinery. Under Mr. Som Sharma's adept leadership, boasting 30 years of expertise, we've emerged as a prominent name in electrical panel manufacturing, offering dependable solutions in control systems and services. Our comprehensive suite of services encompasses Manufacturing, Design & Engineering, and Erection & Commissioning, all driven by our unwavering commitment to excellence.",
      expertise: "30+ Years",
      iso: true
    }
  });

  await CompanyInfo.create({
    key: 'partnership',
    content: {
      title: "Schneider Electric Partnership",
      description: "Trijal ElectriKals is excited to announce our new partnership and certification with Schneider Electric, a global leader in energy management. Innovate with the Prisma IPM solution.",
      logo: "schneider-electric-logo.png"
    }
  });

  await CompanyInfo.create({
    key: 'brandValues',
    content: [
      { icon: '⚡', title: "Kilowatt Power", description: "Managing high-power electrical systems with expertise." },
      { icon: '🌿', title: "Empowering Solutions", description: "Dedication to efficient power distribution solutions." },
      { icon: '🧠', title: "Innovation & Expertise", description: "Delivering groundbreaking solutions with innovative expertise." },
      { icon: '💎', title: "Versatility & Value", description: "Meeting diverse energy needs with dedication." }
    ]
  });

  await CompanyInfo.create({
    key: 'whoWeAre',
    content: {
      heading: "Who We Are",
      subheading: "Trijal Elektrikals: The \"K\" Essence",
      description: "Trijal Electricals Pvt. Ltd. an ISO 9001:2015 certified company based at Faridabad, Haryana is one of the leading manufacturer of custom built low tension switchgear and power distribution panels of all range and capacity.",
      footerTagline: "Empowering Projects, Creating Excellence"
    }
  });


  await WhyChooseUs.insertMany([
    { title: "Smart Technology", description: "Smart technology integration for efficient solutions", icon: "🧠", order: 1 },
    { title: "Certified Expert", description: "Certified experts ensuring quality and reliability", icon: "🏅", order: 2 },
    { title: "Eco Technology", description: "Eco-friendly technology for sustainable practices", icon: "🌱", order: 3 },
    { title: "Accessibility", description: "24/7 support ensuring continuous assistance and peace of mind", icon: "📞", order: 4 }
  ]);


  await Innovation.insertMany([
    {
      title: "Schneider Prisma Panels",
      heading: "Schneider Prisma Panels",
      body: "Trijal Electricals partners with Schneider Electric to deliver Prisma IPM solutions. We combine certified expertise with global safety standards to provide modular, scalable power distribution tailored to critical facilities.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      order: 1
    },
    {
      title: "LV Distribution & Control Products",
      heading: "LV Distribution & Control Products",
      body: "Our low-voltage panels manage and distribute electricity safely up to 1000V. Built for residential, commercial, and industrial environments, each assembly prioritizes protection, efficiency, and reliability.",
      image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1200&q=80",
      order: 2
    },
    {
      title: "Electric Consultancy",
      heading: "Electric Consultancy",
      body: "From load analysis to system upgrades, our consultancy practice delivers code-compliant, future-ready electrical designs that optimize performance, uptime, and lifecycle costs for your projects.",
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1200&q=80",
      order: 3
    },
    {
      title: "EPC Service",
      heading: "EPC Service",
      body: "End-to-end Engineering, Procurement, and Construction with single-point accountability. We orchestrate vendors, schedules, and quality to deliver turnkey electrical infrastructure on time.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      order: 4
    }
  ]);

  
  await Stat.insertMany([
    { value: 100, suffix: '+', label: 'Happy Clients', order: 1 },
    { value: 1000, suffix: '+', label: 'Projects Delivered', order: 2 },
    { value: 200, suffix: '+', label: 'Number of Employees', order: 3 }
  ]);


  await CareerRole.insertMany([
    {
      title: "Marketing Manager",
      skills: [
        "Creating and maintaining client relationships",
        "Coaching and subordinate involvement",
        "Managing processes",
        "Self-motivated yet customer-focused",
        "Proficient in marketing research and statistical analysis",
        "Familiar with financial planning and strategy"
      ],
      order: 1
    },
    {
      title: "Costing Engineer",
      skills: [
        "Prepare and review cost estimates",
        "Coordinate with procurement for vendor quotations",
        "Support project managers with budgets and forecasts",
        "Analyze variances and recommend cost optimizations"
      ],
      order: 2
    }
  ]);

  await Industry.insertMany([
    { title: 'Power', image: '/assets/power.jpg', order: 1 },
    { title: 'Sugar', image: '/assets/sugar.jpg', order: 2 },
    { title: 'Paper', image: '/assets/paper.jpg', order: 3 },
    { title: 'Railways', image: '/assets/railways.jpg', order: 4 },
    { title: 'Mining', image: '/assets/mining.png', order: 5 },
    { title: 'Information Technology', image: '/assets/it.png', order: 6 },
    { title: 'Infrastructure', image: '/assets/infrastructure.jpg', order: 7 },
    { title: 'Cement', image: '/assets/cement.jpg', order: 8 }
  ]);

  console.log('✅ Database seeded successfully!');
  mongoose.connection.close();
};

seedDB().catch(err => {
  console.error('❌ Seed failed:', err);
  mongoose.connection.close();
});
