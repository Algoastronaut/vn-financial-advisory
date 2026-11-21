// Centralised business information — official verified credentials
export const BUSINESS = {
  name: 'VN Financial Advisory',
  tagline: 'Trust. Partnership. Growth.',
  advisor: {
    name: 'Vinay Singh',
    fullName: 'Mr. Vinay Singh',
    designation: 'Titanium Advisor',
    company: 'ICICI Life Insurance',
    insuranceId: 'ICICI01176293',
    experience: {
      insurance: '15+ Years',
      mutualFunds: '5 Years',
      families: '500+',
    },
  },
  associate: {
    name: 'Neetu Singh',
    fullName: 'Mrs. Neetu Singh',
    role: 'Life Insurance Advisor',
    company: 'ICICI Life Insurance',
    insuranceId: 'ICICI01374991',
  },
  contact: {
    phone: '+91 96916 07779',
    phoneRaw: '919691607779',
    email: 'vnfinancialadvisory@gmail.com',
    whatsappMessage: encodeURIComponent('Hello Vinay ji, I visited the VN Financial Advisory website and would like to know more about your financial and insurance advisory services.'),
    instagram: 'https://www.instagram.com/vnfinancialadvisory/',
    instagramHandle: '@vnfinancialadvisory',
  },
  hours: '10:00 AM – 8:00 PM',
  location: {
    city: 'Rewa',
    state: 'Madhya Pradesh',
    country: 'India',
  },
  regulatory: {
    amfiArn: '311806',
    amfiArnDisplay: 'ARN-311806',
    vinayInsuranceId: 'ICICI01176293',
    neetuInsuranceId: 'ICICI01374991',
  },
  highlights: {
    familiesProtected: '500+',
    yearsExperience: '15+',
    mdrtCount: '10×',
    cotCount: '2×',
  },
  achievements: [
    {
      id: 'mdrt',
      title: '10-Time MDRT Qualifier',
      subtitle: 'Million Dollar Round Table (Premier Global Association)',
      description: 'Ten-time MDRT qualification representing sustained, verified excellence in client protection and ethical advisory practice.',
      icon: 'award',
      metric: '10×',
    },
    {
      id: 'cot',
      title: '2-Time Court of the Table (COT)',
      subtitle: 'Exclusive MDRT Distinction',
      description: 'Achieved Court of the Table (COT) qualification twice — a prestigious milestone attained by top-tier financial professionals worldwide.',
      icon: 'star',
      metric: '2×',
    },
    {
      id: 'titanium',
      title: 'Titanium Advisor',
      subtitle: 'ICICI Life Insurance',
      description: 'Recognised as a Titanium Advisor by ICICI Life Insurance, reflecting exceptional dedication to client service across 15+ years.',
      icon: 'shield',
      metric: 'Elite',
    },
    {
      id: 'icici-excellence',
      title: 'Award of Excellence',
      subtitle: 'ICICI Life Insurance – MDRT Qualification 2024',
      description: 'Presented the prestigious ICICI Life Insurance Award of Excellence for MDRT Qualification 2024 to Mr. Vinay Singh, Rewa.',
      icon: 'trophy',
      metric: '2024',
    },
  ],
}

export const WHATSAPP_URL = `https://wa.me/${BUSINESS.contact.phoneRaw}?text=${BUSINESS.contact.whatsappMessage}`
